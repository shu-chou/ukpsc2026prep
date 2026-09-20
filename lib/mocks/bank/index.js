import { ukGeography } from './uk-geography';

function hash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

// Add new question files here. IDs derive from subject + question text, so history stays valid when files are reordered.
const sources = [ukGeography];

export const bank = sources.flat().map(q => ({ ...q, id: hash(`${q.subject}|${q.q}`) }));
