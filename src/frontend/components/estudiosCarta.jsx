import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaEye, FaTimes } from 'react-icons/fa';

export default function Educacion({ estudios = [], certificaciones = [] }) {
  const isCarousel = certificaciones.length > 4;
  const [selectedDoc, setSelectedDoc] = useState(null);

  // CIERRE CON TECLA ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedDoc(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const renderItem = (item, index, isCert = false) => (
    <div 
      key={index}
      className="border-b border-white/10 py-6 last:border-none w-full flex gap-6 items-start"
    >
      <div className="flex-1 flex flex-col text-left">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-1">
          <h3 className="text-sm md:text-base font-bold text-white uppercase tracking-tight">
            {item.titulo}
          </h3>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest shrink-0">
            {item.fecha}
          </span>
        </div>
        <p className="text-indigo-500 text-[10px] font-bold uppercase tracking-widest mb-1">
          {item.institucion}
        </p>
        <p className="text-gray-400 text-[10px] leading-relaxed italic max-w-xl">
          {item.descripcion}
        </p>
      </div>

      {isCert && item.imagenUrl && (
        <button 
          onClick={() => setSelectedDoc(item)}
          className="shrink-0 w-14 h-14 md:w-16 md:h-16 relative overflow-hidden rounded border border-white/10 bg-transparent cursor-zoom-in outline-none group"
        >
          <img 
            src={item.imagenUrl} 
            alt="Doc Preview"
            className="w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity">
            <FaEye size={12} className="text-white" />
          </div>
        </button>
      )}
    </div>
  );

  return (
    <section id="formacion" className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tighter">
            Formación.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 items-start">
          
          {/* CERTIFICACIONES */}
          <div className="flex flex-col">
            <span className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.4em] block mb-6 border-b border-white/10 pb-2">
              Certificaciones
            </span>
            
            <div className={`relative ${isCarousel ? 'h-[400px] overflow-hidden' : ''}`}>
              {isCarousel ? (
                <motion.div 
                  animate={{ y: [0, -800] }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="flex flex-col"
                >
                  {[...certificaciones, ...certificaciones].map((cert, i) => renderItem(cert, i, true))}
                </motion.div>
              ) : (
                <div className="flex flex-col">
                  {certificaciones.map((cert, i) => renderItem(cert, i, true))}
                </div>
              )}
            </div>
          </div>

          {/* EDUCACIÓN ACADÉMICA */}
          <div className="flex flex-col">
            <span className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.4em] block mb-6 border-b border-white/10 pb-2">
              Educación
            </span>
            <div className="flex flex-col">
              {estudios.map((est, i) => renderItem(est, i, false))}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL LIGERO */}
      <AnimatePresence>
        {selectedDoc && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedDoc(null)}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <motion.div 
              initial={{ scale: 0.98 }} animate={{ scale: 1 }} exit={{ scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full flex flex-col bg-[#030712] border border-white/10 rounded"
            >
              <div className="flex justify-between items-center p-4 border-b border-white/10">
                <h4 className="text-xs font-bold text-white uppercase tracking-widest">{selectedDoc.titulo}</h4>
                <button 
                  onClick={() => setSelectedDoc(null)}
                  className="text-gray-500 hover:text-white flex items-center gap-2 transition-colors border-none outline-none"
                >
                  <span className="text-[8px] font-mono">Cerrar [ESC]</span>
                  <FaTimes size={14} />
                </button>
              </div>
              <div className="p-2 overflow-y-auto max-h-[80vh]">
                <img src={selectedDoc.imagenUrl} alt="Visualización" className="w-full h-auto object-contain" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}