import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaCode } from 'react-icons/fa';

export default function CartaCabecera({ data, isOpen, isDark }) {
  
  /**
   * EXPLICACIÓN DEL FIX:
   * Como tu data trae: icon: <SiReact />, esto ya es JSX.
   * No se usa <Icono />, se usa directamente {Icono}.
   */
  const primeraTec = data?.tecnologias?.[0];
  const IconoVisual = primeraTec?.icon || <FaCode />;
  // También extraemos el color primario de tu data para el brillo dinámico
  const colorClase = primeraTec?.primary || "text-indigo-500";

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 p-6 sm:p-10 transition-all duration-500">
      <div className="flex items-center gap-8 flex-1">
        
        {/* --- CONTENEDOR TÁCTICO --- */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className={`relative w-20 h-20 lg:w-28 lg:h-28 rounded-[2rem] border-2 flex items-center justify-center shrink-0 transition-all duration-500 group/icon
            ${isDark 
              ? 'bg-[#050507] border-white/5 shadow-2xl shadow-black' 
              : 'bg-white border-slate-200 shadow-sm'}`}
        >
          {/* Brillo dinámico basado en el color de la tecnología */}
          {isDark && (
            <div className={`absolute inset-0 opacity-10 blur-2xl group-hover/icon:opacity-30 transition-all duration-700
              ${primeraTec?.secondary || 'bg-indigo-500'}`} 
              style={{ backgroundColor: 'currentColor' }}
            />
          )}

          {/* RENDERIZADO DEL ICONO: Al ser JSX se usa con llaves {} */}
          <div className={`relative z-10 transition-all duration-500 group-hover/icon:scale-110 text-[40px] lg:text-[50px]
            ${colorClase}`}>
            {IconoVisual}
          </div>

          {/* Decoración lateral */}
          <div className="absolute -left-1.5 flex flex-col gap-1.5">
            {[1, 2, 3].map(i => (
              <motion.div 
                key={i}
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                className={`w-1 h-3 rounded-full ${colorClase} opacity-40`}
              />
            ))}
          </div>
        </motion.div>

        {/* --- CONTENIDO DE TEXTO --- */}
        <div className="flex flex-col space-y-3 flex-1">
          <div className="flex items-center gap-3">
            <span className={`text-[10px] font-black uppercase tracking-[0.3em] px-2 py-0.5 rounded
              ${isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
              {data.lanzamiento}
            </span>
          </div>
          
          <h3 className={`text-2xl lg:text-4xl font-black uppercase italic tracking-tighter leading-none transition-all duration-700
            ${isOpen 
              ? (isDark ? 'text-indigo-400' : 'text-indigo-600') 
              : (isDark ? 'text-white' : 'text-slate-800')}`}>
            {data.titulo}
          </h3>
          
          <p className={`text-[15px] max-w-2xl leading-relaxed line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {data.descripcion_corta}
          </p>
        </div>
      </div>

      <motion.div 
        animate={{ rotate: isOpen ? 180 : 0 }}
        className={`p-4 rounded-full border-2 transition-all duration-500
          ${isOpen 
            ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg' 
            : (isDark ? 'bg-white/5 border-white/10 text-slate-500' : 'bg-white border-slate-200 text-slate-400')}`}
      >
        <FaChevronDown size={20} />
      </motion.div>
    </div>
  );
}