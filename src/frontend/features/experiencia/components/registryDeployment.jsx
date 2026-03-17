import React from 'react';
import { FaTerminal, FaGithub, FaPlus, FaMinus, FaRocket } from "react-icons/fa";

export const DeploymentRegistry = ({ proyectos, visibleProjects, showAll, onToggle, isDark }) => (
  <div className="space-y-6">
    <div className={`flex justify-between items-center border-b pb-4 ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
      <div className="text-indigo-400 text-xl">
        <FaRocket />
      </div>
      {proyectos.length > 3 && (
        <button onClick={onToggle} className={`text-[10px] font-black uppercase flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${isDark ? 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' : 'text-indigo-600 bg-indigo-50 border-indigo-100'}`}>
          {showAll ? <><FaMinus /></> : <><FaPlus />({proyectos.length})</>}
        </button>
      )}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {visibleProjects.map((pro, i) => (
        <div key={i} className={`p-5 rounded-2xl border transition-all flex flex-col h-full shadow-2xl group/card ${isDark ? 'bg-gradient-to-br from-white/[0.05] to-transparent border-white/5 hover:border-indigo-500/40' : 'bg-white border-slate-200 hover:border-indigo-300'}`}>
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400"><FaTerminal size={12} /></div>
              <h4 className={`text-[12px] font-black uppercase italic ${isDark ? 'text-white' : 'text-slate-800'}`}>{pro.nombre}</h4>
            </div>
            <a href={pro.repositorio} target="_blank" rel="noreferrer" className="p-2 text-gray-500 hover:text-indigo-400 transition-colors"><FaGithub size={18} /></a>
          </div>
          <p className="text-[11px] text-gray-400 leading-relaxed mb-6 italic flex-grow">{pro.descripcion}</p>
          
          <div className="flex flex-wrap gap-3 mt-auto items-center">
            {pro.tecnologias?.map((t, idx) => {
              if (!t || !t.icon) return null;
              
              const techPrimary = t.primary || 'text-gray-500';

              return (
                <span 
                  key={idx} 
                  title={t.name}
                  className={`text-xl flex items-center justify-center transition-transform duration-200 hover:scale-110 ${techPrimary}`}
                >
                  {/* Aplicamos la misma solución: Inyectar la clase de color DIRECTAMENTE al icono */}
                  {React.isValidElement(t.icon) 
                    ? React.cloneElement(t.icon, { 
                        className: `${t.icon.props.className || ''} ${techPrimary}`.trim() 
                      }) 
                    : t.icon}
                </span>
              );
            })}
          </div>

        </div>
      ))}
    </div>
  </div>
);