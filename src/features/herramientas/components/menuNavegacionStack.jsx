import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useApp } from '@app/context/appContext';

export default function MenuNavegacionStack({ categorias, indiceActivo, alSeleccionar }) {
  const [estaAbierto, setEstaAbierto] = useState(false);
  const { isDark } = useApp();

  const contenedorVariantes = {
    hidden: { opacity: 0, y: -15, scale: 0.95, filter: "blur(10px)" },
    visible: { 
      opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
      transition: { staggerChildren: 0.05, delayChildren: 0.02, type: "spring", stiffness: 300, damping: 25 } 
    },
    exit: { opacity: 0, y: -10, scale: 0.95, filter: "blur(5px)", transition: { duration: 0.2 } }
  };

  const itemVariantes = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300 } }
  };

  const springFisica = { type: "spring", stiffness: 350, damping: 28, mass: 0.8 };

  // Scrollbar minimalista para que no estorbe si hay muchas categorías
  const slimScrollbar = `
    [&::-webkit-scrollbar]:w-1 
    [&::-webkit-scrollbar-track]:bg-transparent 
    [&::-webkit-scrollbar-thumb]:rounded-full 
    [&::-webkit-scrollbar-thumb]:bg-slate-300/50 hover:[&::-webkit-scrollbar-thumb]:bg-slate-400/80
    ${isDark ? 'dark:[&::-webkit-scrollbar-thumb]:bg-cyan-500/20 dark:hover:[&::-webkit-scrollbar-thumb]:bg-cyan-500/40' : ''}
  `;

  return (
    <>
      {/* MÓVIL */}
      <div className="lg:hidden w-full z-50 relative px-2 mb-6">
        <motion.button 
          whileTap={{ scale: 0.97 }}
          onClick={() => setEstaAbierto(!estaAbierto)} 
          className={`w-full flex items-center justify-between p-4 rounded-2xl backdrop-blur-md border transition-all duration-300
            ${isDark 
              ? 'bg-slate-950/40 border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.15)]' 
              : 'bg-white/40 border-slate-200 shadow-xl'}`}
        >
          <div className="flex items-center gap-3">
            <div className={`text-2xl drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`}>
              {categorias[indiceActivo]?.icon}
            </div>
            <div className="flex flex-col items-start">
              <span className={`text-xs font-black uppercase tracking-widest font-mono ${isDark ? 'text-white' : 'text-slate-800'}`}>
                {categorias[indiceActivo]?.title}
              </span>
            </div>
          </div>
          <motion.div animate={{ rotate: estaAbierto ? 180 : 0 }} transition={springFisica}>
            <FaChevronDown className={`${isDark ? 'text-cyan-400' : 'text-indigo-600'} text-sm`} />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {estaAbierto && (
            <motion.div 
              variants={contenedorVariantes} initial="hidden" animate="visible" exit="exit"
              className={`absolute top-[110%] left-2 right-2 rounded-2xl backdrop-blur-xl overflow-y-auto z-50 p-2 border max-h-[60vh] ${slimScrollbar}
                ${isDark ? 'bg-slate-900/95 border-cyan-500/30 shadow-2xl' : 'bg-white/95 border-slate-200 shadow-xl'}`}
            >
              {categorias.map((cat, idx) => {
                if (!cat.items || cat.items.length === 0) return null;

                const esActivo = indiceActivo === idx;
                return (
                  <motion.button 
                    variants={itemVariantes}
                    key={cat.id} 
                    onClick={() => { alSeleccionar(idx); setEstaAbierto(false); }} 
                    layout
                    className={`w-full flex items-center px-4 gap-4 rounded-xl transition-all duration-300 relative overflow-hidden mb-1 last:mb-0
                      ${esActivo 
                        ? `py-3.5 ${isDark ? 'text-white' : 'text-slate-900'}` 
                        : `py-2 opacity-70 ${isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800/50 hover:opacity-100' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100 hover:opacity-100'}`
                      }`}
                  >
                    {esActivo && (
                      <motion.div 
                        layoutId="mobile-active-bg"
                        className={`absolute inset-0 ${isDark ? 'bg-cyan-500/20' : 'bg-indigo-50'}`}
                        initial={false} transition={springFisica}
                      />
                    )}
                    <div className={`text-xl relative z-10 ${esActivo ? (isDark ? 'text-cyan-400' : 'text-indigo-600') : ''}`}>
                      {cat.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest font-mono relative z-10">
                      {cat.title}
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ESCRITORIO */}
      {/* ✨ Cambio clave 1: `h-full` en lugar de `max-h-[85vh]` para que tome el alto del padre */}
      <div className={`hidden lg:flex flex-col gap-1 p-1.5 border rounded-2xl backdrop-blur-md z-30 max-w-[200px] w-full shrink-0 h-full transition-all duration-700
        ${isDark 
          ? 'bg-slate-950/40 border-cyan-500/30 shadow-[0_0_40px_-15px_rgba(6,182,212,0.3)]' 
          : 'bg-white/40 border-slate-200 shadow-xl'}`}
      >
        <div className={`flex items-center justify-between px-3 py-2 border-b shrink-0
          ${isDark ? 'border-cyan-500/20' : 'border-slate-200'}`}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
            <div className={`w-2.5 h-2.5 rounded-full ${isDark ? 'bg-cyan-500/50 shadow-[0_0_5px_rgba(6,182,212,0.5)]' : 'bg-emerald-500/50'}`} />
          </div>
          <span className={`text-[8px] font-mono uppercase tracking-[0.3em] font-bold 
            ${isDark ? 'text-cyan-300' : 'text-slate-500'}`}>
            menu.sys
          </span>
        </div>

        {/* ✨ Cambio clave 2: `flex-1 min-h-0` fuerza al contenedor interno a hacer scroll sin empujar la altura del padre */}
        <div className={`flex-1 min-h-0 flex flex-col px-1 py-1 relative overflow-y-auto ${slimScrollbar} pr-1`}>
          {categorias.map((cat, idx) => {
            if (!cat.items || cat.items.length === 0) return null;

            const esActivo = indiceActivo === idx;
            return (
              <motion.button 
                key={cat.id} 
                onClick={() => alSeleccionar(idx)} 
                layout
                className={`group relative flex items-center w-full px-3 gap-3 transition-all duration-200 rounded-xl shrink-0
                  ${esActivo 
                    ? 'py-2 my-0.5' 
                    : 'py-1 my-0 opacity-60 hover:opacity-100'
                  }`}
              >
                {esActivo && (
                  <motion.div 
                    layoutId="desktop-active-bg"
                    className={`absolute inset-0 rounded-xl border ${
                      isDark 
                        ? 'bg-cyan-950/30 border-cyan-500/30 shadow-[inset_0_1px_1px_rgba(6,182,212,0.1)]' 
                        : 'bg-white border-slate-200/60 shadow-sm'
                    }`}
                    initial={false}
                    transition={springFisica}
                  />
                )}

                {esActivo && (
                  <motion.div 
                    layoutId="desktop-active-indicator"
                    className={`absolute left-0 top-[20%] h-[60%] w-1 rounded-r-full z-10 ${
                      isDark ? 'bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,1)]' : 'bg-indigo-600'
                    }`}
                    initial={false}
                    transition={springFisica}
                  />
                )}

                <motion.div 
                  layout="position"
                  className={`text-lg relative z-20 transition-transform duration-300 group-hover:scale-110 ${
                    esActivo 
                      ? (isDark ? 'text-cyan-400' : 'text-indigo-600') 
                      : (isDark ? 'text-slate-500 group-hover:text-cyan-300' : 'text-slate-400 group-hover:text-indigo-500')
                  }`}
                >
                  {cat.icon}
                </motion.div>

                <motion.h3 
                  layout="position"
                  className={`text-[9px] font-mono font-bold uppercase tracking-[0.1em] text-left truncate relative z-20 transition-colors ${
                    esActivo 
                      ? (isDark ? 'text-white' : 'text-slate-900') 
                      : (isDark ? 'text-slate-400' : 'text-slate-500')
                  }`}
                >
                  {cat.title}
                </motion.h3>

                {!esActivo && (
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className={`absolute inset-0 rounded-xl ${isDark ? 'bg-cyan-500/5' : 'bg-slate-900/5'}`}></div>
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </>
  );
}