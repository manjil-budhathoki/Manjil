import { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Tabs from "./components/Tabs";

import Projects from "./sections/Projects";
import Blog from "./sections/Blog";
import Experience from "./sections/Experience";
import Tools from "./sections/Tools";
import Other from "./sections/Other";
import Reading from "./sections/Reading";

import data from "./data/data.json";
import Footer from "./components/Footer";

import ResumeModal from "./components/ResumeModal";
import GithubStats from "./components/GithubStats";

function AppContent() {
  const items = ["Projects", "Blog", "Experience", "Tools", "Reading", "Other"];
  const [active, setActive] = useState(items[0]);

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative">
      <Header />

      <main className="max-w-7xl mx-auto px-4 mt-6 pb-16">
        <div className="flex gap-6 lg:gap-8">
          <div className="flex-1 min-w-0">
            <Tabs value={active} onChange={setActive} items={items} />

            <div className="flex gap-6 lg:gap-8 mt-6">
              <section className="flex-1 space-y-6">
                {active === "Projects" && <Projects projects={data.projects} />}
                {active === "Blog" && <Blog />}
                {active === "Experience" && <Experience data={data.experience} />}
                {active === "Tools" && <Tools groups={data.tools} />}
                {active === "Reading" && <Reading />}
                {active === "Other" && <Other lines={data.other} />}
              </section>

              <aside className="hidden lg:flex flex-col gap-6 w-48 flex-shrink-0 pt-2">
                <GithubStats />
              </aside>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-16 right-4 lg:right-8 w-64 max-h-32 bg-neutral-900/80 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-3 pointer-events-auto">
        <div className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">
          Commit Activity
        </div>
        <div className="flex gap-1 overflow-x-auto pb-1">
          {[...Array(52)].map((_, i) => (
            <div key={i} className="flex flex-col gap-0.5">
              {[...Array(7)].map((_, j) => {
                const level = Math.floor(Math.random() * 4);
                const colors = ['bg-neutral-800', 'bg-green-900', 'bg-green-700', 'bg-green-500'];
                return (
                  <div
                    key={`${i}-${j}`}
                    className={`w-2 h-2 rounded-sm cursor-pointer transition-all hover:ring-1 ring-neutral-500 ${colors[level]}`}
                    title={`${level > 0 ? level : 'No'} commits`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <Footer
        onResumeClick={() => setIsResumeOpen(true)}
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
