import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaCode } from 'react-icons/fa';

export default function CartaCabecera({ data, isOpen, isDark }) {
  const primeraTec = data?.tecnologias?.[0];
  const IconoVisual = primeraTec?.icon || <FaCode />;
  const colorClase = primeraTec?.primary || "text-indigo-500";

  return (
    <div className="relative flex flex-col md:grid md:grid-cols-[auto_1fr_1.5fr_auto] items-start md:items-center gap-3 md:gap-8 p-4 sm:p-5 transition-all duration-500">
      
      <div className="flex flex-row items-center gap-3 sm:gap-4 w-full md:contents">
        
        {/* 1. CONTENEDOR TÁCTICO (Fila 1, Columna 1 forzada en escritorio) */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-500 group/icon bg-white border-slate-200 shadow-sm md:col-start-1 md:row-start-1"
        >
          {isDark && (
            <div className={`absolute inset-0 opacity-10 blur-xl group-hover/icon:opacity-20 transition-all duration-700
              ${primeraTec?.secondary || 'bg-indigo-500'}`} 
              style={{ backgroundColor: 'currentColor' }}
            />
          )}
          <div className={`relative z-10 text-[22px] md:text-[26px] ${colorClase}`}>
            {IconoVisual}
          </div>
          <div className="absolute -left-1 flex flex-col gap-1">
            <div className={`w-0.5 h-3 rounded-full ${colorClase} opacity-30`} />
          </div>
        </motion.div>

        {/* 2. TÍTULO Y META (Fila 1, Columna 2 forzada en escritorio) */}
        <div className="flex flex-col min-w-0 flex-1 md:w-auto md:col-start-2 md:row-start-1">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-[7px] font-bold uppercase tracking-[0.2em] px-1.5 py-0.5 rounded border shrink-0
              ${isDark ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-600'}`}>
              {data.lanzamiento}
            </span>
            <div className={`h-[1px] w-4 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
          </div>
          <h3 className={`text-sm sm:text-base lg:text-lg font-black uppercase italic tracking-tighter leading-tight break-words transition-all duration-700
            ${isOpen 
              ? (isDark ? 'text-indigo-400' : 'text-indigo-600') 
              : (isDark ? 'text-white' : 'text-slate-800')}`}>
            {data.titulo}
          </h3>
        </div>

        {/* 4. BOTÓN TRIGGER (Fila 1, Columna 4 forzada en escritorio) */}
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`w-8 h-8 md:w-9 md:h-9 rounded-lg border flex items-center justify-center transition-all duration-500 shrink-0 md:col-start-4 md:row-start-1
            ${isOpen 
              ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-500/20' 
              : (isDark ? 'bg-white/5 border-white/10 text-slate-500' : 'bg-white border-slate-200 text-slate-400')}`}
        >
          <FaChevronDown size={12} />
        </motion.div>

      </div>

      {/* 3. DESCRIPCIÓN DESKTOP (Fila 1, Columna 3 forzada en escritorio) */}
      <div className="hidden md:block w-full border-l border-white/5 pl-6 md:col-start-3 md:row-start-1">
        <p className={`text-[11px] leading-relaxed line-clamp-2 transition-opacity duration-500 
          ${isOpen ? 'opacity-20' : 'opacity-60'}
          ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          {data.descripcion_corta}
        </p>
      </div>

      {/* Versión móvil de la descripción (Intacta) */}
      <div className="md:hidden w-full pl-[60px] pr-2 mt-1">
         <p className={`text-[11px] leading-tight text-justify line-clamp-2 opacity-60 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          {data.descripcion_corta}
        </p>
      </div>

    </div>
  );
}