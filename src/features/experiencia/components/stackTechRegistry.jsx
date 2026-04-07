import React from 'react';
import { FaCubes, FaPlus, FaMinus } from "react-icons/fa";

export const TechStackRegistry = ({ tecnologias, visibleTech, showAll, onToggle, isDark }) => (
  <div className="space-y-3 pt-2">
    <div className={`flex justify-between items-center pb-2 border-b transition-colors duration-300 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
      <div className={`flex items-center gap-2 transition-transform duration-300 hover:translate-x-1 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
        <FaCubes size={14} />
      </div>
      {tecnologias.length > 5 && (
        <button 
          onClick={onToggle} 
          className={`group text-[9px] font-bold tracking-[0.15em] uppercase flex items-center gap-1.5 px-2 py-1 transition-colors duration-200
            ${isDark ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-indigo-600'}`}
        >
          {showAll ? (
            <><FaMinus size={9} className="transition-transform duration-300 group-hover:-rotate-180" /></>
          ) : (
            <><FaPlus size={9} className="transition-transform duration-300 group-hover:rotate-90" />({tecnologias.length})</>
          )}
        </button>
      )}
    </div>
    <div className="flex flex-wrap gap-2 pt-1">
      {visibleTech.map((tech, i) => {
        if (!tech) return null;
        
        const techPrimary = tech.primary || 'text-indigo-500';

        return (
          <div 
            key={i} 
            className={`group/t flex items-center gap-2.5 px-3 py-1.5 rounded-lg transition-all duration-300 ease-out cursor-default
              ${isDark 
                ? 'bg-white/5 hover:bg-white/10' 
                : 'bg-slate-100/70 hover:bg-slate-200/80'}`}
          >
            <span className={`text-[15px] transition-transform duration-300 group-hover/t:scale-110 ${techPrimary}`}>
              {React.isValidElement(tech.icon) 
                ? React.cloneElement(tech.icon, { 
                    className: `${tech.icon.props.className || ''} ${techPrimary}`.trim() 
                  }) 
                : tech.icon}
            </span>
            <span className={`text-[9px] font-bold tracking-[0.15em] uppercase transition-colors duration-300
              ${isDark ? 'text-slate-400 group-hover/t:text-slate-100' : 'text-slate-500 group-hover/t:text-slate-900'}`}>
              {tech.name}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);