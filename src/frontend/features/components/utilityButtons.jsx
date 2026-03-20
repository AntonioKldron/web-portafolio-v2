import React from "react";
import { HiMoon, HiSun, HiTranslate } from 'react-icons/hi';
// Asegúrate de que la ruta a tu AppContext sea correcta desde donde guardes esto
import { useApp } from '../../context/AppContext'; 

export const UtilityButtons = ({ customClasses }) => {
  // Tomamos toda la lógica de tu contexto
  const { lang, isDark, toggleLang, toggleTheme } = useApp();

  return (
    <div className={`flex gap-2 ${customClasses}`}>
      
      {/* BOTÓN TRADUCTOR */}
      <button 
        onClick={toggleLang} 
        className="flex items-center gap-1 text-[10px] font-mono px-3 py-1.5 rounded-full border border-main-border bg-main-bg text-main-text hover:border-primary-accent transition-all uppercase outline-none"
      >
        <HiTranslate size={14} className="text-primary-accent" />
        {lang === 'es' ? 'EN' : 'ES'}
      </button>

      {/* BOTÓN TEMA */}
      <button 
        onClick={toggleTheme} 
        className="p-2 rounded-full border border-main-border bg-main-bg text-main-text hover:border-primary-accent transition-all outline-none"
      >
        {isDark ? <HiSun size={16} className="text-yellow-400" /> : <HiMoon size={16} className="text-primary-accent" />}
      </button>

    </div>
  );
};