import { useState, useEffect } from 'react';
import { FiX, FiExternalLink } from 'react-icons/fi';

const readingData = {
  'NLP': {
    color: 'from-cyan-500 to-blue-500',
    icon: '🧠',
    papers: [
      {
        title: 'Attention is All You Need',
        authors: 'Vaswani et al.',
        year: 2017,
        description: 'Introduced the Transformer architecture, foundational for modern NLP.',
        link: 'https://arxiv.org/abs/1706.03762'
      },
      {
        title: 'BERT: Pre-training of Deep Bidirectional Transformers',
        authors: 'Devlin et al.',
        year: 2018,
        description: 'Revolutionary bidirectional pre-training approach for NLP tasks.',
        link: 'https://arxiv.org/abs/1810.04805'
      },
      {
        title: 'Language Models are Unsupervised Multitask Learners',
        authors: 'Radford et al.',
        year: 2019,
        description: 'GPT-2 paper demonstrating zero-shot learning capabilities.',
        link: 'https://d4mucfpksywv.cloudfront.net/better-language-models/language_models_are_unsupervised_multitask_learners.pdf'
      }
    ]
  },
  'Deep Learning': {
    color: 'from-blue-500 to-cyan-500',
    icon: '⚡',
    papers: [
      {
        title: 'ImageNet Classification with Deep CNNs',
        authors: 'Krizhevsky et al.',
        year: 2012,
        description: 'AlexNet - breakthrough in deep learning for computer vision.',
        link: 'https://arxiv.org/abs/1102.0183'
      },
      {
        title: 'Deep Residual Learning for Image Recognition',
        authors: 'He et al.',
        year: 2015,
        description: 'ResNet - enabling training of very deep networks.',
        link: 'https://arxiv.org/abs/1512.03385'
      },
      {
        title: 'Dropout: A Simple Way to Prevent Neural Networks from Overfitting',
        authors: 'Hinton et al.',
        year: 2012,
        description: 'Fundamental regularization technique for deep learning.',
        link: 'https://arxiv.org/abs/1207.0580'
      }
    ]
  },
  'CV': {
    color: 'from-emerald-500 to-teal-500',
    icon: '👁️',
    papers: [
      {
        title: 'You Only Look Once (YOLO)',
        authors: 'Redmon et al.',
        year: 2015,
        description: 'Real-time object detection unified framework.',
        link: 'https://arxiv.org/abs/1506.02640'
      },
      {
        title: 'Mask R-CNN',
        authors: 'He et al.',
        year: 2017,
        description: 'Extension of Faster R-CNN for instance segmentation.',
        link: 'https://arxiv.org/abs/1703.06870'
      },
      {
        title: 'Vision Transformer (ViT)',
        authors: 'Dosovitskiy et al.',
        year: 2020,
        description: 'Applying pure transformer architecture to image patches.',
        link: 'https://arxiv.org/abs/2010.11929'
      }
    ]
  },
  'ML': {
    color: 'from-orange-500 to-amber-500',
    icon: '🎯',
    papers: [
      {
        title: 'A Few Useful Things to Know About Machine Learning',
        authors: 'Domingos',
        year: 2012,
        description: 'Practical insights and pitfalls in machine learning.',
        link: 'https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf'
      },
      {
        title: 'Gradient-based learning applied to document recognition',
        authors: 'LeCun et al.',
        year: 1998,
        description: 'Foundational work on CNN applications.',
        link: 'https://ieeexplore.ieee.org/document/726791'
      },
      {
        title: 'Random Forests',
        authors: 'Breiman',
        year: 2001,
        description: 'Ensemble learning method combining decision trees.',
        link: 'https://link.springer.com/article/10.1023/A:1010933404324'
      }
    ]
  }
};

const FloatingCategory = ({ category, isSelected, onClick, delay }) => {
  const categoryData = readingData[category];
  return (
    <style>{`
      @keyframes float-${delay} {
        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
        50% { transform: translateY(-20px) rotate(2deg); opacity: 1; }
      }
      .float-item-${delay} {
        animation: float-${delay} 6s ease-in-out infinite;
        animation-delay: ${delay * 0.2}s;
      }
    `}</style>
  );
};

