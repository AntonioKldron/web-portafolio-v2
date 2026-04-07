import React from 'react';
import { FaTerminal, FaGithub, FaPlus, FaMinus, FaRocket } from "react-icons/fa";

export const DeploymentRegistry = ({ proyectos, visibleProjects, showAll, onToggle, isDark }) => (
  <div className="space-y-1">
    <div className={`flex justify-between items-center pb-2 border-b transition-colors duration-500 ${isDark ? 'border-white/5 hover:border-white/10' : 'border-slate-100 hover:border-slate-200'}`}>
      <div className={`flex items-center gap-2 transition-transform duration-500 hover:translate-x-1 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
        <FaRocket size={14} />
      </div>  
      {proyectos.length > 3 && (
        <button 
          onClick={onToggle} 
          className={`group text-[9px] font-bold tracking-[0.15em] uppercase flex items-center gap-1.5 px-2 py-1 transition-colors duration-300
            ${isDark ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-indigo-600'}`}
        >
          {showAll ? (
            <><FaMinus size={9} className="transition-transform duration-300 group-hover:-rotate-180" />  </>
          ) : (
            <><FaPlus size={9} className="transition-transform duration-300 group-hover:rotate-90" /> ({proyectos.length})</>
          )}
        </button>
      )}
    </div>
    <div className="flex flex-col pt-1 group/lista hover:[&>div]:opacity-30 transition-opacity duration-500">
      {visibleProjects.map((pro, i) => (
        <div 
          key={i} 
          className={`group/card relative py-2.5 px-2 md:px-3 rounded-lg transition-all duration-300 ease-out grid grid-cols-1 md:grid-cols-[160px_1fr_auto] lg:grid-cols-[180px_1fr_auto] gap-2 md:gap-8 items-center hover:!opacity-100
            ${isDark ? 'hover:bg-white/[0.03]' : 'hover:bg-slate-50/80'}`}
        >
          <div className="flex items-center gap-3">
            <span className={`transition-all duration-500 group-hover/card:scale-110 group-hover/card:rotate-12 ${isDark ? 'text-indigo-500/50 group-hover/card:text-indigo-400' : 'text-indigo-200 group-hover/card:text-indigo-500'}`}>
              <FaTerminal size={12} />
            </span>
            <h4 className={`text-[10px] font-bold tracking-[0.15em] uppercase truncate transition-colors duration-300 
              ${isDark ? 'text-slate-400 group-hover/card:text-slate-100' : 'text-slate-500 group-hover/card:text-slate-900'}`}>
              {pro.nombre}
            </h4>
          </div>
          <div>
            <p className={`text-[11px] font-light leading-snug transition-colors duration-300 
              ${isDark ? 'text-slate-500 group-hover/card:text-slate-300' : 'text-slate-400 group-hover/card:text-slate-700'}`}>
              {pro.descripcion}
            </p>
          </div>
          <div className="flex items-center gap-4 justify-start md:justify-end mt-1 md:mt-0">
            <div className="flex items-center gap-2.5">
              {pro.tecnologias?.map((t, idx) => {
                if (!t || !t.icon) return null;
                const techPrimary = t.primary || 'text-gray-500';
                return (
                  <span 
                    key={idx} 
                    title={t.name}
                    className={`text-[14px] transition-all duration-300 hover:!scale-125 ${techPrimary}`}
                  >
                    {React.isValidElement(t.icon) 
                      ? React.cloneElement(t.icon, { className: `${t.icon.props.className || ''} ${techPrimary}`.trim() }) 
                      : t.icon}
                  </span>
                );
              })}
            </div>
            <div className={`w-[1px] h-3 transition-colors duration-300 ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
            <a 
              href={pro.repositorio} 
              target="_blank" 
              rel="noreferrer" 
              className={`transition-all duration-300 hover:scale-110 opacity-50 group-hover/card:opacity-100
                ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-400 hover:text-indigo-600'}`}
            >
              <FaGithub size={15} />
            </a>
          </div>

        </div>
      ))}
    </div>
  </div>
);