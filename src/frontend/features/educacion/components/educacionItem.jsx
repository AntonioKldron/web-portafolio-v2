// src/features/educacion/components/educacionItem.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineEye } from 'react-icons/hi';

export default function EducacionItem({ item, index, isCert, onOpenCert }) {
  // VALIDACIÓN CLAVE: Si no hay imagen real, no mostramos la opción del modal
  const tieneImagenValida = item.imagen && item.imagen.trim() !== "";

  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`
        group relative w-full flex gap-5 items-start py-6 px-4 
        border-b border-main-border/5 last:border-none
        transition-all duration-500 rounded-xl
        ${isCert ? 'hover:bg-primary-accent/[0.03]' : 'hover:bg-white/[0.02]'}
      `}
    >
      {/* Indicador lateral estético */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-primary-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center" />

      <div className="flex-1 flex flex-col text-left min-w-0 pl-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
          <h3 className="text-[13px] md:text-[14px] font-bold text-main-text uppercase tracking-tight group-hover:text-primary-accent transition-colors duration-500 leading-snug">
            {item.titulo}
          </h3>
          <div className="flex items-center gap-2 shrink-0">
             <span className="hidden md:block w-8 h-[1px] bg-main-border/20"></span>
             <span className="text-[10px] font-mono text-primary-accent/50 group-hover:text-primary-accent transition-colors">
              {item.fecha}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 mb-3">
          <p className="text-primary-accent/80 text-[10px] font-bold uppercase tracking-[0.2em] bg-primary-accent/5 px-2 py-0.5 rounded border border-primary-accent/10">
            {item.institucion}
          </p>
        </div>

        <p className="text-muted-text text-[11px] leading-relaxed italic opacity-60 group-hover:opacity-100 transition-opacity whitespace-normal break-words max-w-full">
          {item.descripcion}
        </p>
      </div>

      {/* 🚀 EL CAMBIO AQUÍ: Solo si es certificación Y tiene imagen válida */}
      {isCert && tieneImagenValida && (
        <button 
          onClick={() => onOpenCert(item)}
          className="shrink-0 mt-1 w-14 h-14 relative overflow-hidden rounded-lg border border-main-border/20 bg-main-bg/50 hover:border-primary-accent/50 transition-all duration-500 group/thumb shadow-xl"
        >
          <img 
            src={item.imagen} 
            className="w-full h-full object-cover opacity-30 group-hover/thumb:opacity-100 transition-all duration-700 group-hover/thumb:scale-125 grayscale group-hover/thumb:grayscale-0" 
            alt="ver certificado" 
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover/thumb:opacity-100 bg-main-bg/60 backdrop-blur-[2px] transition-all">
            <HiOutlineEye size={20} className="text-primary-accent" />
            <span className="text-[7px] font-bold text-primary-accent uppercase mt-1">Ver</span>
          </div>
        </button>
      )}
    </motion.div>
  );
}