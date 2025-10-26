import { FiX, FiDownload } from "react-icons/fi";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  const pdfUrl = "/Resume.pdf"; 

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-labelledby="resume-modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* 1. Backdrop with blur effect */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-md" 
        onClick={onClose} // Close modal when clicking the background
        aria-hidden="true"
      ></div>

      {/* 2. Modal Content */}
      <div className="relative w-full max-w-4xl h-[90vh] bg-white dark:bg-neutral-900 rounded-lg shadow-xl flex flex-col overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 shrink-0">
          <h2 id="resume-modal-title" className="text-lg font-semibold">
            Manjil Budhathoki's Résumé
          </h2>
          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              download="Manjil_Budhathoki_Resume.pdf"
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
            >
              <FiDownload />
              Download
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <FiX className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-grow">
          <iframe
            src={pdfUrl}
            title="Manjil Budhathoki's Resume"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>
  );
}