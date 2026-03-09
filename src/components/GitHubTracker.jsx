import { useLanguage } from '../context/LanguageContext';

export default function GitHubTracker() {
  const { language } = useLanguage();

  const stats = [
    { label: language === 'en' ? 'Repositories' : 'भंडारहरु', value: 15, color: 'from-blue-500 to-cyan-500' },
    { label: language === 'en' ? 'Contributions' : 'योगदानहरु', value: 847, color: 'from-emerald-500 to-teal-500' },
    { label: language === 'en' ? 'Projects' : 'परियोजनाहरु', value: 10, color: 'from-orange-500 to-amber-500' },
    { label: language === 'en' ? 'Active' : 'सक्रिय', value: 8, color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <div className="mt-8 p-6 rounded-xl border border-neutral-700/50 bg-gradient-to-br from-neutral-800/30 to-neutral-900/30">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-neutral-400 tracking-wider mb-4">
          {language === 'en' ? 'GitHub CONTRIBUTIONS' : 'GITHUB योगदान'}
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-lg blur transition-opacity duration-300"
                 style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
            <div className={`relative p-4 rounded-lg border border-neutral-700/50 bg-neutral-900/50 group-hover:bg-neutral-800/80 transition-all duration-300`}>
              <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                {stat.value}
              </div>
              <div className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-neutral-800/20 border border-neutral-700/30">
        <p className="text-xs text-neutral-400">
          {language === 'en'
            ? '📊 Track me on GitHub for live contribution stats'
            : '📊 लाइभ योगदान तथ्याङ्कको लागि GitHub मा मलाई ट्र्याक गर्नुहोस'
          }
        </p>
      </div>
    </div>
  );
}
