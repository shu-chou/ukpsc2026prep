import { randomInt } from 'node:crypto';
import { bank } from './bank';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = randomInt(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Unseen questions first, then least-seen; random within each tier.
function pick(pool, n, seen) {
  const tiers = new Map();
  for (const q of pool) {
    const k = seen[q.id] || 0;
    if (!tiers.has(k)) tiers.set(k, []);
    tiers.get(k).push(q);
  }
  const out = [];
  for (const k of [...tiers.keys()].sort((a, b) => a - b)) {
    out.push(...shuffle(tiers.get(k)));
    if (out.length >= n) break;
  }
  return out.slice(0, n);
}

function shuffleOptions(q) {
  if (q.fixed) return { ...q };
  const order = shuffle(q.options.map((_, i) => i));
  return { ...q, options: order.map(i => q.options[i]), answer: order.indexOf(q.answer) };
}

export function bankCounts() {
  const counts = {};
  for (const q of bank) {
    counts[q.subject] ??= {};
    counts[q.subject][q.topic] ??= { easy: 0, medium: 0, hard: 0 };
    counts[q.subject][q.topic][q.difficulty]++;
  }
  return counts;
}

export function selectFromBank({ subject, topic, difficulty, count, seen = {} }) {
  const pool = bank.filter(q => q.subject === subject && (topic === 'all' || q.topic === topic));
  let chosen;
  if (difficulty === 'mixed') {
    const want = { easy: Math.round(count * 0.3), hard: Math.round(count * 0.2) };
    want.medium = count - want.easy - want.hard;
    chosen = Object.entries(want).flatMap(([d, n]) => pick(pool.filter(q => q.difficulty === d), n, seen));
    if (chosen.length < count) {
      const have = new Set(chosen.map(q => q.id));
      chosen.push(...pick(pool.filter(q => !have.has(q.id)), count - chosen.length, seen));
    }
  } else {
    chosen = pick(pool.filter(q => q.difficulty === difficulty), count, seen);
  }
  return shuffle(chosen).map(shuffleOptions);
}
