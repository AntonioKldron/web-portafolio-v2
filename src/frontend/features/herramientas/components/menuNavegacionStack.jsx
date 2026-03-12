import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export default function MenuNavegacionStack({ categorias, indiceActivo, alSeleccionar }) {
  const [estaAbierto, setEstaAbierto] = useState(false);

  return (
    <>
      {/* Móvil */}
      <div className="lg:hidden w-full z-40 relative">
        <button 
          onClick={() => setEstaAbierto(!estaAbierto)} 
          className="w-full flex items-center justify-between p-4 bg-[#030712]/60 border border-white/10 rounded-2xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-4 text-indigo-400">
            {categorias[indiceActivo]?.icon}
            <span className="text-xs font-black uppercase text-white">{categorias[indiceActivo]?.title}</span>
          </div>
          <motion.div animate={{ rotate: estaAbierto ? 180 : 0 }}><FaChevronDown className="text-indigo-500" /></motion.div>
        </button>
        <AnimatePresence>
          {estaAbierto && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 5 }} exit={{ opacity: 0, y: -10 }} className="absolute top-full left-0 w-full mt-2 bg-[#030712]/95 border border-white/10 rounded-2xl backdrop-blur-3xl overflow-hidden z-50 shadow-2xl">
              {categorias.map((cat, idx) => (
                <button key={cat.id} onClick={() => { alSeleccionar(idx); setEstaAbierto(false); }} className={`w-full flex items-center gap-4 p-4 ${indiceActivo === idx ? 'bg-indigo-500/10 text-white' : 'text-white/40'}`}>
                  <div className="text-lg">{cat.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-widest">{cat.title}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Escritorio */}
      <div className="hidden lg:flex lg:col-span-3 flex-col gap-2 p-3 bg-[#030712]/40 border border-white/5 rounded-[2.2rem] backdrop-blur-[40px] z-30 shadow-2xl max-w-[260px] ring-1 ring-white/5 shrink-0">
        <div className="flex px-3 py-2 items-center justify-between border-b border-white/10 mb-2">
          <div className="flex flex-col">
            <span className="text-[5px] font-mono text-indigo-500/80 uppercase tracking-[0.6em] font-black leading-none text-left">Registry</span>
            <span className="text-[8px] font-black text-white/90 uppercase tracking-tighter mt-1 text-left">Stack</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
        </div>
        {categorias.map((cat, idx) => {
          const esActivo = indiceActivo === idx;
          return (
            <button key={cat.id} onClick={() => alSeleccionar(idx)} className={`relative flex items-center gap-4 p-3 transition-all duration-700 rounded-[1.2rem] ${esActivo ? 'bg-gradient-to-r from-indigo-600/10 via-indigo-600/5 to-transparent' : 'bg-transparent opacity-20 hover:opacity-80'}`}>
              {esActivo && <motion.div layoutId="navLine" className="absolute left-0 w-[4px] h-8 bg-indigo-500 shadow-[0_0_20px_#6366f1] rounded-r-full" />}
              <div className={`text-lg z-10 ${esActivo ? 'text-white scale-110' : 'text-indigo-400'}`}>{cat.icon}</div>
              <h3 className={`text-[9px] font-black tracking-[0.2em] uppercase transition-all ${esActivo ? 'text-white text-left' : 'text-white/40 text-left'}`}>{cat.title}</h3>
            </button>
          );
        })}
      </div>
    </>
  );
}