import { useState, useEffect } from 'react';
import SpiderPet from './SpiderPet';

export default function GithubStats() {
  const [stats, setStats] = useState({
    followers: 0,
    publicRepos: 0,
    totalCommits: 0,
    pullRequests: 0,
    loading: true,
    error: null
  });

  useEffect(() => {
    fetchGitHubStats();
  }, []);

  const fetchGitHubStats = async () => {
    try {
      const userRes = await fetch('https://api.github.com/users/manjilbudhathoki');
      const userData = await userRes.json();

      const reposRes = await fetch('https://api.github.com/users/manjilbudhathoki/repos?per_page=100&sort=updated');
      const reposData = await reposRes.json();

      let totalCommits = 0;
      let totalPRs = 0;

      for (const repo of reposData.slice(0, 10)) {
        try {
          const commitsRes = await fetch(
            `https://api.github.com/repos/manjilbudhathoki/${repo.name}/commits?per_page=1&author=manjilbudhathoki`,
            { headers: { 'Accept': 'application/vnd.github.v3+json' } }
          );
          const link = commitsRes.headers.get('link');
          if (link) {
            const match = link.match(/&page=(\d+)>; rel="last"/);
            totalCommits += match ? parseInt(match[1]) : 1;
          } else {
            totalCommits += 1;
          }

          const prsRes = await fetch(
            `https://api.github.com/repos/manjilbudhathoki/${repo.name}/pulls?state=all&per_page=1`,
            { headers: { 'Accept': 'application/vnd.github.v3+json' } }
          );
          const prLink = prsRes.headers.get('link');
          if (prLink) {
            const match = prLink.match(/&page=(\d+)>; rel="last"/);
            totalPRs += match ? parseInt(match[1]) : 1;
          }
        } catch (e) {
          console.error('Error fetching repo data:', e);
        }
      }

      setStats({
        followers: userData.followers || 0,
        publicRepos: userData.public_repos || 0,
        totalCommits: totalCommits || 0,
        pullRequests: totalPRs || 0,
        loading: false,
        error: null
      });
    } catch (error) {
      console.error('Error fetching GitHub stats:', error);
      setStats(prev => ({ ...prev, loading: false, error: error.message }));
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-3">
        <SpiderPet />
      </div>

      <div className="space-y-2">
        <div className="text-xs font-semibold text-neutral-400 uppercase tracking-widest px-2">
          GitHub Stats
        </div>

        {stats.loading ? (
          <div className="space-y-2">
            <div className="h-16 bg-neutral-800/30 rounded-lg animate-pulse" />
            <div className="h-16 bg-neutral-800/30 rounded-lg animate-pulse" />
          </div>
        ) : (
          <>
            <div className="p-3 rounded-lg border border-neutral-700/50 bg-neutral-900/20 hover:bg-neutral-900/30 transition-colors">
              <div className="text-xs text-neutral-500 mb-1">Followers</div>
              <div className="text-xl font-bold text-neutral-100">{stats.followers.toLocaleString()}</div>
            </div>

            <div className="p-3 rounded-lg border border-neutral-700/50 bg-neutral-900/20 hover:bg-neutral-900/30 transition-colors">
              <div className="text-xs text-neutral-500 mb-1">Public Repos</div>
              <div className="text-xl font-bold text-neutral-100">{stats.publicRepos}</div>
            </div>

            <div className="p-3 rounded-lg border border-neutral-700/50 bg-neutral-900/20 hover:bg-neutral-900/30 transition-colors">
              <div className="text-xs text-neutral-500 mb-1">Commits</div>
              <div className="text-xl font-bold text-neutral-100">{stats.totalCommits.toLocaleString()}</div>
            </div>

            <div className="p-3 rounded-lg border border-neutral-700/50 bg-neutral-900/20 hover:bg-neutral-900/30 transition-colors">
              <div className="text-xs text-neutral-500 mb-1">Pull Requests</div>
              <div className="text-xl font-bold text-neutral-100">{stats.pullRequests}</div>
            </div>

            <a
              href="https://github.com/manjilbudhathoki"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1 px-2.5 py-2 text-xs font-medium rounded-lg border border-neutral-700/50 text-neutral-300 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
            >
              View Profile →
            </a>
          </>
        )}
      </div>
    </div>
  );
}
