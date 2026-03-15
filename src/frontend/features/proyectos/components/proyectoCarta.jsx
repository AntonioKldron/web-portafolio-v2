import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../../../context/AppContext';

// Importación de sub-componentes atómicos
import CartaCabecera from './cartaCabecera';
import VisorImagenes from './visorImagenes'; 
import CartaCuerpo from './cartaCuerpo';
import CartaFooter from './cartaFooter';

/**
 * ProyectoCarta - Orquestador modular
 */
export default function ProyectoCarta({ data, isOpen, toggle }) {
  const { isDark } = useApp();

  if (!data) return null;

  return (
    <motion.div 
      layout
      initial={false}
      className={`w-full max-w-7xl mx-auto border transition-all duration-700 overflow-hidden rounded-[2.5rem] relative
        ${isOpen 
          ? (isDark ? 'bg-slate-900 border-indigo-500 shadow-[0_20px_50px_rgba(79,70,229,0.15)]' : 'bg-white border-indigo-500 shadow-xl') 
          : (isDark ? 'bg-slate-950/40 border-white/5 hover:border-indigo-500/30' : 'bg-slate-50 border-slate-200 hover:border-indigo-300')
        }`}
    >
      {/* 1. CABECERA (Trigger de apertura) */}
      <div 
        onClick={toggle} 
        className="w-full cursor-pointer select-none relative z-10"
      >
        <CartaCabecera 
          data={data} 
          isOpen={isOpen} 
          isDark={isDark} 
        />
      </div>

      {/* 2. CONTENIDO DESPLEGABLE (Animado) */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: { 
                height: { duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.3, delay: 0.2 }
              }
            }} 
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: { height: { duration: 0.4 }, opacity: { duration: 0.2 } }
            }}
            className={`px-6 lg:px-14 pb-14 border-t ${
              isDark ? 'bg-black/20 border-white/5' : 'bg-slate-50/50 border-slate-100'
            }`}
          >
            <div className="pt-12 space-y-12">
              
              {/* --- VISOR DE IMÁGENES (Condicional) --- */}
              {data.imagenes && data.imagenes.length > 0 && (
                <div className="hidden md:block">
                  <VisorImagenes 
                    imagenes={data.imagenes} 
                    isDark={isDark} 
                  />
                </div>
              )}

              {/* Lógica de arquitectura y logs de ejecución */}
              <CartaCuerpo 
                data={data} 
                isDark={isDark} 
              />

              {/* Acciones y Stack de tecnologías */}
              <CartaFooter 
                data={data} 
                isDark={isDark} 
              />
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glow ambiental para Dark Mode */}
      {isOpen && isDark && (
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/10 blur-[100px] pointer-events-none" />
      )}
    </motion.div>
  );
}