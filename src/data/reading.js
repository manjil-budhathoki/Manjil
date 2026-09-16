export const readingMap = {
  'Fundamentals': {
    gradient: 'from-slate-400 to-slate-600',
    accent: 'slate',
    topics: [
      {
        title: 'Linear Algebra & Calculus',
        items: [
          { name: 'Matrix Operations', status: 'complete' },
          { name: 'Gradients & Backprop', status: 'complete' }
        ]
      },
      {
        title: 'Statistics & Probability',
        items: [
          { name: 'Distributions', status: 'complete' },
          { name: 'Hypothesis Testing', status: 'in-progress' }
        ]
      }
    ]
  },
  'ML Core': {
    gradient: 'from-blue-400 to-cyan-500',
    accent: 'blue',
    topics: [
      {
        title: 'Supervised Learning',
        items: [
          { name: 'Regression Models', status: 'complete' },
          { name: 'Classification', status: 'complete' },
          { name: 'Ensemble Methods', status: 'in-progress' }
        ]
      },
      {
        title: 'Unsupervised Learning',
        items: [
          { name: 'Clustering', status: 'planning' },
          { name: 'Dimensionality Reduction', status: 'planning' }
        ]
      }
    ]
  },
  'Deep Learning': {
    gradient: 'from-purple-400 to-pink-500',
    accent: 'purple',
    topics: [
      {
        title: 'Neural Networks',
        items: [
          { name: 'CNNs', status: 'complete' },
          { name: 'RNNs & LSTMs', status: 'complete' },
          { name: 'Transformers', status: 'in-progress' }
        ]
      },
      {
        title: 'Advanced Architectures',
        items: [
          { name: 'Vision Transformers', status: 'planning' },
          { name: 'Diffusion Models', status: 'planning' }
        ]
      }
    ]
  },
  'NLP': {
    gradient: 'from-emerald-400 to-teal-500',
    accent: 'emerald',
    topics: [
      {
        title: 'Foundations',
        items: [
          { name: 'Tokenization', status: 'complete' },
          { name: 'Word Embeddings', status: 'complete' },
          { name: 'Attention Mechanism', status: 'in-progress' }
        ]
      },
      {
        title: 'Language Models',
        items: [
          { name: 'BERT & Pre-training', status: 'in-progress' },
          { name: 'Large Language Models', status: 'planning' }
        ]
      }
    ]
  }
};


export const readingData = {
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

