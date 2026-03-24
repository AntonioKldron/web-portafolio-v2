import React from "react";
import { HiMoon, HiSun, HiTranslate } from 'react-icons/hi';
// Asegúrate de que la ruta a tu AppContext sea correcta desde donde guardes esto
import { useApp } from '../../context/AppContext'; 

export const UtilityButtons = ({ customClasses }) => {
  // Tomamos toda la lógica de tu contexto
  const { lang, isDark, toggleLang, toggleTheme } = useApp();

  return (
    <div className={`flex items-center gap-3 ${customClasses}`}>
      
      {/* BOTÓN TRADUCTOR */}
      <button 
        onClick={toggleLang} 
        className="group flex items-center gap-1.5 text-[11px] font-mono font-semibold px-4 py-2 rounded-full border border-main-border bg-main-bg text-main-text hover:text-primary-accent hover:border-primary-accent hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-300 ease-out outline-none uppercase"
      >
        <HiTranslate 
          size={16} 
          className="text-primary-accent transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" 
        />
        <span>{lang === 'es' ? 'EN' : 'ES'}</span>
      </button>

      {/* BOTÓN TEMA */}
      <button 
        onClick={toggleTheme} 
        className="group relative flex items-center justify-center p-2.5 rounded-full border border-main-border bg-main-bg text-main-text hover:border-primary-accent hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-300 ease-out outline-none overflow-hidden"
      >
        {/* Capa de fondo sutil que aparece al hacer hover */}
        <span className="absolute inset-0 bg-primary-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></span>
        
        {/* Contenedor del icono con animación elástica */}
        <div className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-[360deg] group-hover:scale-110">
          {isDark ? (
            <HiSun size={18} className="text-yellow-400 drop-shadow-sm" />
          ) : (
            <HiMoon size={18} className="text-primary-accent drop-shadow-sm" />
          )}
        </div>
      </button>

    </div>
  );
};