import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@context/appContext';

/* ─── Configuración ─────────────────────────────────────────────── */
const LOGICAL = 400;               // sistema de coordenadas del SVG
const DURATION_MS = 2000;
const RING_R = 145;
const RING_C = 2 * Math.PI * RING_R;
const PARTICLE_COUNT = 56;         // móvil: menos partículas
const PHASE_SPEED = [1, 2.2, 4];   // velocidad por fase
const getPhase = (p) => (p < 35 ? 0 : p < 75 ? 1 : 2);

const HEX = '0,-50 43,-25 43,25 0,50 -43,25 -43,-25';

/* Ticks precalculados: 2 paths en lugar de 72 líneas animadas */
const TICKS_MINOR = [];
const TICKS_MAJOR = [];
for (let i = 0; i < 72; i++) {
  const a = (i * 5 * Math.PI) / 180;
  const major = i % 9 === 0;
  const r1 = 180;
  const r2 = major ? 196 : 190;
  const seg =
    `M${(Math.sin(a) * r1).toFixed(2)} ${(-Math.cos(a) * r1).toFixed(2)}` +
    `L${(Math.sin(a) * r2).toFixed(2)} ${(-Math.cos(a) * r2).toFixed(2)}`;
  (major ? TICKS_MAJOR : TICKS_MINOR).push(seg);
}
const TICKS_MINOR_D = TICKS_MINOR.join('');
const TICKS_MAJOR_D = TICKS_MAJOR.join('');

const KEYFRAMES = `
@keyframes lwm-spin { to { transform: rotate(360deg); } }
@keyframes lwm-breathe {
  0%, 100% { opacity: .35; transform: scale(1); }
  50%      { opacity: 1;   transform: scale(1.05); }
}
@keyframes lwm-core {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50%      { transform: translate(-50%, -50%) scale(1.3); }
}
`;

const getPalette = (isDark) =>
  isDark
    ? { base: '#00f6ff', glow: '#22d3ee', rgb: '0, 246, 255', ring: '#e0faff', blend: 'mix-blend-screen', label: 'text-white/60', bg: 'bg-black/20' }
    : { base: '#2563eb', glow: '#60a5fa', rgb: '37, 99, 235', ring: '#1d4ed8', blend: 'mix-blend-multiply', label: 'text-blue-900/60', bg: 'bg-white/40' };

const spawn = () => ({
  a: Math.random() * Math.PI * 2,
  r: 220 + Math.random() * 120,
  v: 60 + Math.random() * 50,
  w: (0.25 + Math.random() * 0.5) * (Math.random() < 0.5 ? -1 : 1),
  s: 1 + Math.random() * 1.8,
});

const Spin = ({ duration, reverse = false, children }) => (
  <div
    className="pointer-events-none absolute inset-0 flex items-center justify-center"
    style={{
      animation: `lwm-spin ${duration}s linear infinite`,
      animationDirection: reverse ? 'reverse' : 'normal',
      willChange: 'transform',
    }}
  >
    {children}
  </div>
);

