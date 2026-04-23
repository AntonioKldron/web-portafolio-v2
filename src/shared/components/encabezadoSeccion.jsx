import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '@app/context/appContext';

export default function EncabezadoSeccion({ 
  subtitulo, 
  tituloPrincipal, 
  tituloHighlight,
  align = "left" 
}) {
  const { isDark } = useApp();

  const alignClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right"
  };

  const justifyClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end"
  };

  const lineOrigin = {
    left: "origin-left",
    center: "origin-center",
    right: "origin-right"
  };

  // --- LÓGICA DE COLORES Y GROSORES DE LA ANIMACIÓN SCI-FI ---
  const animColors = {
    scannerRay: isDark ? 'via-[#00f6ff]' : 'via-blue-600',
    scannerBase: isDark ? 'bg-[#3b82f6]' : 'bg-blue-800',
    subText: isDark ? 'text-[#00f6ff]' : 'text-blue-800',
    subDot: isDark ? 'bg-[#00f6ff]' : 'bg-blue-700',
    
    // El brillo de fondo es más sutil en claro para no ensuciar el blanco
    blurGlow: isDark ? 'bg-[#0ea5e9] opacity-15' : 'bg-blue-400 opacity-20', 
    
    // Aumentamos la opacidad del cono giratorio en claro
    ringPrimary: isDark ? 'from_0deg,transparent_0%,rgba(0,246,255,0.4)_40%,transparent_60%' : 'from_0deg,transparent_0%,rgba(29,78,216,0.5)_40%,transparent_60%',
    
    coreDot1: isDark ? 'bg-[#00f6ff]' : 'bg-blue-600',
    coreDot2: isDark ? 'bg-[#3b82f6]' : 'bg-blue-900',
    
    // GROSORES AUMENTADOS PARA MODO CLARO (border-[3px] y border-[4px])
    dashedRing: isDark ? 'border-[#00f6ff]/70 border-[1.5px]' : 'border-blue-700 border-[3px]',
    segmentedRing: isDark ? 'border-t-[#00f6ff] border-b-[#0ea5e9] border-y-[2px]' : 'border-t-blue-600 border-b-blue-900 border-y-[4px]',
    dottedRing: isDark ? 'border-[#0ea5e9]/80 border-[2px]' : 'border-blue-800 border-[3px]',
    
    pulseDot: isDark ? 'bg-[#22d3ee]' : 'bg-blue-700',
    centerDot: isDark ? 'bg-white' : 'bg-blue-900'
  };

  return (
    <div className={`flex flex-col mb-16 w-full relative ${alignClasses[align]}`}>
      
      {/* --- 1. SUBTÍTULO SUPERIOR --- */}
      <div className={`flex items-center gap-4 mb-4 select-none pointer-events-none ${align === "right" ? "flex-row-reverse" : ""} ${justifyClasses[align]}`}>
        <div className="relative h-[2px] w-12 bg-main-border overflow-hidden hidden md:block shrink-0 opacity-80">
          <motion.div 
            initial={{ left: "-100%" }}
            whileInView={{ left: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className={`absolute h-full w-full bg-gradient-to-r from-transparent ${animColors.scannerRay} to-transparent`}
          />
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className={`absolute inset-0 ${animColors.scannerBase} ${lineOrigin[align]}`}
          />
        </div>

        <motion.span 
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`${animColors.subText} font-bold uppercase text-[10px] md:text-xs tracking-[0.5em] relative flex items-center`}
        >
          {subtitulo}
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            className={`ml-2 inline-block w-2 h-2 rounded-full ${animColors.subDot}`}
          />
        </motion.span>
      </div>

      {/* --- 2. ÁREA DEL TÍTULO PRINCIPAL --- */}
      <div className="relative group w-full flex flex-col">
        
        {/* ======================================================== */}
        {/* ANIMACIÓN CIRCULAR SCI-FI */}
        {/* ======================================================== */}
        {/* FIX: mix-blend-normal y alta opacidad para que no se pierda en blanco */}
        <div className={`absolute top-1/2 -translate-y-1/2 flex justify-center items-center pointer-events-none select-none z-0 ${
          isDark ? 'mix-blend-screen opacity-100' : 'mix-blend-normal opacity-90'
        } ${
          align === "left" ? "-left-2 md:-left-6" : align === "right" ? "-right-2 md:-right-6" : "left-1/2 -translate-x-1/2"
        }`}>
          
          <motion.div 
            animate={{ scale: [0.8, 1.3, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute w-32 h-32 rounded-full blur-[20px] ${animColors.blurGlow}`}
          />

          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className={`absolute w-24 h-24 md:w-28 md:h-28 rounded-full bg-[conic-gradient(${animColors.ringPrimary})]`}
          />

          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute w-28 h-28 md:w-32 md:h-32 rounded-full"
          >
            <div className={`absolute top-0 left-1/2 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 ${animColors.coreDot1}`} />
            <div className={`absolute bottom-0 left-1/2 w-1.5 h-1.5 rounded-full -translate-x-1/2 translate-y-1/2 opacity-90 ${animColors.coreDot2}`} />
          </motion.div>

          <motion.div 
            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className={`absolute w-20 h-20 md:w-24 md:h-24 rounded-full border-dashed ${animColors.dashedRing}`}
          />

          <motion.div 
            animate={{ rotateZ: -360, scaleX: [1, 0.85, 1, 0.85, 1], scaleY: [0.85, 1, 0.85, 1, 0.85] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className={`absolute w-14 h-14 md:w-16 md:h-16 rounded-full border-x-[1px] border-x-transparent ${animColors.segmentedRing}`}
          />

          <motion.div 
            animate={{ rotate: 360, opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className={`absolute w-10 h-10 md:w-12 md:h-12 rounded-full border-dotted ${animColors.dottedRing}`}
          />

          <motion.div 
            animate={{ scale: [0.5, 1.5], opacity: [0.8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
            className={`absolute w-4 h-4 rounded-full blur-[1px] ${animColors.pulseDot}`}
          />

          <motion.div 
            animate={{ scale: [0.7, 1.2, 0.7] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute w-2 h-2 rounded-full ${animColors.centerDot}`}
          />
        </div>
        {/* ======================================================== */}

        {/* CONTENEDOR DEL TEXTO */}
        <div className={`relative py-4 w-full flex ${justifyClasses[align]} z-10 overflow-visible`}>
          <motion.h2 
            initial={{ y: "30%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`text-3xl lg:text-5xl font-black tracking-tighter uppercase leading-relaxed flex flex-wrap items-baseline gap-x-3 w-full transition-colors duration-300 ${justifyClasses[align]}`}
          >
            {/* Título Principal */}
            <span className={`relative z-20 shrink-0 ${isDark ? 'text-white' : 'text-blue-950'}`}>
              {tituloPrincipal}
            </span>
            
            {/* Título Highlight */}
            <motion.span 
              initial={{ opacity: 0, filter: "blur(12px)", x: 40 }} 
              whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.2, 
                delay: 0.2, 
                ease: [0.34, 1.56, 0.64, 1]
              }}
              className={`relative italic font-extrabold lowercase tracking-normal text-transparent bg-clip-text z-20 px-2 pb-3 -mb-3 transition-all duration-300 bg-gradient-to-r ${
                isDark 
                  ? 'from-[#3b82f6] via-[#00f6ff] to-[#2563eb]' 
                  : 'from-blue-600 via-blue-800 to-blue-950' 
              }`}
            >
              {tituloHighlight}.
            </motion.span>
          </motion.h2>
        </div>       

      </div>
    </div>
  );
}