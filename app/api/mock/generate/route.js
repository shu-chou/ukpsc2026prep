import { randomUUID } from 'node:crypto';
import { checkPasscode } from '../../../../lib/auth';
import { findSubject } from '../../../../lib/mocks/catalog';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const LEVELS = {
  easy: 'Easy: direct, commonly known facts a serious aspirant should get right.',
  medium: 'Medium: statement-based or application questions needing solid conceptual clarity.',
  hard: 'Hard: tricky multi-statement, assertion-reason, chronology/match or subtle-distinction questions of the kind that separate top scorers.',
  mixed: 'A mix of about 30% Easy, 50% Medium and 20% Hard.'
};

function buildPrompt({ subjectName, topic, difficulty, count }) {
  return `You are an expert UKPSC (Uttarakhand Public Service Commission) Upper PCS Prelims paper-setter.

Write ${count} distinct multiple-choice questions for:
Subject: ${subjectName}
Topic: ${topic === 'all' ? 'the whole subject (spread across topics)' : topic}
Difficulty: ${LEVELS[difficulty]}

Rules:
- Mimic real UKPSC/UPSC Prelims style: direct MCQs, "consider the following statements" (with options like "1 only / 2 only / Both 1 and 2 / Neither 1 nor 2"), assertion-reason, match/arrange questions, and "which is NOT correct" questions, as suits the difficulty.
- Cover what can realistically be asked in the exam, including less obvious but examinable facts. Draw on the wide syllabus and past-paper patterns; do not restrict to well-known trivia.
- Exactly 4 options. Exactly one correct answer. No ambiguity.
- Only use facts you are highly confident are correct. If unsure about a figure or date, choose a different question.
- Give a brief explanation of why the answer is right and, when useful, why the main distractor is wrong.
- Make each question different from the others.

Return ONLY a JSON array, no markdown, in this shape:
[{"q":"...","options":["...","...","...","..."],"answer":0,"explanation":"...","fixed":false}]
"answer" is the zero-based index of the correct option. Set "fixed": true when the options must keep their order (e.g. "1 only", "Both 1 and 2", assertion-reason options).`;
}

export async function POST(request) {
  const auth = checkPasscode(request);
  if (!auth.ok) return Response.json({ error: auth.error }, { status: auth.status });
  const gemini = process.env.GEMINI_API_KEY;
  if (!gemini && !process.env.ANTHROPIC_API_KEY) return Response.json({ error: 'No AI key configured (set GEMINI_API_KEY or ANTHROPIC_API_KEY)' }, { status: 503 });

  const { subject, topic = 'all', difficulty, count } = await request.json();
  const sub = findSubject(subject);
  if (!sub || !LEVELS[difficulty]) return Response.json({ error: 'Invalid selection' }, { status: 400 });
  const n = Math.min(Math.max(parseInt(count, 10) || 10, 1), 25);
  const prompt = buildPrompt({ subjectName: sub.name, topic, difficulty, count: n });

  let res;
  if (gemini) {
    // Free-tier models are often overloaded (503/429) or retired (404); fall through to the next one.
    const models = [process.env.GEMINI_MODEL, 'gemini-3.8-flash', 'gemini-3.5-flash', 'gemini-3.1-flash-lite', 'gemini-3.6-flash', 'gemini-3.7-flash'].filter(Boolean);
    for (const model of models) {
      res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-goog-api-key': gemini },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { responseMimeType: 'application/json', temperature: 0.9 } })
      });
      if (res.ok || ![404, 429, 500, 503].includes(res.status)) break;
    }
  } else {
    res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-5', max_tokens: 8000, messages: [{ role: 'user', content: prompt }] })
    });
  }
  if (!res.ok) return Response.json({ error: `AI request failed (${res.status})${res.status === 429 ? ' — free-tier limit reached, wait a minute and retry' : ''}` }, { status: 502 });

  const data = await res.json();
  const text = gemini
    ? (data.candidates?.[0]?.content?.parts || []).map(p => p.text || '').join('')
    : (data.content || []).map(b => b.text || '').join('');
  let parsed;
  try {
    parsed = JSON.parse(text.slice(text.indexOf('['), text.lastIndexOf(']') + 1));
  } catch {
    return Response.json({ error: 'AI returned an unreadable response. Try again.' }, { status: 502 });
  }

  const questions = parsed
    .filter(q => q && typeof q.q === 'string' && Array.isArray(q.options) && q.options.length === 4 && Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4)
    .map(q => ({
      id: `ai-${randomUUID()}`,
      subject, topic: topic === 'all' ? 'Mixed' : topic,
      difficulty: difficulty === 'mixed' ? 'medium' : difficulty,
      q: q.q, options: q.options.map(String), answer: q.answer,
      explanation: String(q.explanation || ''), fixed: Boolean(q.fixed), source: 'ai'
    }));
  return Response.json({ questions, requested: n });
}
