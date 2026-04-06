import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '@app/context/appContext'; 
import { perfilData } from '@data/perfil/perfilData';
import { ProfileHeader } from '@features/perfil/components/headerProfile';
import { ProfileNav } from '@features/perfil/components/navProfile';
import { ProfileFooter } from '@features/perfil/components/footerProfile';

// --- Variantes de Animación para los elementos internos ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3, // Espera a que la carta aterrice antes de mostrar el contenido
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20, filter: 'blur(4px)' },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: 'blur(0px)',
    transition: { type: "spring", stiffness: 120, damping: 14 } 
  },
};

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
      // Ajustamos el margen para que el detector sea más preciso en el centro de la pantalla
      rootMargin: '-30% 0px -60% 0px', 
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
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-between relative z-20 h-auto lg:h-full w-full p-8 lg:p-12 gap-10 lg:gap-0 font-sans text-main-text bg-transparent"
    >
      <motion.div variants={itemVariants} className="w-full">
        <ProfileHeader 
          foto={foto} 
          nombre={nombre} 
          apellido={apellido} 
          rol={rol} 
        />
      </motion.div>
      <motion.div variants={itemVariants} className="hidden lg:block w-full">
        <ProfileNav 
          menuItems={menuItems} 
          activeSection={activeSection} 
          onScrollTo={scrollTo} 
        />
      </motion.div>
      <motion.div variants={itemVariants} className="w-full">
        <ProfileFooter 
          socials={socials} 
          cv={cv} 
        />
      </motion.div>
    </motion.div>
  );
}