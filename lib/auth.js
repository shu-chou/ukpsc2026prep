import { timingSafeEqual } from 'node:crypto';

export function checkPasscode(request) {
  const expected = process.env.APP_PASSCODE;
  if (!expected) return { ok: false, status: 500, error: 'Server is missing APP_PASSCODE. Set it in your environment variables.' };
  const given = request.headers.get('x-passcode') || '';
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return { ok: false, status: 401, error: 'Wrong passcode' };
  return { ok: true };
}
