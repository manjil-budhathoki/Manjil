import { useState } from 'react';
import PageHeading from '../components/PageHeading';
function ToolIcon({ name, logo }) {
  const [failed, setFailed] = useState(false);
  return <div className="tool-icon">{logo && !failed ? <img src={logo.startsWith('/') ? `${import.meta.env.BASE_URL}${logo.slice(1)}` : logo} alt="" loading="lazy" onError={() => setFailed(true)} /> : <span>{name.slice(0, 2).toUpperCase()}</span>}</div>;
}
export default function Tools({ data, groups }) {
  const entries = Object.entries(data || groups || {}).map(([category, items]) => [category, (Array.isArray(items) ? items : []).map(item => typeof item === 'string' ? { name: item } : item).filter(item => item?.name)]);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState('All');
  const filtered = entries.filter(([category]) => selected === 'All' || selected === category).map(([category, items]) => [category, items.filter(item => `${category} ${item.name}`.toLowerCase().includes(query.trim().toLowerCase()))]).filter(([, items]) => items.length);
  const count = filtered.reduce((sum, [, items]) => sum + items.length, 0);
  return <section><PageHeading eyebrow="MY EVERYDAY STACK" title="Tools I build with." description="A small, evolving collection of technologies behind my projects — from an idea in a notebook to a working application." />
    <div className="collection-toolbar"><label className="search-field"><span className="sr-only">Search tools</span><input type="search" placeholder="Find a tool or technology…" value={query} onChange={event => setQuery(event.target.value)} /></label><span className="result-count" role="status">{count} tools</span></div>
    <div className="filter-row">{['All', ...entries.map(([category]) => category)].map(category => <button className="filter-chip" key={category} aria-pressed={selected === category} onClick={() => setSelected(category)}>{category}</button>)}</div>
    <div className="tools-sections">{filtered.map(([category, items]) => <section key={category}><div className="group-heading"><h2>{category}</h2><span>{items.length.toString().padStart(2, '0')}</span></div><div className="tools-grid">{items.map(item => <div className="tool-card surface-card" key={item.name}><ToolIcon {...item} /><strong>{item.name}</strong><small>{category}</small></div>)}</div></section>)}</div>
    {!count && <div className="empty-state"><p>No tools match these filters.</p><button className="filter-chip" onClick={() => { setQuery(''); setSelected('All'); }}>Reset filters</button></div>}
  </section>;
}
