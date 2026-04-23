import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Importamos tu contexto
import { useApp } from '@context/appContext';

const LoaderWeb = ({ isVisible = true }) => {
  // Extraemos isDark del contexto
  const { isDark } = useApp();
  
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setProgress(0);
      setIsComplete(false);
      const totalDuration = 2500; 
      const intervalTime = 150; 
      const totalSteps = totalDuration / intervalTime;
      const incrementPerStep = 100 / totalSteps;

      const interval = setInterval(() => {
        setProgress((prev) => {
          const chaos = prev > 80 ? 1.5 : 0.5;
          const randomJitter = (Math.random() - 0.5) * chaos;
          const nextVal = prev + incrementPerStep + randomJitter;

          if (nextVal >= 100) {
            clearInterval(interval);
            setTimeout(() => setIsComplete(true), 150);
            return 100;
          }
          return nextVal;
        });
      }, intervalTime);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const geometry = useMemo(() => {
    const radarTicks = Array.from({ length: 180 }, (_, i) => ({
      id: i,
      rotate: i * 2,
      length: i % 15 === 0 ? 15 : i % 5 === 0 ? 8 : 3,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const vortexParticles = Array.from({ length: 120 }, (_, i) => {
      const angle = Math.random() * Math.PI * 2;
      return {
        id: i,
        angle,
        radius: 200 + Math.random() * 400,
        size: Math.random() * 3 + 1,
        speed: 1.5 + Math.random() * 2,
        delay: Math.random() * -5,
      };
    });

    const energyArcs = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      rotate: Math.random() * 360,
      scale: 0.8 + Math.random() * 0.7,
      duration: 0.1 + Math.random() * 0.3,
    }));

    const nebulas = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 600,
      y: (Math.random() - 0.5) * 600,
      size: 10 + Math.random() * 40,
    }));

    return { radarTicks, vortexParticles, energyArcs, nebulas };
  }, []);

  const RADIUS_MAIN = 145;
  const CIRCUMFERENCE_MAIN = 2 * Math.PI * RADIUS_MAIN;
  
  const isCritical = progress > 85;
  const speedMultiplier = 1 + Math.pow(progress / 100, 3) * 5; 
  const shakeOffset = isCritical ? (Math.random() - 0.5) * 8 : (Math.random() - 0.5) * (progress / 50);

  // ========================================================
  // VARIABLES DE COLOR DINÁMICAS SEGÚN EL TEMA
  // ========================================================
