import React from 'react';
import { motion } from 'framer-motion';
import EducacionItem from './educacionItem';

export default function CertificadosScroll({ certificaciones, onOpenCert }) {
  // Duplicamos para el efecto infinito
  const itemsDuplicados = [...certificaciones, ...certificaciones, ...certificaciones];

  return (
    <div className="relative w-full h-full min-h-[500px] lg:h-[600px] overflow-hidden group">
      <motion.div 
        animate={{ y: [0, -1200] }} // Ajusta según la cantidad de items
        transition={{ 
          duration: 35, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        whileHover={{ transition: { duration: 80 } }} // Ralentiza al pasar el mouse
        className="flex flex-col gap-2"
      >
        {itemsDuplicados.map((cert, i) => (
          <EducacionItem 
            key={i} 
            item={cert} 
            index={i} 
            isCert 
            onOpenCert={onOpenCert} 
          />
        ))}
      </motion.div>
      
      {/* OVERLAY GRADIENTS SENIOR (Usando mask-image para mayor limpieza) */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-main-bg via-main-bg/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-main-bg via-main-bg/80 to-transparent z-10 pointer-events-none" />
      
      {/* Borde sutil de terminal lateral */}
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-primary-accent/10" />
    </div>
  );
}