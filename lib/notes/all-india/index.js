// Registry of "explained notes" for all-India (non-Uttarakhand, non-Polity) subjects.
// Keyed by the subject slug used in lib/data.js `subjects` and lib/mocks/catalog.js.
// Each entry mirrors the shape used by lib/notes/index.js (ukNotes): { label, topics }.

import { historyTopics } from './history';

export const allIndiaNotes = {
  history: { label: 'History & Culture', topics: historyTopics }
};
