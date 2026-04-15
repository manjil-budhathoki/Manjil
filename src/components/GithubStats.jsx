import { useState, useEffect } from 'react';
import SpiderPet from './SpiderPet';

export default function GithubStats() {
  const [heatmap, setHeatmap] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    generateHeatmap();
  }, []);

  const generateHeatmap = async () => {
    try {
      const data = [];
      const today = new Date();

      for (let i = 365; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);

        const commits = Math.floor(Math.random() * 5);

        data.push({
          date: date.toISOString().split('T')[0],
          commits: commits,
          level: commits === 0 ? 0 : commits <= 1 ? 1 : commits <= 3 ? 2 : 3
        });
      }

      setHeatmap(data);
      setLoading(false);
    } catch (error) {
      console.error('Error generating heatmap:', error);
      setLoading(false);
    }
  };

  const getColor = (level) => {
    switch(level) {
      case 0: return 'bg-neutral-800';
      case 1: return 'bg-green-900';
      case 2: return 'bg-green-700';
      case 3: return 'bg-green-500';
      default: return 'bg-neutral-800';
    }
  };

  const weeks = [];
  for (let i = 0; i < heatmap.length; i += 7) {
    weeks.push(heatmap.slice(i, i + 7));
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-3">
        <SpiderPet />
      </div>

      <div className="space-y-2">
        <div className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-2">
          Commit Activity
        </div>

        {loading ? (
          <div className="h-32 bg-neutral-800/30 rounded-lg animate-pulse" />
        ) : (
          <div className="p-3 rounded-lg border border-neutral-700/50 bg-neutral-900/20">
            <div className="flex gap-1 overflow-x-auto pb-2">
              {weeks.map((week, weekIdx) => (
                <div key={weekIdx} className="flex flex-col gap-1">
                  {week.map((day, dayIdx) => (
                    <div
                      key={day.date}
                      className={`w-2.5 h-2.5 rounded-sm cursor-pointer transition-all hover:ring-1 ring-neutral-500 ${getColor(day.level)}`}
                      title={`${day.commits} commits on ${day.date}`}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1 mt-3 pt-2 border-t border-neutral-700/30">
              <span className="text-xs text-neutral-500">Less</span>
              <div className="flex gap-0.5">
                {[0, 1, 2, 3].map(level => (
                  <div
                    key={level}
                    className={`w-2.5 h-2.5 rounded-sm ${getColor(level)}`}
                  />
                ))}
              </div>
              <span className="text-xs text-neutral-500">More</span>
            </div>
          </div>
        )}

        <a
          href="https://github.com/manjilbudhathoki"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-1 px-2.5 py-2 text-xs font-medium rounded-lg border border-neutral-700/50 text-neutral-300 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
        >
          View Profile →
        </a>
      </div>
    </div>
  );
}
