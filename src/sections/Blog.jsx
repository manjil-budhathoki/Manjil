import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import BlogPostView from '../components/BlogPostView';

function BlogCard({ post, onClick }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <article
      onClick={onClick}
      className="group cursor-pointer rounded-xl overflow-hidden transition-all
                 hover:shadow-lg hover:-translate-y-0.5 bg-white dark:bg-neutral-900/50
                 border border-gray-200 dark:border-gray-800"
    >
      {post.cover_image && (
        <div className="aspect-[2/1] overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img
            src={post.cover_image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <time className="text-xs text-neutral-500 dark:text-neutral-400">
            {formatDate(post.published_at)}
          </time>
          {post.tags && post.tags.length > 0 && (
            <>
              <span className="text-neutral-300 dark:text-neutral-600">•</span>
              <div className="flex gap-1.5">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {post.title}
        </h3>

        <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="mt-3 text-sm text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1">
          Read more
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </article>
  );
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (selectedPost) {
    return (
      <BlogPostView
        post={selectedPost}
        onBack={() => setSelectedPost(null)}
      />
    );
  }

  return (
    <section className="space-y-6 pb-16">
      <div>
        <h2 className="text-lg font-bold tracking-tight mb-2 border-b border-gray-200 dark:border-gray-700 pb-2">
          Blog
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-3">
          Thoughts on machine learning, technology, and life in Nepal.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 animate-pulse"
            >
              <div className="aspect-[2/1] bg-gray-200 dark:bg-gray-800" />
              <div className="p-5 space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/4" />
                <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
          <p className="text-neutral-500 dark:text-neutral-400">
            No blog posts yet. Stay tuned!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              onClick={() => setSelectedPost(post)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
