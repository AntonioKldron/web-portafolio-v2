import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useApp } from '@app/context/appContext'; 
import { perfilData } from '@data/perfil/perfilData';
import { ProfileHeader } from '@features/perfil/components/headerProfile';
import { ProfileNav } from '@features/perfil/components/navProfile';
import { ProfileFooter } from '@features/perfil/components/footerProfile';

export default function MiCartaPerfil({ observerRef }) {
  const [activeSection, setActiveSection] = useState("");
  const { lang } = useApp(); 

  // Combinamos la base con la traducción actual (es/en)
  const currentData = useMemo(() => {
    const translation = perfilData[lang] || perfilData.es;
    return { ...perfilData, ...translation };
  }, [lang]);

  // Desestructuramos la data combinada
  const { nombre, apellido, foto, socials, rol, cv, menuItems } = currentData;

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
      {/* Header: Foto, Nombre y Rol dinámico */}
      <ProfileHeader 
        foto={foto} 
        nombre={nombre} 
        apellido={apellido} 
        rol={rol} 
      />

      {/* Navegación: Items de menú traducidos */}
      <div className="hidden lg:block">
        <ProfileNav 
          menuItems={menuItems} 
          activeSection={activeSection} 
          onScrollTo={scrollTo} 
        />
      </div>

      {/* Footer: Redes y CV (español o inglés) */}
      <ProfileFooter 
        socials={socials} 
        cv={cv} 
      />
    </div>
  );
}