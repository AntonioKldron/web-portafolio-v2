import React from 'react';
import { useApp } from '../context/AppContext'; 
import { useTranslation } from '../hooks/useTranslation';
import { footerData } from '../data/footer/footerData';

const Footer = () => {
  const { isDark } = useApp();
  const t = useTranslation(footerData);

  return (
    // Se eliminó cualquier rastro de bg o bordes estructurales
    <footer className="w-full pt-20 pb-16 flex flex-col items-center gap-6 relative overflow-hidden group bg-transparent">
      
      {/* 1. Línea decorativa: Gradiente sutil sin bordes */}
      <div className={`w-full h-[1px] bg-gradient-to-r from-transparent 
        ${isDark 
          ? 'via-indigo-600/50 via-purple-600/50 shadow-[0_0_20px_rgba(139,92,246,0.2)]' 
          : 'via-white/30 shadow-[0_0_10px_rgba(255,255,255,0.2)]'} 
        to-transparent`} 
      />
      
      <div className="flex flex-col items-center gap-4 relative z-10 text-center">
        
        {/* 2. NOMBRE */}
        <p className="text-[13px] md:text-[15px] tracking-[0.5em] font-mono uppercase leading-relaxed font-black">
          <span className={isDark 
            ? "bg-gradient-to-b from-violet-200 via-purple-400 to-purple-800 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(168,85,247,0.4)]"
            : "text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
          }>
            {footerData.nombre}
          </span>
        </p>
        
        {/* 3. CREDITOS */}
        <p className="text-[10px] tracking-[0.3em] font-mono uppercase flex flex-wrap justify-center gap-2 font-bold">
          <span className={isDark ? "text-slate-400" : "text-white/90"}>
            © {new Date().getFullYear()}
          </span>
          
          <span className={isDark ? "text-purple-600" : "text-white/40"}>//</span>
          
          <span className={isDark ? "text-slate-400" : "text-white/90"}>
            {t.rights}
          </span>
          
          <span className={isDark ? "text-purple-600" : "text-white/40"}>//</span>
          
          {/* Rol: Se eliminó el 'border-b' en modo Light */}
          <span className={isDark 
            ? "bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]"
            : "text-white"
          }>
            {t.rol}
          </span>
        </p>
      </div>

      {/* 4. Resplandores de fondo: Se mantienen mínimos para dar profundidad sin ser un "fondo" sólido */}
      <div className={`absolute -bottom-12 left-1/2 -translate-x-1/2 w-full max-w-3xl h-40 blur-[130px] pointer-events-none transition-all duration-700
        ${isDark ? 'bg-purple-900/10' : 'bg-white/5'}`} 
      />
    </footer>
  );
};

export default Footer;