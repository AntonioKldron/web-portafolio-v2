import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useApp } from '../../../context/AppContext';

export default function MenuNavegacionStack({ categorias, indiceActivo, alSeleccionar }) {
  const [estaAbierto, setEstaAbierto] = useState(false);
  const { isDark } = useApp();

  const contenedorVariantes = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { 
      opacity: 1, scale: 1, y: 0,
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

      {/* MÓVIL */}
      <div className="lg:hidden w-full z-50 relative px-2">
        <motion.button 
          whileTap={{ scale: 0.98 }}
          onClick={() => setEstaAbierto(!estaAbierto)} 
          className={`w-full flex items-center justify-between p-2.5 rounded-xl backdrop-blur-3xl border shadow-lg 
            ${isDark ? 'bg-slate-900/90 border-indigo-500/30 shadow-indigo-500/20' : 'bg-white/90 border-slate-200 shadow-slate-200'}`}
        >
          <div className="flex items-center gap-3">
            <div className="text-xl text-indigo-500">{categorias[indiceActivo]?.icon}</div>
            <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-800'}`}>
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
              variants={contenedorVariantes} initial="hidden" animate="visible" exit="exit"
              className={`absolute top-full left-2 right-2 mt-2 rounded-2xl backdrop-blur-3xl overflow-hidden z-50 shadow-2xl p-1 border
                ${isDark ? 'bg-slate-950/98 border-white/10' : 'bg-white border-slate-200'}`}
            >
              {categorias.map((cat, idx) => (
                <button 
                  key={cat.id} 
                  onClick={() => { alSeleccionar(idx); setEstaAbierto(false); }} 
                  className={`w-full flex items-center gap-4 p-3 rounded-lg transition-all ${
                    indiceActivo === idx 
                      ? 'bg-indigo-500/20 text-indigo-500' 
                      : `${isDark ? 'text-white/40 hover:bg-white/5' : 'text-slate-400 hover:bg-slate-50'}`
                  }`}
                >
                  <div className="text-xl">{cat.icon}</div>
                  <span className="text-[9px] font-black uppercase">{cat.title}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ESCRITORIO */}
      <div className={`hidden lg:flex flex-col gap-1 p-1 border rounded-[2rem] backdrop-blur-[100px] z-30 shadow-2xl max-w-[240px] shrink-0
        ${isDark ? 'bg-slate-950/60 border-white/10' : 'bg-white/60 border-slate-200'}`}>
        
        <div className="flex justify-center py-2">
          <div className="flex gap-1.5">
            {[...Array(3)].map((_, i) => (
              <motion.div 
                key={i} animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }}
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
                key={cat.id} onClick={() => alSeleccionar(idx)} whileHover={{ x: 4 }}
                className={`group relative flex items-center gap-3.5 p-3 transition-all rounded-[1.2rem] overflow-hidden ${
                  esActivo ? 'bg-indigo-500/10' : 'bg-transparent hover:bg-white/5'
                }`}
              >
                {esActivo && (
                  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent skew-x-12 animate-luz-estela" />
                  </div>
                )}

                <div className={`text-xl z-10 ${esActivo ? 'text-indigo-500' : 'text-slate-400 group-hover:text-indigo-400'}`}>
                  {cat.icon}
                </div>

                <h3 className={`text-[8.5px] font-black uppercase tracking-widest z-10 transition-colors ${
                  esActivo 
                    ? (isDark ? 'text-white italic' : 'text-indigo-600 italic') 
                    : (isDark ? 'text-slate-500' : 'text-slate-400')
                }`}>
                  {cat.title}
                </h3>
              </motion.button>
            );
          })}
        </div>
      </div>
    </>
  );
}