// src/components/UnderConstructionModal.jsx

import { FiX, FiTool } from "react-icons/fi";

export default function UnderConstructionModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    // Main container to position the modal
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="construction-modal-title"
    >
      {/* 1. Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-md" 
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* 2. Modal Content Box */}
      <div className="relative max-w-sm w-full bg-white dark:bg-neutral-900 rounded-lg shadow-xl p-8 text-center flex flex-col items-center animate-fade-in-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
          aria-label="Close"
        >
          <FiX className="h-5 w-5" />
        </button>

        {/* Animated Icon */}
        <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">
          {/* This is the spinning tool icon */}
          <FiTool className="h-10 w-10 text-blue-600 dark:text-blue-400 animate-spin" style={{ animationDuration: '3s' }} />
        </div>

        {/* Text Content */}
        <h2 id="construction-modal-title" className="text-xl font-bold mb-2">
          Coming Soon!
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm">
          This section is currently under construction. I'm working hard to bring you something amazing. Please check back later!
        </p>
      </div>
    </div>
  );
}