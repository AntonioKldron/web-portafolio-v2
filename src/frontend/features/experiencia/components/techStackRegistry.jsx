import React from 'react';

export const TechStackRegistry = ({ tecnologias, visibleTech, showAll, onToggle, isDark }) => (
  <div className="space-y-4 pt-4">
    <p className="text-[10px] font-black text-indigo-400/70 uppercase tracking-[0.4em]">Stack & Tools</p>
    <div className="flex flex-wrap gap-3">
      {visibleTech.map((tech, i) => {
        if (!tech) return null;
        return (
          <div key={i} className={`flex items-center gap-3 px-4 py-2 rounded-xl border transition-all group/t ${isDark ? 'bg-white/5 border-white/5 hover:bg-indigo-500/10 hover:border-indigo-500/30' : 'bg-white border-slate-200 hover:border-indigo-400 shadow-sm'}`}>
            <span className={`text-2xl transition-all w-7 h-7 flex items-center justify-center ${tech.primary ?? 'text-indigo-500'}`}>
              {tech.icon}
            </span>
            <span className={`text-[11px] font-bold uppercase tracking-widest ${isDark ? 'text-gray-500 group-hover/t:text-white' : 'text-slate-700'}`}>
              {tech.name}
            </span>
          </div>
        );
      })}
      {tecnologias.length > 5 && (
        <button onClick={onToggle} className={`px-4 py-2 text-[10px] font-black rounded-xl border transition-all uppercase ${isDark ? 'text-indigo-400 bg-indigo-500/5 border-indigo-500/20 hover:bg-indigo-500/10' : 'text-indigo-600 bg-indigo-50 border-indigo-200 hover:bg-indigo-100'}`}>
          {showAll ? "Less" : `+${tecnologias.length - 5}`}
        </button>
      )}
    </div>
  </div>
);