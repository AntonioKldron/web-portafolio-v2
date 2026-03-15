import React from 'react';
import { motion } from 'framer-motion';
import EducacionItem from './educacionItem';

export default function CertificadosScroll({ certificaciones, onOpenCert }) {
  return (
    <div className="relative h-[450px] overflow-hidden">
      <motion.div 
        animate={{ y: [0, -800] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        whileHover={{ transition: { duration: 100 } }} 
        className="flex flex-col"
      >
        {[...certificaciones, ...certificaciones].map((cert, i) => (
          <EducacionItem key={i} item={cert} index={i} isCert onOpenCert={onOpenCert} />
        ))}
      </motion.div>
      
      {/* Gradients para el desvanecimiento superior e inferior */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-main-bg via-main-bg/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-main-bg via-main-bg/50 to-transparent z-10 pointer-events-none" />
    </div>
  );
}