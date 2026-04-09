import React from 'react';

export default function TerminalFooter({ isDark, velocidad, setVelocidad }) {
  return (
    <footer className={`px-4 py-3 border-t flex flex-wrap justify-between items-center gap-y-3 gap-x-2 font-mono text-[9px] shrink-0 z-20
      ${isDark ? 'bg-slate-900/80 border-cyan-500/20 text-cyan-400/80' : 'bg-slate-100/80 border-slate-200 text-slate-500'}`}>
      
      <div className="flex items-center gap-1.5 font-bold shrink-0 order-1">
        <span className={`w-1.5 h-1.5 rounded-full animate-ping ${isDark ? 'bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.8)]' : 'bg-indigo-600'}`} />
        <span>SYS.SPEED:[{velocidad}00MHz]</span>
      </div>

      <div className="flex items-center justify-center gap-2 w-full md:w-auto md:flex-grow max-w-none md:max-w-[220px] order-3 md:order-2">
        <span className="opacity-40">MIN</span>
        <input 
          type="range" min="1" max="20" step="1"
          value={velocidad} 
          onChange={(e) => setVelocidad(Number(e.target.value))}
          className={`w-full h-1 appearance-none rounded-full cursor-pointer outline-none transition-all
            ${isDark ? 'bg-slate-800 accent-cyan-400 hover:accent-cyan-300' : 'bg-slate-300 accent-indigo-600'}`}
        />
        <span className="opacity-40">MAX</span>
      </div>

      <div className="flex items-center gap-2 italic shrink-0 order-2 md:order-3">
        <span className="opacity-50">COMPILING...</span>
        <span className={`font-black ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`}>100%</span>
      </div>
    </footer>
  );
}