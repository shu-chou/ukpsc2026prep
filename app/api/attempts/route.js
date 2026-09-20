import { db, dbConfigured } from '../../../lib/db';
import { checkPasscode } from '../../../lib/auth';

export const dynamic = 'force-dynamic';

function guard(request) {
  if (!dbConfigured()) return Response.json({ error: 'Database not configured' }, { status: 503 });
  const auth = checkPasscode(request);
  if (!auth.ok) return Response.json({ error: auth.error }, { status: auth.status });
  return null;
}

export async function GET(request) {
  const denied = guard(request);
  if (denied) return denied;
  const params = new URL(request.url).searchParams;
  const pool = await db();

  if (params.get('seen')) {
    const { rows } = await pool.query(
      `select q->>'id' as id, count(*)::int as n from mock_attempts, jsonb_array_elements(payload->'questions') q group by 1`
    );
    return Response.json({ seen: Object.fromEntries(rows.map(r => [r.id, r.n])) });
  }

  const id = params.get('id');
  if (id) {
    const { rows } = await pool.query('select payload from mock_attempts where id = $1', [id]);
    return rows[0] ? Response.json(rows[0].payload) : Response.json({ error: 'Not found' }, { status: 404 });
  }

  const { rows } = await pool.query(
    'select id, created_at, subject, topic, difficulty, score::float as score, total from mock_attempts order by created_at desc limit 300'
  );
  return Response.json({ attempts: rows });
}

export async function POST(request) {
  const denied = guard(request);
  if (denied) return denied;
  const text = await request.text();
  if (text.length > 400_000) return Response.json({ error: 'Attempt too large' }, { status: 413 });
  const a = JSON.parse(text);
  if (!a.id || !a.subject || !Array.isArray(a.questions)) return Response.json({ error: 'Invalid attempt' }, { status: 400 });
  const pool = await db();
  await pool.query(
    `insert into mock_attempts (id, created_at, subject, topic, difficulty, score, total, payload)
     values ($1, $2, $3, $4, $5, $6, $7, $8) on conflict (id) do nothing`,
    [a.id, a.createdAt || new Date().toISOString(), a.subject, a.topic, a.difficulty, a.score, a.total, a]
  );
  return Response.json({ ok: true });
}

export async function DELETE(request) {
  const denied = guard(request);
  if (denied) return denied;
  const id = new URL(request.url).searchParams.get('id');
  if (!id) return Response.json({ error: 'Missing id' }, { status: 400 });
  const pool = await db();
  await pool.query('delete from mock_attempts where id = $1', [id]);
  return Response.json({ ok: true });
}
