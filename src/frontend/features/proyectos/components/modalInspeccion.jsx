import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTimes, FaChevronLeft, FaChevronRight, 
  FaTerminal, FaFingerprint, FaCrosshairs, 
  FaSatelliteDish, FaShieldAlt 
} from 'react-icons/fa';
import { useApp } from '../../../context/AppContext'; 

export default function ModalInspeccion({ abierto, onClose, imagenes, indice, setIndice }) {
  const { isDark } = useApp();
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    if (abierto) {
      const preventDefault = (e) => e.preventDefault();
      const handleKeyDown = (e) => {
        const scrollKeys = [' ', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'End', 'Home'];
        if (scrollKeys.includes(e.key)) e.preventDefault();
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowRight') setIndice((p) => (p + 1) % imagenes.length);
        if (e.key === 'ArrowLeft') setIndice((p) => (p - 1 + imagenes.length) % imagenes.length);
      };

      window.addEventListener('wheel', preventDefault, { passive: false });
      window.addEventListener('touchmove', preventDefault, { passive: false });
      window.addEventListener('keydown', handleKeyDown, { capture: true });

      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('wheel', preventDefault);
        window.removeEventListener('touchmove', preventDefault);
        window.removeEventListener('keydown', handleKeyDown, { capture: true });
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
      };
    }
  }, [abierto, onClose, imagenes.length, setIndice]);

  useEffect(() => {
    setScanning(true);
    const timer = setTimeout(() => setScanning(false), 800);
    return () => clearTimeout(timer);
  }, [indice]);

  if (!abierto) return null;

  const themeStyles = {
    backgroundColor: isDark ? 'rgba(2, 6, 23, 0.95)' : 'rgba(255, 255, 255, 0.95)',
    color: 'var(--color-text-card-base)'
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        style={themeStyles}
        className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8 backdrop-blur-2xl"
      >
        {/* Fondo cerrable */}
        <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} />

        {/* HUD FRAME TÁCTICO (Fijo al centro) */}
        <div className={`absolute inset-4 md:inset-10 pointer-events-none border ${isDark ? 'border-indigo-500/20' : 'border-indigo-600/30'} rounded-[3rem] transition-all`}>
          <div className={`absolute -top-1 -left-1 w-12 h-12 border-t-4 border-l-4 ${isDark ? 'border-indigo-500' : 'border-indigo-600'} rounded-tl-3xl shadow-[0_0_15px_rgba(99,102,241,0.4)]`} />
          <div className={`absolute -bottom-1 -right-1 w-12 h-12 border-b-4 border-r-4 ${isDark ? 'border-indigo-500' : 'border-indigo-600'} rounded-br-3xl shadow-[0_0_15px_rgba(99,102,241,0.4)]`} />
        </div>

        {/* CONTENEDOR PRINCIPAL: Centrado absoluto */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-5xl h-full max-h-[90vh] z-10 flex flex-col items-center justify-between py-6"
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* 1. HEADER (Arriba) */}
          <div className="w-full flex justify-between items-center px-4 shrink-0">
            <div className={`flex items-center gap-6 ${isDark ? 'text-indigo-400/60' : 'text-indigo-600/70'}`}>
              <FaCrosshairs size={20} className="animate-spin" style={{ animationDuration: '10s' }} />
              <div className="hidden md:flex gap-1">
                {[1, 2, 3].map(i => (
                  <motion.div key={i} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: i*0.3 }} 
                    className="w-1 h-4 bg-current opacity-40 rounded-full" />
                ))}
              </div>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className={`p-3 md:p-4 rounded-2xl border transition-all shadow-xl
                ${isDark ? 'bg-white/5 border-white/10 text-white/50 hover:bg-red-500/20' : 'bg-slate-100 border-slate-200 text-slate-500 hover:bg-red-50'}`}
            >
              <FaTimes size={20} />
            </motion.button>
          </div>

          {/* 2. VISOR CENTRAL (Crece para ocupar el centro) */}
          <div className="relative w-full flex-1 flex items-center justify-center min-h-0 my-4 md:my-8">
            {imagenes.length > 1 && (
              <>
                <button 
                  onClick={() => setIndice((indice - 1 + imagenes.length) % imagenes.length)}
                  className={`absolute left-0 md:-left-4 z-20 p-4 transition-all transform hover:scale-125
                    ${isDark ? 'text-white/20 hover:text-indigo-400' : 'text-slate-300 hover:text-indigo-600'}`}
                >
                  <FaChevronLeft size={40} />
                </button>
                <button 
                  onClick={() => setIndice((indice + 1) % imagenes.length)}
                  className={`absolute right-0 md:-right-4 z-20 p-4 transition-all transform hover:scale-125
                    ${isDark ? 'text-white/20 hover:text-indigo-400' : 'text-slate-300 hover:text-indigo-600'}`}
                >
                  <FaChevronRight size={40} />
                </button>
              </>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={indice}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className={`relative flex items-center justify-center overflow-hidden rounded-3xl border shadow-2xl h-full w-full
                  ${isDark ? 'border-white/5 shadow-black bg-black/20' : 'border-slate-200 shadow-slate-200 bg-white/40'}`}
              >
                {scanning && (
                  <motion.div 
                    initial={{ top: "-10%" }} animate={{ top: "110%" }}
                    className={`absolute inset-x-0 h-1 z-30 opacity-50 shadow-[0_0_15px]
                      ${isDark ? 'bg-indigo-500 shadow-indigo-500' : 'bg-indigo-600 shadow-indigo-600'}`}
                  />
                )}
                <img 
                  src={imagenes[indice]} 
                  className="w-full h-full object-contain p-2" 
                  alt="Visor" 
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 3. MINIATURAS (Abajo) */}
          <div className="w-full flex flex-col items-center gap-6 shrink-0">
            <div 
              style={{ backgroundColor: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
              className="p-2 md:p-3 rounded-[2rem] border shadow-2xl backdrop-blur-2xl max-w-full overflow-x-auto"
            >
              <div className="flex gap-3 md:gap-4 p-1">
                {imagenes.map((img, i) => (
                  <motion.button 
                    key={i} 
                    whileHover={{ y: -5 }}
                    onClick={() => setIndice(i)}
                    className={`relative w-16 h-12 md:w-24 md:h-16 shrink-0 rounded-xl overflow-hidden transition-all duration-500 border-2
                      ${i === indice 
                        ? 'border-indigo-500 scale-105 shadow-lg' 
                        : 'border-transparent opacity-40 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt="" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* FOOTER */}
            <div className={`flex items-center gap-8 md:gap-12 ${isDark ? 'opacity-20' : 'opacity-40'}`}>
               <FaTerminal size={14} />
               <FaFingerprint size={14} className="animate-pulse" />
               <FaSatelliteDish size={14} />
               <FaShieldAlt size={14} />
            </div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}