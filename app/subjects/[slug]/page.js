import Link from 'next/link';
import Sidebar from '../../../components/Sidebar';
import { subjects, uttarakhandSections, uttarakhandGeography, polityTopics, indianPolity } from '../../../lib/data';
import { ukNotes as notesRegistry } from '../../../lib/notes';
import { allIndiaNotes } from '../../../lib/notes/all-india';

const ukNotes = { geography: uttarakhandGeography, ...Object.fromEntries(Object.entries(notesRegistry).map(([k, v]) => [k, v.topics])) };

export function generateStaticParams() { return subjects.map(s => ({ slug: s.slug })); }

function TopicCard({ topic, index, slug, basePath }) {
  const href = slug === 'uttarakhand' && ukNotes[basePath]?.[topic]
    ? `/subjects/uttarakhand/${basePath}/${encodeURIComponent(topic)}`
    : slug === 'polity' && indianPolity[topic]
      ? `/subjects/polity/${encodeURIComponent(topic)}`
      : allIndiaNotes[slug]?.topics[topic]
        ? `/subjects/${slug}/${encodeURIComponent(topic)}`
        : null;
  const content = <><div><strong>{index + 1}. {topic}</strong><br /><small>{href ? 'Study notes, must-remember facts, traps and quick revision' : 'Precise notes will be added here.'}</small></div><span className="tag">{href ? 'Notes ready' : 'To build'}</span></>;
  return href ? <Link className="topic topic-link" href={href}>{content}</Link> : <div className="topic">{content}</div>;
}

function UttarakhandPage() {
  return <>
    <div className="uk-intro"><div><div className="eyebrow">State-specific knowledge base</div><h2>Uttarakhand</h2><p>One state section, divided by the actual UKPSC knowledge areas. We will build each layer progressively instead of mixing Geography, History, Polity and Economy into one long topic list.</p></div></div>
    <div className="uk-section-grid">{uttarakhandSections.map(section => <Link key={section.slug} className="uk-section-card" href={`/subjects/uttarakhand/${section.slug}`}><div className="uk-icon">{section.icon}</div><div><div className="uk-card-top"><h3>{section.name}</h3><span className="tag">{section.status}</span></div><p>{section.desc}</p><small>{section.topics.length} topic areas</small></div></Link>)}</div>
  </>;
}

function SectionPage({ section }) {
  return <><Link className="back" href="/subjects/uttarakhand">← Uttarakhand</Link><div className="subject-head"><div><div className="eyebrow">Uttarakhand • {section.name}</div><h1>{section.name}</h1><p>{section.desc}</p></div></div><h2 className="section-title">Topic map</h2><div className="topic-list">{section.topics.map((t, i) => <TopicCard topic={t} index={i} slug="uttarakhand" basePath={section.slug} key={t} />)}</div></>;
}

export default async function SubjectPage({ params }) {
  const { slug, section } = await params;
  const subject = subjects.find(s => s.slug === slug);
  if (!subject) return <div>Not found</div>;
  let content;
  if (slug === 'uttarakhand' && !section) content = <UttarakhandPage />;
  else if (slug === 'uttarakhand' && section) { const found = uttarakhandSections.find(s => s.slug === section); if (!found) return <div>Not found</div>; content = <SectionPage section={found} />; }
  else if (slug === 'polity') content = <><div className="subject-head"><div><div className="eyebrow">{subject.priority}</div><h1>{subject.name}</h1><p>{subject.desc}</p></div></div><h2 className="section-title">Topics</h2><div className="topic-list">{polityTopics.map((t, i) => <TopicCard topic={t} index={i} slug={slug} key={t} />)}</div></>;
  else if (allIndiaNotes[slug]) content = <><div className="subject-head"><div><div className="eyebrow">{subject.priority}</div><h1>{subject.name}</h1><p>{subject.desc}</p></div></div><h2 className="section-title">Topics</h2><div className="topic-list">{Object.keys(allIndiaNotes[slug].topics).map((t, i) => <TopicCard topic={t} index={i} slug={slug} key={t} />)}</div></>;
  else content = <><div className="subject-head"><div><div className="eyebrow">{subject.priority}</div><h1>{subject.name}</h1><p>{subject.desc}</p></div></div><div className="note"><h2>Coming soon</h2><p>We will add this subject after filtering it through the UKPSC strategy: syllabus + PYQs + subject importance + current relevance.</p></div></>;
  return <div className="shell"><Sidebar /><main className="main"><Link className="back" href="/">← Dashboard</Link>{content}<div id="ask" className="ask"><strong>🤔 Have a doubt while studying?</strong><p>For now, use ChatGPT directly. We will later add a proper in-site assistant if you decide it is worth the API cost.</p><a href="https://chatgpt.com/" target="_blank" rel="noreferrer"><button>Open ChatGPT</button></a></div></main></div>;
}
