import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../../context/AppContext';

export default function ConsolaHabilidades({ children, tituloCategoria }) {
  const { isDark } = useApp();

  return (
    <div className={`relative w-full h-[520px] md:h-[480px] rounded-2xl border overflow-hidden backdrop-blur-md flex flex-col transition-all duration-700 
      ${isDark 
        ? 'bg-slate-950/40 border-indigo-500/30 shadow-[0_0_40px_-15px_rgba(79,70,229,0.4)]' 
        : 'bg-white/40 border-slate-200 shadow-xl'}`}>
      
      {/* --- CABECERO MEJORADO --- */}
      <div className={`flex items-center justify-between px-5 py-3 border-b shrink-0
        ${isDark ? 'bg-slate-900/60 border-indigo-500/20' : 'bg-slate-100 border-slate-200'}`}>
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50 shadow-[0_0_5px_rgba(16,185,129,0.5)]" />
        </div>
        
        {/* Título de sesión dinámico */}
        <div className="flex items-center gap-2 overflow-hidden">
          <span className={`text-[9px] font-mono font-bold tracking-[0.2em] uppercase whitespace-nowrap 
            ${isDark ? 'text-indigo-300' : 'text-slate-600'}`}>
            root@jose_cornelio:~/{tituloCategoria.toLowerCase().replace(/\s+/g, '_')}
          </span>
        </div>

        {/* Estado de ejecución */}
        <div className={`text-[9px] font-mono font-black animate-pulse hidden sm:block
          ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
          [ EXECUTION_ACTIVE ]
        </div>
      </div>

      {/* Cuerpo */}
      <div className="relative flex-grow p-6 md:p-10 overflow-hidden">
        {isDark && (
          <motion.div 
            animate={{ y: [-20, 400] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute inset-x-0 h-[1px] bg-indigo-500/20 z-10 pointer-events-none"
          />
        )}
        <div className="relative z-20 h-full w-full">
          {children}
        </div>
      </div>

      {/* --- FOOTER MEJORADO --- */}
      <div className={`px-5 py-2 border-t flex justify-between items-center font-mono text-[9px] shrink-0
        ${isDark ? 'bg-slate-900/40 border-indigo-500/20 text-indigo-400/50' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
        
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
            <span className="font-bold">KERNEL_READY</span>
          </div>
          <span className="hidden lg:inline border-l border-current pl-4">MEMORY: STABLE</span>
          <span className="hidden md:inline border-l border-current pl-4 text-emerald-500/70">UPLINK_ESTABLISHED</span>
        </div>

        <div className="flex items-center gap-2 italic">
          <span className="opacity-50">COMPILING...</span>
          <span className="font-black text-indigo-500">100%</span>
        </div>
      </div>
    </div>
  );
}