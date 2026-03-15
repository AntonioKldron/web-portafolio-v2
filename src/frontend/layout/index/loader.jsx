import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  // Cantidad de partículas de luz (puedes subirla si quieres)
  const particleCount = 100;

  // Generamos partículas con órbitas variadas y sutiles
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      angle: Math.random() * 360,
      delay: Math.random() * 8,
      duration: Math.random() * 4 + 3,
      size: Math.random() * 2 + 0.5,
      // Radio base para que orbiten cerca o sobre el anillo deformable
      baseRadius: 280 + Math.random() * 60, 
    }));
  }, []);

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.8,
        filter: "blur(30px) brightness(3)",
        transition: { duration: 1, ease: "circOut" }
      }}
      className="fixed inset-0 z-[500] flex items-center justify-center bg-black/5 pointer-events-none overflow-hidden"
    >
      <div className="relative flex items-center justify-center w-[800px] h-[800px]">
        
        {/* === SISTEMA DE PARTÍCULAS DE LUZ (ATMÓSFERA) === */}
        <div className="absolute inset-0">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute top-1/2 left-1/2 bg-white rounded-full"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                x: '-50%',
                y: '-50%',
                boxShadow: `0 0 ${p.size * 3}px #fff`,
              }}
              animate={{
                rotate: [p.angle, p.angle + 360],
                // Sutil movimiento radial para que no sean órbitas perfectas
                translateX: [p.baseRadius, p.baseRadius + 15, p.baseRadius - 10, p.baseRadius],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "linear",
                delay: -p.delay
              }}
            />
          ))}
        </div>

        {/* === EL ANILLO DEFORMABLE Y ORGÁNICO (PROTAGONISTA) === */}
        <svg className="absolute w-[600px] h-[600px] transform -rotate-90 drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]" viewBox="0 0 200 200">
          <defs>
            {/* Degradado metálico/luz original */}
            <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            
            {/* Brillo intenso (HyperGlow) */}
            <filter id="hyperGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* === ANILLO DE LUZ DEFORMABLE === */}
          {/* Usamos un círculo SVG pero animamos sus propiedades de trazo y escala */}
          <motion.circle
            cx="100"
            cy="100"
            r="88" // Radio ligeramente mayor
            fill="none"
            stroke="url(#metalGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#hyperGlow)"
            
            // --- ANIMACIONES DE DEFORMACIÓN ORGÁNICA ---
            animate={{
              // 1. Rotación continua
              rotate: [0, 360],
              
              // 2. Deformación del trazo (DashArray): Crea el efecto líquido/descompuesto
              // Cambiamos aleatoriamente la longitud del trazo y del hueco
              strokeDasharray: [
                "40 220", 
                "150 110", 
                "10 250", 
                "90 170", 
                "40 220"
              ],
              
              // 3. Animación del offset: Hace que el trazo "corra" por el círculo
              strokeDashoffset: [0, -260],
              
              // 4. Deformación de escala (Sutil "latido" u oscilación radial)
              scale: [1, 1.05, 0.97, 1.02, 1],
            }}
            transition={{
              duration: 3, // Controla la velocidad de la deformación
              repeat: Infinity,
              ease: "easeInOut", // Suave para que sea orgánico
            }}
            style={{ originX: "100px", originY: "100px" }} // Importante para la rotación/escala
          />

          {/* === AURA CIRCULAR ESTÁTICA SUTIL === */}
          <circle 
            cx="100" 
            cy="100" 
            r="88" 
            fill="none" 
            stroke="white" 
            strokeWidth="0.5" 
            strokeDasharray="1 6" 
            className="opacity-15" 
          />
        </svg>

        {/* === NÚCLEO MECÁNICO/VÓRTICE (TU DISEÑO ORIGINAL INTACTO) === */}
        <div className="relative flex items-center justify-center w-40 h-40">
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-blue-100 rounded-full blur-[60px]"
          />

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-[1px] border-white/30"
              style={{
                width: `${100 - i * 15}%`,
                height: `${100 - i * 15}%`,
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
              animate={{
                rotate: i % 2 === 0 ? [0, 360] : [360, 0],
                opacity: [0.2, 0.7, 0.2],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 5 - i * 0.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}

          {/* Singularidad central */}
          <motion.div 
            animate={{ 
                scale: [1, 1.6, 1], 
                boxShadow: ["0 0 20px 5px rgba(255,255,255,0.6)", "0 0 40px 15px rgba(255,255,255,0.9)", "0 0 20px 5px rgba(255,255,255,0.6)"] 
            }}
            transition={{ duration: 0.4, repeat: Infinity }}
            className="w-4 h-4 bg-white rounded-full z-50"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;