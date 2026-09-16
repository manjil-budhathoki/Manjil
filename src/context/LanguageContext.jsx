import { useState, useEffect } from 'react';
import { LanguageContext } from './useLanguage';



export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    try { const saved = localStorage.getItem('language'); if (saved === 'en' || saved === 'ne') setLanguage(saved); } catch { /* Storage is optional. */ }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ne' : 'en';
    setLanguage(newLang);
    try { localStorage.setItem('language', newLang); } catch { /* Storage is optional. */ }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

