import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineEye, HiOutlineDocumentText } from 'react-icons/hi';

export default function EducacionItem({ item, index, isCert, onOpenCert }) {
  const tieneImagenValida = item.imagen && item.imagen.trim() !== "";
  const esPdf = item.imagen?.toLowerCase().endsWith('.pdf');

  return (
    <motion.div 
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`
        group relative w-full flex items-center gap-6 p-5 mb-3
        rounded-xl border border-white/[0.04] bg-white/[0.01]
        hover:bg-white/[0.03] hover:border-primary-accent/40
        transition-all duration-400 backdrop-blur-md
      `}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[9px] font-bold text-primary-accent bg-primary-accent/10 px-2 py-0.5 rounded tracking-tighter uppercase">
            {item.fecha}
          </span>
          <p className="text-primary-accent/70 text-[10px] font-bold uppercase tracking-[0.15em]">
            {item.institucion}
          </p>
        </div>

        <h3 className="text-[15px] md:text-[17px] font-bold text-main-text leading-tight group-hover:text-primary-accent transition-colors">
          {item.titulo}
        </h3>

        <p className="mt-2 text-muted-text text-[12px] leading-snug opacity-60 group-hover:opacity-100 transition-opacity italic">
          {item.descripcion}
        </p>
      </div>

      {isCert && tieneImagenValida && (
        <div className="shrink-0 flex items-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onOpenCert(item)}
            className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border border-white/10 bg-black/40 shadow-2xl group/btn flex items-center justify-center"
          >
            {esPdf ? (
              // Si es PDF, mostramos un icono representativo
              <div className="flex flex-col items-center gap-1 opacity-60 group-hover/btn:opacity-100 transition-all">
                <HiOutlineDocumentText size={30} className="text-primary-accent" />
                <span className="text-[8px] font-bold">PDF</span>
              </div>
            ) : (
              // Si es imagen, cargamos la miniatura
              <img 
                src={item.imagen} 
                className="w-full h-full object-cover opacity-40 group-hover/btn:opacity-100 transition-all duration-500 grayscale group-hover/btn:grayscale-0" 
                alt="cert-thumb" 
              />
            )}
            
            <div className="absolute inset-0 bg-primary-accent/30 opacity-0 group-hover/btn:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
              <HiOutlineEye size={16} className="text-white" />
            </div>
          </motion.button>
        </div>
      )}

      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary-accent/20 to-transparent" />
    </motion.div>
  );
}