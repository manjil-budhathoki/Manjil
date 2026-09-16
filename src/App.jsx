import { lazy, Suspense, useState } from 'react';
import { HashRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import data from './data/data.json';
const Projects = lazy(() => import('./sections/Projects'));
const Experience = lazy(() => import('./sections/Experience'));
const Tools = lazy(() => import('./sections/Tools'));
const Other = lazy(() => import('./sections/Other'));
const Blog = lazy(() => import('./sections/Blog'));
const Reading = lazy(() => import('./sections/Reading'));
const pages = [['/', 'Projects'], ['/experience', 'Experience'], ['/tools', 'Tools'], ['/reading', 'Reading'], ['/blog', 'Blog'], ['/other', 'Other']];
function AppContent() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const navigate = useNavigate();
  return <div className="site-shell">
    <a href="#main-content" className="skip-link" onClick={event => { event.preventDefault(); document.getElementById('main-content').focus(); }}>Skip to content</a>
    <Header />
    <main id="main-content" tabIndex={-1} className="site-main">
      <nav className="section-nav" aria-label="Main navigation">{pages.map(([path, label]) =>
        <NavLink key={path} to={path} end={path === '/'}>{label}</NavLink>
      )}</nav>
      <div className="page-content"><Suspense fallback={<p role="status" className="empty-state">Loading…</p>}>
        <Routes>
          <Route path="/" element={<Projects projects={data.projects} />} />
          <Route path="/experience" element={<Experience data={data.experience} />} />
          <Route path="/tools" element={<Tools groups={data.tools} />} />
          <Route path="/other" element={<Other lines={data.other} />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<div className="empty-state"><h1>Page not found</h1><NavLink to="/">Back to projects</NavLink></div>} />
        </Routes>
      </Suspense></div>
    </main>
    <Footer onResumeClick={() => setIsResumeOpen(true)} onBlogClick={() => navigate('/blog')} onReadingClick={() => navigate('/reading')} />
    <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
  </div>;
}
export default function App() { return <LanguageProvider><HashRouter><AppContent /></HashRouter></LanguageProvider>; }
