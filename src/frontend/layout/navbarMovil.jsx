import React, { useState, useEffect } from "react";
import {
  AiOutlineUser,
  AiOutlineTool,
  AiOutlineSchedule,
  AiOutlineFolderOpen,
  AiOutlineRead,
} from "react-icons/ai";

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
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, observerOptions);
    
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className="fixed top-1/2 -translate-y-1/2 right-4 z-[100] flex flex-col items-end lg:hidden pointer-events-none">
      
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.3); opacity: 1; }
          80%, 100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes liquid-rotate {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: rotate(0deg); }
          50% { border-radius: 60% 40% 30% 70% / 50% 60% 40% 60%; }
          100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: rotate(360deg); }
        }
        @keyframes float-y {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-pulse-ring { animation: pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite; }
        .animate-liquid { animation: liquid-rotate 6s linear infinite; }
        .animate-float { animation: float-y 3s ease-in-out infinite; }
        
        .node-reveal {
          animation: nodePop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }
        @keyframes nodePop {
          from { transform: scale(0) rotate(-180deg); opacity: 0; }
          to { transform: scale(1) rotate(0deg); opacity: 1; }
        }
      `}</style>

      {/* ÁUREA DE ACTIVIDAD (Glow reactivo) */}
      <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-12 h-64 bg-indigo-600/20 blur-[100px] rounded-full transition-all duration-1000 ${activeSection ? 'opacity-100' : 'opacity-0'}`}></div>

      <div className="flex flex-col gap-10 pointer-events-auto pr-1">
        {sections.map(({ id, icon: Icon, label }, index) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              title={label}
              className="group relative flex items-center justify-center node-reveal"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* ANILLOS DE ONDA (Solo para el activo) */}
              {isActive && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="absolute w-full h-full rounded-full border border-indigo-500 animate-pulse-ring"></div>
                  <div className="absolute w-full h-full rounded-full border border-indigo-400 animate-pulse-ring" style={{ animationDelay: '0.5s' }}></div>
                </div>
              )}

              {/* CONTENEDOR DEL NODO */}
              <div className={`
                relative flex items-center justify-center w-14 h-14
                transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                ${isActive ? "scale-125 rotate-[360deg]" : "scale-90 opacity-30 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-12"}
              `}>
                
                {/* FONDO LÍQUIDO / ORGÁNICO (Solo activo) */}
                <div className={`
                  absolute inset-0 bg-indigo-600/20 border border-indigo-500/30
                  ${isActive ? "animate-liquid opacity-100" : "opacity-0 rounded-full"}
                `}></div>

                {/* MARCO GEOMÉTRICO (Cyber-Square) */}
                <div className={`
                  absolute inset-1 border-2 rounded-xl transition-all duration-1000
                  ${isActive ? "border-indigo-400 rotate-45 bg-indigo-900/40 shadow-[0_0_30px_rgba(99,102,241,0.6)]" : "border-white/10 rotate-0 bg-[#030712]"}
                `}></div>

                {/* ICONO CON EFECTO DE FLOTACIÓN */}
                <Icon 
                  size={22} 
                  className={`relative z-10 transition-all duration-700 
                    ${isActive ? "text-white animate-float brightness-150" : "text-gray-400 group-hover:text-indigo-300"}
                  `} 
                />

                {/* INDICADOR DE LUZ DE ESTADO */}
                <div className={`
                  absolute bottom-0 right-0 w-2 h-2 rounded-full transition-all duration-500
                  ${isActive ? "bg-indigo-400 shadow-[0_0_12px_#6366f1] scale-125" : "bg-transparent scale-0"}
                `}></div>
              </div>

              {/* LÍNEA DE CONEXIÓN LATERAL */}
              <div className={`
                absolute -right-4 w-1 bg-gradient-to-b from-indigo-400 to-purple-600 transition-all duration-1000
                ${isActive ? "h-10 opacity-100" : "h-0 opacity-0"}
              `}></div>
            </button>
          );
        })}
      </div>

      {/* RIELES DINÁMICOS */}
      <div className="absolute right-[33px] top-0 bottom-0 w-[1px] bg-white/5 -z-10"></div>
    </aside>
  );
};

export default Sidebar;