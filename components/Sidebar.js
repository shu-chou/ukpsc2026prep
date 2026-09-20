import Link from 'next/link';
import { subjects } from '../lib/data';
import MobileNav from './MobileNav';

export default function Sidebar(){return <><MobileNav/><aside className="sidebar"><Link href="/"><div className="brand">UKPSC 2026</div><div className="brand-sub">Personal Study Hub</div></Link><div className="nav-title">Tools</div><nav className="nav"><Link href="/mocks">📝 Mock Tests</Link><a href="#ask">🤔 Ask ChatGPT</a></nav><div className="nav-title">Subjects</div><nav className="nav">{subjects.map(s=><Link key={s.slug} href={`/subjects/${s.slug}`}>{s.name}</Link>)}</nav></aside></>}
