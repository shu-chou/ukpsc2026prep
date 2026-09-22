import Link from 'next/link';
import Sidebar from '../../../../../components/Sidebar';
import { ukNotes } from '../../../../../lib/notes';

export function generateStaticParams() {
  return Object.entries(ukNotes).flatMap(([section, { topics }]) => Object.keys(topics).map(topic => ({ section, topic })));
}

export default async function UkNotesTopicPage({ params }) {
  const { section, topic: rawTopic } = await params;
  const topic = decodeURIComponent(rawTopic);
  const notes = ukNotes[section];
  const data = notes?.topics[topic];
  if (!data) return <div>Not found</div>;
  return <div className="shell"><Sidebar/><main className="main topic-page">
    <Link className="back" href={`/subjects/uttarakhand/${section}`}>← {notes.label}</Link>
    <div className="subject-head"><div><div className="eyebrow">{notes.label} • {data.priority}</div><h1>{data.title}</h1><p>{data.summary}</p></div></div>
    {data.sections.map(sec => <section className={`study-section ${sec.type || ''}`} key={sec.heading}>
      <h2>{sec.heading}</h2>
      <ul>{sec.bullets.map(b => <li key={b}>{b}</li>)}</ul>
    </section>)}
    <div className="source-note"><strong>Source / preparation note:</strong> {data.sourceNote}</div>
    <div className="topic-nav"><Link href="/mocks">📝 Take a mock on this subject →</Link></div>
  </main></div>;
}
