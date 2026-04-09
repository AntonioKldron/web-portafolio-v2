import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

export default function TerminalNavigation({ categorias, indiceCategoria, setIndiceCategoria, isDark, mobileMode, slimScrollbar }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Validamos que la categoría activa sea la primera que tenga items por si el índice inicial está vacío
  const categoriaActiva = categorias[indiceCategoria];

  return (
    <>
      {/* --- MODO SELECT (MÓVIL) --- */}
      {mobileMode === "select" && (
        <div className="relative w-full z-[60] md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl border backdrop-blur-xl transition-all duration-500
              ${isDark 
                ? 'bg-slate-950/60 border-cyan-500/30 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)]' 
                : 'bg-white/80 border-slate-200 text-slate-700 shadow-lg'}`}
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">{categoriaActiva?.icon}</span>
              <span className="text-xs font-mono font-black uppercase tracking-[0.2em]">{categoriaActiva?.title}</span>
            </div>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ type: "spring", stiffness: 300 }}>
              <FiChevronDown className="text-xl" />
            </motion.div>
          </button>

          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`absolute top-[115%] left-0 right-0 rounded-2xl border overflow-hidden backdrop-blur-2xl z-[70] shadow-2xl
                    ${isDark ? 'bg-slate-950/95 border-cyan-500/30' : 'bg-white/95 border-slate-200'}`}
                >
                  {categorias.map((cat, idx) => {
                    // ✅ VALIDACIÓN: No mostrar en el menú si no tiene items
                    if (!cat.items || cat.items.length === 0) return null;

                    return (
                      <button
                        key={cat.id}
                        onClick={() => { setIndiceCategoria(idx); setIsOpen(false); }}
                        className={`w-full flex items-center gap-5 px-6 py-4 transition-all
                          ${indiceCategoria === idx 
                            ? (isDark ? 'bg-cyan-500/20 text-white' : 'bg-indigo-50 text-indigo-600') 
                            : (isDark ? 'text-slate-400 hover:bg-white/5' : 'text-slate-500 hover:bg-slate-50')}`}
                      >
                        <span className="text-2xl">{cat.icon}</span>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest">{cat.title}</span>
                      </button>
                    );
                  })}
                </motion.div>
                <div className="fixed inset-0 z-[-1]" onClick={() => setIsOpen(false)} />
              </>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* --- MODO SIDEBAR (WEB) --- */}
      {!mobileMode && (
        <nav className={`hidden md:flex md:w-60 flex-col p-3 overflow-y-auto shrink-0 border-l z-30 transition-all duration-500 ${slimScrollbar}
          ${isDark ? 'bg-slate-950/40 border-cyan-500/20 backdrop-blur-xl' : 'bg-slate-50/80 border-slate-200 backdrop-blur-md'}`}>
          <div className="flex flex-col gap-2">
            {categorias.map((cat, idx) => {
              // ✅ VALIDACIÓN: No mostrar botón en Sidebar si no tiene items
              if (!cat.items || cat.items.length === 0) return null;

              const esActivo = indiceCategoria === idx;
              return (
                <motion.button
                  key={cat.id}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setIndiceCategoria(idx)}
                  className={`group relative flex items-center w-full px-5 py-3 gap-4 transition-all duration-300 rounded-xl
                    ${esActivo ? 'cursor-default' : 'opacity-40 hover:opacity-100 hover:bg-cyan-500/5'}`}
                >
                  {esActivo && (
                    <motion.div layoutId="active-pill" className={`absolute inset-0 rounded-xl z-0 border ${isDark ? 'bg-gradient-to-r from-cyan-500/15 to-transparent border-cyan-500/30 shadow-[0_4px_20px_rgba(6,182,212,0.2)]' : 'bg-white border-slate-200 shadow-sm'}`} />
                  )}
                  {esActivo && (
                    <motion.div layoutId="nav-indicator-pc" className={`absolute left-0 top-[25%] h-[50%] w-1 rounded-r-full z-10 ${isDark ? 'bg-cyan-400 shadow-[0_0_15px_#22d3ee]' : 'bg-indigo-600'}`} />
                  )}
                  <div className={`text-xl relative z-10 transition-all duration-500 ${esActivo ? (isDark ? 'text-cyan-400 scale-110 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]' : 'text-indigo-600 scale-110') : (isDark ? 'text-slate-500 group-hover:text-cyan-300' : 'text-slate-400 group-hover:text-indigo-500')}`}>
                    {cat.icon}
                  </div>
                  <h3 className={`text-[10px] font-mono font-black uppercase tracking-[0.2em] text-left truncate relative z-10 ${esActivo ? (isDark ? 'text-white' : 'text-slate-900') : 'text-slate-500'}`}>
                    {cat.title}
                  </h3>
                </motion.button>
              );
            })}
          </div>
        </nav>
      )}
    </>
  );
}