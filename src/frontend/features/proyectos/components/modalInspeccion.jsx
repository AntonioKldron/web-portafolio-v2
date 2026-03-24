import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { useApp } from '../../../context/appContext'; 

// Iconos minimalistas premium (importados internamente para limpieza)
const CloseIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>;

export default function ModalInspeccion({ abierto, onClose, imagenes, indice, setIndice }) {
  const { isDark } = useApp();
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);

  // --- SENIOR UX: FÍSICA DE RESORTE (Spring Physics) ---
  // Reemplazamos animaciones lineales por físicas para dar sensación de peso
  const xOffset = useMotionValue(0);
  const springX = useSpring(xOffset, { stiffness: 120, damping: 24 });

  // --- Senior UI: Efecto Parallax 3D sutil en la imagen ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-500, 500], [5, -5]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-5, 5]), { stiffness: 100, damping: 30 });

  // Bloqueo de Scroll y Eventos Globales
  useEffect(() => {
    if (abierto) {
      document.body.style.overflow = 'hidden';
      
      const handleMouseMove = (e) => {
        mouseX.set(e.clientX - window.innerWidth / 2);
        mouseY.set(e.clientY - window.innerHeight / 2);
      };
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowRight') changeImage((indice + 1) % imagenes.length);
        if (e.key === 'ArrowLeft') changeImage((indice - 1 + imagenes.length) % imagenes.length);
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [abierto, indice]);

  // Actualizar la posición del carrete físico
  useEffect(() => {
    // Calculamos el centro exacto del viewport para la miniatura activa
    const containerWidth = containerRef.current?.offsetWidth || window.innerWidth;
    const itemWidth = 140; // w-32 (128px) + gap-3 (12px)
    const centerOffset = (containerWidth / 2) - (itemWidth / 2);
    xOffset.set(centerOffset - (indice * itemWidth));
  }, [indice, abierto]);

  const changeImage = (newIndice) => {
    setDirection(newIndice > indice ? 1 : -1);
    setIndice(newIndice);
  };

  if (!abierto) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className={`fixed inset-0 z-[999999] flex flex-col justify-between overflow-hidden ${
          isDark ? 'bg-[#08080A] text-white' : 'bg-[#F5F5F7] text-black'
        }`}
      >
        {/* --- Senior UI: Fondo de Exposición Atmosférica --- */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <AnimatePresence mode="wait">
            <motion.img 
              key={`bg-${indice}`} src={imagenes[indice]}
              initial={{ opacity: 0, filter: 'blur(100px) saturate(2)' }} 
              animate={{ opacity: isDark ? 0.3 : 0.15, filter: 'blur(100px) saturate(2)' }} 
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          {/* Degradado de viñeta para centrar la atención */}
          <div className={`absolute inset-0 ${isDark ? 'bg-[radial-gradient(circle_at_center,transparent_0%,#08080A_100%)]' : 'bg-[radial-gradient(circle_at_center,transparent_0%,#F5F5F7_100%)]'}`} />
        </div>

        {/* --- Senior UX: Cierre por Gesto o Clic --- */}
        <div className="absolute inset-0 z-10 cursor-zoom-out" onClick={onClose} />

        {/* --- HEADER MINIMALISTA TÁCTICO --- */}
        <header className="relative w-full flex justify-between items-center p-6 md:p-10 z-50 shrink-0 mix-blend-difference text-white">
          <div className="flex flex-col gap-1.5">
            {/* Indicador de progreso binario (Senior UI: Cero texto plano) */}
            <div className="flex gap-1">
              {imagenes.map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ 
                    width: i === indice ? 20 : 6,
                    backgroundColor: i === indice ? '#fff' : 'rgba(255,255,255,0.2)'
                  }}
                  className="h-1 rounded-full transition-all duration-500"
                />
              ))}
            </div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10"
          >
            <CloseIcon />
          </motion.button>
        </header>

        {/* --- VISOR CENTRAL (Área de Enfoque) --- */}
        <main className="relative flex-1 flex items-center justify-center z-20 w-fullPerspective-[2000px]">
          
          {/* Senior UX: Cursor de navegación direccional */}
          {imagenes.length > 1 && (
            <>
              <div className="absolute left-0 inset-y-0 w-1/4 z-50 cursor-w-resize" onClick={() => changeImage((indice - 1 + imagenes.length) % imagenes.length)} />
              <div className="absolute right-0 inset-y-0 w-1/4 z-50 cursor-e-resize" onClick={() => changeImage((indice + 1) % imagenes.length)} />
            </>
          )}

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={indice}
              custom={direction}
              // Senior UI: Animación de "carrete 3D" (desplazamiento lateral + rotación)
              initial={(d) => ({
                opacity: 0,
                x: d > 0 ? '50%' : '-50%',
                rotateY: d > 0 ? 30 : -30,
                scale: 0.9,
                filter: 'blur(10px) contrast(1.2)'
              })}
              animate={{
                opacity: 1,
                x: 0,
                rotateY: 0,
                scale: 1,
                filter: 'blur(0px) contrast(1)'
              }}
              exit={(d) => ({
                opacity: 0,
                x: d > 0 ? '-50%' : '50%',
                rotateY: d > 0 ? -30 : 30,
                scale: 0.9,
                filter: 'blur(10px) contrast(1.2)'
              })}
              transition={{
                x: { type: "spring", stiffness: 200, damping: 25 },
                rotateY: { duration: 0.6 },
                filter: { duration: 0.6 },
                default: { duration: 0.6 }
              }}
              style={{ rotateX, rotateY }} // Aplicamos Parallax 3D
              className="absolute w-full max-w-6xl h-full flex items-center justify-center pointer-events-none"
            >
              {/* Marco de fotografía de Grado de Galería */}
              <div className={`relative p-2 rounded-xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] border ${
                isDark ? 'bg-[#111] border-white/5' : 'bg-white border-black/5'
              }`}>
                {/* Micro-detalle UI: Perforaciones de negativo (Senior UI: Iconos reducidos al máximo) */}
                <div className="absolute -inset-x-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-10">
                    {[...Array(6)].map((_,i) => <div key={i} className={`w-3 h-5 rounded-sm ${isDark ? 'bg-white' : 'bg-black'}`} />)}
                </div>

                <img 
                  src={imagenes[indice]} 
                  className="max-w-[85vw] max-h-[60vh] object-contain rounded-lg shadow-inner"
                  alt="Vista de inspección" 
                />
                
                <div className="absolute -inset-x-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-10 right-0 left-auto">
                    {[...Array(6)].map((_,i) => <div key={i} className={`w-3 h-5 rounded-sm ${isDark ? 'bg-white' : 'bg-black'}`} />)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* --- CARRETE FÍSICO INFERIOR (FILM STRIP) --- */}
        <footer 
          ref={containerRef}
          className="relative w-full h-40 shrink-0 flex items-center justify-center mb-6 md:mb-10 z-30"
        >
          {/* Lente central de enfoque (UI Anchor) */}
          <div className={`absolute w-40 h-28 border-2 rounded-2xl pointer-events-none z-40 transition-colors ${
            isDark ? 'border-white/10 bg-white/5 shadow-[0_0_30px_rgba(255,255,255,0.05)]' : 'border-black/10 bg-black/5 shadow-[0_0_30px_rgba(0,0,0,0.05)]'
          }`} />

          {/* Senior UX: Carrete con física de resorte (useSpring) */}
          <motion.div 
            style={{ x: springX }}
            className="flex gap-3 absolute left-0"
          >
            {imagenes.map((img, i) => (
              <motion.div
                key={i}
                onClick={() => changeImage(i)}
                whileHover={{ y: -10 }}
                animate={{
                  scale: i === indice ? 1.25 : 0.85,
                  opacity: i === indice ? 1 : 0.4,
                  rotateY: i === indice ? 0 : (i < indice ? 15 : -15),
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // Senior UX: Cubic Bezier suave
                className={`relative w-32 h-24 shrink-0 cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${
                  i === indice ? 'border-current' : 'border-transparent'
                }`}
              >
                <img src={img} className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0" alt="" />
                {/* Fotograma ID (Mono font) */}
                <div className="absolute bottom-1 right-2 bg-black/80 text-[9px] px-1.5 py-0.5 text-white font-mono rounded-sm opacity-60">
                    {String(i + 1).padStart(2, '0')}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </footer>

        {/* --- OVERLAY DE GRANO DE PELÍCULA (Estética Cinemática) --- */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-overlay">
           <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body // createPortal infalible
  );
}