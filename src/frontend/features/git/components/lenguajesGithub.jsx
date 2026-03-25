import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTerminal } from 'react-icons/fa';
import { githubIconMap } from '../../../data/git/gitHubData';

export default function LenguajesGithub({ reposStats, isDark, t }) {
  const allLenguajes = useMemo(() => {
    const mapa = {};
    let total = 0;

    reposStats.nodes.forEach(repo => {
      repo.languages.edges.forEach(({ size, node }) => {
        const nombreLimpio = node.name.toLowerCase();
        if (!mapa[node.name]) {
          mapa[node.name] = { 
            name: node.name, color: node.color, size: 0,
            iconoData: githubIconMap[nombreLimpio] || null 
          };
        }
        mapa[node.name].size += size;
        total += size;
      });
    });

    return Object.values(mapa)
      .map(lang => ({ ...lang, porcentaje: ((lang.size / total) * 100).toFixed(1) }))
      .sort((a, b) => b.size - a.size);
  }, [reposStats]);

  if (allLenguajes.length === 0) return null;

  // Separamos los 3 principales del resto para un layout más creativo
  const top3 = allLenguajes.slice(0, 3);
  const others = allLenguajes.slice(3);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`w-full h-full flex flex-col p-6 md:p-8 rounded-[2rem] border overflow-hidden relative shadow-xl
      ${isDark ? 'bg-slate-900/50 border-white/10 shadow-indigo-900/20' : 'bg-white/80 border-slate-200 shadow-indigo-500/10'}`}
    >
      {/* Fondo decorativo cibernético */}
      <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none opacity-20 
        ${isDark ? 'bg-indigo-500' : 'bg-indigo-300'}`} />
      <div className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t pointer-events-none z-0
        ${isDark ? 'from-slate-950/50 to-transparent' : 'from-slate-100/50 to-transparent'}`} />

      {/* Header */}
      <div className="flex justify-between items-center mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-xl ${isDark ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>
            <FaTerminal className="text-xl" />
          </div>
          <div>
            <h3 className={`text-sm md:text-base font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.title || "Core Stack"}
            </h3>
          </div>
        </div>
      </div>

      {/* Barra de progreso unificada con Glow */}
      <div className="w-full h-2 rounded-full flex mb-8 bg-slate-200 dark:bg-slate-800 relative z-10 shadow-inner">
        {allLenguajes.map((lang, index) => (
          <motion.div
            key={`bar-${lang.name}`}
            initial={{ width: 0 }}
            whileInView={{ width: `${lang.porcentaje}%` }}
            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
            className="h-full first:rounded-l-full last:rounded-r-full relative group"
            style={{ backgroundColor: lang.color }}
          >
            {/* Tooltip en la barra */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-50 pointer-events-none">
              {lang.name} {lang.porcentaje}%
            </div>
            {/* Efecto de brillo inferior */}
            <div className="absolute top-full left-0 w-full h-4 blur-md opacity-40" style={{ backgroundColor: lang.color }} />
          </motion.div>
        ))}
      </div>

      {/* Top 3 Lenguajes - Diseño de Tarjetas Destacadas */}
      <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 relative z-10">
        {top3.map((lang, index) => (
          <motion.div 
            key={lang.name}
            whileHover={{ y: -5, scale: 1.02 }}
            className={`relative flex flex-col items-center justify-center p-4 rounded-2xl border backdrop-blur-sm overflow-hidden group
              ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}
          >
            {/* Línea de color superior */}
            <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: lang.color }} />
            {/* Brillo de fondo al hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundColor: lang.color }} />
            
            <div className="text-3xl md:text-4xl mb-2 drop-shadow-md transition-transform group-hover:scale-110 duration-300" style={{ color: lang.color }}>
              {lang.iconoData?.icon || <FaCode />}
            </div>
            <span className={`text-[11px] md:text-xs font-black uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-800'}`}>
              {lang.name}
            </span>
            <span className="text-[10px] font-mono mt-1 opacity-60">
              {lang.porcentaje}%
            </span>
          </motion.div>
        ))}
      </div>

      {/* El resto de lenguajes como "Chips" en un área scrolleable */}
      {others.length > 0 && (
        <div className="flex-1 overflow-y-auto custom-scrollbar relative z-10 pr-2">
          <div className="flex flex-wrap gap-2">
            {others.map((lang) => (
              <motion.div 
                key={lang.name}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase transition-colors cursor-default
                  ${isDark ? 'bg-white/[0.03] border-white/10 hover:bg-white/10 text-slate-300' : 'bg-slate-50 border-slate-200 hover:bg-white text-slate-700 shadow-sm'}`}
              >
                <span className="text-sm" style={{ color: lang.color }}>
                  {lang.iconoData?.icon || '•'}
                </span>
                {lang.name} <span className="font-mono opacity-50 ml-1">{lang.porcentaje}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}