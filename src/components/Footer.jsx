import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <footer className="bg-[#111111] text-gray-400 font-sans text-sm px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Divider */}
        <div className="flex justify-center" data-aos="fade-up">
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

        {/* Footer Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-40 text-sm px-10 sm:px-20"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {/* Index */}
          <div className="pl-4 sm:pl-40">
            <h3 className="text-xs text-gray-500 uppercase tracking-wide mb-4">Index</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Thought</a></li>
              <li><a href="#" className="hover:text-white">Works</a></li>
              <li><a href="#" className="hover:text-white">Now</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="pl-4 sm:pl-50">
            <h3 className="text-xs text-gray-500 uppercase tracking-wide mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">RSS</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="flex justify-center" data-aos="fade-up" data-aos-delay="300">
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

        {/* Attribution */}
        <div className="text-center pt-2 text-sm text-gray-500" data-aos="fade-up" data-aos-delay="400">
          <p>
            Manjil © 2025. Published with <a href="#" className="text-white hover:underline">Vercel</a> &{' '}
            <a href="#" className="text-white hover:underline">Manjil</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
