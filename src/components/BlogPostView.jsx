import { FiArrowLeft, FiCalendar, FiTag } from 'react-icons/fi';

export default function BlogPostView({ post, onBack }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderMarkdown = (content) => {
    const lines = content.split('\n');
    const elements = [];
    let currentParagraph = [];
    let inCodeBlock = false;
    let codeLines = [];

    lines.forEach((line, idx) => {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre key={`code-${idx}`} className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto my-4">
              <code className="text-sm">{codeLines.join('\n')}</code>
            </pre>
          );
          codeLines = [];
        }
        inCodeBlock = !inCodeBlock;
        return;
      }

      if (inCodeBlock) {
        codeLines.push(line);
        return;
      }

      if (line.startsWith('# ')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${idx}`} className="mb-4">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(<h1 key={`h1-${idx}`} className="text-3xl font-bold mb-4 mt-8">{line.slice(2)}</h1>);
      } else if (line.startsWith('## ')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${idx}`} className="mb-4">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(<h2 key={`h2-${idx}`} className="text-2xl font-semibold mb-3 mt-6">{line.slice(3)}</h2>);
      } else if (line.startsWith('### ')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${idx}`} className="mb-4">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(<h3 key={`h3-${idx}`} className="text-xl font-semibold mb-2 mt-4">{line.slice(4)}</h3>);
      } else if (line.startsWith('- ') || line.match(/^\d+\. /)) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${idx}`} className="mb-4">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        const content = line.replace(/^[-\d]+\.\s/, '');
        const formatted = formatInlineMarkdown(content);
        elements.push(
          <li key={`li-${idx}`} className="ml-6 mb-2 text-neutral-700 dark:text-neutral-300">
            {formatted}
          </li>
        );
      } else if (line.trim() === '') {
        if (currentParagraph.length > 0) {
          const formatted = formatInlineMarkdown(currentParagraph.join(' '));
          elements.push(<p key={`p-${idx}`} className="mb-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">{formatted}</p>);
          currentParagraph = [];
        }
      } else {
        currentParagraph.push(line);
      }
    });

    if (currentParagraph.length > 0) {
      const formatted = formatInlineMarkdown(currentParagraph.join(' '));
      elements.push(<p key="p-last" className="mb-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">{formatted}</p>);
    }

    return elements;
  };

  const formatInlineMarkdown = (text) => {
    const parts = [];
    let current = '';
    let i = 0;

    while (i < text.length) {
      if (text[i] === '*' && text[i + 1] === '*') {
        if (current) parts.push(current);
        current = '';
        i += 2;
        let bold = '';
        while (i < text.length && !(text[i] === '*' && text[i + 1] === '*')) {
          bold += text[i];
          i++;
        }
        parts.push(<strong key={`b-${i}`} className="font-semibold">{bold}</strong>);
        i += 2;
      } else if (text[i] === '`') {
        if (current) parts.push(current);
        current = '';
        i++;
        let code = '';
        while (i < text.length && text[i] !== '`') {
          code += text[i];
          i++;
        }
        parts.push(
          <code key={`c-${i}`} className="bg-gray-100 dark:bg-gray-900 px-1.5 py-0.5 rounded text-sm">
            {code}
          </code>
        );
        i++;
      } else {
        current += text[i];
        i++;
      }
    }

    if (current) parts.push(current);
    return parts;
  };

  return (
    <article className="max-w-3xl mx-auto pb-16">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-6"
      >
        <FiArrowLeft />
        Back to all posts
      </button>

      {post.cover_image && (
        <div className="aspect-[2/1] rounded-xl overflow-hidden mb-8 border border-gray-200 dark:border-gray-800">
          <img
            src={post.cover_image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <FiCalendar className="text-base" />
            {formatDate(post.published_at)}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2">
              <FiTag className="text-base" />
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {renderMarkdown(post.content)}
      </div>
    </article>
  );
}
