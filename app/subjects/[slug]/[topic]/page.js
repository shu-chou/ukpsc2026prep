import Link from 'next/link';
import Sidebar from '../../../../components/Sidebar';
import { subjects } from '../../../../lib/data';
import { allIndiaNotes } from '../../../../lib/notes/all-india';

export function generateStaticParams() {
  return Object.entries(allIndiaNotes).flatMap(([slug, { topics }]) => Object.keys(topics).map(topic => ({ slug, topic })));
}

export default async function AllIndiaTopicPage({ params }) {
  const { slug, topic: rawTopic } = await params;
  const topic = decodeURIComponent(rawTopic);
  const notes = allIndiaNotes[slug];
  const data = notes?.topics[topic];
  const subject = subjects.find(s => s.slug === slug);
  if (!data || !subject) return <div>Not found</div>;
  return <div className="shell"><Sidebar /><main className="main topic-page">
    <Link className="back" href={`/subjects/${slug}`}>← {subject.name}</Link>
    <div className="subject-head"><div><div className="eyebrow">{subject.name} • {data.priority}</div><h1>{data.title}</h1><p>{data.summary}</p></div></div>
    {data.sections.map(section => <section className={`study-section ${section.type || ''}`} key={section.heading}>
      <h2>{section.heading}</h2>
      {section.paragraphs ? section.paragraphs.map(p => <p key={p}>{p}</p>) : <ul>{section.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}
    </section>)}
    <div className="source-note"><strong>Source / preparation note:</strong> {data.sourceNote}</div>
    <div className="topic-nav"><Link href={`/subjects/${slug}`}>← All {subject.name} topics</Link></div>
  </main></div>;
}
