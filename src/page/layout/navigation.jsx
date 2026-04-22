import React, { useState, useEffect, useCallback, useRef } from "react";
import { 
  AiOutlineUser, AiOutlineTool, AiOutlineSchedule, 
  AiOutlineRead, AiOutlineMenu, AiOutlineClose
} from "react-icons/ai";
import { FaGithub } from 'react-icons/fa';

import { useApp } from '@context/appContext';
import { perfilData } from '@data/perfil/perfilData';
import { UtilityButtons } from '@shared/components/utilityButtons';

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
  
  // Extraemos lang e isDark del contexto
  const { lang, isDark } = useApp(); 
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
        <button onClick={() => setIsOpen(true)} className={`p-3 backdrop-blur-md border rounded-full transition-all outline-none ${
          isDark ? 'bg-slate-900/80 border-cyan-500/30 text-white' : 'bg-white/80 border-blue-200 text-blue-900'
        }`}>
          <AiOutlineMenu size={24} />
        </button>
      </div>

      {/* OVERLAY OSCURO */}
      <div className={`fixed inset-0 z-[95] transition-opacity duration-500 ${isOpen ? 'opacity-100 bg-black/60 backdrop-blur-sm' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)} />

      {/* MENÚ LATERAL */}
      <aside className={`fixed top-0 right-0 h-full w-[65vw] sm:w-[45vw] z-[100] flex flex-col items-center backdrop-blur-2xl border-l transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } ${isDark ? 'bg-slate-950/95 border-cyan-500/20' : 'bg-white/95 border-blue-100'}`}>
        
        {/* BOTÓN CERRAR */}
        <div className="w-full flex justify-end p-4 relative z-20">
          <button onClick={() => setIsOpen(false)} className={`p-2 outline-none transition-all duration-300 ${
            isDark ? 'text-white hover:text-[#00f6ff]' : 'text-blue-950 hover:text-blue-600'
          }`}>
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* ENLACES A SECCIONES */}
        <div className="flex flex-col gap-6 w-full items-center mt-2 flex-grow justify-center relative z-20">
          {currentMenuItems.map(({ id, label }) => {
            const isActive = activeSection === id;
            const Icon = iconMap[id];
            
            // Colores dinámicos por item
            const accentColor = isDark ? '#22d3ee' : '#2563eb';
            const neonColor = isDark ? '#00f6ff' : '#1d4ed8';

            return (
              <button key={id} onClick={() => scrollToSection(id)} className="group relative flex flex-col items-center justify-center outline-none w-full">
                
                {/* ETIQUETA TEXTO */}
                <span className={`text-[10px] uppercase font-mono tracking-widest mb-1 transition-all duration-300 ${
                  isActive 
                  ? (isDark ? 'text-[#22d3ee] font-bold' : 'text-blue-700 font-bold') 
                  : (isDark ? 'text-slate-500 opacity-70 group-hover:text-white' : 'text-slate-400 group-hover:text-blue-900')
                }`}>
                  {label}
                </span>

                <div className="relative flex items-center justify-center w-12 h-12 transition-all duration-700">
                  {/* Pulso expansivo dinámico */}
                  {isActive && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className={`absolute w-14 h-14 rounded-full border animate-pulse-ring ${isDark ? 'border-cyan-500/40' : 'border-blue-500/40'}`}></div>
                    </div>
                  )}
                  
                  <div className={`relative flex items-center justify-center w-full h-full transition-all duration-700 ${isActive ? "scale-125 rotate-[360deg]" : "scale-90 opacity-40 group-hover:opacity-100"}`}>
                    
                    {/* Fondo líquido dinámico */}
                    <div className={`absolute inset-0 transition-all duration-500 ${
                      isActive 
                      ? `animate-liquid opacity-100 border ${isDark ? 'bg-cyan-500/10 border-cyan-400/40' : 'bg-blue-500/10 border-blue-500/40'}` 
                      : "opacity-0 rounded-full"
                    }`}></div>
                    
                    {/* Borde cuadrado activo */}
                    <div className={`absolute inset-1 border-2 rounded-xl transition-all duration-1000 ${
                      isActive 
                      ? `rotate-45 ${isDark ? 'border-cyan-400 bg-slate-900/60' : 'border-blue-600 bg-white/60'}` 
                      : `rotate-0 border-transparent ${isDark ? 'bg-transparent' : 'bg-transparent'}`
                    }`}></div>
                    
                    {/* ÍCONO DINÁMICO */}
                    {Icon && <Icon size={20} className={`relative z-10 transition-all duration-700 ${
                      isActive 
                      ? (isDark ? 'text-[#00f6ff] scale-110' : 'text-blue-700 scale-110') 
                      : (isDark ? 'text-slate-500 group-hover:text-white' : 'text-slate-400 group-hover:text-blue-600')
                    }`} />}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* BOTONES MINIMALISTAS (Herramientas de Idioma/Tema) */}
        <div className="mt-auto mb-10 relative z-20">
          <UtilityButtons customClasses="opacity-80 hover:opacity-100 transition-opacity" />
        </div>

      </aside>
    </div>
  );
};

export default Navigation;