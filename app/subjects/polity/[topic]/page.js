import Link from 'next/link';
import Sidebar from '../../../../components/Sidebar';
import { indianPolity } from '../../../../lib/data';

export function generateStaticParams() { return Object.keys(indianPolity).map(topic => ({ topic })); }

export default async function PolityTopicPage({ params }) {
    const { topic: rawTopic } = await params;
    const topic = decodeURIComponent(rawTopic);
    const data = indianPolity[topic];
    if (!data) return <div>Not found</div>;
    return <div className="shell"><Sidebar /><main className="main topic-page">
        <Link className="back" href="/subjects/polity">← Indian Polity</Link>
        <div className="subject-head"><div><div className="eyebrow">Indian Polity • {data.priority}</div><h1>{data.title}</h1><p>{data.summary}</p></div></div>
        {data.sections.map(section => <section className={`study-section ${section.type || ''}`} key={section.heading}>
            <h2>{section.heading}</h2>
            <ul>{section.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
        </section>)}
        <div className="source-note"><strong>Source / preparation note:</strong> {data.sourceNote}</div>
        <div className="topic-nav"><Link href="/subjects/polity">← All Indian Polity topics</Link></div>
    </main></div>;
}