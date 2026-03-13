import React from 'react';
import { useApp } from '../context/AppContext'; 
import { useTranslation } from '../hooks/useTranslation';
import { footerData } from '../data/footer/footerData';

const Footer = () => {
  const { lang } = useApp();
  const t = useTranslation(footerData);

  return (
    <footer className="w-full pt-20 pb-16 flex flex-col items-center gap-6 relative overflow-hidden group">
      
      {/* 1. Línea decorativa - Ahora mucho más brillante para que se vea */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-violet-400 via-cyan-400 to-transparent shadow-[0_0_15px_rgba(167,139,250,0.8)]" />
      
      <div className="flex flex-col items-center gap-4 relative z-10 text-center">
        
        {/* 2. NOMBRE: Morado Neón Brillante (Máxima visibilidad) */}
        <p className="text-[13px] md:text-[15px] tracking-[0.5em] font-mono uppercase leading-relaxed font-black">
          <span className="
            text-[#d8b4fe] 
            drop-shadow-[0_0_10px_rgba(216,180,254,0.8)]
          ">
            {footerData.nombre}
          </span>
        </p>
        
        {/* 3. CREDITOS: Colores sólidos para que no se trasluzca el fondo */}
        <p className="text-[10px] tracking-[0.3em] font-mono uppercase flex flex-wrap justify-center gap-2 font-bold">
          <span className="text-slate-200">© {new Date().getFullYear()}</span>
          
          <span className="text-[#a855f7]">//</span>
          
          <span className="text-slate-200">{t.rights}</span>
          
          <span className="text-[#a855f7]">//</span>
          
          {/* Rol en Cian Eléctrico */}
          <span className="text-[#22d3ee] drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
            {t.rol}
          </span>
        </p>
      </div>

      {/* 4. Resplandor de fondo más potente para dar contraste */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full max-w-3xl h-40 bg-violet-600/20 blur-[100px] pointer-events-none" />
    </footer>
  );
};

export default Footer;