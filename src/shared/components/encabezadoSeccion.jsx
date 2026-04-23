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

  return (
    <div className={`flex flex-col mb-16 w-full relative ${alignClasses[align]}`}>
      
      {/* --- 1. SUBTÍTULO SUPERIOR --- */}
      <div className={`flex items-center gap-4 mb-4 select-none pointer-events-none ${align === "right" ? "flex-row-reverse" : ""} ${justifyClasses[align]}`}>
        <div className="relative h-[1px] w-12 bg-main-border overflow-hidden hidden md:block shrink-0 opacity-80">
          <motion.div 
            initial={{ left: "-100%" }}
            whileInView={{ left: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute h-full w-full bg-gradient-to-r from-transparent via-[#22d3ee] to-transparent"
          />
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className={`absolute inset-0 bg-[#2563eb] ${lineOrigin[align]}`}
          />
        </div>

        <motion.span 
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#22d3ee] font-bold uppercase text-[10px] tracking-[0.5em] relative flex items-center"
        >
          {subtitulo}
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            className="ml-2 inline-block w-1.5 h-1.5 bg-[#00f6ff] rounded-full"
          />
        </motion.span>
      </div>

      {/* --- 2. ÁREA DEL TÍTULO PRINCIPAL --- */}
      <div className="relative group w-full flex flex-col">
        
        {/* ======================================================== */}
        {/* ANIMACIÓN CIRCULAR SCI-FI */}
        {/* ======================================================== */}
        {/* 2. FIX MODO CLARO Y Z-INDEX: Ajuste dinámico de mix-blend y opacidad. Z-index seguro */}
        <div className={`absolute top-1/2 -translate-y-1/2 flex justify-center items-center pointer-events-none select-none z-0 ${
          isDark ? 'mix-blend-screen opacity-100' : 'mix-blend-multiply opacity-40'
        } ${
          align === "left" ? "-left-2 md:-left-6" : align === "right" ? "-right-2 md:-right-6" : "left-1/2 -translate-x-1/2"
        }`}>
          
          <motion.div 
            animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-32 h-32 bg-[#1d4ed8] rounded-full blur-[25px]"
          />

          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute w-24 h-24 md:w-28 md:h-28 rounded-full opacity-30 bg-[conic-gradient(from_0deg,transparent_0%,rgba(34,211,238,0.4)_40%,transparent_60%)]"
          />

          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute w-28 h-28 md:w-32 md:h-32 rounded-full"
          >
            <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-500 rounded-full -translate-x-1/2 translate-y-1/2 opacity-80" />
          </motion.div>

          <motion.div 
            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full border-[1.5px] border-dashed border-[#22d3ee]/70"
          />

          <motion.div 
            animate={{ rotateZ: -360, scaleX: [1, 0.85, 1, 0.85, 1], scaleY: [0.85, 1, 0.85, 1, 0.85] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute w-14 h-14 md:w-16 md:h-16 rounded-full border-y-[2px] border-x-[1px] border-t-[#00f6ff] border-b-[#3b82f6] border-x-transparent"
          />

          <motion.div 
            animate={{ rotate: 360, opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute w-10 h-10 md:w-12 md:h-12 rounded-full border-[2px] border-dotted border-[#3b82f6]/80"
          />

          <motion.div 
            animate={{ scale: [0.5, 1.5], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
            className="absolute w-4 h-4 bg-[#22d3ee] rounded-full blur-[1px]"
          />

          <motion.div 
            animate={{ scale: [0.7, 1.2, 0.7], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-2 h-2 bg-cyan-400 dark:bg-white rounded-full"
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
                  : 'from-blue-800 via-blue-600 to-indigo-900' 
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