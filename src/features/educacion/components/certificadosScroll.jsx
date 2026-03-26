import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import EducacionItem from './educacionItem';

export default function CertificadosScroll({ certificaciones, onOpenCert }) {
  const [isMobile, setIsMobile] = useState(false);

  // Detectamos el ancho de pantalla para desactivar el scroll
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // En móvil usamos la lista original, en desktop duplicamos para el efecto infinito
  const itemsAMostrar = isMobile ? certificaciones : [...certificaciones, ...certificaciones, ...certificaciones];

  return (
    <div className="relative w-full h-full min-h-[500px] lg:h-[600px] overflow-visible lg:overflow-hidden group">
      <motion.div 
        // Solo animamos si NO es móvil
        animate={isMobile ? { y: 0 } : { y: [0, -1200] }} 
        transition={isMobile ? { type: "none" } : { 
          duration: 35, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        whileHover={isMobile ? {} : { transition: { duration: 80 } }}
        className="flex flex-col gap-2"
      >
        {itemsAMostrar.map((cert, i) => (
          <EducacionItem 
            key={i} 
            item={cert} 
            index={i} 
            isCert 
            onOpenCert={onOpenCert} 
          />
        ))}
      </motion.div>
      
      {/* Ocultamos los gradientes en móvil ya que no hay scroll infinito */}
      {!isMobile && (
        <>
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-main-bg via-main-bg/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-main-bg via-main-bg/80 to-transparent z-10 pointer-events-none" />
        </>
      )}
      
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-primary-accent/10 hidden lg:block" />
    </div>
  );
}