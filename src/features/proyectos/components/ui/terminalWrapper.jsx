import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function TerminalWrapper({ children, isDark, path = 'github_ecosystem' }) {
  // Añadimos el estado de velocidad para que el slider sea interactivo
  // (Aunque aquí sea solo visual, mantiene el diseño exacto que pediste)
  const [velocidad, setVelocidad] = useState(10);

  return (
    <div className={`relative w-full rounded-2xl border overflow-hidden backdrop-blur-md flex flex-col transition-all duration-700 
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
            root@AntonioKldron:~/{path}
          </span>
        </div>

        <div className={`text-[9px] font-mono font-black animate-pulse hidden sm:block
          ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
          [ ACTIVE ]
        </div>
      </div>

      {/* --- CUERPO (CONTENIDO) --- */}
      <div className="relative flex-grow flex flex-col w-full overflow-hidden bg-transparent">
        {isDark && (
          <motion.div 
            animate={{ y: [-20, 2000] }} // Ajustado a 2000 porque esta terminal será más alta
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="absolute inset-x-0 h-[1px] bg-indigo-500/20 z-0 pointer-events-none"
          />
        )}
        
        {/* Aquí es donde se inyectan tus paneles de Github (Ecosistema, Proyectos, Calendario) */}
        <div className="relative z-10 flex flex-col w-full h-full">
          {children}
        </div>
      </div>

      {/* --- FOOTER INTEGRADO --- */}
      <div className={`px-4 py-3 border-t flex flex-wrap justify-between items-center gap-y-3 gap-x-2 font-mono text-[9px] shrink-0
        ${isDark ? 'bg-slate-900/80 border-indigo-500/20 text-indigo-400/70' : 'bg-slate-100/80 border-slate-200 text-slate-500'}`}>
        
        {/* Item 1: KERNEL READY */}
        <div className="flex items-center gap-1.5 font-bold shrink-0 order-1">
          <span className={`w-1.5 h-1.5 rounded-full animate-ping ${isDark ? 'bg-emerald-400' : 'bg-indigo-600'}`} />
          <span>SYS.SPEED:[{velocidad}00MHz]</span>
        </div>

        {/* Item 3: COMPILING */}
        <div className="flex items-center gap-2 italic shrink-0 order-2 md:order-3">
          <span className="opacity-50">COMPILING...</span>
          <span className={`font-black ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>100%</span>
        </div>
      </div>

    </div>
  );
}