export default function ReadingModal({ isOpen, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (!isOpen) return null;

  const categories = Object.keys(readingData);

  return (
    <>
      <style>{`
        @keyframes space-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .paper-card {
          animation: slide-up 0.5s ease-out forwards;
        }
        .paper-card:nth-child(1) { animation-delay: 0.1s; }
        .paper-card:nth-child(2) { animation-delay: 0.2s; }
        .paper-card:nth-child(3) { animation-delay: 0.3s; }
        .paper-card:nth-child(4) { animation-delay: 0.4s; }
      `}</style>

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-neutral-900/80 to-neutral-950/80 backdrop-blur-sm"
          onClick={onClose}
        />

        <div className="relative bg-neutral-900 border border-neutral-700/50 rounded-2xl max-w-5xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500" />

          <div className="flex items-center justify-between px-8 py-6 border-b border-neutral-800/50">
            <div>
              <h2 className="text-2xl font-bold text-neutral-100">Research & Learning</h2>
              <p className="text-sm text-neutral-400 mt-1">Explore research papers and deep dives</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
            >
              <FiX className="text-xl text-neutral-400" />
            </button>
          </div>

          <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
            {!selectedCategory ? (
              <div className="flex-1 p-8 md:p-12 overflow-y-auto">
                <div className="mb-8">
                  <h3 className="text-neutral-400 text-sm font-semibold tracking-wider mb-6">PLAYABLE</h3>
                </div>

                <div className="relative h-full min-h-96">
                  <h1 className="text-5xl md:text-6xl font-bold text-neutral-200 mb-16">Projects</h1>

                  <div className="space-y-8 md:space-y-0">
                    {categories.map((category, idx) => {
                      const data = readingData[category];
                      const positions = [
                        'md:absolute md:left-0 md:top-32',
                        'md:absolute md:left-40 md:top-0',
                        'md:absolute md:right-0 md:top-24',
                        'md:absolute md:right-20 md:bottom-0'
                      ];
                      return (
                        <div
                          key={category}
                          className={`${positions[idx % 4]} md:w-32`}
                          style={{
                            animation: `space-float 4s ease-in-out infinite`,
                            animationDelay: `${idx * 0.3}s`
                          }}
                        >
                          <button
                            onClick={() => setSelectedCategory(category)}
                            className={`w-full md:w-auto px-6 md:px-4 py-3 md:py-2 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 active:scale-95 ${
                              'bg-gradient-to-r ' + data.color + ' text-white shadow-lg hover:shadow-xl'
                            }`}
                          >
                            <span className="mr-2">{data.icon}</span>
                            {category}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="w-full md:w-40 border-b md:border-b-0 md:border-r border-neutral-800/50 p-4 flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto bg-neutral-950/30">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium text-xs md:text-sm whitespace-nowrap md:whitespace-normal transition-all duration-300 ${
                        selectedCategory === category
                          ? `bg-gradient-to-r ${readingData[category].color} text-white shadow-lg`
                          : 'bg-neutral-800/50 text-neutral-400 hover:bg-neutral-700/50 hover:text-neutral-300'
                      }`}
                    >
                      {readingData[category].icon} {category}
                    </button>
                  ))}
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="px-4 py-2 rounded-lg font-medium text-xs md:text-sm whitespace-nowrap bg-neutral-800/30 text-neutral-400 hover:bg-neutral-700/30 transition-all"
                  >
                    ← Back
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{readingData[selectedCategory].icon}</span>
                      <h3 className={`text-3xl font-bold bg-gradient-to-r ${readingData[selectedCategory].color} bg-clip-text text-transparent`}>
                        {selectedCategory}
                      </h3>
                    </div>
                    <p className="text-sm text-neutral-400">{readingData[selectedCategory].papers.length} research papers</p>
                  </div>

                  <div className="space-y-4">
                    {readingData[selectedCategory].papers.map((paper, idx) => (
                      <a
                        key={idx}
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`paper-card block p-4 rounded-xl border border-neutral-700/50 bg-gradient-to-br from-neutral-800/40 to-neutral-900/40 hover:from-neutral-800/70 hover:to-neutral-900/60 hover:border-neutral-600/50 transition-all duration-300 group hover:scale-102 cursor-pointer`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <h4 className="font-semibold text-neutral-100 group-hover:text-white transition-colors leading-snug">
                              {paper.title}
                            </h4>
                            <p className="text-xs text-neutral-500 mt-2 font-medium">
                              {paper.authors} · {paper.year}
                            </p>
                            <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
                              {paper.description}
                            </p>
                          </div>
                          <FiExternalLink className="text-neutral-500 group-hover:text-neutral-300 transition-all flex-shrink-0 mt-1 group-hover:scale-110" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
