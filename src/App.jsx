import { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Tabs from "./components/Tabs";

import Projects from "./sections/Projects";
import Blog from "./sections/Blog";
import Experience from "./sections/Experience";
import Tools from "./sections/Tools";
import Other from "./sections/Other";

import data from "./data/data.json";
import Footer from "./components/Footer";

import ResumeModal from "./components/ResumeModal";
import ReadingModal from "./components/ReadingModal";
import GitHubTracker from "./components/GitHubTracker";
import SpotifyPlayer from "./components/SpotifyPlayer";

function AppContent() {
  const items = ["Projects", "Blog", "Experience", "Tools", "Other"];
  const [active, setActive] = useState(items[0]);

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isReadingOpen, setIsReadingOpen] = useState(false);

  return (
    <div className="relative">
      <Header />

      <main className="max-w-7xl mx-auto px-4 mt-6">
        <div className="flex gap-6 lg:gap-8">
          <aside className="hidden lg:flex flex-col gap-4 w-48 flex-shrink-0 pt-2">
            <GitHubTracker />
          </aside>

          <div className="flex-1 min-w-0">
            <Tabs value={active} onChange={setActive} items={items} />

            <section className="mt-6 space-y-6">
              {active === "Projects" && <Projects projects={data.projects} />}
              {active === "Blog" && <Blog />}
              {active === "Experience" && <Experience data={data.experience} />}
              {active === "Tools" && <Tools groups={data.tools} />}
              {active === "Other" && <Other lines={data.other} />}
            </section>
          </div>

          <aside className="hidden lg:flex flex-col gap-4 w-48 flex-shrink-0 pt-2">
            <SpotifyPlayer />
          </aside>
        </div>
      </main>

      <Footer
        onResumeClick={() => setIsResumeOpen(true)}
        onReadingClick={() => setIsReadingOpen(true)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ReadingModal
        isOpen={isReadingOpen}
        onClose={() => setIsReadingOpen(false)}
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
