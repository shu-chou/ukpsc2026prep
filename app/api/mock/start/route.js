import { selectFromBank } from '../../../../lib/mocks/select';
import { findSubject } from '../../../../lib/mocks/catalog';

export const dynamic = 'force-dynamic';

const DIFFICULTIES = ['easy', 'medium', 'hard', 'mixed'];

export async function POST(request) {
  const { subject, topic = 'all', difficulty, count, seen } = await request.json();
  const sub = findSubject(subject);
  if (!sub || !DIFFICULTIES.includes(difficulty)) return Response.json({ error: 'Invalid selection' }, { status: 400 });
  if (topic !== 'all' && !sub.topics.includes(topic)) return Response.json({ error: 'Unknown topic' }, { status: 400 });
  const n = Math.min(Math.max(parseInt(count, 10) || 10, 1), 100);
  const questions = selectFromBank({ subject, topic, difficulty, count: n, seen: seen && typeof seen === 'object' ? seen : {} });
  return Response.json({ questions, requested: n });
}
