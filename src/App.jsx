import { useState } from "react";
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
import UnderConstructionModal from "./components/UnderConstructionModal";

export default function App() {
  const items = ["Projects", "Blog", "Experience", "Tools", "Other"];
  const [active, setActive] = useState(items[0]);

  //  control the modal's visibility
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const [isReadingOpen, setIsReadingOpen] = useState(false);

  return (
    <div className="relative">
      <Header />

      <main className="max-w-5xl mx-auto px-4 mt-6">
        <Tabs value={active} onChange={setActive} items={items} />

        <section className="mt-6 space-y-6">
          {active === "Projects" && <Projects projects={data.projects} />}
          {active === "Blog" && <Blog />}
          {active === "Experience" && <Experience data={data.experience} />}
          {active === "Tools" && <Tools groups={data.tools} />}
          {active === "Other" && <Other lines={data.other} />}
        </section>
      </main>

      <Footer 
        onResumeClick={() => setIsResumeOpen(true)}
        onReadingClick={() => setIsReadingOpen(true)}
      />

      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
      
      <UnderConstructionModal
        isOpen={isReadingOpen}
        onClose={() => setIsReadingOpen(false)}
      />

    </div>
  );
}
