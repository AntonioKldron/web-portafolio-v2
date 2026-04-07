import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '@app/context/appContext';

export default function CartaTecnologia({ icono, nombre, colorMarca }) {
  const { isDark } = useApp();

  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative w-24 h-32 md:w-32 md:h-40 flex flex-col items-center justify-center select-none cursor-pointer"
    >
      {/* Icono limpio: Sin sombras de luz ni resplandores, solo crece un poco */}
      <div className={`text-5xl md:text-6xl mb-4 transition-transform duration-500 group-hover:scale-110 ${colorMarca}`}>
        {icono}
      </div>
      
      {/* Texto limpio y moderno */}
      <p className={`text-[10px] md:text-[11px] font-black tracking-widest transition-colors duration-300 uppercase font-mono text-center
        ${isDark ? 'text-slate-500 group-hover:text-slate-200' : 'text-slate-400 group-hover:text-slate-700'}`}>
        {nombre}
      </p>
    </motion.div>
  );
}
