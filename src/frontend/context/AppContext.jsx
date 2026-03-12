import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'es');
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') !== 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleLang = () => setLang(prev => (prev === 'es' ? 'en' : 'es'));
  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <AppContext.Provider value={{ lang, isDark, toggleLang, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);