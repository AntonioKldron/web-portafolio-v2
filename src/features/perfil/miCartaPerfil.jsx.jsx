import React, { useEffect, useState, useCallback } from 'react';
import { useApp } from '../../app/context/appContext'; 
import { useTranslation } from '../../shared/hooks/useTranslation';
import { perfilData } from '../../data/perfil/perfilData';
import { ProfileHeader } from './components/headerProfile';
import { ProfileNav } from './components/navProfile';
import { ProfileFooter } from './components/footerProfile';

export default function MiCartaPerfil({ observerRef }) {
  const [activeSection, setActiveSection] = useState("");
  
  // Ya solo necesitamos 'lang' y 'isDark' de tu contexto, no las funciones de toggle
  const { lang, isDark } = useApp(); 
  
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
      
      {/* ¡Los botones fueron robados de aquí exitosamente! 
      */}

      <ProfileHeader foto={foto} nombre={nombre} apellido={apellido} rol={t.rol} />

      <div className="hidden lg:block">
        <ProfileNav menuItems={t.menuItems} activeSection={activeSection} onScrollTo={scrollTo} />
      </div>

      <ProfileFooter socials={socials} cv={t.cv} />
    </div>
  );
}