import React from 'react';
import { motion } from 'framer-motion';

export default function ColumnaHeader({ numero, titulo, Icono, delay = 0 }) {
  return (
    <header className="relative flex items-end gap-5 mb-14 group select-none">
      {/* INDICADOR RADAR */}
      <div className="relative flex items-center justify-center w-12 h-12">
        <div className="absolute inset-0 border border-primary-accent/10 rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-700" />
        <div className="absolute inset-1 border border-primary-accent/5 rounded-xl -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
        
        <div className="relative">
          <motion.div 
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-primary-accent/30 blur-md rounded-full"
          />
          {Icono && (
            <Icono 
              className="text-primary-accent relative z-10 filter drop-shadow-[0_0_5px_rgba(var(--primary-accent-rgb),0.8)]" 
              size={20} 
            />
          )}
        </div>

      </div>

      {/* BLOQUE TITULAR TECH */}
      <div className="flex flex-col relative pt-2">
        <div className="flex items-center gap-2 mb-1">
        </div>

        <h3 className="text-4xl font-black text-main-text tracking-[ -0.05em] uppercase italic leading-[0.85] relative">
          <motion.span
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="block whitespace-nowrap"
          >
            {titulo}
          </motion.span>
          
          {/* UNDERLINE DINÁMICO */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[3px] bg-primary-accent mt-1 origin-left"
          />
        </h3>
      </div>

      {/* SEPARADOR DE FLUJO DE DATOS */}
      <div className="flex-1 h-8 mb-1 flex flex-col justify-end relative">
        <div className="w-full h-[1px] bg-main-border/10 relative overflow-hidden">
          {/* DATA STREAK */}
          <motion.div 
            animate={{ x: ['-100%', '400%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay }}
            className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-primary-accent/60 to-transparent"
          />
        </div>
        
        {/* TERMINAL STATUS MICRO-ICONS */}
        <div className="flex justify-between items-center mt-1 px-2">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-primary-accent/40 rounded-full" />
            <div className="w-4 h-[1px] bg-primary-accent/20 self-center" />
          </div>

        </div>
      </div>

      {/* GHOST BACKGROUND LAYER */}
    </header>
  );
}