// Minimal "Other" section: Currently • Featured Media • Impact Metrics
// Accepts either legacy array or object:
// other = {
//   currently: [{ icon: "book" | "tool" | "chart", label: "Learning", value: "..." }],
//   updatedAt: "2025-08-15",
//   media: [{ kind: "paper" | "video" | "post", title: "...", meta: "...", href: "..." }],
//   metrics: [{ label: "Projects Shipped", value: "12" }]
// }

import {
  FiBookOpen,
  FiTool,
  FiYoutube,
  FiFileText,
  FiExternalLink,
  FiBarChart2,
} from "react-icons/fi";

export default function Other({ lines = [] }) {
  // Normalize to object shape while supporting legacy array-of-strings
  const normalized =
    Array.isArray(lines)
      ? { currently: [], media: [], metrics: [], notes: lines, updatedAt: null }
      : (lines || { currently: [], media: [], metrics: [], updatedAt: null });

  const {
    currently = [],
    media = [],
    metrics = [],
    notes = [],
    updatedAt = null,
  } = normalized;

  const SectionTitle = ({ children }) => (
    <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
      {children}
    </h3>
  );

  return (
    <section className="space-y-8 pb-12">
      <h2 className="text-lg font-bold tracking-tight mb-5 border-b border-gray-200 dark:border-gray-700 pb-2">
        Other
      </h2>

      {/* Currently */}
      {(currently?.length ?? 0) > 0 && (
        <div className="space-y-2">
          <SectionTitle>Currently</SectionTitle>

          {/* Tiny "last updated" line */}
          {updatedAt && (
            <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
              Updated {new Date(updatedAt).toLocaleDateString()}
            </div>
          )}

          <ul className="space-y-1.5 mt-1">
            {currently.map((item, i) => (
              <li
                key={i}
                className="text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-2"
              >
                <span className="mt-[2px] opacity-80">
                  {item.icon === "book" && <FiBookOpen />}
                  {item.icon === "tool" && <FiTool />}
                  {item.icon === "chart" && <FiBarChart2 />}
                  {!item.icon && <FiBookOpen />}
                </span>
                <span>
                  <span className="font-medium">{item.label}:</span>{" "}
                  <span>{item.value}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Featured Media */}
      {(media?.length ?? 0) > 0 && (
        <div className="space-y-3">
          <SectionTitle>Featured Media</SectionTitle>
          <ul className="space-y-2">
            {media.map((m, i) => (
              <li key={i} className="text-sm flex items-start gap-2">
                <span className="mt-[2px] opacity-80">
                  {m.kind === "video" && <FiYoutube />}
                  {m.kind === "paper" && <FiFileText />}
                  {m.kind === "post" && <FiExternalLink />}
                  {!m.kind && <FiExternalLink />}
                </span>
                {m.href ? (
                  <a
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    {m.title}
                  </a>
                ) : (
                  <span className="font-medium text-neutral-900 dark:text-neutral-100">
                    {m.title}
                  </span>
                )}
                {m.meta && (
                  <span className="ml-2 text-xs text-neutral-500 dark:text-neutral-400">
                    {m.meta}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Impact Metrics */}
      {(metrics?.length ?? 0) > 0 && (
        <div className="space-y-3">
          <SectionTitle>Impact Metrics</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {metrics.map((s, i) => (
              <div
                key={i}
                className="px-2.5 py-1 rounded-lg text-[12px] font-medium
                           bg-black/5 dark:bg-white/10 text-neutral-800 dark:text-neutral-200"
              >
                <FiBarChart2 className="inline -mt-0.5 mr-1 opacity-80" />
                <span className="font-semibold">{s.value}</span>{" "}
                <span className="opacity-80">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Legacy simple notes */}
      {(notes?.length ?? 0) > 0 && (
        <div className="space-y-3">
          <SectionTitle>Notes</SectionTitle>
          <ul className="space-y-2">
            {notes.map((t, i) => (
              <li
                key={i}
                className="text-sm text-neutral-700 dark:text-neutral-300"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Empty state */}
      {currently.length + media.length + metrics.length + notes.length === 0 && (
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Nothing to show… yet.
        </p>
      )}
    </section>
  );
}
