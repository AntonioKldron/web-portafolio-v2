import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { useApp } from '@app/context/appContext'; 
import { HiX, HiOutlineDocumentSearch } from 'react-icons/hi';

export default function ModalInspeccion({ abierto, onClose, imagenUrl, titulo }) {
  const { isDark } = useApp();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-500, 500], [7, -7]), { stiffness: 80, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-7, 7]), { stiffness: 80, damping: 25 });
  const glareX = useSpring(useTransform(mouseX, [-500, 500], ['0%', '100%']), { stiffness: 80, damping: 25 });
  const glareOpacity = useSpring(useTransform(mouseY, [-500, 500], [0.1, 0.4]), { stiffness: 80, damping: 25 });

  const esPdf = imagenUrl?.toLowerCase().endsWith('.pdf');

  useEffect(() => {
    if (abierto) {
      document.body.style.overflow = 'hidden';
      const move = (e) => {
        mouseX.set(e.clientX - window.innerWidth / 2);
        mouseY.set(e.clientY - window.innerHeight / 2);
      };
      const esc = (e) => e.key === 'Escape' && onClose();
      window.addEventListener('mousemove', move);
      window.addEventListener('keydown', esc);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('mousemove', move);
        window.removeEventListener('keydown', esc);
      };
    }
  }, [abierto, onClose, mouseX, mouseY]);

  if (!abierto || !imagenUrl || imagenUrl.trim() === "") return null;

  return createPortal(
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center p-4 ${isDark ? 'bg-black/90' : 'bg-white/90'}`}
    >
      {!esPdf && (
        <div className="absolute inset-0 z-0 opacity-20 blur-[100px]">
          <img src={imagenUrl} className="w-full h-full object-cover" alt="bg-blur" />
        </div>
      )}

      <div className="absolute inset-0 z-10 cursor-zoom-out" onClick={onClose} />

      <header className="absolute top-0 inset-x-0 p-6 md:p-10 z-50 flex justify-between items-center mix-blend-difference text-white">
        <div className="flex items-center gap-4">
          <HiOutlineDocumentSearch size={28} className="opacity-80" />
          <div className="flex flex-col">
            <h2 className="text-sm font-black tracking-tighter uppercase italic">{titulo}</h2>
            <div className="flex items-center gap-1.5 font-mono text-[8px] opacity-50">
              <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
              <span>{esPdf ? 'DOCUMENTO PDF' : 'VISUALIZADOR'}</span>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="p-3 rounded-full hover:bg-white/10 transition-all border border-white/10">
          <HiX size={24} />
        </button>
      </header>

      <main className="relative z-20 perspective-[2000px] w-full max-w-5xl flex justify-center">
        {esPdf ? (

          <div className="w-full h-[80vh] bg-white rounded-lg overflow-hidden shadow-2xl border border-white/20">
            <embed
              src={`${imagenUrl}#toolbar=0&navpanes=0`}
              type="application/pdf"
              width="100%"
              height="100%"
            />
          </div>
        ) : (
          <motion.div style={{ rotateX, rotateY }} className="relative group">
            <div className={`p-1 rounded-lg border shadow-2xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
              <motion.div style={{ background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.3), transparent)', x: glareX, opacity: glareOpacity }} className="absolute inset-0 z-10 filter blur-md" />
              <img src={imagenUrl} className="max-w-[90vw] max-h-[75vh] object-contain rounded shadow-inner" alt="preview" />
            </div>
          </motion.div>
        )}
      </main>

    </motion.div>,
    document.body
  );
}
