import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';

export default function EducacionItem({ item, index, isCert, onOpenCert }) {
  const mostrarCertificado = isCert && item.imagen && item.imagen.trim() !== "";
  const esPdf = item.imagen?.toLowerCase().endsWith('.pdf');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative block p-5 md:p-6 mb-4 rounded-2xl bg-card-bg/30 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-card-bg/60 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_15px_40px_rgba(var(--color-primary-accent-rgb),0.1)] transition-all duration-500 overflow-hidden"
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-primary-accent/80 rounded-r-full group-hover:h-[40%] transition-all duration-500 opacity-0 group-hover:opacity-100 shadow-[0_0_12px_var(--color-primary-accent)]"></div>

      {mostrarCertificado && (
        <div className="float-right ml-4 mb-2">
          <button 
            onClick={() => onOpenCert(item)}
            className="relative w-24 h-16 md:w-28 md:h-20 rounded-xl overflow-hidden bg-card-bg/40 shadow-sm hover:shadow-xl group/cert transition-all duration-500 hover:-translate-y-1 border border-white/5"
          >
            {esPdf ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-muted-text/60 group-hover/cert:text-primary-accent group-hover/cert:bg-primary-accent/10 transition-colors">
                <HiOutlineDocumentText size={20} strokeWidth={1.5} />
                <span className="text-[8px] font-bold tracking-widest uppercase">PDF</span>
              </div>
            ) : (
              <>
                <img 
                  src={item.imagen} 
                  className="w-full h-full object-cover grayscale-[30%] opacity-70 group-hover/cert:grayscale-0 group-hover/cert:opacity-100 group-hover/cert:scale-110 transition-all duration-700" 
                  alt="Certificado" 
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1.5 right-1.5 p-1 rounded-md bg-black/50 backdrop-blur-md shadow-lg">
                    <FiArrowUpRight size={12} className="text-white/90" />
                  </div>
                </div>
              </>
            )}
          </button>
        </div>
      )}

      <div className="pl-1">
        
        <div className="flex items-start gap-3 mb-3">
          <span className="shrink-0 text-primary-accent text-[10px] font-mono font-bold uppercase tracking-widest bg-primary-accent/10 px-2.5 py-1 rounded-md">
            {item.fecha}
          </span>
          
          <span className="hidden sm:block w-1.5 h-1.5 shrink-0 rounded-full bg-muted-text/20 mt-1.5"></span>
          
          <span className="text-muted-text/80 text-[10px] md:text-[11px] font-semibold tracking-wide uppercase leading-tight pt-0.5">
            {item.institucion}
          </span>
        </div>

        <h3 className="text-[15px] md:text-base font-bold text-main-text leading-snug mb-2 group-hover:text-primary-accent transition-colors duration-300">
          {item.titulo}
        </h3>

        <p className="text-muted-text/80 text-[12.5px] md:text-[13px] font-medium leading-relaxed text-justify">
          {item.descripcion}
        </p>
      </div>

      <div className="clear-both"></div>
    </motion.div>
  );
}
