import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaCode } from 'react-icons/fa';

export default function CartaCabecera({ data, isOpen, isDark }) {
  const primeraTec = data?.tecnologias?.[0];
  const IconoVisual = primeraTec?.icon || <FaCode />;
  const colorClase = primeraTec?.primary || "text-indigo-500";

  return (
    <div className="relative flex flex-row items-center justify-between gap-6 p-4 sm:p-5 transition-all duration-500">
      
      <div className="flex items-center gap-6 flex-1">
        
        {/* --- CONTENEDOR TÁCTICO COMPACTO --- */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className={`relative w-14 h-14 lg:w-16 lg:h-16 rounded-2xl border flex items-center justify-center shrink-0 transition-all duration-500 group/icon
            ${isDark 
              ? 'bg-[#050507] border-white/10 shadow-xl' 
              : 'bg-white border-slate-200 shadow-sm'}`}
        >
          {/* Brillo sutil */}
          {isDark && (
            <div className={`absolute inset-0 opacity-10 blur-xl group-hover/icon:opacity-25 transition-all duration-700
              ${primeraTec?.secondary || 'bg-indigo-500'}`} 
              style={{ backgroundColor: 'currentColor' }}
            />
          )}

          <div className={`relative z-10 transition-all duration-500 group-hover/icon:scale-110 text-[28px] lg:text-[32px]
            ${colorClase}`}>
            {IconoVisual}
          </div>

          {/* Decoración lateral mini */}
          <div className="absolute -left-1 flex flex-col gap-1">
            {[1, 2].map(i => (
              <div key={i} className={`w-0.5 h-2 rounded-full ${colorClase} opacity-30`} />
            ))}
          </div>
        </motion.div>

        {/* --- CONTENIDO DE TEXTO REFINADO --- */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <span className={`text-[8px] font-bold uppercase tracking-[0.2em] px-1.5 py-0.5 rounded border
              ${isDark 
                ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400' 
                : 'bg-emerald-50 border-emerald-200 text-emerald-600'}`}>
              {data.lanzamiento}
            </span>
          </div>
          
          <h3 className={`text-lg lg:text-xl font-black uppercase italic tracking-tighter leading-tight transition-all duration-700
            ${isOpen 
              ? (isDark ? 'text-indigo-400' : 'text-indigo-600') 
              : (isDark ? 'text-white' : 'text-slate-800')}`}>
            {data.titulo}
          </h3>
          
          <p className={`text-[12px] max-w-xl leading-snug line-clamp-1 transition-opacity duration-500 
            ${isOpen ? 'opacity-40' : 'opacity-100'}
            ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {data.descripcion_corta}
          </p>
        </div>
      </div>

      {/* --- BOTÓN TRIGGER MINI --- */}
      <motion.div 
        animate={{ rotate: isOpen ? 180 : 0 }}
        className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-500 shrink-0
          ${isOpen 
            ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-500/20' 
            : (isDark ? 'bg-white/5 border-white/10 text-slate-500' : 'bg-white border-slate-200 text-slate-400')}`}
      >
        <FaChevronDown size={14} />
      </motion.div>
    </div>
  );
}