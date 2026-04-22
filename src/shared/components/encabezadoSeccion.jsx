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
    <div className={`flex flex-col mb-16 pointer-events-none select-none w-full relative ${alignClasses[align]}`}>
      
      {/* --- 1. SUBTÍTULO SUPERIOR --- */}
      <div className={`flex items-center gap-4 mb-4 ${align === "right" ? "flex-row-reverse" : ""} ${justifyClasses[align]}`}>
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
          {/* Punto sin sombra */}
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
        {/* ANIMACIÓN CIRCULAR SCI-FI (SIN SOMBRAS PARA MODO CLARO) */}
        {/* ======================================================== */}
        <div className={`absolute top-1/2 -translate-y-1/2 flex justify-center items-center -z-10 mix-blend-screen dark:mix-blend-screen ${
          align === "left" ? "-left-2 md:-left-6" : align === "right" ? "-right-2 md:-right-6" : "left-1/2 -translate-x-1/2"
        }`}>
          
          {/* Capa 0: Halo volumétrico (Opacidad muy baja para que no manche en modo claro) */}
          <motion.div 
            animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-32 h-32 bg-[#1d4ed8] rounded-full blur-[25px]"
          />

          {/* Capa 1: Escáner de Radar */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute w-24 h-24 md:w-28 md:h-28 rounded-full opacity-30 bg-[conic-gradient(from_0deg,transparent_0%,rgba(34,211,238,0.4)_40%,transparent_60%)]"
          />

          {/* Capa 2: Órbita con 2 Satélites (Puntos limpios, sin glow) */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute w-28 h-28 md:w-32 md:h-32 rounded-full"
          >
            <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-500 rounded-full -translate-x-1/2 translate-y-1/2 opacity-80" />
          </motion.div>

          {/* Capa 3: Anillo Exterior Punteado */}
          <motion.div 
            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full border-[1.5px] border-dashed border-[#22d3ee]/70"
          />

          {/* Capa 4: Anillo Giroscópico */}
          <motion.div 
            animate={{ rotateZ: -360, scaleX: [1, 0.85, 1, 0.85, 1], scaleY: [0.85, 1, 0.85, 1, 0.85] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute w-14 h-14 md:w-16 md:h-16 rounded-full border-y-[2px] border-x-[1px] border-t-[#00f6ff] border-b-[#3b82f6] border-x-transparent"
          />

          {/* Capa 5: Marcador Interno de Alta Velocidad */}
          <motion.div 
            animate={{ rotate: 360, opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute w-10 h-10 md:w-12 md:h-12 rounded-full border-[2px] border-dotted border-[#3b82f6]/80"
          />

          {/* Capa 6: Escudo del Núcleo */}
          <motion.div 
            animate={{ scale: [0.5, 1.5], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
            className="absolute w-4 h-4 bg-[#22d3ee] rounded-full blur-[1px]"
          />

          {/* Capa 7: Núcleo (Color cyan para verse en fondos claros, en vez de blanco puro) */}
          <motion.div 
            animate={{ scale: [0.7, 1.2, 0.7], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-2 h-2 bg-cyan-400 dark:bg-white rounded-full"
          />
        </div>
        {/* ======================================================== */}

        {/* CONTENEDOR DEL TEXTO */}
        <div className={`relative py-2 overflow-hidden w-full flex ${justifyClasses[align]} z-10`}>
          <motion.h2 
            initial={{ y: "100%", skewY: 5 }}
            whileInView={{ y: 0, skewY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            // text-gray-900 para modo claro, text-white para dark mode
            className={`text-3xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tighter uppercase leading-[1.1] flex flex-wrap gap-x-3 w-full ${justifyClasses[align]}`}
          >
            <span className="opacity-100 relative z-20">
              {tituloPrincipal}
            </span>
            
            <motion.span 
              initial={{ opacity: 0, filter: "blur(12px)", x: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              // Gradiente mantenido sin el drop-shadow
              className="relative italic font-extrabold lowercase tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#00f6ff] to-[#2563eb] z-20"
            >
              {tituloHighlight}.
            </motion.span>
          </motion.h2>
        </div>

      </div>
    </div>
  );
}