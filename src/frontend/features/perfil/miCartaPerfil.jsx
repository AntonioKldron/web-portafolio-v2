import React, { useEffect, useState, useCallback } from 'react';
import { useApp } from '@app/context/appContext'; 
import { usePerfilData } from '@backend/data/perfil/perfilData';
import { ProfileHeader } from '@features/perfil/components/headerProfile';
import { ProfileNav } from '@features/perfil/components/navProfile';
import { ProfileFooter } from '@features/perfil/components/footerProfile';

export default function MiCartaPerfil({ observerRef }) {
  const [activeSection, setActiveSection] = useState("");
  
  const { lang, isDark } = useApp(); 
  
  const { data: perfilData, isLoading } = usePerfilData();

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

  if (isLoading || !perfilData) {
    return (
      <div className="informational-card-container flex flex-col justify-center items-center relative z-20 h-auto w-full p-6 lg:h-full lg:border-r bg-card-bg text-main-text border-main-border">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="rounded-full bg-gray-500/20 h-32 w-32"></div>
          <div className="h-4 bg-gray-500/20 rounded w-1/2"></div>
          <div className="h-4 bg-gray-500/20 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  const { nombre, apellido, foto, socials, rol, cv, menuItems } = perfilData;

  return (
    <div className="
      informational-card-container
      flex flex-col justify-between relative z-20 
      h-auto w-full p-6 border-b gap-6
      lg:h-full lg:p-12 lg:border-r lg:border-b-0 lg:gap-0
      overflow-hidden font-sans
      bg-card-bg text-main-text border-main-border
    ">
      
      <ProfileHeader foto={foto} nombre={nombre} apellido={apellido} rol={rol} />

      <div className="hidden lg:block">
        <ProfileNav menuItems={menuItems} activeSection={activeSection} onScrollTo={scrollTo} />
      </div>

      <ProfileFooter socials={socials} cv={cv} />
    </div>
  );
}
