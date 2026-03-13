import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../../context/AppContext';

export default function CartaTecnologia({ icono, nombre, colorMarca }) {
  const { isDark } = useApp();

  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.05 }}
      className="group relative w-24 h-32 md:w-32 md:h-40 flex flex-col items-center justify-center select-none"
    >
      {/* Resplandor de fondo al hacer hover */}
      <div className={`absolute inset-0 rounded-full blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-500
        ${isDark ? 'bg-indigo-500' : 'bg-indigo-300'}`} />

      <div className={`text-5xl md:text-6xl mb-4 transition-all duration-500 drop-shadow-sm group-hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.8)] ${colorMarca}`}>
        {icono}
      </div>
      
      <p className={`text-[10px] md:text-[11px] font-black tracking-widest transition-all duration-500 uppercase font-mono italic text-center
        ${isDark ? 'text-slate-500 group-hover:text-white' : 'text-slate-400 group-hover:text-indigo-600'}`}>
        {nombre}
      </p>

      {/* Decoración inferior de carga */}
      <div className="mt-3 flex gap-1.5 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div 
            key={i} 
            animate={{ 
              backgroundColor: isDark ? ["#312e81", "#6366f1", "#312e81"] : ["#cbd5e1", "#6366f1", "#cbd5e1"]
            }} 
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }} 
            className="w-1 h-1 rounded-full shadow-sm" 
          />
        ))}
      </div>
    </motion.div>
  );
}