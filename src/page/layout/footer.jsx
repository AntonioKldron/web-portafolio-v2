import React from 'react';
import { useApp } from '@context/appContext'; 
import { useTranslation } from '@shared/hooks/useTranslation';
import { footerData } from '@data/footer/footerData';

const Footer = () => {
  const { isDark } = useApp();
  const t = useTranslation(footerData);

  return (
    <footer className="w-full pt-20 pb-10 flex flex-col items-center gap-8 relative group">
      
      {/* 1. GLOW AMBIENTAL - Sutil y atmosférico */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-48 blur-[100px] rounded-[100%] pointer-events-none transition-all duration-1000
        ${isDark 
          ? 'bg-blue-900/20' 
          : 'bg-slate-300/40'}`} 
      />

      {/* 2. LÍNEA DIVISORIA - Minimalista con destello al hover */}
      <div className="relative w-full max-w-4xl px-6 flex justify-center">
        {/* Línea base muy suave */}
        <div className={`w-full h-[1px] bg-gradient-to-r from-transparent 
          ${isDark ? 'via-slate-700/50' : 'via-slate-300'} 
          to-transparent transition-all duration-700`} 
        />
        {/* Destello de luz central estético (aparece en hover) */}
        <div className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-0 h-[1px] 
          ${isDark 
            ? 'bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]' 
            : 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]'}
          group-hover:w-40 transition-all duration-1000 ease-out`} 
        />
      </div>
      
      {/* 3. CONTENIDO PRINCIPAL */}
      <div className="flex flex-col items-center gap-5 relative z-10 text-center">
        
        {/* NOMBRE - Animación holográfica con pausas orgánicas */}
        <div className="relative flex flex-col items-center select-none pointer-events-none">
          <p className={`text-[13px] md:text-[16px] tracking-[0.5em] font-mono uppercase font-black 
            bg-clip-text text-transparent animate-holograph
            ${isDark 
              ? 'bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300' 
              : 'bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 drop-shadow-[0_0_4px_rgba(59,130,246,0.3)]'}`}>
            {footerData.nombre}
          </p>
        </div>
        
        {/* CRÉDITOS Y ROL */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-2">
          <p className="text-[11px] md:text-[12px] tracking-[0.2em] font-mono uppercase flex flex-wrap justify-center items-center gap-4 font-medium">
            
            {/* Año */}
            <span className={`transition-colors duration-300 ${isDark ? "text-slate-400 hover:text-slate-200" : "text-slate-500 hover:text-slate-800"}`}>
              © {new Date().getFullYear()}
            </span>

            {/* SEPARADOR 1: Punto minimalista */}
            <span className={`w-1 h-1 rounded-full ${isDark ? "bg-cyan-500/60 shadow-[0_0_8px_rgba(34,211,238,0.8)]" : "bg-blue-500/50"}`}></span>
                  
            {/* Derechos */}
            <span className={`transition-colors duration-300 ${isDark ? "text-slate-400 hover:text-slate-200" : "text-slate-500 hover:text-slate-800"}`}>
              {t.rights}
            </span>            

            {/* SEPARADOR 2: Punto minimalista */}
            <span className={`w-1 h-1 rounded-full ${isDark ? "bg-blue-500/60 shadow-[0_0_8px_rgba(59,130,246,0.8)]" : "bg-blue-500/50"}`}></span>

            {/* Rol - Toque de color profesional y elegante */}
            <span className={`transition-all duration-300 font-semibold ${isDark 
              ? "text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
              : "text-blue-600 hover:text-blue-700"
            }`}>
              {t.rol}
            </span>
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;