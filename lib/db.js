import pg from 'pg';

let pool;
let ready;

export const dbConfigured = () => Boolean(process.env.DATABASE_URL);

export async function db() {
  if (!pool) {
    const url = new URL(process.env.DATABASE_URL);
    url.searchParams.delete('sslmode');
    url.searchParams.delete('channel_binding');
    pool = new pg.Pool({ connectionString: url.toString(), ssl: { rejectUnauthorized: false }, max: 3 });
  }
  if (!ready) {
    ready = pool.query(`create table if not exists mock_attempts (
      id text primary key,
      created_at timestamptz not null default now(),
      subject text not null,
      topic text not null,
      difficulty text not null,
      score numeric not null,
      total int not null,
      payload jsonb not null
    )`).catch(e => { ready = null; throw e; });
  }
  await ready;
  return pool;
}
