import { useState } from 'react';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';

const readingMap = {
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

const statusConfig = {
  complete: { color: 'bg-emerald-500/20', text: 'text-emerald-400', label: 'Complete' },
  'in-progress': { color: 'bg-amber-500/20', text: 'text-amber-400', label: 'Learning' },
  planning: { color: 'bg-neutral-500/20', text: 'text-neutral-400', label: 'Next' }
};

function RoadmapNode({ category, data }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-2">
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full text-left p-4 rounded-lg border transition-all duration-300 hover:scale-105 active:scale-95 group
          bg-gradient-to-r ${data.gradient} bg-opacity-5 border-neutral-700/50 hover:border-neutral-600/50`}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-neutral-100 group-hover:text-white transition-colors">
            {category}
          </h3>
          <div className={`transition-transform duration-300 ${expanded ? 'rotate-90' : ''}`}>
            <FiArrowRight className="text-neutral-400" />
          </div>
        </div>
      </button>

      {expanded && (
        <div className="space-y-3 pl-4 animate-fadeIn">
          {data.topics.map((topic, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                {topic.title}
              </h4>
              <div className="space-y-1.5">
                {topic.items.map((item, itemIdx) => {
                  const status = statusConfig[item.status];
                  return (
                    <div
                      key={itemIdx}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-800/30 border border-neutral-700/30 hover:border-neutral-600/50 transition-all"
                    >
                      <span className="text-sm text-neutral-300">{item.name}</span>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${status.color} ${status.text}`}>
                        {status.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Reading() {
  const categories = Object.keys(readingMap);
  const totalTopics = Object.values(readingMap).reduce((sum, cat) => sum + cat.topics.length, 0);
  const totalItems = Object.values(readingMap).reduce(
    (sum, cat) => sum + cat.topics.reduce((topicSum, topic) => topicSum + topic.items.length, 0),
    0
  );
  const completedItems = Object.values(readingMap).reduce(
    (sum, cat) =>
      sum +
      cat.topics.reduce(
        (topicSum, topic) =>
          topicSum + topic.items.filter((item) => item.status === 'complete').length,
        0
      ),
    0
  );

  const progress = Math.round((completedItems / totalItems) * 100);

  return (
    <section className="space-y-8">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>

      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Learning Roadmap
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-300 max-w-2xl">
          A structured journey through machine learning, from fundamentals to advanced topics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-neutral-700/50 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-900/30 dark:to-neutral-900/50 transition-all hover:border-blue-300/50 dark:hover:border-blue-400/50">
          <div className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-2 uppercase tracking-widest">Categories</div>
          <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">{categories.length}</div>
        </div>
        <div className="p-6 rounded-lg border border-gray-200 dark:border-neutral-700/50 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-900/30 dark:to-neutral-900/50 transition-all hover:border-blue-300/50 dark:hover:border-blue-400/50">
          <div className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-2 uppercase tracking-widest">Learning Topics</div>
          <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">{totalItems}</div>
        </div>
        <div className="p-6 rounded-lg border border-gray-200 dark:border-neutral-700/50 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-900/30 transition-all hover:border-emerald-300/50 dark:hover:border-emerald-400/50">
          <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-2 uppercase tracking-widest">Completion</div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{progress}%</span>
            <span className="text-xs text-emerald-600 dark:text-emerald-400/70 font-medium">
              {completedItems}/{totalItems}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="w-full h-3 rounded-full bg-gray-200 dark:bg-neutral-800/50 overflow-hidden border border-gray-300 dark:border-neutral-700/50">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 dark:from-emerald-500 dark:to-emerald-600 transition-all duration-700 shadow-lg"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
          {completedItems} of {totalItems} topics completed
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {categories.map((category) => (
          <RoadmapNode
            key={category}
            category={category}
            data={readingMap[category]}
          />
        ))}
      </div>

      <div className="p-6 rounded-lg border border-gray-200 dark:border-neutral-700/50 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 backdrop-blur-sm transition-all hover:border-blue-300/50 dark:hover:border-blue-400/50">
        <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3 flex items-center gap-2 text-lg">
          <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400" />
          Key Research & References
        </h3>
        <p className="text-sm text-neutral-700 dark:text-neutral-400 mb-4">
          Curated papers and resources that form the foundation of my learning journey:
        </p>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors p-3 rounded-lg hover:bg-white dark:hover:bg-neutral-800/30 cursor-default">
            <span className="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0">→</span>
            <span>
              <strong>Attention Is All You Need</strong> <span className="text-neutral-500 dark:text-neutral-400">— Transformer architecture (Vaswani et al., 2017)</span>
            </span>
          </li>
          <li className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors p-3 rounded-lg hover:bg-white dark:hover:bg-neutral-800/30 cursor-default">
            <span className="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0">→</span>
            <span>
              <strong>BERT: Pre-training Deep Bidirectional Transformers</strong> <span className="text-neutral-500 dark:text-neutral-400">— Language model pre-training (Devlin et al., 2018)</span>
            </span>
          </li>
          <li className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors p-3 rounded-lg hover:bg-white dark:hover:bg-neutral-800/30 cursor-default">
            <span className="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0">→</span>
            <span>
              <strong>Deep Residual Learning</strong> <span className="text-neutral-500 dark:text-neutral-400">— ResNet architecture (He et al., 2015)</span>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
