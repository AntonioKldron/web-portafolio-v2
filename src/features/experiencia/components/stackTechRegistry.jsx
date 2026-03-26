import React from 'react';
import { FaCubes } from "react-icons/fa";

export const TechStackRegistry = ({ tecnologias, visibleTech, showAll, onToggle, isDark }) => (
  <div className="space-y-4 pt-4">
    <div className="text-indigo-400/70 text-xl">
      <FaCubes />
    </div>
    <div className="flex flex-wrap gap-3">
      {visibleTech.map((tech, i) => {
        if (!tech) return null;
        
        // 1. CORRECCIÓN: Definimos las clases completas para que Tailwind las detecte
        const techBgHover = tech.bgHover || 'hover:bg-indigo-500/10';
        const techBorderHover = tech.borderHover || 'hover:border-indigo-500/20';
        const techPrimary = tech.primary || 'text-indigo-500';

        return (
          <div 
            key={i} 
            className={`flex items-center gap-3 px-4 py-2 rounded-xl border transition-all duration-300 group/t 
              ${isDark 
                ? `bg-white/5 border-white/5 ${techBgHover} ${techBorderHover}` 
                : `bg-white border-slate-200 ${techBorderHover} hover:shadow-sm`}`}
          >
            <span className={`text-2xl transition-all duration-300 w-7 h-7 flex items-center justify-center group-hover/t:scale-110 ${techPrimary}`}>
              {/* 2. CORRECCIÓN: Inyectamos la clase de color DIRECTAMENTE al icono */}
              {React.isValidElement(tech.icon) 
                ? React.cloneElement(tech.icon, { 
                    className: `${tech.icon.props.className || ''} ${techPrimary}`.trim() 
                  }) 
                : tech.icon}
            </span>
            
            <span className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${isDark ? 'text-gray-500 group-hover/t:text-white' : 'text-slate-600 group-hover/t:text-slate-900'}`}>
              {tech.name}
            </span>
          </div>
        );
      })}
      
      {tecnologias.length > 5 && (
        <button 
          onClick={onToggle} 
          className={`px-4 py-2 text-[10px] font-black rounded-xl border transition-all uppercase flex items-center justify-center 
            ${isDark 
              ? 'text-indigo-400 bg-indigo-500/5 border-indigo-500/20 hover:bg-indigo-500/10' 
              : 'text-indigo-600 bg-indigo-50 border-indigo-200 hover:bg-indigo-100'}`}
        >
          {showAll ? "-" : `+${tecnologias.length - 5}`}
        </button>
      )}
    </div>
  </div>
);