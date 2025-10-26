export default function Footer({ onResumeClick, onReadingClick }) {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-6 text-[13px] text-neutral-600 dark:text-neutral-400 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <div>© {new Date().getFullYear()} Manjil Budhathoki</div>

        <div className="opacity-60">•</div>

        <div>
          Made with <span className="text-red-500">♥</span> using React & Tailwind
        </div>

        <div className="opacity-60 hidden sm:block">•</div>

        <div className="flex gap-3">
          <a
            href="https://github.com/manjil-budhathoki"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            GitHub
          </a>
          <button
            onClick={onResumeClick}
            className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            Résumé
          </button>
          <button
            onClick={onReadingClick}
            className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            Reading
          </button>
        </div>
      </div>
    </footer>
  );
}
