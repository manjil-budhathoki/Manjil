import { useEffect, useState } from 'react';
import {
  FiBookOpen,
  FiTool,
  FiYoutube,
  FiFileText,
  FiExternalLink,
  FiBarChart2,
  FiArrowRight,
} from 'react-icons/fi';

function CurrentlyCard({ item }) {
  const getGradient = (icon) => {
    switch (icon) {
      case 'book':
        return 'from-blue-500/20 to-blue-500/5 border-blue-200 dark:border-blue-800/50';
      case 'tool':
        return 'from-emerald-500/20 to-emerald-500/5 border-emerald-200 dark:border-emerald-800/50';
      case 'chart':
        return 'from-purple-500/20 to-purple-500/5 border-purple-200 dark:border-purple-800/50';
      default:
        return 'from-gray-500/20 to-gray-500/5 border-gray-200 dark:border-gray-800/50';
    }
  };

  const getIconColor = (icon) => {
    switch (icon) {
      case 'book':
        return 'text-blue-600 dark:text-blue-400';
      case 'tool':
        return 'text-emerald-600 dark:text-emerald-400';
      case 'chart':
        return 'text-purple-600 dark:text-purple-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div
      className={`group rounded-lg p-4 border bg-gradient-to-br transition-all hover:shadow-md hover:-translate-y-0.5 ${getGradient(
        item.icon
      )}`}
    >
      <div className="flex items-start gap-3">
        <div className={`mt-1 text-xl ${getIconColor(item.icon)}`}>
          {item.icon === 'book' && <FiBookOpen />}
          {item.icon === 'tool' && <FiTool />}
          {item.icon === 'chart' && <FiBarChart2 />}
          {!item.icon && <FiBookOpen />}
        </div>
        <div className="flex-1">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1">
            {item.label}
          </h4>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {item.value}
          </p>
        </div>
      </div>
    </div>
  );
}

function MediaCard({ media }) {
  const getMediaType = (kind) => {
    switch (kind) {
      case 'video':
        return { icon: FiYoutube, color: 'text-red-500' };
      case 'paper':
        return { icon: FiFileText, color: 'text-blue-500' };
      case 'post':
        return { icon: FiExternalLink, color: 'text-emerald-500' };
      default:
        return { icon: FiExternalLink, color: 'text-gray-500' };
    }
  };

  const { icon: IconComponent, color } = getMediaType(media.kind);

  return (
    <a
      href={media.href || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-4 rounded-lg border border-gray-200 dark:border-gray-800
                 bg-white dark:bg-neutral-900/50 hover:shadow-md hover:-translate-y-0.5
                 hover:border-blue-300 dark:hover:border-blue-800 transition-all"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <IconComponent className={`text-lg ${color}`} />
            <h4 className="font-medium text-sm text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {media.title}
            </h4>
          </div>
          {media.meta && (
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {media.meta}
            </p>
          )}
        </div>
        <FiArrowRight className="mt-1 text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0" />
      </div>
    </a>
  );
}

function MetricCard({ metric, delay }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const numValue = parseInt(metric.value.replace(/\D/g, '')) || 0;
      let current = 0;
      const increment = numValue / 20;
      const interval = setInterval(() => {
        current += increment;
        if (current >= numValue) {
          setValue(numValue);
          clearInterval(interval);
        } else {
          setValue(Math.floor(current));
        }
      }, 30);
      return () => clearInterval(interval);
    }, delay * 100);
    return () => clearTimeout(timeout);
  }, [metric.value, delay]);

  return (
    <div
      className="p-4 rounded-lg border border-blue-200 dark:border-blue-800/50
                 bg-gradient-to-br from-blue-50/50 to-blue-50/0 dark:from-blue-900/20 dark:to-blue-900/0
                 text-center hover:shadow-md transition-shadow"
    >
      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
        {value}+
      </div>
      <p className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">
        {metric.label}
      </p>
    </div>
  );
}

export default function Other({ lines = [] }) {
  const normalized =
    Array.isArray(lines)
      ? { currently: [], media: [], metrics: [], notes: lines, updatedAt: null }
      : lines || { currently: [], media: [], metrics: [], updatedAt: null };

  const {
    currently = [],
    media = [],
    metrics = [],
    notes = [],
    updatedAt = null,
  } = normalized;

  const isEmpty =
    currently.length + media.length + metrics.length + notes.length === 0;

  return (
    <section className="space-y-8 pb-16">
      <div>
        <h2 className="text-lg font-bold tracking-tight mb-2 border-b border-gray-200 dark:border-gray-700 pb-2">
          Other
        </h2>
        {updatedAt && (
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
            Last updated {new Date(updatedAt).toLocaleDateString()}
          </p>
        )}
      </div>

      {isEmpty ? (
        <div className="text-center py-12 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
          <p className="text-neutral-500 dark:text-neutral-400">
            Nothing to show… yet.
          </p>
        </div>
      ) : (
        <>
          {currently.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-4">
                Currently
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currently.map((item, i) => (
                  <CurrentlyCard key={i} item={item} />
                ))}
              </div>
            </div>
          )}

          {media.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-4">
                Featured Media
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {media.map((m, i) => (
                  <MediaCard key={i} media={m} />
                ))}
              </div>
            </div>
          )}

          {metrics.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-4">
                Impact Metrics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {metrics.map((metric, i) => (
                  <MetricCard key={i} metric={metric} delay={i} />
                ))}
              </div>
            </div>
          )}

          {notes.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-4">
                Notes
              </h3>
              <ul className="space-y-2">
                {notes.map((note, i) => (
                  <li
                    key={i}
                    className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800
                             text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </section>
  );
}
