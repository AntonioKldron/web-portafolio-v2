import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useApp } from '@app/context/appContext';

export default function CartaTecnologia({ icono, nombre, colorMarca }) {
  const { isDark } = useApp();

  // --- LÓGICA DE PERSPECTIVA 3D ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Suavizado del movimiento para que se sienta fluido
  const mouseX = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 400, damping: 30 });

  // Rotación en los ejes X e Y según la posición del cursor
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      style={{ perspective: "1000px" }} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex items-center justify-center"
    >
      <motion.div 
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.05 }}
        className="group relative w-24 h-32 md:w-32 md:h-40 flex flex-col items-center justify-center select-none cursor-pointer"
      >
        
        {/* --- ICONO FLOTANTE --- */}
        {/* translateZ hace que el icono se despegue físicamente del fondo al rotar */}
        <motion.div 
          style={{ translateZ: 60 }} 
          className={`text-6xl md:text-7xl mb-3 transition-transform duration-500 ${colorMarca}`}
        >
          {icono}
        </motion.div>
        
        {/* --- TEXTO FLOTANTE --- */}
        {/* translateZ menor para que el texto flote en una capa distinta al icono */}
        <motion.p 
          style={{ translateZ: 20 }} 
          className={`text-[10px] md:text-[11px] font-black tracking-[0.2em] transition-colors duration-300 uppercase font-mono text-center
            ${isDark ? 'text-slate-500 group-hover:text-slate-200' : 'text-slate-400 group-hover:text-slate-700'}`}
        >
          {nombre}
        </motion.p>

      </motion.div>
    </div>
  );
}