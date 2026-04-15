import SpiderPet from './SpiderPet';

export default function GithubStats() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-3">
        <SpiderPet />
      </div>

      <div className="flex flex-col items-center gap-2 p-3 rounded-lg border border-neutral-700/50 bg-neutral-900/20">
        <span className="text-xs text-neutral-500">Commit Intensity</span>
        <div className="flex gap-0.5">
          {['bg-neutral-800', 'bg-green-900', 'bg-green-700', 'bg-green-500'].map((color, idx) => (
            <div
              key={idx}
              className={`w-2.5 h-2.5 rounded-sm ${color}`}
            />
          ))}
        </div>
      </div>

      <a
        href="https://github.com/manjilbudhathoki"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-1 px-2.5 py-2 text-xs font-medium rounded-lg border border-neutral-700/50 text-neutral-300 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
      >
        View Profile →
      </a>
    </div>
  );
}