/* ─── Componente ────────────────────────────────────────────────── */
const LoaderMobile = ({ isVisible = true }) => {
  const { isDark } = useApp();
  const p = useMemo(() => getPalette(isDark), [isDark]);

  const [phase, setPhase] = useState(0);
  const [complete, setComplete] = useState(false);

  const ringRef = useRef(null);
  const canvasRef = useRef(null);
  const reactorRef = useRef(null);
  const paletteRef = useRef(p);
  paletteRef.current = p;

  useEffect(() => {
    if (!isVisible) return undefined;

    const reduce = !!window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d') ?? null;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (ctx) {
      canvas.width = LOGICAL * dpr;
      canvas.height = LOGICAL * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const particles = Array.from({ length: PARTICLE_COUNT }, spawn);
    const ring = ringRef.current;
    const reactor = reactorRef.current;

    let progress = 0;
    let currentPhase = 0;
    let rafId = 0;
    let doneTimer = 0;
    let last = performance.now();

    setPhase(0);
    setComplete(false);

    const frame = (now) => {
      const dt = Math.min(now - last, 64);
      last = now;
      const seconds = dt / 1000;

      const stall = progress > 85 ? 0.5 : 1;
      const jitter = 0.5 + Math.random() * 0.8;
      progress = Math.min(100, progress + (100 / DURATION_MS) * dt * stall * jitter);

      if (ring) {
        ring.style.strokeDashoffset = String(RING_C * (1 - progress / 100));
        ring.style.strokeWidth = String(12 + (progress / 100) * 8);
      }
      if (reactor) reactor.style.setProperty('--lwm-p', (progress / 100).toFixed(3));

      const nextPhase = getPhase(progress);
      if (nextPhase !== currentPhase) {
        currentPhase = nextPhase;
        setPhase(nextPhase);
      }

      if (ctx && !reduce) {
        const speed = PHASE_SPEED[currentPhase];
        const rgb = paletteRef.current.rgb;
        ctx.clearRect(0, 0, LOGICAL, LOGICAL);
        for (const pt of particles) {
          pt.r -= pt.v * speed * seconds;
          pt.a += pt.w * speed * seconds;
          if (pt.r < 30) Object.assign(pt, spawn());

          const x = LOGICAL / 2 + Math.cos(pt.a) * pt.r;
          const y = LOGICAL / 2 + Math.sin(pt.a) * pt.r;
          const alpha = Math.min(1, 0.2 + (1 - pt.r / 340) * 1.1);
          ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, pt.s, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (progress >= 100) {
        if (ring) ring.style.strokeWidth = '20';
        doneTimer = window.setTimeout(() => setComplete(true), 200);
        return;
      }
      rafId = requestAnimationFrame(frame);
    };

    rafId = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(doneTimer);
    };
  }, [isVisible]);

  const speed = PHASE_SPEED[phase];
  const coreColor = phase === 2 ? p.glow : p.base;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="ultra-reactor-loader"
          className="pointer-events-none fixed inset-0 z-[999999] flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0, scale: 1.6, transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } }}
        >
          <style>{KEYFRAMES}</style>

          {/* Fondo: desenfoque estático que se desvanece (sin animar backdrop-filter) */}
          <motion.div
            className={`absolute inset-0 ${p.bg} backdrop-blur-md`}
            initial={{ opacity: 0 }}
            animate={{ opacity: complete ? 0 : 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Supernova */}
          <AnimatePresence>
            {complete && (
              <motion.div
                key="supernova"
                className="absolute h-20 w-20 rounded-full"
                style={{
                  background: `radial-gradient(circle, #fff 0%, ${p.base} 40%, transparent 70%)`,
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 12, opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            )}
          </AnimatePresence>

          {/* Reactor: tamaño fluido, sin escalar 800px */}
          <motion.div
            ref={reactorRef}
            className={`lwm-root relative aspect-square w-[min(80vw,360px)] ${p.blend}`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: complete ? 0 : 1, opacity: complete ? 0 : 1 }}
            transition={{ duration: complete ? 0.4 : 0.6, ease: 'easeOut' }}
          >
            {/* Halo de fondo (gradiente, sin blur) */}
            <div
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle, rgba(${p.rgb}, 0.25) 0%, rgba(${p.rgb}, 0.05) 50%, transparent 70%)`,
                animation: `lwm-breathe ${3 / speed}s ease-in-out infinite`,
              }}
            />

            {/* Partículas en canvas */}
            <canvas
              ref={canvasRef}
              className="pointer-events-none absolute inset-0 h-full w-full"
            />

            {/* Ticks */}
            <Spin duration={40 / speed}>
              <svg className="h-full w-full" viewBox={`0 0 ${LOGICAL} ${LOGICAL}`}>
                <g transform="translate(200 200)">
                  <path d={TICKS_MINOR_D} stroke={coreColor} strokeWidth="0.6" opacity="0.4" fill="none" />
                  <path d={TICKS_MAJOR_D} stroke={coreColor} strokeWidth="1.2" opacity="0.8" fill="none" />
                </g>
              </svg>
            </Spin>

            {/* Anillo de progreso (actualizado vía ref) */}
            <svg
              className="absolute h-full w-full overflow-visible"
              viewBox={`0 0 ${LOGICAL} ${LOGICAL}`}
              style={{ filter: `drop-shadow(0 0 6px ${p.glow})` }}
            >
              <g transform="translate(200 200) rotate(-90)">
                <circle r={RING_R} fill="none" stroke={`rgba(${p.rgb}, 0.1)`} strokeWidth="12" />
                <circle
                  ref={ringRef}
                  r={RING_R}
                  fill="none"
                  stroke={p.ring}
                  strokeLinecap="round"
                  strokeDasharray={RING_C}
                  strokeDashoffset={RING_C}
                />
              </g>
            </svg>

            {/* Anillo segmentado */}
            <Spin duration={10 / speed} reverse>
              <svg className="h-full w-full" viewBox={`0 0 ${LOGICAL} ${LOGICAL}`}>
                <g transform="translate(200 200)">
                  <circle r="110" fill="none" stroke={coreColor} strokeWidth="2" strokeDasharray="2 8 20 8" opacity="0.7" />
                </g>
              </svg>
            </Spin>

            {/* Iris: 3 hexágonos en sentido alterno */}
            {[0, 1, 2].map((i) => (
              <Spin key={i} duration={(14 - i * 3) / speed} reverse={i % 2 === 1}>
                <svg
                  className="h-full w-full"
                  viewBox={`0 0 ${LOGICAL} ${LOGICAL}`}
                  style={{ opacity: 'calc(0.25 + var(--lwm-p, 0) * 0.6)' }}
                >
                  <g transform="translate(200 200)">
                    <polygon
                      points={HEX}
                      transform={`scale(${0.5 + i * 0.45}) rotate(${i * 20})`}
                      fill="none"
                      stroke={coreColor}
                      strokeWidth="1.6"
                    />
                  </g>
                </svg>
              </Spin>
            ))}

            {/* Núcleo */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-4 w-4 rounded-full"
              style={{
                background: p.ring,
                boxShadow: `0 0 18px 4px ${p.glow}`,
                animation: `lwm-core ${0.9 / speed}s ease-in-out infinite`,
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoaderMobile;