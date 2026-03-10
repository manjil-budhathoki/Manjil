import { useState } from 'react';
import { FaSpotify, FaPause, FaPlay, FaStepForward } from 'react-icons/fa';

export default function SpotifyPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const currentTrack = {
    title: 'Machine Learning Jazz',
    artist: 'AI Composers',
    spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYsBA0',
  };

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
        @keyframes pulse-play {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .pulse-animate {
          animation: pulse-play 1.2s ease-in-out infinite;
        }
      `}</style>

      <a
        href="https://open.spotify.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-green-400 transition-colors tracking-wider mb-2"
      >
        <FaSpotify className="text-xs text-green-500" />
        MUSIC
      </a>

      <p className="text-xs font-medium text-neutral-200 truncate mb-0.5">
        {currentTrack.title}
      </p>
      <p className="text-xs text-neutral-400 truncate mb-2">
        {currentTrack.artist}
      </p>

      <div className="flex items-center gap-1.5">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-neutral-700 hover:bg-green-500 text-neutral-300 hover:text-white transition-all duration-200 active:scale-90 ${
            isPlaying ? 'pulse-animate bg-green-500 text-white' : ''
          }`}
        >
          {isPlaying ? (
            <FaPause className="text-xs" />
          ) : (
            <FaPlay className="text-xs ml-0.5" />
          )}
        </button>

        <button
          className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-neutral-700 hover:bg-neutral-600 text-neutral-300 hover:text-neutral-200 transition-all duration-200 active:scale-90"
          title="Next"
        >
          <FaStepForward className="text-xs" />
        </button>

        <a
          href={currentTrack.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-green-400 hover:text-green-300 transition-colors flex-1 truncate"
        >
          Open →
        </a>
      </div>
    </div>
  );
}
