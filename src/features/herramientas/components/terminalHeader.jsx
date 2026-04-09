import React from 'react';

export default function TerminalHeader({ isDark, nombreRutaTerminal }) {
  return (
    <header className={`flex items-center justify-between px-5 py-3 border-b shrink-0 transition-colors
      ${isDark ? 'bg-slate-900/60 border-cyan-500/20' : 'bg-slate-100 border-slate-200'}`}>
      <div className="flex gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50 shadow-[0_0_5px_rgba(239,68,68,0.4)]" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
        <div className={`w-2.5 h-2.5 rounded-full ${isDark ? 'bg-cyan-500/60 shadow-[0_0_8px_rgba(6,182,212,0.6)]' : 'bg-emerald-500/50'}`} />
      </div>
      
      <div className="flex items-center gap-2 overflow-hidden px-2">
        <span className={`text-[9px] font-mono font-bold tracking-[0.2em] uppercase whitespace-nowrap 
          ${isDark ? 'text-cyan-400' : 'text-slate-600'}`}>
          root@AntonioKldron:~/{nombreRutaTerminal}
        </span>
      </div>

      <div className={`text-[9px] font-mono font-black animate-pulse hidden sm:block
        ${isDark ? 'text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]' : 'text-emerald-600'}`}>
        [ ACTIVE ]
      </div>
    </header>
  );
}