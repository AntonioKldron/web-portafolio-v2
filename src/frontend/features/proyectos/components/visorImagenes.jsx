import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaExpandAlt } from 'react-icons/fa';
import ModalInspeccion from './modalInspeccion';

export default function VisorImagenes({ imagenes, isDark }) {
  const [indice, setIndice] = useState(0);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [estaPausado, setEstaPausado] = useState(false);

  // Autoplay con pausa inteligente
  useEffect(() => {
    if (modalAbierto || estaPausado) return;

    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % imagenes.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, [modalAbierto, estaPausado, imagenes.length]);

  const navegar = (e, delta) => {
    e.stopPropagation();
    setIndice((prev) => (prev + delta + imagenes.length) % imagenes.length);
  };

  const manejarAperturaModal = () => {
    // Solo permitimos abrir el modal en pantallas >= 768px (Escritorio)
    if (window.innerWidth >= 768) {
      setModalAbierto(true);
    }
  };

  return (
    <div className="space-y-4">
      <div 
        onMouseEnter={() => setEstaPausado(true)}
        onMouseLeave={() => setEstaPausado(false)}
        className={`relative w-full h-64 md:h-80 rounded-[2rem] overflow-hidden border-2 transition-all group/visor
        ${isDark ? 'border-white/5 bg-slate-950 shadow-2xl' : 'border-slate-200 bg-white'}`}
      >
        
        <AnimatePresence mode="wait">
          <motion.img 
            key={indice} 
            src={imagenes[indice]} 
            initial={{ opacity: 0, scale: 1.1 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full object-cover cursor-pointer md:cursor-zoom-in"
            onClick={manejarAperturaModal}
          />
        </AnimatePresence>

        {/* Barra de progreso inferior */}
        {!modalAbierto && !estaPausado && (
          <motion.div 
            key={`bar-${indice}`}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear" }}
            className="absolute bottom-0 left-0 h-1 bg-indigo-500 z-20 opacity-40"
          />
        )}

        {/* Controles: El botón de expandir solo se ve en Desktop */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover/visor:opacity-100 transition-opacity z-10">
          <button 
            onClick={(e) => { e.stopPropagation(); manejarAperturaModal(); }} 
            className="hidden md:block self-end p-3 bg-indigo-600/90 text-white rounded-2xl backdrop-blur-md shadow-lg"
          >
            <FaExpandAlt />
          </button>

          {imagenes.length > 1 && (
            <div className="flex justify-between items-center px-2">
              <button onClick={(e) => navegar(e, -1)} className="p-3 bg-black/40 hover:bg-indigo-600 text-white rounded-xl backdrop-blur-md transition-all">
                <FaChevronLeft />
              </button>
              <button onClick={(e) => navegar(e, 1)} className="p-3 bg-black/40 hover:bg-indigo-600 text-white rounded-xl backdrop-blur-md transition-all">
                <FaChevronRight />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Indicadores de puntos (Dots) */}
      <div className="flex justify-center gap-2">
        {imagenes.map((_, i) => (
          <div key={i} className={`h-1.5 transition-all duration-500 rounded-full ${i === indice ? 'w-8 bg-indigo-500' : 'w-2 bg-white/10'}`} />
        ))}
      </div>

      {/* Renderizado condicional del modal solo para Escritorio */}
      <div className="hidden md:block">
        <ModalInspeccion 
          abierto={modalAbierto} 
          onClose={() => setModalAbierto(false)} 
          imagenes={imagenes} 
          indice={indice} 
          setIndice={setIndice} 
        />
      </div>
    </div>
  );
}