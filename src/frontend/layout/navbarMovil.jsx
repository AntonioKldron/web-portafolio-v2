import React, { useState, useEffect, useCallback } from "react";
import { AiOutlineUser, AiOutlineTool, AiOutlineSchedule, AiOutlineFolderOpen, AiOutlineRead } from "react-icons/ai";

const sections = [
  { id: "sobre-mi",    icon: AiOutlineUser,       label: "PERFIL" },
  { id: "herramientas", icon: AiOutlineTool,       label: "STACK" },
  { id: "experiencia",  icon: AiOutlineSchedule,   label: "EXPERIENCIA" },
  { id: "proyectos",    icon: AiOutlineFolderOpen, label: "PROYECTOS" },
  { id: "formacion",    icon: AiOutlineRead,       label: "EDUCACIÓN" },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("sobre-mi");

  useEffect(() => {
    // FUNCIÓN DE INICIALIZACIÓN DEL OBSERVER
    const startObserver = () => {
      // 1. Buscamos el div que realmente tiene el scroll (tu columna derecha)
      const scrollContainer = document.querySelector('.lg\\:overflow-y-auto');
      
      // Si estamos en escritorio y el contenedor no existe aún, reintentamos en 100ms
      if (window.innerWidth >= 1024 && !scrollContainer) {
        setTimeout(startObserver, 100);
        return;
      }

      // 2. Configuración del "Escáner Central"
      const observerOptions = {
        // root: null en móvil (viewport), scrollContainer en escritorio
        root: window.innerWidth >= 1024 ? scrollContainer : null,
        // Creamos una línea de detección de solo 2px en el centro exacto
        rootMargin: '-49% 0px -49% 0px', 
        threshold: 0 
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, observerOptions);

      // 3. Empezamos a observar cada sección por su ID
      sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el) observer.observe(el);
      });

      return observer;
    };

    const observerInstance = startObserver();

    // Limpieza al desmontar para evitar fugas de memoria
    return () => {
      if (observerInstance && typeof observerInstance.disconnect === 'function') {
        observerInstance.disconnect();
      }
    };
  }, []);

  // Función de scroll manual optimizada
  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <aside className="fixed top-1/2 -translate-y-1/2 right-4 z-[100] flex flex-col items-end lg:hidden pointer-events-auto">
      <style>{`
        @keyframes pulse-ring { 0% { transform: scale(0.4); opacity: 1; } 80%, 100% { transform: scale(2.2); opacity: 0; } }
        @keyframes liquid-rotate { 0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(0deg); } 50% { border-radius: 50% 50% 30% 70% / 50% 70% 30% 50%; } 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(360deg); } }
        .animate-pulse-ring { animation: pulse-ring 2.5s infinite; }
        .animate-liquid { animation: liquid-rotate 8s linear infinite; }
      `}</style>

      <div className="flex flex-col gap-10 pr-1">
        {sections.map(({ id, icon: Icon }) => {
          const isActive = activeSection === id;
          return (
            <button 
              key={id} 
              onClick={() => scrollToSection(id)} 
              className="group relative flex items-center justify-center outline-none focus:outline-none"
            >
              {/* Efecto de Onda Activa */}
              {isActive && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="absolute w-16 h-16 rounded-full border border-indigo-500/50 animate-pulse-ring"></div>
                </div>
              )}

              {/* Contenedor del Icono Animado */}
              <div className={`relative flex items-center justify-center w-14 h-14 transition-all duration-700 
                ${isActive ? "scale-125 rotate-[360deg]" : "scale-90 opacity-30 group-hover:opacity-100 group-hover:scale-105"}`}>
                
                {/* Fondo Líquido Reactivo */}
                <div className={`absolute inset-0 bg-indigo-600/20 border border-indigo-500/30 ${isActive ? "animate-liquid opacity-100" : "opacity-0 rounded-full"}`}></div>
                
                {/* Marco Cyber-Square */}
                <div className={`absolute inset-1 border-2 rounded-xl transition-all duration-1000 
                  ${isActive ? "border-indigo-400 rotate-45 bg-indigo-900/40 shadow-[0_0_30px_rgba(99,102,241,0.6)]" : "border-white/10 rotate-0 bg-[#030712]"}`}></div>
                
                <Icon size={24} className={`relative z-10 transition-all duration-700 ${isActive ? "text-white scale-110 brightness-125" : "text-gray-400 group-hover:text-indigo-300"}`} />
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;