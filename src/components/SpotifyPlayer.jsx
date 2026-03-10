import { useState } from 'react';
import { FaSpotify, FaPause, FaPlay } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function SpotifyPlayer() {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  const currentTrack = {
    title: language === 'en' ? 'Machine Learning Jazz' : 'मेसिन लर्निङ ज्याज',
    artist: language === 'en' ? 'AI Composers' : 'AI संगीतकार',
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
        @keyframes pulse-spotify {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        .spotify-pulse {
          animation: pulse-spotify 1.5s ease-in-out infinite;
        }
      `}</style>

      <div className="flex items-center gap-2 mb-3">
        <FaSpotify className="text-sm text-green-500" />
        <a
          href="https://open.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-neutral-400 hover:text-green-400 transition-colors tracking-wider"
        >
          SPOTIFY
        </a>
      </div>

      <div className="space-y-2 mb-3">
        <div>
          <p className="text-xs font-medium text-neutral-200 truncate">
            {currentTrack.title}
          </p>
          <p className="text-xs text-neutral-400 truncate">
            {currentTrack.artist}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <a
          href={currentTrack.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsPlaying(!isPlaying)}
          className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300 hover:scale-110 active:scale-95 ${
            isPlaying ? 'spotify-pulse' : ''
          }`}
          title={language === 'en' ? 'Play on Spotify' : 'Spotify मा बजाउनुहोस'}
        >
          {isPlaying ? (
            <FaPause className="text-xs" />
          ) : (
            <FaPlay className="text-xs ml-0.5" />
          )}
        </a>
        <a
          href={currentTrack.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-green-400 hover:text-green-300 transition-colors flex-1 truncate"
        >
          Listen →
        </a>
      </div>
    </div>
  );
}
