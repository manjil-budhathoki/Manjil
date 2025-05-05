import { useEffect } from 'react';
import huggingface from '../assets/huggingface.png';
import langchain from '../assets/langchain.svg';
import openai from '../assets/openai.png';
import fastapi from '../assets/fastapi.png';
import python from '../assets/python.png';
import pytorch from '../assets/pytorch.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Tools() {
  const tools = [
    {
      name: "Hugging Face",
      src: huggingface,
      alt: "Hugging Face logo",
    },
    {
      name: "LangChain",
      src: langchain,
      alt: "LangChain logo",
    },
    {
      name: "OpenAI",
      src: openai,
      alt: "OpenAI logo",
    },
    {
      name: "Python",
      src: python,
      alt: "Python logo",
    },
    {
      name: "FastAPI",
      src: fastapi,
      alt: "FastAPI logo",
    },
    {
      name: "PyTorch",
      src: pytorch,
      alt: "PyTorch logo",
    },
  ];

  useEffect(() => {
    AOS.init({ once: true, duration: 600 });
  }, []);

  return (
    <section className="bg-[#111111] py-16 px-4 font-sans text-gray-300">
      <div className="max-w-6xl mx-auto text-center">
        {/* Top Divider */}
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

        {/* Section Title */}
        <p className="text-xs text-gray-500 mb-6 tracking-widest uppercase" data-aos="fade-up" data-aos-delay="100">
          Featured On
        </p>

        {/* Tools Logo Grid */}
        <div className="flex flex-wrap justify-center gap-10 mt-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-20"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={tool.src}
                alt={tool.alt}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain grayscale hover:grayscale-0 transition duration-200"
              />
              <p className="text-[11px] mt-2 text-gray-500 text-center">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
