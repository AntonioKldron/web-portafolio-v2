import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaTerminal, FaCrown } from 'react-icons/fa';
import { githubIconMap } from '@data/proyectos/proyectosData';

// --- Variantes de Animación para Framer Motion ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Efecto cascada entre los elementos
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: 'spring', stiffness: 300, damping: 20 } 
  },
};

const floatingIconVariants = {
  initial: { y: 0 },
  animate: {
    y: [-3, 3, -3],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
};

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
  const isSomethingHovered = hoveredLang !== null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className={`w-full h-full flex flex-col p-6 md:p-8 rounded-[2rem] border overflow-hidden relative shadow-2xl transition-colors duration-500
      ${isDark ? 'bg-slate-900/60 border-white/10 shadow-indigo-900/20' : 'bg-white/90 border-slate-200 shadow-indigo-500/10'}`}
    >
      {/* Background Glow Dinámico y Palpitante */}
      <AnimatePresence>
        {hoveredLang && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isDark ? 0.2 : 0.1, 
              scale: 1.1,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="absolute inset-0 pointer-events-none z-0 blur-[80px] md:blur-[120px]"
            style={{ backgroundColor: allLenguajes.find(l => l.name === hoveredLang)?.color }}
          />
        )}
      </AnimatePresence>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 flex flex-col h-full">
        
        {/* Header Animado */}
        <motion.div variants={itemVariants} className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <motion.div 
              whileHover={{ rotate: 90, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={`p-3 rounded-2xl ${isDark ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}
            >
              <FaTerminal className="text-xl" />
            </motion.div>
            <span className={`text-base text-justify font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t?.title || 'Core Stack'}
            </span>
          </div>
        </motion.div>

       {/* Barra de progreso Segmentada Premium */}
        <motion.div 
          variants={itemVariants} 
          className={`w-full h-5 md:h-6 p-1 rounded-full flex gap-1 mb-10 relative z-10 shadow-inner
            ${isDark ? 'bg-slate-800/60 shadow-black/50' : 'bg-slate-100 shadow-slate-300/50'}`}
        >
          {allLenguajes.map((lang) => {
            const isSelected = hoveredLang === lang.name;
            return (
              <motion.div
                key={`bar-${lang.name}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.porcentaje}%` }}
                viewport={{ once: true }}
                animate={{ 
                  opacity: isSomethingHovered ? (isSelected ? 1 : 0.2) : 1,
                  scaleY: isSelected ? 1.6 : 1, // Expansión vertical
                  zIndex: isSelected ? 20 : 10,
                }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                className="h-full rounded-full cursor-crosshair relative flex items-center justify-center"
                style={{ 
                  backgroundColor: lang.color,
                  boxShadow: isSelected ? `0 0 16px ${lang.color}90` : 'none',
                  transformOrigin: 'center'
                }}
                onMouseEnter={() => setHoveredLang(lang.name)}
                onMouseLeave={() => setHoveredLang(null)}
              />
            );
          })}
        </motion.div>

        {/* Top 3 Lenguajes - Tarjetas 3D */}
        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 mb-8">
          {top3.map((lang, index) => {
            const isSelected = hoveredLang === lang.name;
            const isDimmed = isSomethingHovered && !isSelected;
            const isFirst = index === 0;

            return (
              <motion.div 
                key={lang.name}
                onMouseEnter={() => setHoveredLang(lang.name)}
                onMouseLeave={() => setHoveredLang(null)}
                whileHover={{ y: -8, scale: 1.05 }}
                animate={{ opacity: isDimmed ? 0.4 : 1, filter: isDimmed ? 'blur(2px)' : 'blur(0px)' }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`relative flex flex-col items-center justify-center p-5 rounded-3xl border overflow-hidden
                  ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-lg shadow-slate-200/50'}
                  ${isSelected ? 'border-opacity-100 z-20' : 'border-opacity-20 z-10'}`}
              >
                {/* Glow interno en hover */}
                <motion.div 
                  initial={false}
                  animate={{ opacity: isSelected ? 0.2 : 0 }}
                  className="absolute inset-0 z-0"
                  style={{ background: `radial-gradient(circle at center, ${lang.color}, transparent)` }}
                />

                <div className="absolute top-0 left-0 w-full h-1.5" style={{ backgroundColor: lang.color }} />
                
                {/* Corona para el lenguaje #1 */}
                {isFirst && (
                  <div className="absolute top-2 right-2 text-yellow-400 drop-shadow-md">
                    <FaCrown className="text-xs" />
                  </div>
                )}

                <motion.div 
                  variants={floatingIconVariants}
                  initial="initial"
                  animate="animate"
                  className="text-4xl md:text-5xl mb-3 relative z-10" 
                  style={{ color: lang.color, filter: `drop-shadow(0 4px 6px ${lang.color}40)` }}
                >
                  {lang.iconoData?.icon || <FaCode />}
                </motion.div>

                <span className={`text-xs md:text-sm text-center font-black uppercase tracking-tight z-10 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                  {lang.name}
                </span>
                
                {/* Porcentaje que aparece con delay */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  className="mt-1 flex items-center gap-1 z-10"
                >
                  <span className={`px-2 py-0.5 rounded-md text-[10px] md:text-xs font-bold ${isDark ? 'bg-white/10 text-white/70' : 'bg-slate-100 text-slate-600'}`}>
                    {lang.porcentaje}%
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Otros Lenguajes - Píldoras Elásticas */}
        {others.length > 0 && (
          <motion.div variants={itemVariants} className="flex-1 overflow-y-auto custom-scrollbar pr-2">
            <div className="flex flex-wrap gap-2.5">
              {others.map((lang) => {
                const isSelected = hoveredLang === lang.name;
                const isDimmed = isSomethingHovered && !isSelected;

                return (
                  <motion.div 
                    key={lang.name}
                    layout // Anima la posición si cambian de orden
                    onMouseEnter={() => setHoveredLang(lang.name)}
                    onMouseLeave={() => setHoveredLang(null)}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ opacity: isDimmed ? 0.3 : 1 }}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-[11px] font-bold uppercase cursor-pointer transition-colors duration-300
                      ${isDark ? 'bg-white/[0.03] border-white/5' : 'bg-slate-50 border-slate-200'}
                      ${isSelected ? 'shadow-lg' : ''}`}
                    style={{ 
                      borderLeft: `4px solid ${lang.color}`,
                      backgroundColor: isSelected ? `${lang.color}15` : undefined,
                      borderColor: isSelected ? `${lang.color}50` : undefined
                    }}
                  >
                    <motion.span 
                      animate={{ rotate: isSelected ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-sm" 
                      style={{ color: lang.color }}
                    >
                      {lang.iconoData?.icon || '•'}
                    </motion.span>
                    <span className={`text-justify ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{lang.name}</span>
                    <span className="font-mono text-justify opacity-50 ml-1">{lang.porcentaje}%</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}