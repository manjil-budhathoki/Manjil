export default function Footer({ onResumeClick, onBlogClick, onReadingClick }) {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800 bg-neutral-50 dark:bg-neutral-950/50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Explore */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 mb-3">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={onBlogClick}
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={onReadingClick}
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Reading Roadmap
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 mb-3">
              Connect
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/manjil-budhathoki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <button
                  onClick={onResumeClick}
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Résumé
                </button>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 mb-3">
              About
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              ML enthusiast & developer from Nepal
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 text-center text-xs text-neutral-500 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} Manjil Budhathoki • Made with <span className="text-red-500">♥</span> using React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
