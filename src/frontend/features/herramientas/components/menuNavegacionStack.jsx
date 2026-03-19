import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useApp } from '../../../context/AppContext';

export default function MenuNavegacionStack({ categorias, indiceActivo, alSeleccionar }) {
  const [estaAbierto, setEstaAbierto] = useState(false);
  const { isDark } = useApp();

  // Variantes de animación para el menú móvil
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

  return (
    <>
      {/* MÓVIL */}
      <div className="lg:hidden w-full z-50 relative px-2 mb-6">
        <motion.button 
          whileTap={{ scale: 0.97 }}
          onClick={() => setEstaAbierto(!estaAbierto)} 
          className={`w-full flex items-center justify-between p-4 rounded-2xl backdrop-blur-md border transition-all duration-300
            ${isDark 
              ? 'bg-slate-950/40 border-indigo-500/30 shadow-[0_0_20px_rgba(79,70,229,0.15)]' 
              : 'bg-white/40 border-slate-200 shadow-xl'}`}
        >
          <div className="flex items-center gap-3">
            <div className={`text-2xl drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] ${isDark ? 'text-emerald-400' : 'text-indigo-600'}`}>
              {categorias[indiceActivo]?.icon}
            </div>
            <div className="flex flex-col items-start">
              <span className={`text-xs font-black uppercase tracking-widest font-mono ${isDark ? 'text-white' : 'text-slate-800'}`}>
                {categorias[indiceActivo]?.title}
              </span>
            </div>
          </div>
          <motion.div animate={{ rotate: estaAbierto ? 180 : 0 }} transition={{ type: "spring", stiffness: 200 }}>
            <FaChevronDown className={`${isDark ? 'text-emerald-400' : 'text-indigo-600'} text-sm`} />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {estaAbierto && (
            <motion.div 
              variants={contenedorVariantes} initial="hidden" animate="visible" exit="exit"
              className={`absolute top-[110%] left-2 right-2 rounded-2xl backdrop-blur-xl overflow-hidden z-50 p-2 border
                ${isDark ? 'bg-slate-900/95 border-indigo-500/30 shadow-2xl' : 'bg-white/95 border-slate-200 shadow-xl'}`}
            >
              {categorias.map((cat, idx) => {
                const esActivo = indiceActivo === idx;
                return (
                  <motion.button 
                    variants={itemVariantes}
                    key={cat.id} 
                    onClick={() => { alSeleccionar(idx); setEstaAbierto(false); }} 
                    className={`w-full flex items-center gap-4 p-3.5 rounded-xl transition-all relative overflow-hidden mb-1 last:mb-0
                      ${esActivo 
                        ? (isDark ? 'text-white' : 'text-slate-900') 
                        : (isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800/50' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100')
                      }`}
                  >
                    {esActivo && (
                      <motion.div 
                        layoutId="mobile-active-bg"
                        className={`absolute inset-0 ${isDark ? 'bg-indigo-500/20' : 'bg-indigo-50'}`}
                        initial={false} transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className={`text-xl relative z-10 ${esActivo ? (isDark ? 'text-emerald-400' : 'text-indigo-600') : ''}`}>
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

      {/* ESCRITORIO (Sidebar Estandarizada) */}
      <div className={`hidden lg:flex flex-col gap-2 p-2 border rounded-2xl backdrop-blur-md z-30 max-w-[260px] shrink-0 transition-all duration-700
        ${isDark 
          ? 'bg-slate-950/40 border-indigo-500/30 shadow-[0_0_40px_-15px_rgba(79,70,229,0.4)]' 
          : 'bg-white/40 border-slate-200 shadow-xl'}`}
      >
        
        {/* Encabezado IDÉNTICO a la consola */}
        <div className={`flex items-center justify-between px-4 py-3 border-b mb-1 
          ${isDark ? 'border-indigo-500/20' : 'border-slate-200'}`}>
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
          </div>
          <span className={`text-[8px] font-mono uppercase tracking-[0.3em] font-bold 
            ${isDark ? 'text-indigo-300' : 'text-slate-500'}`}>
            menu.sys
          </span>
        </div>

        <div className="flex flex-col gap-1 px-1 pb-1 relative">
          {categorias.map((cat, idx) => {
            const esActivo = indiceActivo === idx;
            return (
              <motion.button 
                key={cat.id} 
                onClick={() => alSeleccionar(idx)} 
                className="group relative flex items-center gap-4 p-3.5 transition-all rounded-xl w-full"
              >
                {/* Fondo Deslizante */}
                {esActivo && (
                  <motion.div 
                    layoutId="desktop-active-bg"
                    className={`absolute inset-0 rounded-xl border ${
                      isDark 
                        ? 'bg-indigo-900/40 border-indigo-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]' 
                        : 'bg-white border-slate-200/60 shadow-sm'
                    }`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}

                {/* Línea indicadora (Emerald para igualar la consola) */}
                {esActivo && (
                  <motion.div 
                    layoutId="desktop-active-indicator"
                    className={`absolute left-0 top-[20%] h-[60%] w-1 rounded-r-full ${
                      isDark ? 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]' : 'bg-indigo-600'
                    }`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}

                {/* Ícono */}
                <div className={`text-[1.35rem] relative z-10 transition-transform duration-300 group-hover:scale-110 ${
                  esActivo 
                    ? (isDark ? 'text-emerald-400' : 'text-indigo-600') 
                    : (isDark ? 'text-slate-500 group-hover:text-indigo-300' : 'text-slate-400 group-hover:text-indigo-500')
                }`}>
                  {cat.icon}
                </div>

                {/* Título */}
                <h3 className={`text-[10px] font-mono font-bold uppercase tracking-[0.15em] relative z-10 transition-colors ${
                  esActivo 
                    ? (isDark ? 'text-white' : 'text-slate-900') 
                    : (isDark ? 'text-slate-400' : 'text-slate-500')
                }`}>
                  {cat.title}
                </h3>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className={`absolute inset-0 rounded-xl ${isDark ? 'bg-white/5' : 'bg-slate-900/5'}`}></div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </>
  );
}