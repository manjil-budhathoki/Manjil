import { useState, useEffect } from 'react';
import { Search, MoreHorizontal } from 'lucide-react';
import avatar from '../assets/avatar.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fakeResults = [
    'About Manjil',
    'Projects using LLMs',
    'Blogs on AI',
    'Now: What Manjil is working on',
  ];

  const filteredResults = fakeResults.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <section className="bg-[#111111] text-white pt-20 pb-6 px-4 font-sans relative z-10">
      {/* Top Navbar */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto gap-4 relative z-20"
        data-aos="fade-down"
      >
        {/* Left Logo */}
        <div className="text-center sm:text-left pt-2">
          <h1 className="text-red-600 font-bold text-2xl sm:text-3xl tracking-tight">manjil</h1>
          <p className="text-xs text-gray-400">Builder & Creator</p>
        </div>

        {/* Center Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 font-medium tracking-wide">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Projects</li>
          <li className="hover:text-white cursor-pointer">Now</li>
          <li className="hover:text-white cursor-pointer">Read</li>
          <li className="hover:text-white cursor-pointer">About</li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center space-x-3">
          <button onClick={() => setSearchOpen(true)} className="text-gray-400 hover:text-white">
            <Search size={18} />
          </button>
          <MoreHorizontal size={18} className="text-gray-400" />
          <img
            src={avatar}
            alt="avatar"
            className="w-8 h-8 rounded-full border border-gray-600"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="my-10 flex justify-center" data-aos="fade-up">
        <svg
          viewBox="0 0 300 10"
          className="text-gray-600 fill-current"
          preserveAspectRatio="none"
          width="300"
          height="10"
        >
          <path d="M0 5 Q15 0 30 5 T60 5 T90 5 T120 5 T150 5 T180 5 T210 5 T240 5 T270 5 T300 5" />
        </svg>
      </div>

      {/* Hero Content */}
      <div
        className="text-center max-w-2xl mx-auto px-4 mt-6 relative z-20"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="text-3xl sm:text-5xl font-semibold mb-6 tracking-tight leading-snug">
          I’m Manjil — a builder and creator.
        </h2>
        <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
          I build tools, assistants, and ideas powered by AI. My focus lies in Generative AI,
          LLMs, and designing systems that empower education, productivity, and exploration.
        </p>

        {/* Subscribe Section */}
        <div
          className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-[#1e1e1e] text-white px-4 py-2 rounded-md border border-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 w-full sm:w-[300px]"
          />
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>

      {/* Floating Search Box */}
      {searchOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="bg-[#1c1c1c] border border-gray-600 rounded-lg w-full max-w-md p-4 shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-2">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                autoFocus
                placeholder="Search posts, tags and authors"
                className="bg-transparent w-full text-white placeholder:text-gray-500 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {searchTerm && (
              <div className="mt-4 text-sm">
                {filteredResults.length > 0 ? (
                  filteredResults.map((item, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 hover:bg-[#2a2a2a] rounded cursor-pointer"
                    >
                      {item}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 px-3 py-2">No results found.</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
