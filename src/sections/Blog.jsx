import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import PageHeading from '../components/PageHeading';
import BlogPostView from '../components/BlogPostView';
const PAGE_SIZE = 12;
export default function Blog() {
  const [params, setParams] = useSearchParams();
  const postId = params.get('post');
  const page = Math.max(0, Number.parseInt(params.get('page') || '0', 10) || 0);
  const [state, setState] = useState({ posts: [], post: null, loading: true, error: false, more: false });
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    if (!supabase) return;
    const controller = new AbortController();
    let active = true;
    setState(previous => ({ ...previous, loading: true, error: false }));
    async function load() {
      try {
        const query = postId
          ? supabase.from('blog_posts').select('*').eq('published', true).eq('id', postId).maybeSingle()
          : supabase.from('blog_posts').select('id,title,excerpt,cover_image,published_at,tags').eq('published', true).order('published_at', { ascending: false }).order('id').range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
        const { data, error } = await query.abortSignal(controller.signal);
        if (error) throw error;
        if (active) setState({ posts: postId ? [] : (data || []).slice(0, PAGE_SIZE), post: postId ? data : null, loading: false, error: false, more: !postId && data?.length > PAGE_SIZE });
      } catch { if (active) setState(previous => ({ ...previous, loading: false, error: true })); }
    }
    load();
    return () => { active = false; controller.abort(); };
  }, [page, postId, retry]);
  if (postId && state.post && !state.loading && !state.error) return <BlogPostView post={state.post} onBack={() => setParams(page ? { page: String(page) } : {})} />;
  return <section><PageHeading eyebrow="NOTES FROM THE PROCESS" title="Thinking out loud." description="Notes on machine learning, building things, and life in Nepal. A place for what I learn along the way." />
    {!supabase ? <div className="empty-state"><h2>The journal is taking shape.</h2><p>Articles will appear here once the publishing connection is configured.</p></div>
      : state.loading ? <p className="empty-state" role="status">Loading the journal…</p>
      : state.error ? <div className="empty-state" role="alert"><p>Couldn’t load the journal. Please try again.</p><button className="filter-chip" onClick={() => setRetry(value => value + 1)}>Try again</button></div>
      : postId ? <div className="empty-state"><p>This article is unavailable.</p><button className="filter-chip" onClick={() => setParams({})}>All articles</button></div>
      : <><div className="blog-list">{state.posts.map(post => <article className="surface-card blog-card" key={post.id}>
        {post.cover_image && <img src={post.cover_image} alt="" loading="lazy" />}
        <div><div className="card-meta"><time dateTime={post.published_at}>{new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</time><span>{post.tags?.slice(0, 2).join(' · ')}</span></div><h2><button onClick={() => setParams({ post: String(post.id), ...(page ? { page: String(page) } : {}) })}>{post.title}</button></h2><p>{post.excerpt}</p><span className="eyebrow">Read article ↗</span></div>
      </article>)}</div>{!state.posts.length && <p className="empty-state">No articles here yet. Check back soon.</p>}
      <nav className="pagination" aria-label="Article pagination"><button className="filter-chip" disabled={!page} onClick={() => setParams(page > 1 ? { page: String(page - 1) } : {})}>← Previous</button><span>Page {page + 1}</span><button className="filter-chip" disabled={!state.more} onClick={() => setParams({ page: String(page + 1) })}>Next →</button></nav></>}
  </section>;
}
