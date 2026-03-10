import { FiGithub, FiTrendingUp } from 'react-icons/fi';

export default function GithubStats() {
  const stats = {
    streak: 42,
    contributions: 847,
    repositories: 15,
    followers: 156
  };

  const contributionDays = Array.from({ length: 42 }, (_, i) => ({
    id: i,
    level: Math.floor(Math.random() * 4),
  }));

  const getColor = (level) => {
    const colors = [
      'bg-neutral-700/20',
      'bg-emerald-500/40',
      'bg-emerald-500/60',
      'bg-emerald-500/100'
    ];
    return colors[level];
  };

  return (
    <div className="space-y-4 pb-16">
      <div>
        <h2 className="text-lg font-bold tracking-tight mb-2 border-b border-neutral-700 pb-2 flex items-center gap-2">
          <FiGithub className="text-emerald-400" />
          GitHub Activity
        </h2>
        <p className="text-sm text-neutral-400 mt-3">
          Consistent contributions and open-source development.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="p-3 rounded-lg border border-neutral-700/50 bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors">
          <div className="text-xs text-neutral-400 mb-1 flex items-center gap-1">
            <span className="text-emerald-400">🔥</span> Streak
          </div>
          <div className="text-2xl font-bold text-neutral-100">{stats.streak}</div>
          <div className="text-xs text-neutral-500 mt-1">days active</div>
        </div>

        <div className="p-3 rounded-lg border border-neutral-700/50 bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors">
          <div className="text-xs text-neutral-400 mb-1 flex items-center gap-1">
            <FiTrendingUp className="w-3 h-3" /> Commits
          </div>
          <div className="text-2xl font-bold text-neutral-100">{stats.contributions}</div>
          <div className="text-xs text-neutral-500 mt-1">total</div>
        </div>

        <div className="p-3 rounded-lg border border-neutral-700/50 bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors">
          <div className="text-xs text-neutral-400 mb-1">📦 Repos</div>
          <div className="text-2xl font-bold text-neutral-100">{stats.repositories}</div>
          <div className="text-xs text-neutral-500 mt-1">projects</div>
        </div>

        <div className="p-3 rounded-lg border border-neutral-700/50 bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors">
          <div className="text-xs text-neutral-400 mb-1">👥 Followers</div>
          <div className="text-2xl font-bold text-neutral-100">{stats.followers}</div>
          <div className="text-xs text-neutral-500 mt-1">community</div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-neutral-300 mb-3">42-Day Contribution Grid</h3>
        <div className="p-4 rounded-lg border border-neutral-700/50 bg-neutral-900/30">
          <div className="grid grid-cols-7 gap-1.5">
            {contributionDays.map((day) => (
              <div
                key={day.id}
                className={`aspect-square rounded-md transition-all duration-300 ${getColor(day.level)} hover:scale-110 cursor-default border border-neutral-600/20`}
                title={`Activity level: ${day.level}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 mt-4 text-xs text-neutral-400">
            <span>Less</span>
            <div className="flex gap-1">
              {[0, 1, 2, 3].map((level) => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-sm ${getColor(level)} border border-neutral-600/20`}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>

      <a
        href="https://github.com/manjilbudhathoki"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-700/50 hover:border-emerald-500/50 text-neutral-300 hover:text-emerald-400 transition-all duration-300 text-sm font-medium"
      >
        View on GitHub
        <span>→</span>
      </a>
    </div>
  );
}
