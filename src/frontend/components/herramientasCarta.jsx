import React from 'react';
import { motion } from 'framer-motion';

export default function TechCard({ icon, name, color }) {
  return (
    <div className="group relative w-24 h-32 md:w-32 md:h-44 shrink-0 flex flex-col items-center justify-center transition-all duration-700 bg-transparent border-none outline-none select-none">
      
      {/* IDENTIFICADOR GHOST (Más pequeño en móvil) */}
      <div className="absolute top-0 left-0 text-[6px] md:text-[7px] font-mono text-white/5 uppercase tracking-[0.4em] hidden md:block">
        L-UNIT_ACTIVE
      </div>

      {/* ICONO ESCALABLE */}
      <div className={`text-4xl md:text-6xl mb-2 md:mb-4 transition-all duration-700 group-hover:scale-125 md:group-hover:-translate-y-3 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] ${color}`}>
        {icon}
      </div>
      
      {/* TEXTO ADAPTADO */}
      <p className="text-[9px] md:text-[11px] font-black tracking-[0.1em] md:tracking-[0.2em] text-gray-500 group-hover:text-white transition-all uppercase font-mono italic leading-none text-center">
        {name}
      </p>

      {/* INDICADORES DE ESTADO (Ocultos en móvil para limpieza visual) */}
      <div className="mt-2 md:mt-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex">
        {[...Array(3)].map((_, i) => (
          <motion.div 
            key={i} 
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }} 
            transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }} 
            className="w-1 h-1 bg-indigo-500 rounded-full shadow-[0_0_8px_#6366f1]" 
          />
        ))}
      </div>
    </div>
  );
}