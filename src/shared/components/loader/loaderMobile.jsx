import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// 1. Importamos tu contexto
import { useApp } from '@context/appContext'; 

const LoaderMobile = ({ isVisible = true }) => {
  // 2. Extraemos el estado del tema
  const { isDark } = useApp();

  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setProgress(0);
      setIsComplete(false);
      const totalDuration = 2000;
      const intervalTime = 40;
      const totalSteps = totalDuration / intervalTime;
      const incrementPerStep = 100 / totalSteps;

      const interval = setInterval(() => {
        setProgress((prev) => {
          const randomJitter = (Math.random() - 0.5) * 0.4;
          const nextVal = prev + incrementPerStep + randomJitter;

          if (nextVal >= 100) {
            clearInterval(interval);
            setTimeout(() => setIsComplete(true), 200);
            return 100;
          }
          return nextVal;
        });
      }, intervalTime);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const geometry = useMemo(() => {
    const radarTicks = Array.from({ length: 72 }, (_, i) => ({
      id: i,
      rotate: i * 5,
    }));

    const orbitalParticles = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 0.5,
      angle: Math.random() * Math.PI * 2,
      radius: 120 + Math.random() * 200,
      speed: 1.5 + Math.random() * 2,
    }));

    const centralParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      angle: Math.random() * Math.PI * 2,
      distance: 30 + Math.random() * 60,
      speed: 0.6 + Math.random() * 1,
      size: Math.random() * 2 + 1,
    }));

    return { radarTicks, orbitalParticles, centralParticles };
  }, []);

  const RADIUS_MAIN = 145;
  const CIRCUMFERENCE_MAIN = 2 * Math.PI * RADIUS_MAIN;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="ultra-reactor-loader"
          className="fixed inset-0 z-[999999] flex items-center justify-center overflow-hidden bg-transparent pointer-events-none"
          exit={{
            opacity: 0,
            scale: 1.8,
            filter: "brightness(4) blur(20px)",
            transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
        >
          {/* Fondo desenfocado dinámico: negro para oscuro, blanco para claro */}
          <motion.div 
            className={`absolute inset-0 ${isDark ? 'bg-black/20' : 'bg-white/40'}`}
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: isComplete ? "blur(0px)" : "blur(20px)" }}
            transition={{ duration: 1 }}
          />

          <div className="relative flex items-center justify-center w-[800px] h-[800px] scale-[0.45] sm:scale-75">
            
            {isComplete && (
              <motion.div
                initial={{ scale: 0, opacity: 1, border: `2px solid ${isDark ? '#00f6ff' : '#2563eb'}` }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`absolute w-40 h-40 rounded-full z-50 ${isDark ? 'shadow-[0_0_50px_10px_#00f6ff]' : 'shadow-[0_0_50px_10px_#2563eb]'}`}
              />
            )}

            <div className="absolute inset-0 pointer-events-none">
              {geometry.centralParticles.map((p) => (
                <motion.div
                  key={`spark-${p.id}`}
                  className={`absolute top-1/2 left-1/2 rounded-full ${isDark ? 'bg-[#00f6ff]' : 'bg-blue-600'}`}
                  style={{ width: p.size, height: p.size, filter: 'blur(1px)' }}
                  animate={{
                    x: [0, Math.cos(p.angle) * p.distance],
                    y: [0, Math.sin(p.angle) * p.distance],
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: p.speed,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>

            <svg className="absolute w-[700px] h-[700px] opacity-30" viewBox="0 0 200 200">
              <g transform="translate(100, 100)">
                {geometry.radarTicks.map((tick) => (
                  <motion.line
                    key={`radar-${tick.id}`}
                    x1="0" y1="-95" x2="0" y2="-100"
                    stroke={isDark ? "#22d3ee" : "#3b82f6"}
                    strokeWidth={tick.id % 9 === 0 ? "0.4" : "0.1"}
                    transform={`rotate(${tick.rotate})`}
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, delay: tick.id * 0.02 }}
                  />
                ))}
              </g>
            </svg>

            <div className="absolute inset-0 pointer-events-none">
              {geometry.orbitalParticles.map((bit) => (
                <motion.div
                  key={`particle-${bit.id}`}
                  className={`absolute top-1/2 left-1/2 rounded-full ${
                    isDark 
                      ? 'bg-[#00f6ff] shadow-[0_0_15px_rgba(0,246,255,0.9)]' 
                      : 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.9)]'
                  }`}
                  style={{ width: bit.size, height: bit.size }}
                  animate={{
                    x: [Math.cos(bit.angle) * bit.radius, 0],
                    y: [Math.sin(bit.angle) * bit.radius, 0],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: bit.speed / (1 + progress / 100), 
                    repeat: Infinity,
                    ease: "easeIn",
                    delay: -Math.random() * 5,
                  }}
                />
              ))}
            </div>

            <svg className="absolute w-full h-full overflow-visible" viewBox="0 0 400 400">
              <defs>
                <filter id="ultraGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                
                {/* Gradiente Dinámico */}
                <linearGradient id="neonBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={isDark ? "#1e3a8a" : "#93c5fd"} stopOpacity={0.3} />
                  <stop offset="45%" stopColor={isDark ? "#00f6ff" : "#2563eb"} stopOpacity={1} />
                  <stop offset="55%" stopColor={isDark ? "#22d3ee" : "#1d4ed8"} stopOpacity={1} />
                  <stop offset="100%" stopColor={isDark ? "#1e3a8a" : "#93c5fd"} stopOpacity={0.3} />
                </linearGradient>
              </defs>

              <g transform="translate(200, 200)">
                <g transform="rotate(-90)">
                  <circle 
                    r={RADIUS_MAIN} 
                    fill="none" 
                    stroke={isDark ? "rgba(0,246,255,0.05)" : "rgba(37,99,235,0.1)"} 
                    strokeWidth="12" 
                  />
                  <motion.circle
                    r={RADIUS_MAIN}
                    fill="none"
                    stroke="url(#neonBlueGrad)"
                    strokeLinecap="round"
                    filter="url(#ultraGlow)"
                    style={{
                      strokeDasharray: CIRCUMFERENCE_MAIN,
                      strokeWidth: isComplete ? 20 : 12,
                    }}
                    animate={{ 
                      strokeDashoffset: CIRCUMFERENCE_MAIN - (progress * CIRCUMFERENCE_MAIN) / 100,
                    }}
                    transition={{ duration: 0.4, ease: "linear" }}
                  />
                </g>

                {[...Array(3)].map((_, i) => (
                  <motion.g 
                    key={`core-iris-${i}`}
                    animate={{ rotate: i % 2 === 0 ? [0, 360] : [360, 0] }}
                    transition={{ 
                      duration: (14 - i * 3) / (1 + progress / 100), 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                  >
                    <path
                      d="M 60 0 L 30 52 L -30 52 L -60 0 L -30 -52 L 30 -52 Z"
                      fill="none"
                      stroke={isDark 
                        ? `rgba(0,246,255,${0.1 + (progress/100) * 0.4})` 
                        : `rgba(37,99,235,${0.1 + (progress/100) * 0.4})`
                      }
                      strokeWidth="2"
                      transform={`scale(${1 + i * 0.3})`}
                    />
                  </motion.g>
                ))}

                <motion.g
                  animate={{ 
                    scale: isComplete ? 0 : [1, 1.3 + (progress/100 * 0.4), 1],
                  }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <circle r="8" fill={isDark ? "#00f6ff" : "#2563eb"} filter="url(#ultraGlow)" />
                  <motion.line 
                    x1="-200" y1="0" x2="200" y2="0" 
                    stroke={isDark ? "rgba(0,246,255,0.4)" : "rgba(37,99,235,0.4)"} 
                    strokeWidth="0.5" 
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 0.1, repeat: Infinity }}
                  />
                  <motion.line 
                    x1="0" y1="-200" x2="0" y2="200" 
                    stroke={isDark ? "rgba(0,246,255,0.4)" : "rgba(37,99,235,0.4)"} 
                    strokeWidth="0.5"
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 0.1, repeat: Infinity, delay: 0.05 }}
                  />
                </motion.g>
              </g>
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoaderMobile;