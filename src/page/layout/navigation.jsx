import React, { useState, useEffect, useCallback, useRef } from "react";
import { 
  AiOutlineUser, AiOutlineTool, AiOutlineSchedule, 
  AiOutlineFolderOpen, AiOutlineRead, AiOutlineMenu, 
  AiOutlineClose
} from "react-icons/ai";
import { FaGithub } from 'react-icons/fa';

import { useApp } from '@context/appContext';
import { perfilData } from '@data/perfil/perfilData';
import { UtilityButtons } from '@shared/components/utilityButtons';

// DICCIONARIO DE ÍCONOS VINCULADO AL 'ID' DE TU DATA
const iconMap = {
  "sobre-mi": AiOutlineUser,
  "herramientas": AiOutlineTool,
  "experiencia": AiOutlineSchedule,
  "proyectos": FaGithub,
  "educacion": AiOutlineRead,
};

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("sobre-mi");
  const [isOpen, setIsOpen] = useState(false);
  
  const { lang } = useApp(); 
  const currentMenuItems = perfilData[lang]?.menuItems || perfilData.es.menuItems;
  const observerRef = useRef(null);

  const startObserver = useCallback(() => {
    if (observerRef.current) observerRef.current.disconnect();
    
    const observerOptions = { root: null, rootMargin: '-49% 0px -49% 0px', threshold: 0 };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, observerOptions);

    currentMenuItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    
    observerRef.current = observer;
  }, [currentMenuItems]);

  useEffect(() => {
    startObserver();
    return () => { if (observerRef.current) observerRef.current.disconnect(); };
  }, [startObserver]);

  const scrollToSection = useCallback((id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="lg:hidden block">
      <style>
        {`
          /* Animaciones de íconos activos */
          @keyframes pulse-ring { 
            0% { transform: scale(0.4); opacity: 1; } 
            80%, 100% { transform: scale(2.2); opacity: 0; } 
          }
          @keyframes liquid-rotate { 
            0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(0deg); } 
            50% { border-radius: 50% 50% 30% 70% / 50% 70% 30% 50%; } 
            100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(360deg); } 
          }
          
          .animate-pulse-ring { animation: pulse-ring 2.5s infinite; }
          .animate-liquid { animation: liquid-rotate 8s linear infinite; }
        `}
      </style>

      {/* BOTÓN HAMBURGUESA */}
      <div className={`fixed top-4 right-4 z-[90] transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none scale-50' : 'opacity-100 scale-100'}`}>
        <button onClick={() => setIsOpen(true)} className="p-3 bg-card-bg/80 backdrop-blur-md border border-main-border rounded-full text-main-text hover:text-[#22d3ee] hover:border-[#22d3ee]/50 transition-all outline-none">
          <AiOutlineMenu size={24} />
        </button>
      </div>

      {/* OVERLAY OSCURO */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[95] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)} />

      {/* MENÚ LATERAL */}
      <aside className={`fixed top-0 right-0 h-full w-[55vw] sm:w-[45vw] z-[100] flex flex-col items-center bg-card-bg/95 backdrop-blur-xl border-l border-main-border transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* BOTÓN CERRAR */}
        <div className="w-full flex justify-end p-4 relative z-20">
          <button onClick={() => setIsOpen(false)} className="text-main-text hover:text-[#00f6ff] p-2 outline-none transition-all duration-300">
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* ENLACES A SECCIONES */}
        <div className="flex flex-col gap-6 w-full items-center mt-2 flex-grow justify-center relative z-20">
          {currentMenuItems.map(({ id, label }) => {
            const isActive = activeSection === id;
            const Icon = iconMap[id];
            
            return (
              <button key={id} onClick={() => scrollToSection(id)} className="group relative flex flex-col items-center justify-center outline-none focus:outline-none w-full">
                
                {/* ETIQUETA TEXTO */}
                <span className={`text-[10px] uppercase font-mono tracking-widest mb-1 transition-all duration-300 ${isActive ? 'text-[#22d3ee] font-bold' : 'text-main-text opacity-70 group-hover:text-[#60a5fa]'}`}>
                  {label}
                </span>

                <div className="relative flex items-center justify-center w-12 h-12 transition-all duration-700">
                  {/* Pulso expansivo al estar activo */}
                  {isActive && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="absolute w-14 h-14 rounded-full border border-[#22d3ee]/60 animate-pulse-ring"></div>
                    </div>
                  )}
                  
                  <div className={`relative flex items-center justify-center w-full h-full transition-all duration-700 ${isActive ? "scale-125 rotate-[360deg]" : "scale-90 opacity-40 group-hover:opacity-100 group-hover:scale-105"}`}>
                    
                    {/* Fondo líquido activo */}
                    <div className={`absolute inset-0 bg-[#2563eb]/10 border border-[#00f6ff]/40 ${isActive ? "animate-liquid opacity-100" : "opacity-0 rounded-full"}`}></div>
                    
                    {/* Borde cuadrado/romboide interno */}
                    <div className={`absolute inset-1 border-2 rounded-xl transition-all duration-1000 ${isActive ? "border-[#22d3ee] rotate-45 bg-card-bg/60" : "border-main-border rotate-0 bg-transparent"}`}></div>
                    
                    {/* ÍCONO */}
                    {Icon && <Icon size={20} className={`relative z-10 transition-all duration-700 ${isActive ? "text-[#00f6ff] scale-110" : "text-main-text group-hover:text-[#22d3ee]"}`} />}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* BOTONES MINIMALISTAS */}
        <UtilityButtons customClasses="mt-auto mb-10 relative z-20" />

      </aside>
    </div>
  );
};

export default Navigation;