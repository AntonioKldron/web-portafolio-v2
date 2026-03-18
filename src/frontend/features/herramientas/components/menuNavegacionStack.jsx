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
      {/* MÓVIL (Dropdown Premium) */}
      <div className="lg:hidden w-full z-50 relative px-2 mb-6">
        <motion.button 
          whileTap={{ scale: 0.97 }}
          onClick={() => setEstaAbierto(!estaAbierto)} 
          className={`w-full flex items-center justify-between p-4 rounded-2xl backdrop-blur-xl border shadow-lg transition-all duration-300
            ${isDark 
              ? 'bg-[#0f172a]/80 border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.15)]' 
              : 'bg-white/90 border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.05)]'}`}
        >
          <div className="flex items-center gap-3">
            {/* Ícono Activo con Glow */}
            <div className={`text-2xl drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
              {categorias[indiceActivo]?.icon}
            </div>
            <div className="flex flex-col items-start">
              <span className={`text-xs font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-800'}`}>
                {categorias[indiceActivo]?.title}
              </span>
            </div>
          </div>
          <motion.div animate={{ rotate: estaAbierto ? 180 : 0 }} transition={{ type: "spring", stiffness: 200 }}>
            <FaChevronDown className={`${isDark ? 'text-cyan-400' : 'text-blue-600'} text-sm`} />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {estaAbierto && (
            <motion.div 
              variants={contenedorVariantes} initial="hidden" animate="visible" exit="exit"
              className={`absolute top-[110%] left-2 right-2 rounded-2xl backdrop-blur-2xl overflow-hidden z-50 shadow-2xl p-2 border
                ${isDark ? 'bg-[#020617]/90 border-slate-800/80' : 'bg-white/95 border-slate-200'}`}
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
                        className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20' : 'bg-blue-50'}`}
                        initial={false} transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className={`text-xl relative z-10 ${esActivo ? (isDark ? 'text-cyan-400' : 'text-blue-600') : ''}`}>
                      {cat.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest relative z-10">
                      {cat.title}
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ESCRITORIO (Floating Dock / Sidebar Premium) */}
      <div className={`hidden lg:flex flex-col gap-2 p-2 border rounded-[2rem] backdrop-blur-xl z-30 shadow-2xl max-w-[260px] shrink-0
        ${isDark 
          ? 'bg-[#0f172a]/40 border-slate-700/50 shadow-[0_20px_40px_rgba(0,0,0,0.5)]' 
          : 'bg-white/70 border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)]'}`}
      >
        
        {/* Encabezado del menú: Estilo Ventana macOS / IDE */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-transparent mb-1" style={{ borderBottomColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.5)]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
          </div>
          <span className={`text-[8px] font-mono uppercase tracking-[0.3em] font-bold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
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
                className="group relative flex items-center gap-4 p-3.5 transition-all rounded-2xl w-full"
              >
                {/* 🌟 LA MAGIA: Fondo Deslizante (Sliding Highlight) */}
                {esActivo && (
                  <motion.div 
                    layoutId="desktop-active-bg"
                    className={`absolute inset-0 rounded-2xl border ${
                      isDark 
                        ? 'bg-slate-800/80 border-slate-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' 
                        : 'bg-white border-slate-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.04)]'
                    }`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}

                {/* Línea indicadora lateral neón */}
                {esActivo && (
                  <motion.div 
                    layoutId="desktop-active-indicator"
                    className={`absolute left-0 top-[20%] h-[60%] w-1 rounded-r-full ${
                      isDark ? 'bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]' : 'bg-blue-600'
                    }`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}

                {/* Ícono */}
                <div className={`text-[1.35rem] relative z-10 transition-transform duration-300 group-hover:scale-110 ${
                  esActivo 
                    ? (isDark ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]' : 'text-blue-600') 
                    : (isDark ? 'text-slate-500 group-hover:text-cyan-200' : 'text-slate-400 group-hover:text-blue-400')
                }`}>
                  {cat.icon}
                </div>

                {/* Título */}
                <h3 className={`text-[10px] font-black uppercase tracking-[0.15em] relative z-10 transition-colors ${
                  esActivo 
                    ? (isDark ? 'text-white' : 'text-slate-900') 
                    : (isDark ? 'text-slate-400' : 'text-slate-500')
                }`}>
                  {cat.title}
                </h3>

                {/* Efecto de luz al pasar el cursor (Hover Glow) */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className={`absolute inset-0 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-slate-900/5'}`}></div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </>
  );
}