import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaCode } from 'react-icons/fa';

export default function CartaCabecera({ data, isOpen, isDark }) {
  const primeraTec = data?.tecnologias?.[0];
  const IconoVisual = primeraTec?.icon || <FaCode />;
  const colorClase = primeraTec?.primary || "text-indigo-500";

  return (
    <div className="relative flex flex-col md:grid md:grid-cols-[auto_1fr_1.5fr_auto] items-center gap-4 md:gap-8 p-4 sm:p-5 transition-all duration-500">
      
      {/* 1. CONTENEDOR TÁCTICO (Fijo) */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className={`relative w-14 h-14 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-500 group/icon
          ${isDark ? 'bg-[#050507] border-white/10 shadow-xl' : 'bg-white border-slate-200 shadow-sm'}`}
      >
        {isDark && (
          <div className={`absolute inset-0 opacity-10 blur-xl group-hover/icon:opacity-25 transition-all duration-700
            ${primeraTec?.secondary || 'bg-indigo-500'}`} 
            style={{ backgroundColor: 'currentColor' }}
          />
        )}
        <div className={`relative z-10 text-[26px] ${colorClase}`}>
          {IconoVisual}
        </div>
        {/* Decoración lateral mini */}
        <div className="absolute -left-1 flex flex-col gap-1">
          <div className={`w-0.5 h-3 rounded-full ${colorClase} opacity-30`} />
        </div>
      </motion.div>

      {/* 2. TÍTULO Y META (Columna 1) */}
      <div className="flex flex-col min-w-0 w-full md:w-auto">
        <div className="flex items-center gap-2 mb-1">
          <span className={`text-[7px] font-bold uppercase tracking-[0.2em] px-1.5 py-0.5 rounded border shrink-0
            ${isDark ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-600'}`}>
            {data.lanzamiento}
          </span>
          <div className={`h-[1px] w-4 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
        </div>
        <h3 className={`text-base lg:text-lg font-black uppercase italic tracking-tighter leading-none truncate transition-all duration-700
          ${isOpen 
            ? (isDark ? 'text-indigo-400' : 'text-indigo-600') 
            : (isDark ? 'text-white' : 'text-slate-800')}`}>
          {data.titulo}
        </h3>
      </div>

      {/* 3. DESCRIPCIÓN (Columna 2 - Se expande) */}
      <div className="hidden md:block w-full border-l border-white/5 pl-6">
        <p className={`text-[11px] leading-relaxed line-clamp-2 transition-opacity duration-500 
          ${isOpen ? 'opacity-20' : 'opacity-60'}
          ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          {data.descripcion_corta}
        </p>
      </div>

      {/* 4. BOTÓN TRIGGER (Fijo) */}
      <motion.div 
        animate={{ rotate: isOpen ? 180 : 0 }}
        className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-500 shrink-0
          ${isOpen 
            ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-500/20' 
            : (isDark ? 'bg-white/5 border-white/10 text-slate-500' : 'bg-white border-slate-200 text-slate-400')}`}
      >
        <FaChevronDown size={12} />
      </motion.div>

      {/* Versión móvil de la descripción */}
      <div className="md:hidden w-full">
         <p className={`text-[11px] leading-tight line-clamp-2 opacity-60 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          {data.descripcion_corta}
        </p>
      </div>
    </div>
  );
}