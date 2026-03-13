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
  
  // 't' obtiene automáticamente el objeto 'es' o 'en' según 'lang'
  const t = useTranslation(perfilData);
  const { nombre, apellido, foto, socials } = perfilData;

  useEffect(() => {
    const container = observerRef?.current || null;
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { 
      root: container, 
      rootMargin: '-49% 0px -49% 0px', 
      threshold: 0 
    });

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [observerRef]);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div className="
      informational-card-container
      flex flex-col justify-between relative z-20 
      h-auto w-full p-6 border-b gap-6
      lg:h-full lg:p-12 lg:border-r lg:border-b-0 lg:gap-0
      overflow-hidden font-sans
      bg-card-bg text-main-text border-main-border
    ">
      {/* CONTROLES */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <button onClick={toggleLang} className="flex items-center gap-1 text-[10px] font-mono px-3 py-1.5 rounded-full border border-main-border bg-main-bg text-main-text hover:border-primary-accent transition-all uppercase">
          <HiTranslate size={14} className="text-primary-accent" />
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
        <button onClick={toggleTheme} className="p-2 rounded-full border border-main-border bg-main-bg text-main-text hover:border-primary-accent transition-all">
          {isDark ? <HiSun size={16} className="text-yellow-400" /> : <HiMoon size={16} className="text-primary-accent" />}
        </button>
      </div>

      <ProfileHeader foto={foto} nombre={nombre} apellido={apellido} rol={t.rol} />

      <div className="hidden lg:block">
        <ProfileNav menuItems={t.menuItems} activeSection={activeSection} onScrollTo={scrollTo} />
      </div>

      {/* Dinámico: Pasamos t.cv (archivo) */}
      <ProfileFooter socials={socials} cv={t.cv} />
    </div>
  );
}