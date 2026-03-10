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
    <section className="space-y-8 pb-16">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>

      <div>
        <h2 className="text-lg font-bold tracking-tight mb-2 border-b border-neutral-700 pb-2">
          Learning Roadmap
        </h2>
        <p className="text-sm text-neutral-400 mt-3">
          A structured journey through machine learning, from fundamentals to advanced topics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg border border-neutral-700/50 bg-neutral-900/30">
          <div className="text-sm text-neutral-400 mb-1">Categories</div>
          <div className="text-2xl font-bold text-neutral-100">{categories.length}</div>
        </div>
        <div className="p-4 rounded-lg border border-neutral-700/50 bg-neutral-900/30">
          <div className="text-sm text-neutral-400 mb-1">Total Topics</div>
          <div className="text-2xl font-bold text-neutral-100">{totalItems}</div>
        </div>
        <div className="p-4 rounded-lg border border-neutral-700/50 bg-neutral-900/30">
          <div className="text-sm text-neutral-400 mb-1">Progress</div>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-emerald-400">{progress}%</span>
            <span className="text-xs text-neutral-400 mb-1">
              ({completedItems}/{totalItems})
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-2 rounded-full bg-neutral-800/50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
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

      <div className="p-6 rounded-lg border border-neutral-700/50 bg-gradient-to-br from-neutral-800/30 to-neutral-900/30 backdrop-blur-sm">
        <h3 className="font-semibold text-neutral-100 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-400" />
          Research & References
        </h3>
        <p className="text-sm text-neutral-400 mb-4">
          Curated papers and resources that form the foundation of my learning:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2 text-neutral-300 hover:text-neutral-100 transition-colors">
            <span className="text-blue-400 mt-0.5">→</span>
            <span>
              <strong>Attention Is All You Need</strong> - Transformer architecture (Vaswani et al., 2017)
            </span>
          </li>
          <li className="flex items-start gap-2 text-neutral-300 hover:text-neutral-100 transition-colors">
            <span className="text-blue-400 mt-0.5">→</span>
            <span>
              <strong>BERT: Pre-training Deep Bidirectional Transformers</strong> - Language model pre-training (Devlin et al., 2018)
            </span>
          </li>
          <li className="flex items-start gap-2 text-neutral-300 hover:text-neutral-100 transition-colors">
            <span className="text-blue-400 mt-0.5">→</span>
            <span>
              <strong>Deep Residual Learning</strong> - ResNet architecture (He et al., 2015)
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
