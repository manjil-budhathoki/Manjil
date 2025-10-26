export default function Tabs({ value, onChange, items }) {
  return (
    <div role="tablist" aria-label="Sections"
         className="inline-flex items-center gap-1 p-1 rounded-lg bg-black/5 dark:bg-white/10">
      {items.map((tab) => {
        const active = value === tab;
        return (
          <button
            key={tab}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(tab)}
            className={[
              "px-3 py-1.5 rounded-md text-sm font-medium transition-colors outline-none",
              active
                ? "bg-white dark:bg-neutral-900 shadow-sm"
                : "hover:bg-black/10 dark:hover:bg-white/20"
            ].join(" ")}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
