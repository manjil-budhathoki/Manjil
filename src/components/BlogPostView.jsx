import { useState } from 'react';
import Markdown from './Markdown';
export default function BlogPostView({ post, onBack }) {
  const [large, setLarge] = useState(false);
  const minutes = Math.max(1, Math.ceil((post.content || '').trim().split(/\s+/).length / 220));
  return <article className="reader"><div className="reader-toolbar"><button className="filter-chip" onClick={onBack}>← All articles</button><button className="filter-chip" aria-pressed={large} onClick={() => setLarge(value => !value)}>Aa <span className="sr-only">Larger text</span></button></div>
    <header className="page-heading"><span className="eyebrow">THE JOURNAL · {minutes} MIN READ</span><h1>{post.title}</h1><div className="card-meta"><time dateTime={post.published_at}>{new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time><span>{post.tags?.join(' · ')}</span></div></header>
    {post.cover_image && <img className="reader-cover" src={post.cover_image} alt="" />}
    <div className={`reading-prose ${large ? 'large-text' : ''}`}><Markdown content={post.content || ''} /></div>
  </article>;
}
