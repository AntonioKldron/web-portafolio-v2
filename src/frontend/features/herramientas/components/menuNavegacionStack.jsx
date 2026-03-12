import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export default function MenuNavegacionStack({ categorias, indiceActivo, alSeleccionar }) {
  const [estaAbierto, setEstaAbierto] = useState(false);

  // Variantes para cascada móvil ultra-rápida
  const contenedorVariantes = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { staggerChildren: 0.04, delayChildren: 0.05, type: "spring" } 
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <>
      <style>{`
        @keyframes scanline {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .animate-luz-estela { animation: scanline 1.5s ease-in-out infinite; }
      `}</style>

      {/* --- MÓVIL (Compacto) --- */}
      <div className="lg:hidden w-full z-50 relative px-2">
        <motion.button 
          whileTap={{ scale: 0.98 }}
          onClick={() => setEstaAbierto(!estaAbierto)} 
          className="w-full flex items-center justify-between p-2.5 bg-[#030712]/90 border border-indigo-500/30 rounded-xl backdrop-blur-3xl shadow-[0_5px_20px_-10px_rgba(79,70,229,0.5)]"
        >
          <div className="flex items-center gap-3">
            <motion.div 
              key={indiceActivo}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-xl text-indigo-400"
            >
              {categorias[indiceActivo]?.icon}
            </motion.div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
              {categorias[indiceActivo]?.title}
            </span>
          </div>
          <motion.div animate={{ rotate: estaAbierto ? 180 : 0 }}>
            <FaChevronDown className="text-indigo-500 text-xs" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {estaAbierto && (
            <motion.div 
              variants={contenedorVariantes}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full left-2 right-2 mt-2 bg-[#020617]/98 border border-white/10 rounded-2xl backdrop-blur-3xl overflow-hidden z-50 shadow-2xl p-1"
            >
              {categorias.map((cat, idx) => (
                <button 
                  key={cat.id} 
                  onClick={() => { alSeleccionar(idx); setEstaAbierto(false); }} 
                  className={`w-full flex items-center gap-4 p-3 rounded-lg transition-all ${
                    indiceActivo === idx ? 'bg-indigo-500/20 text-white' : 'text-white/40 hover:bg-white/5'
                  }`}
                >
                  <div className="text-xl">{cat.icon}</div>
                  <span className="text-[9px] font-black uppercase tracking-[0.1em]">{cat.title}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- ESCRITORIO (Ultra-Compacto & Animado) --- */}
      <div className="hidden lg:flex lg:col-span-3 flex-col gap-1 p-1 bg-[#020617]/60 border border-white/10 rounded-[2rem] backdrop-blur-[100px] z-30 shadow-2xl max-w-[240px] ring-1 ring-indigo-500/20 shrink-0">
        
        {/* Decoración superior mínima */}
        <div className="flex justify-center py-2">
          <div className="flex gap-1.5">
            {[...Array(3)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }}
                className="w-1 h-1 rounded-full bg-indigo-500/40 shadow-[0_0_5px_rgba(99,102,241,0.3)]"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-0.5 px-0.5 pb-2">
          {categorias.map((cat, idx) => {
            const esActivo = indiceActivo === idx;
            return (
              <motion.button 
                key={cat.id} 
                onClick={() => alSeleccionar(idx)} 
                whileHover={{ x: 4 }}
                className={`group relative flex items-center gap-3.5 p-3 transition-all duration-500 rounded-[1.2rem] overflow-hidden ${
                  esActivo ? 'bg-indigo-600/10' : 'bg-transparent hover:bg-white/5'
                }`}
              >
                {/* Estela de luz al estar activo */}
                {esActivo && (
                  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent skew-x-12 animate-luz-estela" />
                  </div>
                )}

                {/* Resplandor Neon */}
                <AnimatePresence>
                  {esActivo && (
                    <motion.div 
                      layoutId="neonGlowCompact"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500/15 via-transparent to-transparent z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>

                {/* Indicador Vertical (Pillar) compacto */}
                {esActivo && (
                  <motion.div 
                    layoutId="activePillarCompact" 
                    className="absolute left-0 w-1 h-1/2 bg-indigo-500 shadow-[0_0_15px_#6366f1] rounded-r-full z-20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Icono */}
                <motion.div 
                  animate={{ 
                    x: esActivo ? 6 : 0,
                    color: esActivo ? "#fff" : "#818cf8"
                  }}
                  className={`text-xl z-10 filter ${esActivo ? 'drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]' : 'opacity-40 group-hover:opacity-100'}`}
                >
                  {cat.icon}
                </motion.div>

                {/* Texto */}
                <motion.h3 
                  animate={{ 
                    x: esActivo ? 6 : 0,
                    opacity: esActivo ? 1 : 0.4
                  }}
                  className={`text-[8.5px] font-black uppercase tracking-[0.15em] transition-all duration-500 z-10 text-left ${
                    esActivo ? 'text-white italic' : 'text-slate-300 group-hover:text-white'
                  }`}
                >
                  {cat.title}
                </motion.h3>

                {/* Borde de hover interactivo */}
                <div className="absolute inset-0 border border-transparent group-hover:border-indigo-500/20 rounded-[1.2rem] transition-all duration-300 pointer-events-none" />
              </motion.button>
            );
          })}
        </div>
      </div>
    </>
  );
}