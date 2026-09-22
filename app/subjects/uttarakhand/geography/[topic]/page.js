import Link from 'next/link';
import Sidebar from '../../../../../components/Sidebar';
import { uttarakhandGeography } from '../../../../../lib/data';

export function generateStaticParams(){return Object.keys(uttarakhandGeography).map(topic=>({topic}));}

export default async function GeographyTopicPage({params}){
  const {topic: rawTopic}=await params;
  const topic=decodeURIComponent(rawTopic);
  const data=uttarakhandGeography[topic];
  if(!data) return <div>Not found</div>;
  return <div className="shell"><Sidebar/><main className="main topic-page">
    <Link className="back" href="/subjects/uttarakhand">← Uttarakhand</Link>
    <div className="subject-head"><div><div className="eyebrow">Uttarakhand Geography • {data.priority}</div><h1>{data.title}</h1><p>{data.summary}</p></div></div>
    {data.sections.map((section,i)=><section className={`study-section ${section.type || ''}`} key={section.heading}>
      <h2>{section.heading}</h2>
      <ul>{section.bullets.map(b=><li key={b}>{b}</li>)}</ul>
    </section>)}
    <div className="source-note"><strong>Source / preparation note:</strong> {data.sourceNote}</div>
    <div className="topic-nav"><Link href="/subjects/uttarakhand">← All Uttarakhand topics</Link></div>
  </main></div>
}
