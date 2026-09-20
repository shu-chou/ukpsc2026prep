# UKPSC 2026 Study Hub

Personal study website for UKPSC Upper PCS 2026.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Push this folder to GitHub and import the repository into Vercel. Vercel will detect Next.js automatically.

## Current structure

- Dashboard
- Subject navigation
- Indian Polity topic skeleton
- Uttarakhand topic skeleton
- Other subject placeholders
- Temporary “Open ChatGPT” doubt button

Next: populate Uttarakhand Geography and Indian Polity with precise, exam-oriented notes.

## Mock tests (`/mocks`)

Subject-wise and topic-wise UKPSC-style mocks with Easy / Medium / Hard / Mixed difficulty, exam and practice modes, and saved history.

- **Question bank:** files in `lib/mocks/bank/`. Add a file and register it in `lib/mocks/bank/index.js`. Each test draws a random set, preferring questions you have not seen.
- **Fresh AI questions (optional):** set `ANTHROPIC_API_KEY`.
- **History:** saved in the browser by default. Set `DATABASE_URL` (any Postgres, e.g. Aiven) to sync across devices; the table is created automatically.
- Set `APP_PASSCODE` whenever the database or AI key is set. See `.env.example`.
