import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  const projects = [
    {
      name: 'Manjil Studio',
      url: 'https://manjilstudio.ai',
      description: 'Creating thoughtful tools powered by LLMs, LangChain, and Python.',
    },
    {
      name: 'Awesome AI Tips',
      url: 'https://aigenius.tips',
      description: 'Neat tips to build faster with GenAI tools and APIs.',
    },
    {
      name: 'Portfolios',
      url: 'https://portfolioshub.dev',
      description: 'For anyone starting out or looking for internships or AI positions.',
    },
    {
      name: 'VisualAI',
      url: 'https://visualai.tools',
      description: 'Visual explorations of AI architecture and reasoning systems.',
    },
  ];

  return (
    <section className="bg-[#111111] text-gray-300 font-sans py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
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

        {/* Section Label */}
        <p className="text-xs text-gray-500 mb-10 tracking-widest uppercase" data-aos="fade-up" data-aos-delay="100">
          Creating
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-12 px-4 sm:px-10 text-left">
          {projects.map((project, index) => (
            <div
              key={index}
              className="space-y-2 pl-20"
              data-aos="fade-up"
              data-aos-delay={index * 150 + 200}
            >
              <p className="text-xs text-gray-500">{project.url}</p>
              <a
                href={project.url}
                className="text-white font-semibold text-lg inline-flex items-center gap-1 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
                <ArrowUpRight size={14} />
              </a>
              <p className="text-sm text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
