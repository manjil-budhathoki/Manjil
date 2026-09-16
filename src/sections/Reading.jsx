import { useState } from 'react';
import { FiArrowUpRight, FiBookOpen, FiCheck, FiChevronDown } from 'react-icons/fi';
import { useSearchParams } from 'react-router-dom';
import PageHeading from '../components/PageHeading';
import { readingMap, readingData } from '../data/reading';
const statuses = { complete: 'Complete', 'in-progress': 'Learning', planning: 'Up next' };
export default function Reading() {
  const [params, setParams] = useSearchParams();
  const view = params.get('view') === 'papers' ? 'papers' : 'roadmap';
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const all = Object.values(readingMap).flatMap(category => category.topics.flatMap(topic => topic.items));
  const completed = all.filter(item => item.status === 'complete').length;
  const papers = Object.entries(readingData).flatMap(([category, data]) => data.papers.map(paper => ({ ...paper, category })));
  const term = query.trim().toLowerCase();
  const matchingPapers = papers.filter(paper => `${paper.title} ${paper.authors} ${paper.category}`.toLowerCase().includes(term));
  const categories = Object.entries(readingMap).map(([name, category]) => [name, category.topics.map(topic => ({ ...topic, items: topic.items.filter(item => (filter === 'all' || item.status === filter) && `${name} ${topic.title} ${item.name}`.toLowerCase().includes(term)) })).filter(topic => topic.items.length)]).filter(([, topics]) => topics.length);
  return <section>
    <PageHeading eyebrow="THE LEARNING JOURNAL" title="A little more, every day." description="My path through machine learning — the fundamentals, the papers, and everything I’m figuring out along the way." />
    <div className="stats-grid">
      <div className="stat"><span>Learning paths</span><strong>{Object.keys(readingMap).length.toString().padStart(2, '0')}</strong><small>From foundations to language models</small></div>
      <div className="stat"><span>Topics explored</span><strong>{completed}<em> / {all.length}</em></strong><small>Learning in public, one topic at a time</small></div>
      <div className="stat"><span>Overall progress</span><strong>{Math.round(completed / all.length * 100)}<em>%</em></strong><progress value={completed} max={all.length} aria-label="Learning roadmap completion" /></div>
    </div>
    <div className="collection-toolbar">
      <div className="segmented" aria-label="Reading view">{[['roadmap', 'Learning roadmap'], ['papers', 'Research library']].map(([id, label]) => <button key={id} aria-pressed={view === id} onClick={() => { setParams(id === 'papers' ? { view: id } : {}); setQuery(''); }}>{label}</button>)}</div>
      <label className="search-field"><span className="sr-only">Search {view}</span><input type="search" placeholder={view === 'papers' ? 'Search papers or authors…' : 'Find a topic…'} value={query} onChange={event => setQuery(event.target.value)} /></label>
    </div>
    {view === 'roadmap' ? <>
      <div className="filter-row" aria-label="Filter by learning status">{[['all', 'All topics'], ...Object.entries(statuses)].map(([id, label]) => <button key={id} className="filter-chip" aria-pressed={filter === id} onClick={() => setFilter(id)}>{label}</button>)}</div>
      <div className="roadmap-list">{categories.map(([name, topics]) => <details className="roadmap-card" key={`${name}-${term}-${filter}`} open={Boolean(term) || filter !== 'all' || name === 'Fundamentals'}>
        <summary><span className="category-icon"><FiBookOpen /></span><span><strong>{name}</strong><small>{topics.reduce((sum, topic) => sum + topic.items.length, 0)} topics</small></span><FiChevronDown className="chevron" /></summary>
        <div className="topic-grid">{topics.map(topic => <div key={topic.title}><h2>{topic.title}</h2><ul>{topic.items.map(item => <li key={item.name}><span>{item.name}</span><span className={`status-badge ${item.status}`}>{item.status === 'complete' && <FiCheck />}{statuses[item.status]}</span></li>)}</ul></div>)}</div>
      </details>)}</div>
      {!categories.length && <p className="empty-state" role="status">No topics match. Try another search or status.</p>}
    </> : <div className="paper-grid">{matchingPapers.map(paper => <a key={paper.link} className="paper-card surface-card" href={paper.link} target="_blank" rel="noopener noreferrer"><div className="card-meta"><span>{paper.category}</span><span>{paper.year} <FiArrowUpRight /></span></div><h2>{paper.title}</h2><p>{paper.description}</p><small>{paper.authors}</small></a>)}{!matchingPapers.length && <p className="empty-state" role="status">No papers match your search.</p>}</div>}
    <p className="collection-note">A living collection. Progress reflects my own learning journey.</p>
  </section>;
}
