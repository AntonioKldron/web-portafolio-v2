import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
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
            name: node.name, 
            color: node.color, 
            size: 0,
            iconoData: githubIconMap[nombreLimpio] || null 
          };
        }
        mapa[node.name].size += size;
        total += size;
      });
    });

    return Object.values(mapa)
      .map(lang => ({ 
        ...lang, 
        porcentaje: ((lang.size / total) * 100).toFixed(1)
      }))
      .sort((a, b) => b.size - a.size);
  }, [reposStats]);

  if (allLenguajes.length === 0) return null;

  // Variantes para la animación de entrada en cascada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04, // Tiempo entre cada tarjeta
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
  };

  return (
    <div className={`w-full flex flex-col rounded-[2.5rem] border transition-all duration-700 shadow-2xl p-5 md:p-7 relative overflow-hidden
      ${isDark ? 'bg-slate-950/60 border-white/5 shadow-violet-900/15' : 'bg-white/80 border-slate-100 shadow-indigo-900/10 backdrop-blur-sm'}`}>
      
      {/* Efecto de luz de fondo sutil */}
      <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full blur-[100px] pointer-events-none opacity-20
        ${isDark ? 'bg-violet-600' : 'bg-indigo-300'}`}></div>

      {/* --- HEADER ANIMADO Y ESTILIZADO (Sin texto plano) --- */}
      <div className="flex justify-between items-center mb-6 shrink-0 px-2 relative z-10 gap-3">
        <div className="flex items-center gap-3.5">
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className={`p-2.5 rounded-xl border ${isDark ? 'bg-violet-500/10 border-violet-500/30 text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.3)]' : 'bg-indigo-50 border-indigo-100 text-indigo-600'}`}>
            <FaCode className="text-xl" />
          </motion.div>
          
          {/* Título Estilizado */}
          <div className="flex flex-col">
            <span className={`text-[10px] md:text-xs font-black uppercase tracking-[0.25em] ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.title}
            </span>
            <span className={`text-[8px] font-mono opacity-60 tracking-wider ${isDark ? 'text-violet-300' : 'text-indigo-600'}`}>
              [ CORE_STACK_CORE ]
            </span>
          </div>
        </div>

        {/* Badge Estilizado con pulso */}
        <motion.div 
          animate={{ boxShadow: isDark ? ["0 0 5px rgba(139,92,246,0.2)", "0 0 15px rgba(139,92,246,0.5)", "0 0 5px rgba(139,92,246,0.2)"] : [] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black border transition-all
            ${isDark ? 'bg-violet-950/50 border-violet-500/40 text-violet-200' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>
          <motion.span 
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-violet-400' : 'bg-indigo-500'}`}></motion.span>
          {allLenguajes.length} {isDark ? '' : ''}
        </motion.div>
      </div>

      {/* --- BARRA DE DISTRIBUCIÓN ULTRA-ANIMADA --- */}
      <div className="w-full h-2 rounded-full overflow-hidden flex mb-7 bg-slate-200 dark:bg-slate-800 shrink-0 mx-auto max-w-[96%] shadow-inner relative z-10 border border-slate-700/50">
        {allLenguajes.map((lang, index) => (
          <motion.div
            key={`bar-${lang.name}`}
            initial={{ width: 0 }}
            whileInView={{ width: `${lang.porcentaje}%` }}
            transition={{ duration: 1.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="h-full relative group border-r border-black/10 last:border-0"
            style={{ backgroundColor: lang.color }}
          >
            {/* Efecto de brillo al pasar el mouse por la barra */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity"></div>
          </motion.div>
        ))}
      </div>

      {/* --- GRID DE CARTAS CON ANIMACIÓN EN CASCADA --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex-1 overflow-y-auto pr-2 p-1 custom-scrollbar max-h-[260px] md:max-h-[300px] mb-2 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 pb-2">
          {allLenguajes.map((lang) => (
            <motion.div 
              key={lang.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                borderColor: lang.color,
                boxShadow: isDark ? `0 10px 30px -10px ${lang.color}50` : `0 10px 20px -5px ${lang.color}30`,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              title={`${lang.name}: ${lang.porcentaje}%`}
              className={`group relative h-auto flex flex-col items-center justify-center p-3.5 rounded-2xl transition-all duration-300 border backdrop-blur-sm
                ${isDark ? 'bg-white/[0.03] border-white/5 hover:bg-white/[0.07]' : 'bg-slate-50 border-slate-100 hover:bg-white'}`}
            >
              {/* Contenedor del Icono (con color de marca) */}
              <div className={`flex items-center justify-center w-10 h-10 rounded-xl mb-2.5 transition-all shrink-0 relative
                ${isDark ? 'bg-black/40' : 'bg-white shadow-sm'}`}
                style={{ color: lang.color }}
              >
                {/* Glow de fondo del icono */}
                <div className="absolute inset-1 rounded-lg blur-md opacity-0 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: lang.color }}></div>
                
                {lang.iconoData ? (
                  <div className="text-2xl drop-shadow-md relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {lang.iconoData.icon}
                  </div>
                ) : (
                  <span className="w-3 h-3 rounded-full relative z-10 shadow-[0_0_10px_currentColor]" style={{ backgroundColor: lang.color }}></span>
                )}
              </div>

              {/* Información del Texto (Estilizada) */}
              <div className="w-full flex flex-col items-center overflow-hidden">
                <span className={`text-[9px] md:text-[10px] font-bold uppercase w-full text-center leading-tight break-words pr-1 pl-1 transition-colors ${isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-700'}`}>
                  {lang.name}
                </span>
                
                {/* Porcentaje con fuente mono y color de marca */}
                <span className={`text-[8px] md:text-[9px] font-mono font-black mt-1 opacity-80 shrink-0 transition-opacity group-hover:opacity-100`} style={{ color: lang.color }}>
                  {lang.porcentaje}%
                </span>
              </div>
              
              {/* Barra de progreso inferior sutil y animada */}
              <div className="absolute bottom-1.5 left-4 right-4 h-[1.5px] rounded-full overflow-hidden bg-slate-700/30">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.porcentaje}%` }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  className="h-full rounded-full" 
                  style={{ backgroundColor: lang.color }} 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Línea decorativa inferior estilo escáner */}
      <motion.div 
        animate={{ x: ['-100%', '100%'] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className={`absolute bottom-0 left-0 h-[1px] w-full ${isDark ? 'bg-gradient-to-r from-transparent via-violet-500 to-transparent' : 'bg-gradient-to-r from-transparent via-indigo-400 to-transparent'}`}></motion.div>
    </div>
  );
}