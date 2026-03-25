import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaTerminal } from 'react-icons/fa';
import { githubIconMap } from '../../../data/git/gitHubData';

export default function LenguajesGithub({ reposStats, isDark, t }) {
  const [hoveredLang, setHoveredLang] = useState(null);

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

  const top3 = allLenguajes.slice(0, 3);
  const others = allLenguajes.slice(3);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`w-full h-full flex flex-col p-6 md:p-8 rounded-[2rem] border overflow-hidden relative shadow-xl transition-all duration-500
      ${isDark ? 'bg-slate-900/50 border-white/10 shadow-indigo-900/20' : 'bg-white/80 border-slate-200 shadow-indigo-500/10'}`}
    >
      {/* Background Glow Dinámico */}
      <AnimatePresence>
        {hoveredLang && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none z-0 blur-[100px]"
            style={{ backgroundColor: allLenguajes.find(l => l.name === hoveredLang)?.color }}
          />
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex justify-between items-center mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-xl ${isDark ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>
            <FaTerminal className="text-xl" />
          </div>
          <h3 className={`text-sm md:text-base font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {t.title || "Core Stack"}
          </h3>
        </div>
      </div>

      {/* Barra de progreso con INTERACTIVIDAD */}
      <div className="w-full h-3 rounded-full flex mb-8 bg-slate-200/50 dark:bg-slate-800/50 relative z-10 overflow-hidden backdrop-blur-sm">
        {allLenguajes.map((lang, index) => {
          const isSelected = hoveredLang === lang.name;
          const isSomethingHovered = hoveredLang !== null;

          return (
            <motion.div
              key={`bar-${lang.name}`}
              initial={{ width: 0 }}
              animate={{ 
                width: `${lang.porcentaje}%`,
                opacity: isSomethingHovered ? (isSelected ? 1 : 0.3) : 1,
                scaleY: isSelected ? 1.5 : 1
              }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="h-full relative cursor-pointer"
              style={{ 
                backgroundColor: lang.color,
                boxShadow: isSelected ? `0 0 20px ${lang.color}ee` : 'none'
              }}
              onMouseEnter={() => setHoveredLang(lang.name)}
              onMouseLeave={() => setHoveredLang(null)}
            />
          );
        })}
      </div>

      {/* Top 3 Lenguajes */}
      <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 relative z-10">
        {top3.map((lang) => (
          <motion.div 
            key={lang.name}
            onMouseEnter={() => setHoveredLang(lang.name)}
            onMouseLeave={() => setHoveredLang(null)}
            whileHover={{ y: -5 }}
            className={`relative flex flex-col items-center justify-center p-4 rounded-2xl border backdrop-blur-md transition-all duration-300
              ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'}
              ${hoveredLang === lang.name ? 'border-opacity-100 scale-[1.02]' : 'border-opacity-20 opacity-80'}`}
          >
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-full" style={{ backgroundColor: lang.color }} />
            
            <div className="text-3xl md:text-4xl mb-2 drop-shadow-lg" style={{ color: lang.color }}>
              {lang.iconoData?.icon || <FaCode />}
            </div>
            <span className={`text-[10px] md:text-xs font-black uppercase tracking-tighter ${isDark ? 'text-white' : 'text-slate-800'}`}>
              {lang.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Otros Lenguajes con MARCA DE COLOR mejorada */}
      {others.length > 0 && (
        <div className="flex-1 overflow-y-auto custom-scrollbar relative z-10 pr-2">
          <div className="flex flex-wrap gap-2">
            {others.map((lang) => (
              <motion.div 
                key={lang.name}
                onMouseEnter={() => setHoveredLang(lang.name)}
                onMouseLeave={() => setHoveredLang(null)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-[9px] font-bold uppercase transition-all cursor-crosshair
                  ${isDark ? 'bg-white/[0.03] border-white/5' : 'bg-slate-50 border-slate-200'}
                  ${hoveredLang === lang.name ? 'scale-105 shadow-lg' : 'opacity-70'}`}
                style={{ 
                  borderLeft: `3px solid ${lang.color}`,
                  backgroundColor: hoveredLang === lang.name ? `${lang.color}22` : undefined 
                }}
              >
                <span className="text-xs" style={{ color: lang.color }}>
                  {lang.iconoData?.icon || '•'}
                </span>
                <span className={isDark ? 'text-slate-200' : 'text-slate-700'}>{lang.name}</span>
                <span className="font-mono opacity-40 ml-auto">{lang.porcentaje}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}