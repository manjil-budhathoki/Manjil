import { useState, useEffect } from 'react';
import { FaSpotify, FaPause, FaPlay } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function SpotifyPlayer() {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  const currentTrack = {
    title: language === 'en' ? 'Machine Learning Jazz' : 'मेसिन लर्निङ ज्याज',
    artist: language === 'en' ? 'AI Composers' : 'AI संगीतकार',
    album: language === 'en' ? 'Neural Rhythms' : 'न्यूरल रिदम',
    image: 'https://images.pexels.com/photos/187941/pexels-photo-187941.jpeg?auto=compress&cs=tinysrgb&w=400',
    spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYsBA0',
    progress: 35,
  };

  return (
    <div className="mt-8 p-6 rounded-xl border border-neutral-700/50 bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 overflow-hidden">
      <style>{`
        @keyframes pulse-spotify {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .spotify-pulse {
          animation: pulse-spotify 2s ease-in-out infinite;
        }
      `}</style>

      <div className="flex items-center gap-2 mb-4">
        <FaSpotify className="text-lg text-green-500" />
        <h3 className="text-sm font-semibold text-neutral-400 tracking-wider">
          {language === 'en' ? 'NOW PLAYING' : 'अब बजिरहेको'}
        </h3>
      </div>

      <div className="flex gap-4">
        <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-neutral-700">
          <img
            src={currentTrack.image}
            alt={currentTrack.title}
            className={`w-full h-full object-cover ${isPlaying ? 'spotify-pulse' : ''}`}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="flex-1">
          <h4 className="font-semibold text-neutral-100 text-sm leading-snug">
            {currentTrack.title}
          </h4>
          <p className="text-xs text-neutral-400 mt-1">
            {currentTrack.artist}
          </p>
          <p className="text-xs text-neutral-500 mt-0.5">
            {currentTrack.album}
          </p>

          <div className="mt-2 w-full bg-neutral-700/30 rounded-full h-1">
            <div
              className="bg-gradient-to-r from-green-500 to-emerald-500 h-1 rounded-full transition-all duration-1000"
              style={{ width: `${currentTrack.progress}%` }}
            />
          </div>
        </div>

        <a
          href={currentTrack.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300 hover:scale-110 active:scale-95 group"
          title={language === 'en' ? 'Open on Spotify' : 'Spotify मा खोल्नुहोस'}
        >
          {isPlaying ? (
            <FaPause className="text-lg" />
          ) : (
            <FaPlay className="text-lg ml-0.5" />
          )}
        </a>
      </div>

      <div className="mt-4 p-2 rounded-lg bg-green-500/10 border border-green-500/20">
        <p className="text-xs text-green-400">
          {language === 'en'
            ? '🎵 Click to play on Spotify'
            : '🎵 Spotify मा बजाउन क्लिक गर्नुहोस'
          }
        </p>
      </div>
    </div>
  );
}
