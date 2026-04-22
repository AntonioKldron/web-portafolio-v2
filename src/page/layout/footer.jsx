import React from 'react';
import { useApp } from '@context/appContext'; 
import { useTranslation } from '@shared/hooks/useTranslation';
import { footerData } from '@data/footer/footerData';

const Footer = () => {
  const { isDark } = useApp();
  const t = useTranslation(footerData);

  return (
    <footer className="w-full pt-20 pb-10 flex flex-col items-center gap-8 relative group">
      
      {/* ESTILOS DE ANIMACIÓN PARA LA HÉLICE DE FONDO */}
      <style>
        {`
          @keyframes flow-front { to { stroke-dashoffset: -150; } }
          .animate-flow-front { animation: flow-front 4s linear infinite; }

          @keyframes flow-back { to { stroke-dashoffset: 120; } }
          .animate-flow-back { animation: flow-back 5s linear infinite; }

          @keyframes flow-middle { to { stroke-dashoffset: -120; } }
          .animate-flow-middle { animation: flow-middle 6s linear infinite; }
        `}
      </style>

      {/* 0. HÉLICE CUÁNTICA DE FONDO - (Detrás de todo) */}
      <div className={`absolute top-1/2 -translate-y-1/2 w-full max-w-6xl h-[160px] flex items-center justify-center z-0 pointer-events-none transition-opacity duration-1000 ${isDark ? 'opacity-60' : 'opacity-40'}`}>
        <svg viewBox="0 0 1000 120" className="w-full h-full overflow-visible" preserveAspectRatio="none">
          <defs>
            <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Gradiente 1: Azul Neón Brillante / Cyan Eléctrico */}
            <linearGradient id="fade-front" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor={isDark ? "#00FFFF" : "#00BFFF"} />
              <stop offset="70%" stopColor={isDark ? "#00FFFF" : "#00BFFF"} />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            
            {/* Gradiente 2: Azul Profundo Puro */}
            <linearGradient id="fade-back" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor={isDark ? "#0033FF" : "#0000FF"} />
              <stop offset="70%" stopColor={isDark ? "#0033FF" : "#0000FF"} />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            
            {/* Gradiente 3: Azul Rey Vibrante */}
            <linearGradient id="fade-middle" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor={isDark ? "#0088FF" : "#0044FF"} />
              <stop offset="70%" stopColor={isDark ? "#0088FF" : "#0044FF"} />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          <path
            d="M 0 60 Q 125 -10, 250 60 T 500 60 T 750 60 T 1000 60"
            stroke="url(#fade-front)"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="0.1 50"
            className="animate-flow-front"
            style={{ filter: "url(#neon-glow)" }}
          />

          <path
            d="M 0 60 Q 125 130, 250 60 T 500 60 T 750 60 T 1000 60"
            stroke="url(#fade-back)"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="0.1 40"
            className="animate-flow-back opacity-90"
            style={{ filter: "url(#neon-glow)" }}
          />

          <path
            d="M 0 60 Q 250 10, 500 60 T 1000 60"
            stroke="url(#fade-middle)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="0.1 30"
            className="animate-flow-middle opacity-80"
            style={{ filter: "url(#neon-glow)" }}
          />
        </svg>
      </div>

      {/* 1. GLOW AMBIENTAL - Sutil y atmosférico */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-48 blur-[100px] rounded-[100%] pointer-events-none transition-all duration-1000 z-0
        ${isDark 
          ? 'bg-[#0033ff]/30' 
          : 'bg-[#0088ff]/25'}`} 
      />

      {/* 3. CONTENIDO PRINCIPAL */}
      <div className="flex flex-col items-center gap-5 relative z-10 text-center">
        
        {/* NOMBRE - Animación holográfica en tonos azules intensos */}
        <div className="relative flex flex-col items-center select-none pointer-events-none">
          <p className={`text-[13px] md:text-[16px] tracking-[0.5em] font-mono uppercase font-black 
            bg-clip-text text-transparent animate-holograph
            ${isDark 
              ? 'bg-gradient-to-r from-[#00FFFF] via-[#0066FF] to-[#00FFFF] drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]' 
              : 'bg-gradient-to-r from-[#0044FF] via-[#00BFFF] to-[#0044FF] drop-shadow-[0_0_5px_rgba(0,68,255,0.5)]'}`}>
            {footerData.nombre}
          </p>
        </div>
        
      {/* 2. LÍNEA DIVISORIA - Minimalista con destello al hover */}
      <div className="relative w-full max-w-4xl px-6 flex justify-center z-10">
        {/* Línea base muy suave */}
        <div className={`w-full h-[1px] bg-gradient-to-r from-transparent 
          ${isDark ? 'via-blue-800/60' : 'via-blue-400/80'} 
          to-transparent transition-all duration-700`} 
        />
        {/* Destello de luz central estético (aparece en hover) */}
        <div className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-0 h-[1px] 
          ${isDark 
            ? 'bg-[#00FFFF] shadow-[0_0_20px_rgba(0,255,255,0.9)]' 
            : 'bg-[#0044FF] shadow-[0_0_15px_rgba(0,68,255,0.8)]'}
          group-hover:w-48 transition-all duration-1000 ease-out`} 
        />
      </div>
      
    
        {/* CRÉDITOS Y ROL */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-2">
          <p className="text-[11px] md:text-[12px] tracking-[0.2em] font-mono uppercase flex flex-wrap justify-center items-center gap-4 font-medium">
            
            {/* Año */}
            <span className={`transition-colors duration-300 ${isDark ? "text-blue-200 hover:text-white" : "text-blue-900 hover:text-black"}`}>
              © {new Date().getFullYear()}
            </span>

            {/* SEPARADOR 1: Punto minimalista vivo */}
            <span className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-[#00FFFF] shadow-[0_0_10px_rgba(0,255,255,1)]" : "bg-[#0044FF] shadow-[0_0_6px_rgba(0,68,255,0.7)]"}`}></span>
                  
            {/* Derechos */}
            <span className={`transition-colors duration-300 ${isDark ? "text-blue-200 hover:text-white" : "text-blue-900 hover:text-black"}`}>
              {t.rights}
            </span>            

            {/* SEPARADOR 2: Punto minimalista vivo */}
            <span className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-[#00BFFF] shadow-[0_0_10px_rgba(0,191,255,0.9)]" : "bg-[#0044FF] shadow-[0_0_6px_rgba(0,68,255,0.7)]"}`}></span>

            {/* Rol - Toque de color vibrante y elegante */}
            <span className={`transition-all duration-300 font-bold ${isDark 
              ? "text-[#00FFFF] hover:text-white hover:drop-shadow-[0_0_12px_rgba(0,255,255,0.8)]"
              : "text-[#0044FF] hover:text-[#0000FF]"
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