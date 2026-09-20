'use client';
import { useEffect, useMemo, useRef, useState } from 'react';

const DIFFS = [['easy', 'Easy'], ['medium', 'Medium'], ['hard', 'Hard'], ['mixed', 'Mixed']];
const LS_ATTEMPTS = 'ukpsc_mock_attempts';
const LS_PASS = 'ukpsc_passcode';
const LETTERS = ['A', 'B', 'C', 'D'];

const readLS = key => { try { return localStorage.getItem(key); } catch { return null; } };
const writeLS = (key, val) => { try { localStorage.setItem(key, val); } catch {} };
const localAttempts = () => { try { return JSON.parse(readLS(LS_ATTEMPTS) || '[]'); } catch { return []; } };

async function api(path, options = {}) {
  const res = await fetch(path, { ...options, headers: { 'content-type': 'application/json', 'x-passcode': readLS(LS_PASS) || '', ...(options.headers || {}) } });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw Object.assign(new Error(data.error || `Request failed (${res.status})`), { status: res.status });
  return data;
}

const fmtTime = s => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
const fmtDate = iso => new Date(iso).toLocaleString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

export default function MockApp({ catalog, counts }) {
  const [status, setStatus] = useState(null);
  const [view, setView] = useState('setup');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [passcode, setPasscode] = useState('');

  const [subject, setSubject] = useState(catalog[0].id);
  const [topic, setTopic] = useState('all');
  const [difficulty, setDifficulty] = useState('mixed');
  const [count, setCount] = useState(20);
  const [mode, setMode] = useState('exam');
  const [source, setSource] = useState('bank');
  const [negative, setNegative] = useState(true);

  const [test, setTest] = useState(null);
  const [attempt, setAttempt] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setPasscode(readLS(LS_PASS) || '');
    fetch('/api/status').then(r => r.json()).then(setStatus).catch(() => setStatus({ db: false, ai: false }));
  }, []);

  const sub = useMemo(() => catalog.find(s => s.id === subject), [catalog, subject]);
  useEffect(() => { setTopic('all'); }, [subject]);

  const available = useMemo(() => {
    const per = counts[subject] || {};
    const topics = topic === 'all' ? Object.values(per) : per[topic] ? [per[topic]] : [];
    const sum = key => topics.reduce((n, t) => n + t[key], 0);
    const e = sum('easy'), m = sum('medium'), h = sum('hard');
    return difficulty === 'mixed' ? e + m + h : { easy: e, medium: m, hard: h }[difficulty];
  }, [counts, subject, topic, difficulty]);

  const cloud = Boolean(status?.db);

  async function loadSeen() {
    const seen = {};
    for (const a of localAttempts()) for (const q of a.questions) seen[q.id] = (seen[q.id] || 0) + 1;
    if (cloud) {
      try {
        const data = await api('/api/attempts?seen=1');
        for (const [id, n] of Object.entries(data.seen)) seen[id] = Math.max(seen[id] || 0, n);
      } catch {}
    }
    return seen;
  }

  async function begin() {
    setError('');
    setBusy(true);
    try {
      let data;
      if (source === 'ai') data = await api('/api/mock/generate', { method: 'POST', body: JSON.stringify({ subject, topic, difficulty, count }) });
      else data = await api('/api/mock/start', { method: 'POST', body: JSON.stringify({ subject, topic, difficulty, count, seen: await loadSeen() }) });
      if (!data.questions.length) throw new Error('No questions available for this selection yet. Try another difficulty/topic, or use Fresh AI questions.');
      startTest(data.questions, { subject, subjectName: sub.name, topic, difficulty, source });
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }

  function startTest(questions, meta) {
    const timeLimit = mode === 'exam' ? Math.ceil(questions.length * 0.8) * 60 : 0;
    setTest({ questions, meta: { ...meta, mode, negative }, timeLimit, startedAt: Date.now() });
    setView('test');
  }

  async function finish(answers, t) {
    const neg = t.meta.negative ? 0.25 : 0;
    const questions = t.questions.map((q, i) => ({ id: q.id, topic: q.topic, difficulty: q.difficulty, q: q.q, options: q.options, answer: q.answer, explanation: q.explanation, chosen: answers[i] ?? null }));
    const correct = questions.filter(q => q.chosen === q.answer).length;
    const wrong = questions.filter(q => q.chosen !== null && q.chosen !== q.answer).length;
    const a = {
      id: crypto.randomUUID(), createdAt: new Date().toISOString(),
      ...t.meta, negativeRate: neg, timeTaken: Math.round((Date.now() - t.startedAt) / 1000),
      total: questions.length, correct, wrong, skipped: questions.length - correct - wrong,
      score: Math.round((correct - wrong * neg) * 100) / 100, questions
    };
    setAttempt(a);
    setView('result');
    try {
      if (cloud) await api('/api/attempts', { method: 'POST', body: JSON.stringify(a) });
      else throw new Error('local');
    } catch (e) {
      writeLS(LS_ATTEMPTS, JSON.stringify([a, ...localAttempts()].slice(0, 200)));
      if (cloud) setError(`Saved on this device only (${e.message}).`);
    }
  }

  async function openHistory() {
    setError('');
    setView('history');
    const local = localAttempts().map(({ questions, ...rest }) => rest);
    let remote = [];
    if (cloud) {
      try { remote = (await api('/api/attempts')).attempts.map(r => ({ ...r, createdAt: r.created_at })); }
      catch (e) { setError(e.message); }
    }
    const ids = new Set(remote.map(r => r.id));
    setHistory([...remote, ...local.filter(l => !ids.has(l.id))].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  }

  async function openAttempt(id) {
    setError('');
    try {
      let a = localAttempts().find(x => x.id === id);
      if (!a && cloud) a = await api(`/api/attempts?id=${encodeURIComponent(id)}`);
      setAttempt(a);
      setView('result');
    } catch (e) { setError(e.message); }
  }

  async function removeAttempt(id) {
    if (!confirm('Delete this attempt permanently?')) return;
    writeLS(LS_ATTEMPTS, JSON.stringify(localAttempts().filter(a => a.id !== id)));
    if (cloud) { try { await api(`/api/attempts?id=${encodeURIComponent(id)}`, { method: 'DELETE' }); } catch (e) { setError(e.message); } }
    setHistory(h => h.filter(a => a.id !== id));
  }

  function retryWrong(a) {
    const qs = a.questions.filter(q => q.chosen !== q.answer).map(q => ({ ...q, fixed: true, subject: a.subject }));
    if (!qs.length) return;
    setMode('practice');
    setTest({ questions: qs, meta: { subject: a.subject, subjectName: a.subjectName, topic: a.topic, difficulty: a.difficulty, source: 'retry', mode: 'practice', negative: a.negative }, timeLimit: 0, startedAt: Date.now() });
    setView('test');
  }

  const showPass = status && (status.db || status.ai);

  return <div className="mk">
    <div className="mk-tabs">
      <button className={view === 'setup' || view === 'test' ? 'on' : ''} onClick={() => { if (view !== 'test' || confirm('Leave this test? Progress will be lost.')) setView('setup'); }}>New mock</button>
      <button className={view === 'history' ? 'on' : ''} onClick={() => { if (view !== 'test' || confirm('Leave this test? Progress will be lost.')) openHistory(); }}>History</button>
      <span className="mk-storage">{status ? (cloud ? '☁ Synced to database' : '💾 Saved on this device only') : ''}</span>
    </div>
    {error && <div className="mk-error">{error}</div>}

    {view === 'setup' && <div className="mk-card">
      <h2>Build your mock</h2>
      <div className="mk-grid">
        <label>Subject<select value={subject} onChange={e => setSubject(e.target.value)}>{catalog.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}</select></label>
        <label>Topic<select value={topic} onChange={e => setTopic(e.target.value)}>
          <option value="all">All topics in this subject</option>
          {sub.topics.map(t => { const c = counts[subject]?.[t]; const n = c ? c.easy + c.medium + c.hard : 0; return <option key={t} value={t}>{t}{n ? ` (${n} Qs)` : ''}</option>; })}
        </select></label>
      </div>
      <div className="mk-label">Difficulty</div>
      <div className="mk-pills">{DIFFS.map(([k, l]) => <button key={k} className={`${difficulty === k ? 'on' : ''} d-${k}`} onClick={() => setDifficulty(k)}>{l}</button>)}</div>
      <div className="mk-grid">
        <label>Number of questions<select value={count} onChange={e => setCount(+e.target.value)}>{[10, 20, 30, 50, 100].filter(n => source === 'bank' || n <= 25).map(n => <option key={n} value={n}>{n}</option>)}</select></label>
        <label>Mode<select value={mode} onChange={e => setMode(e.target.value)}>
          <option value="exam">Exam — timed, review at the end</option>
          <option value="practice">Practice — answer and explanation shown instantly</option>
        </select></label>
        <label>Question source<select value={source} onChange={e => { setSource(e.target.value); if (e.target.value === 'ai' && count > 25) setCount(20); }}>
          <option value="bank">Question bank (random)</option>
          <option value="ai" disabled={!status?.ai}>Fresh AI questions{status?.ai ? '' : ' — not configured'}</option>
        </select></label>
        <label className="mk-check"><input type="checkbox" checked={negative} onChange={e => setNegative(e.target.checked)} /> Negative marking (¼ mark per wrong answer, as in UKPSC Prelims)</label>
      </div>
      {source === 'bank' && <p className={`mk-hint ${available < count ? 'warn' : ''}`}>{available} question{available === 1 ? '' : 's'} in the bank for this selection{available < count ? ` — the mock will have ${available}. Add more, or use Fresh AI questions.` : '.'} Questions you have not seen yet are picked first.</p>}
      {showPass && <label className="mk-pass">Passcode<input type="password" value={passcode} onChange={e => { setPasscode(e.target.value); writeLS(LS_PASS, e.target.value); }} placeholder="Needed for database and AI" /></label>}
      <button className="mk-primary" disabled={busy || (source === 'bank' && available === 0)} onClick={begin}>{busy ? (source === 'ai' ? 'Generating questions…' : 'Starting…') : 'Start mock'}</button>
    </div>}

    {view === 'test' && test && <Runner key={test.startedAt} test={test} onFinish={finish} />}
    {view === 'result' && attempt && <Result attempt={attempt} onRetryWrong={retryWrong} onNew={() => setView('setup')} onHistory={openHistory} />}
    {view === 'history' && <History items={history} catalog={catalog} onOpen={openAttempt} onDelete={removeAttempt} />}
  </div>;
}

function Runner({ test, onFinish }) {
  const { questions, meta, timeLimit } = test;
  const practice = meta.mode === 'practice';
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState(() => questions.map(() => null));
  const [marked, setMarked] = useState(() => new Set());
  const [left, setLeft] = useState(timeLimit);
  const done = useRef(false);
  const latest = useRef(answers);
  latest.current = answers;

  const submit = () => { if (done.current) return; done.current = true; onFinish(latest.current, test); };

  useEffect(() => {
    if (!timeLimit) return;
    const end = test.startedAt + timeLimit * 1000;
    const id = setInterval(() => {
      const s = Math.max(0, Math.round((end - Date.now()) / 1000));
      setLeft(s);
      if (s === 0) { clearInterval(id); submit(); }
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const q = questions[i];
  const chosen = answers[i];
  const locked = practice && chosen !== null;
  const choose = k => { if (locked) return; setAnswers(a => a.map((v, n) => n === i ? (!practice && v === k ? null : k) : v)); };
  const answered = answers.filter(a => a !== null).length;

  return <div className="mk-test">
    <div className="mk-testbar">
      <div><strong>{meta.subjectName}</strong> · {meta.topic === 'all' ? 'All topics' : meta.topic} · {cap(meta.difficulty)}</div>
      <div className="mk-timer">{timeLimit ? `⏱ ${fmtTime(left)}` : 'Practice'}</div>
    </div>
    <div className="mk-testbody">
      <div className="mk-qcard">
        <div className="mk-qmeta">Question {i + 1} of {questions.length} <span className={`mk-badge d-${q.difficulty}`}>{cap(q.difficulty)}</span> <span className="mk-badge">{q.topic}</span></div>
        <div className="mk-q">{q.q}</div>
        <div className="mk-opts">{q.options.map((o, k) => {
          let cls = chosen === k ? 'sel' : '';
          if (locked) cls = k === q.answer ? 'right' : chosen === k ? 'wrong' : '';
          return <button key={k} className={`mk-opt ${cls}`} onClick={() => choose(k)}><span>{LETTERS[k]}</span>{o}</button>;
        })}</div>
        {locked && <div className="mk-expl"><strong>{chosen === q.answer ? 'Correct.' : `Incorrect. Answer: ${LETTERS[q.answer]}.`}</strong> {q.explanation}</div>}
        <div className="mk-nav">
          <button onClick={() => setI(i - 1)} disabled={i === 0}>← Previous</button>
          {!practice && <button onClick={() => setMarked(m => { const n = new Set(m); n.has(i) ? n.delete(i) : n.add(i); return n; })}>{marked.has(i) ? '★ Marked' : '☆ Mark for review'}</button>}
          {!practice && chosen !== null && <button onClick={() => setAnswers(a => a.map((v, n) => n === i ? null : v))}>Clear</button>}
          {i < questions.length - 1 ? <button className="mk-primary" onClick={() => setI(i + 1)}>Next →</button> : <button className="mk-primary" onClick={() => { if (confirm(`Submit now? You answered ${answered} of ${questions.length}.`)) submit(); }}>Submit</button>}
        </div>
      </div>
      <aside className="mk-palette">
        <div className="mk-label">Questions ({answered}/{questions.length} answered)</div>
        <div className="mk-nums">{questions.map((_, n) => <button key={n} className={`${n === i ? 'cur' : ''} ${answers[n] !== null ? 'ans' : ''} ${marked.has(n) ? 'mrk' : ''}`} onClick={() => setI(n)}>{n + 1}</button>)}</div>
        <button className="mk-submit" onClick={() => { if (confirm(`Submit now? You answered ${answered} of ${questions.length}.`)) submit(); }}>Submit test</button>
      </aside>
    </div>
  </div>;
}

function Result({ attempt: a, onRetryWrong, onNew, onHistory }) {
  const [filter, setFilter] = useState('all');
  const pct = a.total ? Math.round((a.correct / a.total) * 100) : 0;
  const state = q => q.chosen === null ? 'skipped' : q.chosen === q.answer ? 'right' : 'wrong';
  const shown = a.questions.map((q, i) => ({ q, i })).filter(({ q }) => filter === 'all' || state(q) === filter);

  const byTopic = useMemo(() => {
    const m = {};
    for (const q of a.questions) { const t = (m[q.topic] ||= { n: 0, c: 0 }); t.n++; if (q.chosen === q.answer) t.c++; }
    return Object.entries(m).sort((x, y) => x[1].c / x[1].n - y[1].c / y[1].n);
  }, [a]);

  return <div>
    <div className="mk-card">
      <div className="mk-eyebrow">{a.subjectName} · {a.topic === 'all' ? 'All topics' : a.topic} · {cap(a.difficulty)} · {fmtDate(a.createdAt)}</div>
      <div className="mk-score"><span>{a.score}</span> / {a.total}</div>
      <div className="mk-stats">
        <div><b>{a.correct}</b>Correct</div><div><b>{a.wrong}</b>Wrong</div><div><b>{a.skipped}</b>Skipped</div>
        <div><b>{pct}%</b>Accuracy</div><div><b>{fmtTime(a.timeTaken)}</b>Time</div>
      </div>
      {a.negativeRate > 0 && <p className="mk-hint">Score = correct − {a.negativeRate === 0.25 ? '¼' : '⅓'} × wrong.</p>}
      {byTopic.length > 1 && <><div className="mk-label">Topic-wise (weakest first)</div>{byTopic.map(([t, v]) => <div className="mk-bar" key={t}><span>{t}</span><div><i style={{ width: `${(v.c / v.n) * 100}%` }} /></div><em>{v.c}/{v.n}</em></div>)}</>}
      <div className="mk-nav">
        <button className="mk-primary" onClick={onNew}>New mock</button>
        {a.wrong + a.skipped > 0 && <button onClick={() => onRetryWrong(a)}>Retry {a.wrong + a.skipped} missed</button>}
        <button onClick={onHistory}>History</button>
      </div>
    </div>
    <div className="mk-pills mk-filter">{[['all', 'All'], ['wrong', 'Wrong'], ['skipped', 'Skipped'], ['right', 'Correct']].map(([k, l]) => <button key={k} className={filter === k ? 'on' : ''} onClick={() => setFilter(k)}>{l}</button>)}</div>
    {shown.map(({ q, i }) => <div className={`mk-review ${state(q)}`} key={i}>
      <div className="mk-qmeta">Q{i + 1} · {q.topic} <span className={`mk-badge d-${q.difficulty}`}>{cap(q.difficulty)}</span></div>
      <div className="mk-q">{q.q}</div>
      {q.options.map((o, k) => <div key={k} className={`mk-ro ${k === q.answer ? 'right' : q.chosen === k ? 'wrong' : ''}`}><span>{LETTERS[k]}</span>{o}{k === q.answer ? ' ✓' : q.chosen === k ? ' ✗ (your answer)' : ''}</div>)}
      {q.chosen === null && <div className="mk-hint">Not attempted.</div>}
      {q.explanation && <div className="mk-expl">{q.explanation}</div>}
    </div>)}
  </div>;
}

function History({ items, catalog, onOpen, onDelete }) {
  const [subject, setSubject] = useState('all');
  const rows = items.filter(a => subject === 'all' || a.subject === subject);
  return <div className="mk-card">
    <h2>Previous attempts</h2>
    <label className="mk-inline">Subject<select value={subject} onChange={e => setSubject(e.target.value)}><option value="all">All</option>{catalog.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}</select></label>
    {!rows.length && <p className="mk-hint">No attempts yet.</p>}
    {rows.map(a => <div className="mk-hrow" key={a.id}>
      <button onClick={() => onOpen(a.id)}>
        <strong>{catalog.find(s => s.id === a.subject)?.name || a.subject}</strong> · {a.topic === 'all' ? 'All topics' : a.topic}
        <small>{fmtDate(a.createdAt)} · {cap(a.difficulty)}</small>
      </button>
      <span className="mk-hscore">{a.score}/{a.total}</span>
      <button className="mk-del" onClick={() => onDelete(a.id)} aria-label="Delete attempt">✕</button>
    </div>)}
  </div>;
}
