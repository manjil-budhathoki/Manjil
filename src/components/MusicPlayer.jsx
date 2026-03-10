import { useState } from 'react';
import { FiMusic, FiPlay, FiPause, FiSkipForward, FiVolume2 } from 'react-icons/fi';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const playlist = [
    {
      title: 'Machine Learning Jazz',
      artist: 'AI Composers',
      duration: '3:45'
    },
    {
      title: 'Neural Beats',
      artist: 'Data Vibes',
      duration: '4:12'
    },
    {
      title: 'Code Ambient',
      artist: 'Sync Frequencies',
      duration: '5:30'
    }
  ];

  const currentTrack = playlist[0];

  return (
    <div className="space-y-4 pb-16">
      <style>{`
        @keyframes pulse-music {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-pulse-music {
          animation: pulse-music 1.5s ease-in-out infinite;
        }
      `}</style>

      <div>
        <h2 className="text-lg font-bold tracking-tight mb-2 border-b border-neutral-700 pb-2 flex items-center gap-2">
          <FiMusic className="text-emerald-400" />
          Now Playing
        </h2>
        <p className="text-sm text-neutral-400 mt-3">
          Curated playlist for focused development.
        </p>
      </div>

      <div className="p-4 rounded-lg border border-neutral-700/50 bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-sm">
        <div className="flex items-start gap-3 mb-4">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 ${isPlaying ? 'animate-pulse-music' : ''}`}>
            <FiMusic className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-neutral-100 truncate">
              {currentTrack.title}
            </h3>
            <p className="text-sm text-neutral-400 truncate">
              {currentTrack.artist}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex-1 h-1 bg-neutral-700 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-emerald-500 rounded-full" />
              </div>
              <span className="text-xs text-neutral-400">{currentTrack.duration}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 active:scale-90 ${
              isPlaying
                ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
            }`}
          >
            {isPlaying ? (
              <FiPause className="w-4 h-4" />
            ) : (
              <FiPlay className="w-4 h-4 ml-0.5" />
            )}
          </button>

          <button className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-700 text-neutral-300 hover:bg-neutral-600 transition-all duration-200 active:scale-90">
            <FiSkipForward className="w-4 h-4" />
          </button>

          <button className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-700 text-neutral-300 hover:bg-neutral-600 transition-all duration-200 active:scale-90">
            <FiVolume2 className="w-4 h-4" />
          </button>

          <a
            href="https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYsBA0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-xs text-center px-3 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-200 font-medium"
          >
            Spotify
          </a>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider px-1">
          Upcoming
        </h3>
        {playlist.slice(1).map((track, idx) => (
          <button
            key={idx}
            className="w-full text-left p-3 rounded-lg border border-neutral-700/30 bg-neutral-900/20 hover:border-neutral-600/50 hover:bg-neutral-900/40 transition-all duration-200 group"
          >
            <div className="flex items-center justify-between">
              <div className="min-w-0">
                <p className="text-sm font-medium text-neutral-300 group-hover:text-neutral-100 truncate transition-colors">
                  {track.title}
                </p>
                <p className="text-xs text-neutral-500 truncate">
                  {track.artist}
                </p>
              </div>
              <span className="text-xs text-neutral-400 ml-2 flex-shrink-0">
                {track.duration}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
