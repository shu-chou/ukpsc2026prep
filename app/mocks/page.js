import Sidebar from '../../components/Sidebar';
import MockApp from '../../components/MockApp';
import { getCatalog } from '../../lib/mocks/catalog';
import { bankCounts } from '../../lib/mocks/select';

export const metadata = { title: 'Mock Tests — UKPSC 2026 Study Hub' };

export default function MocksPage() {
  return <div className="shell"><Sidebar /><main className="main">
    <div className="eyebrow">Practice</div>
    <h1>Mock Tests</h1>
    <p className="mk-lead">Subject-wise and topic-wise mocks in UKPSC Prelims style. Every test is a fresh random draw, and every attempt is saved for later review.</p>
    <MockApp catalog={getCatalog()} counts={bankCounts()} />
  </main></div>;
}
