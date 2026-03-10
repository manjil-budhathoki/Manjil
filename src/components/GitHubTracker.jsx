export default function GitHubTracker() {
  const days = Array.from({ length: 42 }, (_, i) => ({
    id: i,
    active: Math.random() > 0.4,
  }));

  return (
    <div
      className="p-3 rounded-lg border border-neutral-700/50 bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 backdrop-blur-sm hover:border-neutral-600/50 transition-all duration-500 sticky top-6"
      style={{
        animation: 'fadeInUp 0.6s ease-out forwards',
      }}
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gridPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .grid-cell-active {
          animation: gridPulse 2s ease-in-out infinite;
        }
      `}</style>

      <a
        href="https://github.com/manjilbudhathoki"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-xs font-semibold text-neutral-400 hover:text-neutral-300 transition-colors tracking-wider mb-2"
      >
        GITHUB
      </a>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => (
          <div
            key={day.id}
            className={`w-2 h-2 rounded-sm transition-all duration-300 ${
              day.active ? 'grid-cell-active bg-emerald-500' : 'bg-neutral-700/30'
            }`}
            style={{
              animation: day.active ? `gridPulse 2s ease-in-out infinite` : 'none',
              animationDelay: day.active ? `${day.id * 0.03}s` : '0s',
            }}
          />
        ))}
      </div>

      <p className="text-xs text-neutral-500 mt-2">42-day grid</p>

      <a
        href="https://github.com/manjilbudhathoki"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-xs text-blue-400 hover:text-blue-300 transition-colors"
      >
        View →
      </a>
    </div>
  );
}
