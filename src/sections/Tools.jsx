// src/sections/Tools.jsx
export default function Tools({ data, groups }) {
  // Accept either prop name
  const toolsByCategory = data || groups || {};
  const entries = Object.entries(toolsByCategory);

  if (entries.length === 0) {
    return (
      <section className="pb-16">
        <h2 className="text-lg font-bold tracking-tight mb-5 border-b border-gray-200 dark:border-gray-700 pb-2">
          Tools
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          No tools to display yet.
        </p>
      </section>
    );
  }

  const normalize = (item) =>
    typeof item === "string" ? { name: item, logo: null } : item;

  return (
    <section className="space-y-8 pb-16">
      <h2 className="text-lg font-bold tracking-tight mb-5 border-b border-gray-200 dark:border-gray-700 pb-2">
        Tools
      </h2>

      {entries.map(([category, rawList]) => {
        const list = Array.isArray(rawList) ? rawList : [];

        return (
          <div key={category} className="space-y-4">
            {/* Category title */}
            <h3 className="text-[13px] font-semibold text-neutral-800 dark:text-neutral-200">
              {category}
            </h3>

            {/* Responsive logo grid */}
            <div
              className="
                grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8
                gap-x-6 gap-y-6 sm:gap-y-7
              "
            >
              {list.map((item, idx) => {
                const { name, logo } = normalize(item);

                return (
                  <div
                    key={`${category}-${name}-${idx}`}
                    className="group flex flex-col items-center text-center gap-2
                               transition-transform duration-150 hover:-translate-y-0.5"
                  >
                    {/* Logo (fixed box so rows align nicely) */}
                    <div className="h-10 w-10 md:h-11 md:w-11 flex items-center justify-center">
                      {logo ? (
                        <img
                          src={logo}
                          alt={name}
                          className="h-8 w-8 md:h-9 md:w-9 object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <div className="h-8 w-8 md:h-9 md:w-9 rounded-lg bg-black/5 dark:bg-white/10 grid place-items-center text-[11px] md:text-xs font-semibold text-neutral-700 dark:text-neutral-200">
                          {name?.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                    </div>

                    {/* Label */}
                    <span className="text-[12px] md:text-[13px] font-medium text-neutral-800 dark:text-neutral-200">
                      {name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
