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
    <div className="
      flex flex-col justify-between h-full w-full relative z-20 
      transition-colors duration-700 overflow-hidden font-sans p-8 lg:p-12
      /* COLORES SÓLIDOS: Usamos las variables del bloque INTERFAZ de tu CSS */
      bg-card-bg text-main-text border-main-border lg:border-r
    ">
      
      {/* PANEL DE CONTROL */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <button 
          onClick={toggleLang} 
          className="
            flex items-center gap-1 text-[10px] font-mono px-3 py-1.5 rounded-full 
            border border-main-border transition-all uppercase tracking-widest 
            /* Fondo sólido del botón usando la base principal */
            bg-main-bg text-main-text hover:border-primary-accent
          "
        >
          <HiTranslate size={14} className="text-primary-accent" />
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
        
        <button 
          onClick={toggleTheme} 
          className="
            p-2 rounded-full border border-main-border transition-all 
            bg-main-bg text-main-text hover:border-primary-accent
          "
        >
          {isDark ? (
            <HiSun size={16} className="text-yellow-400" /> 
          ) : (
            <HiMoon size={16} className="text-primary-accent" />
          )}
        </button>
      </div>

      {/* Textura de ruido sutil (opcional, mantiene el grano sobre el color sólido) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <ProfileHeader foto={foto} nombre={nombre} apellido={apellido} rol={t.rol} />
      <ProfileNav menuItems={t.menuItems} activeSection={activeSection} onScrollTo={scrollTo} />
      <ProfileFooter socials={socials} cv={cv} />
    </div>
  );
}