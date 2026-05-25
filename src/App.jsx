import { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Tabs from "./components/Tabs";

import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Tools from "./sections/Tools";
import Other from "./sections/Other";
import Blog from "./sections/Blog";
import Reading from "./sections/Reading";

import data from "./data/data.json";
import Footer from "./components/Footer";

import ResumeModal from "./components/ResumeModal";

function AppContent() {
  const items = ["Projects", "Experience", "Tools", "Other"];
  const [active, setActive] = useState(items[0]);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showReading, setShowReading] = useState(false);

  if (showBlog) {
    return (
      <>
        <Header />
        <div className="flex-1 max-w-4xl mx-auto w-full px-4 mt-8 mb-8">
          <button
            onClick={() => setShowBlog(false)}
            className="mb-6 text-sm text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 flex items-center gap-2"
          >
            ← Back
          </button>
          <Blog />
        </div>
        <Footer
          onResumeClick={() => setIsResumeOpen(true)}
          onBlogClick={() => setShowBlog(false)}
          onReadingClick={() => { setShowBlog(false); setShowReading(true); }}
        />
      </>
    );
  }

  if (showReading) {
    return (
      <>
        <Header />
        <div className="flex-1 max-w-4xl mx-auto w-full px-4 mt-8 mb-8">
          <button
            onClick={() => setShowReading(false)}
            className="mb-6 text-sm text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 flex items-center gap-2"
          >
            ← Back
          </button>
          <Reading />
        </div>
        <Footer
          onResumeClick={() => setIsResumeOpen(true)}
          onBlogClick={() => { setShowReading(false); setShowBlog(true); }}
          onReadingClick={() => setShowReading(false)}
        />
      </>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 mt-8 mb-8">
        <Tabs value={active} onChange={setActive} items={items} />

        <section className="mt-8 space-y-6">
          {active === "Projects" && <Projects projects={data.projects} />}
          {active === "Experience" && <Experience data={data.experience} />}
          {active === "Tools" && <Tools groups={data.tools} />}
          {active === "Other" && <Other lines={data.other} />}
        </section>
      </main>

      <Footer
        onResumeClick={() => setIsResumeOpen(true)}
        onBlogClick={() => setShowBlog(true)}
        onReadingClick={() => setShowReading(true)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
