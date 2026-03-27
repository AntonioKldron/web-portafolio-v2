import React, { useState, createContext } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '@app/context/appContext';

// ✨ CREAMOS UN CONTEXTO: Esto permite que cualquier componente hijo lea la velocidad sin importar cómo esté envuelto.
export const ConsolaContext = createContext();

export default function ConsolaHabilidades({ children, tituloCategoria }) {
  const { isDark } = useApp();
  const [velocidad, setVelocidad] = useState(10);

  return (
    // ✨ ENVOLVEMOS EL COMPONENTE EN EL PROVIDER
    <ConsolaContext.Provider value={velocidad}>
      <div className={`relative w-full h-[600px] md:h-[480px] rounded-2xl border overflow-hidden backdrop-blur-md flex flex-col transition-all duration-700 
        ${isDark 
          ? 'bg-slate-950/40 border-indigo-500/30 shadow-[0_0_40px_-15px_rgba(79,70,229,0.4)]' 
          : 'bg-white/40 border-slate-200 shadow-xl'}`}>
        
        {/* --- HEADER --- */}
        <div className={`flex items-center justify-between px-5 py-3 border-b shrink-0
          ${isDark ? 'bg-slate-900/60 border-indigo-500/20' : 'bg-slate-100 border-slate-200'}`}>
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
          </div>
          
          <div className="flex items-center gap-2 overflow-hidden px-2">
            <span className={`text-[9px] font-mono font-bold tracking-[0.2em] uppercase whitespace-nowrap 
              ${isDark ? 'text-indigo-300' : 'text-slate-600'}`}>
              root@AntonioKldron:~/{tituloCategoria.toLowerCase().replace(/\s+/g, '_')}
            </span>
          </div>

          <div className={`text-[9px] font-mono font-black animate-pulse hidden sm:block
            ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
            [ ACTIVE ]
          </div>
        </div>

        {/* --- CUERPO (CONTENIDO) --- */}
        <div className="relative flex-grow flex items-center justify-center p-6 overflow-hidden">
          {isDark && (
            <motion.div 
              animate={{ y: [-20, 600] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute inset-x-0 h-[1px] bg-indigo-500/20 z-10 pointer-events-none"
            />
          )}
          <div className="relative z-20 w-full h-full flex flex-col md:flex-row items-center justify-around">
            {children}
          </div>
        </div>

        {/* --- FOOTER INTEGRADO --- */}
        {/* ✨ CAMBIO: Quitamos el hidden, usamos flex-wrap y clases de 'order' para organizarlo bien en móvil y web */}
        <div className={`px-4 py-3 border-t flex flex-wrap justify-between items-center gap-y-3 gap-x-2 font-mono text-[9px] shrink-0
          ${isDark ? 'bg-slate-900/80 border-indigo-500/20 text-indigo-400/70' : 'bg-slate-100/80 border-slate-200 text-slate-500'}`}>
          
          {/* Item 1: KERNEL READY (Arriba a la izquierda en móvil, izquierda en PC) */}
          <div className="flex items-center gap-1.5 font-bold shrink-0 order-1">
            <span className={`w-1.5 h-1.5 rounded-full animate-ping ${isDark ? 'bg-emerald-400' : 'bg-indigo-600'}`} />
            <span>SYS.SPEED:[{velocidad}00MHz]</span>
          </div>

          {/* Item 2: SLIDER (Abajo ocupando todo el ancho en móvil, centro en PC) */}
          <div className="flex items-center justify-center gap-2 w-full md:w-auto md:flex-grow max-w-none md:max-w-[220px] order-3 md:order-2">
            <span className="opacity-40">MIN</span>
            <input 
              type="range" 
              min="1" 
              max="20" 
              step="1"
              value={velocidad} 
              onChange={(e) => setVelocidad(Number(e.target.value))}
              className={`w-full h-1 appearance-none rounded-full cursor-pointer outline-none transition-all
                ${isDark 
                  ? 'bg-indigo-950/80 accent-emerald-400 hover:accent-emerald-300' 
                  : 'bg-slate-300 accent-indigo-600 hover:accent-indigo-500'}`}
            />
            <span className="opacity-40">MAX</span>
          </div>

          {/* Item 3: COMPILING (Arriba a la derecha en móvil, derecha en PC) */}
          <div className="flex items-center gap-2 italic shrink-0 order-2 md:order-3">
            <span className="opacity-50">COMPILING...</span>
            <span className={`font-black ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>100%</span>
          </div>
        </div>

      </div>
    </ConsolaContext.Provider>
  );
}
