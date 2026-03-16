import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ isVisible = true }) => {
  const PARTICLE_COUNT = 110;

  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      size: Math.random() * 2.2 + 0.6,
      angle: Math.random() * Math.PI * 2,
      radius: 200 + Math.random() * 300,
      speed: 1.4 + Math.random() * 1.8,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="master-vortex-soft-exit"
          // Ocupa toda la pantalla con z-index máximo
          className="fixed inset-0 z-[999999] flex items-center justify-center pointer-events-none overflow-hidden bg-transparent"
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
          
          // === TRANSICIÓN DE SALIDA SUAVE (REVELADO CINEMÁTICO) ===
          exit={{
            opacity: 0,
            scale: 2.2, // Expansión suave hacia el espectador
            backdropFilter: "blur(0px)", // El fondo se vuelve nítido suavemente
            transition: { 
              duration: 1.2, 
              // Curva Senior: Desaceleración suave y elegante
              ease: [0.22, 1, 0.36, 1],
              opacity: { duration: 0.8, ease: "linear" }
            }
          }}
        >
          <div className="relative flex items-center justify-center w-full h-full">
            
            {/* 1. ATMÓSFERA DE PARTÍCULAS (Vórtice Suave) */}
            <div className="absolute inset-0">
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute top-1/2 left-1/2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  style={{ width: p.size, height: p.size }}
                  animate={{
                    x: [Math.cos(p.angle) * p.radius, 0],
                    y: [Math.sin(p.angle) * p.radius, 0],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1.4, 0],
                  }}
                  transition={{
                    duration: p.speed,
                    repeat: Infinity,
                    ease: "circIn",
                    delay: -p.delay,
                  }}
                />
              ))}
            </div>

            {/* 2. ANILLO DE MERCURIO (Cromo Líquido Grueso) */}
            <svg className="absolute w-[600px] h-[600px] overflow-visible" viewBox="0 0 200 200">
              <defs>
                <filter id="mercurySoft">
                  <feGaussianBlur stdDeviation="1.2" result="blur" />
                  <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1.2" specularExponent="40" lightingColor="#ffffff" result="spec">
                    <fePointLight x="-50" y="-50" z="150" />
                  </feSpecularLighting>
                  <feComposite in="spec" in2="SourceGraphic" operator="in" />
                </filter>

                <linearGradient id="silverSoftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#94a3b8" />
                  <stop offset="45%" stopColor="#ffffff" />
                  <stop offset="55%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#475569" />
                </linearGradient>
              </defs>

              <motion.circle
                cx="100"
                cy="100"
                r="82"
                fill="none"
                stroke="url(#silverSoftGrad)"
                strokeWidth="11" // Borde contundente
                strokeLinecap="round"
                filter="url(#mercurySoft)"
                animate={{
                  rotate: [0, 360],
                  strokeDasharray: ["25 240", "150 110", "25 240"],
                  strokeDashoffset: [0, -280],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ originX: "100px", originY: "100px" }}
              />
            </svg>

            {/* 3. NÚCLEO DE CRISTAL (Glassmorphism Refráctico) */}
            <div className="relative flex items-center justify-center">
              {/* Iluminación volumétrica central */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute w-96 h-96 bg-white/10 rounded-full blur-[90px]"
              />

              {/* Capas Concéntricas de Cristal */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute border-[2.5px] border-white/30"
                  style={{
                    width: 160 - i * 35,
                    height: 160 - i * 35,
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "inset 0 0 15px rgba(255,255,255,0.1)",
                  }}
                  animate={{
                    rotate: i % 2 === 0 ? [0, 360] : [360, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 6 - i,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}

              {/* Singularidad Central */}
              <div className="relative">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.6, 1],
                    filter: ["brightness(1)", "brightness(2)", "brightness(1)"]
                  }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-5 h-5 bg-white rounded-full z-10 shadow-[0_0_35px_8px_#fff]"
                />
                {/* Rayos de lente anamórficos sutiles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-[1px] bg-white/20 blur-[1px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-64 bg-white/20 blur-[1px]" />
              </div>
            </div>

            {/* 4. ELEMENTOS UI DE CARGA (Estética Técnica) */}
            <div className="absolute bottom-[10%] flex gap-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-6 bg-gradient-to-t from-transparent via-white/40 to-transparent"
                  animate={{ 
                    scaleY: [0.3, 1.8, 0.3],
                    opacity: [0.1, 0.8, 0.1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;