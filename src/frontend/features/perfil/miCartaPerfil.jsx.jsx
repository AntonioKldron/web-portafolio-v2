import React, { useEffect, useState, useCallback } from 'react';
import { useApp } from '../../context/AppContext'; 
import { useTranslation } from '../../hooks/useTranslation';
import { perfilData } from '../../data/perfil/perfilData';
import { ProfileHeader } from './components/ProfileHeader';
import { ProfileNav } from './components/ProfileNav';
import { ProfileFooter } from './components/profileFooter';
import { HiMoon, HiSun, HiTranslate } from 'react-icons/hi';

export default function MiCartaPerfil({ observerRef }) {
  const [activeSection, setActiveSection] = useState("");
  const { lang, isDark, toggleLang, toggleTheme } = useApp();
  const t = useTranslation(perfilData);
  const { nombre, apellido, foto, cv, socials } = perfilData;

  useEffect(() => {
    const container = observerRef?.current || null;
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { root: container, rootMargin: '-49% 0px -49% 0px', threshold: 0 });

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [observerRef]);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div className="flex flex-col justify-between h-full w-full 
                    bg-white dark:bg-[#030712] text-slate-900 dark:text-gray-400 
                    p-8 lg:p-12 lg:border-r border-slate-200 dark:border-white/5 
                    relative z-20 transition-colors duration-700 overflow-hidden font-sans">
      
      {/* PANEL DE CONTROL */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <button onClick={toggleLang} className="flex items-center gap-1 text-[8px] font-mono px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 hover:border-indigo-500 transition-all uppercase tracking-widest bg-slate-50/50 dark:bg-white/5 backdrop-blur-md">
          <HiTranslate size={12} className="text-indigo-500" />
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
        
        <button onClick={toggleTheme} className="p-2 rounded-full border border-slate-200 dark:border-white/10 hover:border-indigo-500 transition-all bg-slate-50/50 dark:bg-white/5 backdrop-blur-md">
          {isDark ? <HiSun size={14} className="text-yellow-500" /> : <HiMoon size={14} className="text-indigo-600" />}
        </button>
      </div>

      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <ProfileHeader foto={foto} nombre={nombre} apellido={apellido} rol={t.rol} />
      <ProfileNav menuItems={t.menuItems} activeSection={activeSection} onScrollTo={scrollTo} />
      <ProfileFooter socials={socials} cv={cv} />
    </div>
  );
}