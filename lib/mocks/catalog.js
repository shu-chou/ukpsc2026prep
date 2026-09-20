import { uttarakhandSections, polityTopics } from '../data';

const other = [
  { id: 'polity', name: 'Indian Polity', topics: polityTopics },
  { id: 'history', name: 'History & Culture', topics: ['Ancient India', 'Medieval India', 'Modern India', 'Freedom Struggle', 'Art & Culture', 'World History (Basics)'] },
  { id: 'geography', name: 'Indian Geography', topics: ['Physiography of India', 'Drainage', 'Climate & Monsoon', 'Soils', 'Natural Vegetation', 'Agriculture', 'Minerals & Energy', 'Industries & Transport', 'Population & Census', 'World Geography'] },
  { id: 'economy', name: 'Indian Economy', topics: ['Basic Concepts', 'National Income', 'Planning & NITI Aayog', 'Banking & RBI', 'Money & Inflation', 'Budget & Fiscal Policy', 'Taxation & GST', 'Agriculture & Food Security', 'Industry & Infrastructure', 'External Sector & Trade', 'Poverty, Employment & Schemes'] },
  { id: 'environment', name: 'Environment & Ecology', topics: ['Ecology Basics', 'Biodiversity & Conservation', 'Protected Areas & Wildlife', 'Climate Change', 'Pollution', 'Environmental Laws & Conventions', 'Himalayan Environment'] },
  { id: 'science', name: 'Science & Technology', topics: ['Physics', 'Chemistry', 'Biology & Human Body', 'Diseases & Health', 'Space Technology', 'Defence Technology', 'Biotechnology', 'Everyday Science'] },
  { id: 'computer', name: 'Computer & IT', topics: ['Computer Basics & Hardware', 'Software & Operating Systems', 'Internet & Networking', 'Cyber Security', 'Emerging Technologies', 'Digital India'] },
  { id: 'current-affairs', name: 'Current Affairs', topics: ['National', 'International', 'Economy & Business', 'Science & Tech', 'Sports', 'Awards & Persons', 'Reports & Indices', 'Places & Events'] },
  { id: 'csat', name: 'CSAT / Aptitude', topics: ['Reading Comprehension', 'Logical Reasoning', 'Analytical Reasoning', 'Number System & Arithmetic', 'Percentage, Ratio & Profit-Loss', 'Time, Speed & Work', 'Data Interpretation', 'Decision Making'] }
];

export function getCatalog() {
  const uk = uttarakhandSections.map(s => ({ id: `uttarakhand/${s.slug}`, name: `Uttarakhand — ${s.name}`, topics: s.topics }));
  return [...uk, ...other];
}

export function findSubject(id) {
  return getCatalog().find(s => s.id === id);
}
