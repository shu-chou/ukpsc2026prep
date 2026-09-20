import { dbConfigured } from '../../../lib/db';

export const dynamic = 'force-dynamic';

export function GET() {
  return Response.json({ db: dbConfigured(), ai: Boolean(process.env.GEMINI_API_KEY || process.env.ANTHROPIC_API_KEY) });
}
