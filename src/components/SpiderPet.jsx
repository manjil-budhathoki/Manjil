import { useState, useEffect } from 'react';

export default function SpiderPet() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [legAnimation, setLegAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLegAnimation((prev) => (prev + 1) % 8);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const moveInterval = setInterval(() => {
        setPosition((prev) => {
          const angle = Math.random() * Math.PI * 2;
          const distance = 3 + Math.random() * 5;
          return {
            x: Math.max(-20, Math.min(20, prev.x + Math.cos(angle) * distance)),
            y: Math.max(-20, Math.min(20, prev.y + Math.sin(angle) * distance))
          };
        });
      }, 1500);
      return () => clearInterval(moveInterval);
    }
  }, [isHovered]);

  const getLegRotation = (legIndex) => {
    const cycle = legAnimation % 8;
    const baseAngles = [45, 90, 135, 180, -135, -90, -45, 0];
    const wave = Math.sin((cycle + legIndex) * Math.PI / 4) * 15;
    return baseAngles[legIndex] + wave;
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <style>{`
        @keyframes crawl {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
        }
        .spider-body {
          animation: crawl 0.6s ease-in-out infinite;
        }
        @keyframes bobbing {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        .spider-hover {
          animation: bobbing 0.4s ease-in-out infinite;
        }
      `}</style>

      <div
        className={`relative w-16 h-16 cursor-pointer transition-all duration-300 ${
          isHovered ? 'spider-hover' : 'spider-body'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          filter: isHovered ? 'drop-shadow(0 0 12px rgba(59, 130, 246, 0.6))' : 'drop-shadow(0 0 4px rgba(0, 0, 0, 0.3))'
        }}
      >
        {/* Body */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-7 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-slate-600 shadow-lg" />
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2.5 bg-gradient-to-b from-slate-600 to-slate-800 rounded-full" />
        </div>

        {/* Eyes */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-1">
          <div className={`w-1 h-1 rounded-full transition-colors ${
            isHovered ? 'bg-blue-400' : 'bg-slate-400'
          }`} />
          <div className={`w-1 h-1 rounded-full transition-colors ${
            isHovered ? 'bg-blue-400' : 'bg-slate-400'
          }`} />
        </div>

        {/* Left Legs */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={`left-${i}`}
            className="absolute top-1/2 left-1/2"
            style={{
              transformOrigin: '0 0',
              transform: `rotate(${getLegRotation(i)}deg) translateX(2px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="w-0.5 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full" style={{ height: `${8 + i * 2}px` }} />
          </div>
        ))}

        {/* Right Legs */}
        {[4, 5, 6, 7].map((i) => (
          <div
            key={`right-${i}`}
            className="absolute top-1/2 right-1/2"
            style={{
              transformOrigin: '100% 0',
              transform: `rotate(${getLegRotation(i)}deg) translateX(-2px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="w-0.5 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full" style={{ height: `${8 + (7 - i) * 2}px` }} />
          </div>
        ))}
      </div>

      <div className={`text-xs font-medium transition-all duration-300 ${
        isHovered ? 'text-blue-400' : 'text-neutral-500'
      }`}>
        {isHovered ? 'Boop!' : 'Pet me'}
      </div>
    </div>
  );
}
