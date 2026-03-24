import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import { githubIconMap } from '../../../data/git/gitHubData';

export default function LenguajesGithub({ reposStats, isDark, t }) {
  const topLenguajes = useMemo(() => {
    const mapa = {};
    let total = 0;

    reposStats.nodes.forEach(repo => {
      repo.languages.edges.forEach(({ size, node }) => {
        if (!mapa[node.name]) mapa[node.name] = { name: node.name, color: node.color, size: 0 };
        mapa[node.name].size += size;
        total += size;
      });
    });

    return Object.values(mapa)
      .map(lang => ({ 
        ...lang, 
        porcentaje: ((lang.size / total) * 100).toFixed(1),
        iconoData: githubIconMap[lang.name.toLowerCase()] || null
      }))
      .sort((a, b) => b.size - a.size)
      .slice(0, 6);
  }, [reposStats]);

  if (topLenguajes.length === 0) return null;

  return (
    <div className={`w-full h-full p-8 rounded-[2rem] flex flex-col justify-center transition-colors shadow-2xl
      ${isDark ? 'bg-slate-900/40 border border-white/5 shadow-violet-900/10' : 'bg-white border border-slate-100 shadow-indigo-900/5'}`}>
      
      <div className="flex justify-between items-end mb-8 pt-2">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl ${isDark ? 'bg-violet-500/10 text-violet-400' : 'bg-indigo-500/10 text-indigo-600'}`}>
            <FaCode className="text-lg" />
          </div>
          <h3 className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-800'}`}>
            {t.title}
          </h3>
        </div>
        <span className={`text-[11px] font-mono opacity-60 ${isDark ? 'text-violet-300' : 'text-indigo-500'}`}>
          {t.subtitle}
        </span>
      </div>

      <div className="w-full h-4 rounded-full overflow-hidden flex mb-8 bg-slate-200 dark:bg-slate-800 shadow-inner">
        {topLenguajes.map((lang, index) => (
          <motion.div
            key={lang.name}
            initial={{ width: 0 }}
            whileInView={{ width: `${lang.porcentaje}%` }}
            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-full hover:brightness-125 transition-all cursor-crosshair relative group"
            style={{ backgroundColor: lang.color }}
          >
            <div className="absolute opacity-0 group-hover:opacity-100 -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white font-mono font-bold text-[10px] px-3 py-1.5 rounded border border-slate-700 transition-opacity whitespace-nowrap z-20 shadow-xl pointer-events-none">
              {lang.name} <span className="text-violet-400 ml-1">{lang.porcentaje}%</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-2">
        {topLenguajes.map(lang => (
          <div key={lang.name} className={`group flex items-center gap-3 p-3 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg
            ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-slate-50 border border-slate-100 hover:bg-white'}`}>
            
            <div className={`flex items-center justify-center w-10 h-10 rounded-xl transition-transform group-hover:rotate-6
              ${isDark ? 'bg-black/30' : 'bg-white shadow-sm'}`}
              style={{ color: lang.color }}
            >
              {lang.iconoData ? (
                <div className="text-2xl">{lang.iconoData.icon}</div>
              ) : (
                <span className="w-4 h-4 rounded-full" style={{ backgroundColor: lang.color }}></span>
              )}
            </div>

            <div className="flex flex-col overflow-hidden">
              <span className={`text-sm font-bold truncate ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                {lang.name}
              </span>
              <span className={`text-xs font-black ${isDark ? 'text-violet-400' : 'text-indigo-600'}`}>
                {lang.porcentaje}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}