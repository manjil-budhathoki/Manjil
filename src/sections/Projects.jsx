function ProjectCard({ title, badge, desc, tags = [], link, logo }) {
  return (
    <article
      className="flex items-start gap-4 rounded-xl p-3 transition
                 hover:bg-black/5 dark:hover:bg-white/5
                 hover:shadow-sm hover:-translate-y-0.5"
    >
      {/* Logo */}
      {logo ? (
        <img
          src={logo}
          alt={title}
          className="h-10 w-10 rounded-lg object-cover ring-1 ring-black/10 dark:ring-white/10 shrink-0"
          loading="lazy"
        />
      ) : (
        <div className="h-10 w-10 rounded-lg bg-black/10 dark:bg-white/10 ring-1 ring-black/10 dark:ring-white/10 shrink-0" />
      )}

      {/* Content */}
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="h3 m-0">{title}</h3>
          {badge && (
            <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
              {badge}
            </span>
          )}
        </div>

        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>

        {tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="text-[11px] px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {link?.href && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            ↗ {link.label}
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects({ projects = [] }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold tracking-tight mb-5 border-b border-gray-200 dark:border-gray-700 pb-2">
        Projects
      </h2>
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </div>
  );
}