const themeBaseColor = isDark ? "#0ea5e9" : "#0088ff"; // Cian original vs Cobalto Profundo
const themeGlowColor = isDark ? "#0095f9" : "#93c5fd"; // Destello original vs Azul Cielo
const coreGlow = isCritical ? themeGlowColor : themeBaseColor;
const themeRgb = isDark ? "14, 165, 233" : "29, 78, 216";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="hyper-reactor-loader"
          className={`fixed inset-0 z-[999999] flex items-center justify-center overflow-hidden pointer-events-none bg-transparent`}
          style={{ perspective: "1200px" }}
          exit={{ opacity: 0, transition: { duration: 1.5 } }}
        >

          {/* SUPERNOVA FINAL */}
          <AnimatePresence>
            {isComplete && (
              <motion.div
                initial={{ scale: 0, opacity: 1, background: `radial-gradient(circle, #fff 0%, ${themeBaseColor} 40%, transparent 80%)` }}
                animate={{ scale: 20, opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center z-[100]"
              >
                <div className="w-[100px] h-[100px] rounded-full" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* CONTENEDOR 3D FLOTANTE */}
          <motion.div 
            className={`relative flex items-center justify-center w-[800px] h-[800px] ${isDark ? 'mix-blend-screen' : 'mix-blend-multiply'}`}
            animate={{ 
              x: shakeOffset, 
              y: shakeOffset,
              rotateX: [5, -5, 5],
              rotateY: [-5, 5, -5],
              scale: isComplete ? 0 : 1 + (progress / 100) * 0.15
            }}
            transition={{ 
              rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              x: { type: 'spring', stiffness: 500, damping: 10 },
              y: { type: 'spring', stiffness: 500, damping: 10 }
            }}
          >

            {/* Nebulosa Dinámica de Fondo */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              {geometry.nebulas.map((nebula) => (
                <motion.div
                  key={`nebula-${nebula.id}`}
                  className="absolute top-1/2 left-1/2 rounded-full"
                  style={{ 
                    width: nebula.size, 
                    height: nebula.size, 
                    background: coreGlow,
                    filter: 'blur(15px)',
                    x: nebula.x,
                    y: nebula.y
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.1, 0.4, 0.1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            {/* Partículas Vórtice */}
            <div className="absolute inset-0 pointer-events-none">
              {geometry.vortexParticles.map((p) => (
                <motion.div
                  key={`vortex-${p.id}`}
                  className={`absolute top-1/2 left-1/2 bg-white rounded-full ${isDark ? 'shadow-[0_0_8px_#0ea5e9]' : 'shadow-[0_0_8px_#2563eb]'}`}
                  style={{ width: p.size, height: p.size, transformOrigin: '0 0' }}
                  animate={{
                    rotate: [`${p.angle}rad`, `${p.angle + Math.PI * 2}rad`],
                    x: [Math.cos(p.angle) * p.radius, 0],
                    y: [Math.sin(p.angle) * p.radius, 0],
                    scale: [0, 1.5, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: (p.speed / speedMultiplier) * 2,
                    repeat: Infinity,
                    ease: "circIn",
                    delay: p.delay
                  }}
                />
              ))}
            </div>

            {/* SVG PRINCIPAL DEL REACTOR */}
            <svg className="absolute w-[600px] h-[600px] overflow-visible z-20" viewBox="0 0 400 400">
              <defs>
                <filter id="hyperGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur1" />
                  <feGaussianBlur stdDeviation="10" result="blur2" />
                  <feGaussianBlur stdDeviation="20" result="blur3" />
                  <feMerge>
                    <feMergeNode in="blur3" />
                    <feMergeNode in="blur2" />
                    <feMergeNode in="blur1" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g transform="translate(200, 200)">
                
                {/* Anillo de Ticks Computarizado */}
                <motion.g animate={{ rotate: 360 }} transition={{ duration: 40 / speedMultiplier, repeat: Infinity, ease: "linear" }}>
                  {geometry.radarTicks.map((tick) => (
                    <line
                      key={`radartick-${tick.id}`}
                      x1="0" y1="-160" x2="0" y2={`-${160 + tick.length}`}
                      stroke={coreGlow}
                      strokeWidth={tick.id % 2 === 0 ? "1" : "0.5"}
                      transform={`rotate(${tick.rotate})`}
                      opacity={tick.opacity * (1 + progress/100)}
                    />
                  ))}
                </motion.g>

                {/* Arcos de Energía */}
                {progress > 30 && geometry.energyArcs.map((arc) => (
                  <motion.path
                    key={`arc-${arc.id}`}
                    d="M -120 0 Q -60 -40 0 -130 T 120 0"
                    fill="none"
                    stroke={isDark ? "#fff" : themeBaseColor}
                    strokeWidth="1.5"
                    filter="url(#hyperGlow)"
                    transform={`rotate(${arc.rotate}) scale(${arc.scale})`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isCritical ? [0, 1, 0, 0.8, 0] : [0, 0.5, 0] }}
                    transition={{ duration: arc.duration / speedMultiplier, repeat: Infinity, repeatDelay: Math.random() }}
                  />
                ))}

                {/* ANILLO DE CARGA DE PLASMA */}
                <g transform="rotate(-90)">
                  <circle r={RADIUS_MAIN} fill="none" stroke={`rgba(${themeRgb}, 0.1)`} strokeWidth="18" />
                  <motion.circle
                    r={RADIUS_MAIN}
                    fill="none"
                    stroke={isDark ? "#fff" : themeBaseColor}
                    strokeLinecap="round"
                    filter="url(#hyperGlow)"
                    style={{
                      strokeDasharray: CIRCUMFERENCE_MAIN,
                      strokeWidth: isComplete ? 30 : 10 + (progress/100)*8,
                    }}
                    animate={{ 
                      strokeDashoffset: CIRCUMFERENCE_MAIN - (progress * CIRCUMFERENCE_MAIN) / 100,
                    }}
                    transition={{ duration: 0.2, ease: "linear" }}
                  />
                </g>

                {/* Anillo Segmentado Matrix */}
                <motion.circle
                  r="110" fill="none" stroke={coreGlow} strokeWidth="3"
                  strokeDasharray="2 8 20 8"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10 / speedMultiplier, repeat: Infinity, ease: "linear" }}
                  opacity="0.8"
                />

                {/* FRACTALES DE CORAZÓN DEL REACTOR */}
                {[...Array(8)].map((_, i) => (
                  <motion.g 
                    key={`hyper-core-${i}`}
                    animate={{ 
                      rotate: i % 2 === 0 ? [0, 360] : [360, 0],
                      scale: isCritical ? [1, 1.1, 1] : 1
                    }}
                    transition={{ 
                      rotate: { duration: (25 - i * 2.5) / speedMultiplier, repeat: Infinity, ease: "linear" },
                      scale: { duration: 0.1, repeat: Infinity, repeatType: "mirror" }
                    }}
                  >
                    <polygon
                      points="0,-50 43,-25 43,25 0,50 -43,25 -43,-25" 
                      fill={i === 0 ? `rgba(${themeRgb}, ${0.1 + progress/200})` : "none"}
                      stroke={i % 3 === 0 ? (isDark ? "#fff" : themeBaseColor) : coreGlow}
                      strokeWidth={1.5}
                      transform={`scale(${0.3 + i * 0.2}) rotate(${i * 15})`}
                      filter={i > 4 ? "url(#hyperGlow)" : ""}
                      opacity={0.3 + (progress/100) * 0.7}
                    />
                  </motion.g>
                ))}

                {/* NÚCLEO SINGULARIDAD */}
                <motion.circle 
                  r="15" 
                  fill={isDark ? "#fff" : themeBaseColor}
                  filter="url(#hyperGlow)"
                  animate={{ scale: isCritical ? [1, 2, 1] : [1, 1.2, 1] }}
                  transition={{ duration: 0.2 / speedMultiplier, repeat: Infinity }}
                />

              </g>
            </svg>

            {/* Destello Numérico Central */}
            <motion.div 
              className={`absolute font-mono text-xs tracking-[0.3em] z-50 mix-blend-overlay ${isDark ? 'text-white/50' : 'text-blue-900/50'}`}
              animate={{ opacity: isCritical ? [0.2, 1, 0.2] : 0.5 }}
              transition={{ duration: 0.1, repeat: Infinity }}
            >
              {Math.floor(progress)}%
            </motion.div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoaderWeb;