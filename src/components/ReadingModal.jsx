import { useState } from 'react';
import { FiX, FiExternalLink } from 'react-icons/fi';

const readingData = {
  'NLP': {
    color: 'from-cyan-500 to-blue-500',
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
      },
      {
        title: 'An Introduction to Neural Network Language Models',
        authors: 'Bengio et al.',
        year: 2012,
        description: 'Foundational work on neural language modeling.',
        link: 'https://arxiv.org/abs/1707.06347'
      }
    ]
  },
  'Deep Learning': {
    color: 'from-purple-500 to-pink-500',
    papers: [
      {
        title: 'ImageNet Classification with Deep CNNs',
        authors: 'Krizhevsky et al.',
        year: 2012,
        description: 'AlexNet - breakthrough in deep learning for computer vision.',
        link: 'https://arxiv.org/abs/1102.0183'
      },
      {
        title: 'Very Deep Convolutional Networks (VGG)',
        authors: 'Simonyan & Zisserman',
        year: 2014,
        description: 'Architecture demonstrating benefits of network depth.',
        link: 'https://arxiv.org/abs/1409.1556'
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
  'Computer Vision': {
    color: 'from-orange-500 to-red-500',
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
  'Machine Learning': {
    color: 'from-emerald-500 to-teal-500',
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

export default function ReadingModal({ isOpen, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (!isOpen) return null;

  const categories = Object.keys(readingData);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
          <h2 className="text-xl font-bold text-neutral-100">Research & Learning</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
          >
            <FiX className="text-xl text-neutral-400" />
          </button>
        </div>

        <div className="flex-1 overflow-hidden flex">
          <div className="w-full md:w-48 border-r border-neutral-800 p-4 overflow-y-auto bg-neutral-950/50 flex md:flex-col gap-2 md:gap-3 md:bg-none">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-3 rounded-lg font-medium text-sm whitespace-nowrap md:whitespace-normal transition-all ${
                  selectedCategory === category
                    ? `bg-gradient-to-r ${readingData[category].color} text-white shadow-lg`
                    : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-neutral-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {selectedCategory ? (
              <div className="space-y-4">
                <div className="mb-4">
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${readingData[selectedCategory].color} bg-clip-text text-transparent`}>
                    {selectedCategory}
                  </h3>
                  <p className="text-sm text-neutral-400 mt-1">{readingData[selectedCategory].papers.length} papers</p>
                </div>

                <div className="space-y-3">
                  {readingData[selectedCategory].papers.map((paper, idx) => (
                    <a
                      key={idx}
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-lg border border-neutral-700 bg-neutral-800/30 hover:bg-neutral-800/60 hover:border-neutral-600 transition-all group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h4 className="font-semibold text-neutral-100 group-hover:text-white transition-colors leading-snug">
                            {paper.title}
                          </h4>
                          <p className="text-xs text-neutral-500 mt-2">
                            {paper.authors} • {paper.year}
                          </p>
                          <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                            {paper.description}
                          </p>
                        </div>
                        <FiExternalLink className="text-neutral-500 group-hover:text-neutral-300 transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-center">
                <div>
                  <div className="text-4xl mb-3">🚀</div>
                  <p className="text-neutral-400">Select a category to explore research papers</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
