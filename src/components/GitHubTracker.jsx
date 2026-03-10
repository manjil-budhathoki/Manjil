import { useLanguage } from '../context/LanguageContext';

export default function GitHubTracker() {
  const { language } = useLanguage();

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
      `}</style>

      <a
        href="https://github.com/manjilbudhathoki"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-xs font-semibold text-neutral-400 hover:text-neutral-300 transition-colors tracking-wider mb-3"
      >
        GITHUB
      </a>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-neutral-400">Streak</span>
          <span className="font-semibold text-neutral-200">42 days</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-neutral-400">Repos</span>
          <span className="font-semibold text-neutral-200">15</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-neutral-400">Commits</span>
          <span className="font-semibold text-neutral-200">847</span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-neutral-700/30">
        <div className="flex gap-1">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-neutral-700/50 hover:bg-green-500/80 transition-colors"
              style={{
                backgroundColor: i < 5 ? '#10b981' : '#404854',
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${i * 0.05}s`,
                opacity: 0,
              }}
            />
          ))}
        </div>
        <p className="text-xs text-neutral-500 mt-2">Last 7 days</p>
      </div>

      <a
        href="https://github.com/manjilbudhathoki"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-xs text-blue-400 hover:text-blue-300 transition-colors"
      >
        View →
      </a>
    </div>
  );
}
