import React from 'react';
import { motion } from 'framer-motion';

export default function EncabezadoSeccion({ 
  subtitulo, 
  tituloPrincipal, 
  tituloHighlight,
  align = "left" 
}) {
  
  const alignClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right"
  };

  const lineOrigin = {
    left: "origin-left",
    center: "origin-center",
    right: "origin-right"
  };

  return (
    <div className={`flex flex-col mb-10 pointer-events-none select-none w-full relative ${alignClasses[align]}`}>
      
      {/* 1. SUBTÍTULO CON EFECTO DE ESCANEO LÁSER */}
      <div className={`flex items-center gap-4 mb-2 ${align === "right" ? "flex-row-reverse" : ""}`}>
        <div className="relative h-[1px] w-12 bg-white/10 overflow-hidden hidden md:block">
          <motion.div 
            initial={{ left: "-100%" }}
            whileInView={{ left: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute h-full w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
          />
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className={`absolute inset-0 bg-indigo-500 ${lineOrigin[align]}`}
          />
        </div>

        <motion.span 
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-indigo-500 font-black uppercase text-[9px] tracking-[0.5em] relative"
        >
          {subtitulo}
          {/* Micro-destello parpadeante */}
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            className="ml-1 inline-block w-1 h-1 bg-cyan-400 rounded-full"
          />
        </motion.span>
      </div>

      {/* 2. TÍTULO PRINCIPAL CON MÁSCARA Y GLITCH SUTIL */}
      <div className="relative group">
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: "100%", skewY: 5 }}
            whileInView={{ y: 0, skewY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl lg:text-[2.2rem] font-black text-white tracking-tighter uppercase leading-tight flex flex-wrap gap-x-3"
          >
            <span className="opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              {tituloPrincipal}
            </span>
            
            {/* 3. HIGHLIGHT CON REVELADO DE DIFUMINADO Y GRADIENTE FLUIDO */}
            <motion.span 
              initial={{ opacity: 0, filter: "blur(12px)", x: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="relative italic font-light lowercase tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-500"
            >
              {tituloHighlight}.
              
              {/* Underline animado sutil */}
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute -bottom-1 left-0 h-[1px] w-full bg-gradient-to-r from-indigo-500/50 to-transparent origin-left"
              />
            </motion.span>
          </motion.h2>
        </div>

        {/* 4. BACKGROUND ATMOSPHERIC FX (Glow parpadeante) */}
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.12, 0.05],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-10 bg-indigo-600 blur-[80px] -z-10 rounded-full"
        />
        
        {/* Partícula de escaneo horizontal que cruza el título una sola vez */}
        <motion.div 
          initial={{ left: "-20%", opacity: 0 }}
          whileInView={{ left: "120%", opacity: [0, 1, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
          className="absolute top-1/2 -translate-y-1/2 w-10 h-[140%] bg-white/5 skew-x-12 -z-10 blur-md"
        />
      </div>

    </div>
  );
}