import React from 'react';
import { motion } from 'framer-motion';

export default function CartaTecnologia({ icono, nombre, colorMarca }) {
  return (
    <div className="group relative w-24 h-32 md:w-32 md:h-44 shrink-0 flex flex-col items-center justify-center select-none">
      {/* Ghost ID para estética de ingeniería */}
      <div className="absolute top-0 left-0 text-[7px] font-mono text-white/5 uppercase tracking-[0.4em] hidden md:block">
        UNIT_PRX_{nombre?.substring(0, 3)}
      </div>

      <div className={`text-4xl md:text-6xl mb-4 transition-all duration-700 group-hover:scale-125 md:group-hover:-translate-y-3 ${colorMarca}`}>
        {icono}
      </div>
      
      <p className="text-[10px] md:text-[11px] font-black tracking-widest text-gray-500 group-hover:text-white transition-colors uppercase font-mono italic text-center">
        {nombre}
      </p>

      {/* Indicadores de Estado */}
      <div className="mt-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex">
        {[...Array(3)].map((_, i) => (
          <motion.div 
            key={i} 
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }} 
            transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }} 
            className="w-1 h-1 bg-indigo-500 rounded-full shadow-[0_0_8px_#6366f1]" 
          />
        ))}
      </div>
    </div>
  );
}