import React from 'react';
import { motion } from 'framer-motion';

export default function EncabezadoSeccion({ 
  subtitulo, 
  tituloPrincipal, 
  tituloHighlight,
  align = "left" 
}) {
  
  // 1. Clases para el contenedor general
  const alignClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right"
  };

  // 2. NUEVO: Clases de justificación para cuando el texto 'flex' salta de línea en móviles
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
    <div className={`flex flex-col mb-10 pointer-events-none select-none w-full relative ${alignClasses[align]}`}>
      
      {/* 1. SUBTÍTULO CON LÁSER MORADO OSCURO */}
      {/* Añadimos justifyClasses para garantizar la alineación si el subtítulo llegara a ser muy largo */}
      <div className={`flex items-center gap-4 mb-2 ${align === "right" ? "flex-row-reverse" : ""} ${justifyClasses[align]}`}>
        <div className="relative h-[1px] w-12 bg-main-border overflow-hidden hidden md:block shrink-0">
          <motion.div 
            initial={{ left: "-100%" }}
            whileInView={{ left: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute h-full w-full bg-gradient-to-r from-transparent via-[#7e22ce] to-transparent"
          />
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className={`absolute inset-0 bg-[#6b21a8] ${lineOrigin[align]}`}
          />
        </div>

        <motion.span 
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#a855f7] dark:text-purple-400 font-black uppercase text-[9px] tracking-[0.5em] relative"
        >
          {subtitulo}
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            className="ml-1 inline-block w-1.5 h-1.5 bg-[#d946ef] rounded-full shadow-[0_0_8px_#a855f7]"
          />
        </motion.span>
      </div>

      {/* 2. TÍTULO PRINCIPAL SIN LÍNEA DE ABAJO */}
      <div className="relative group w-full">
        {/* pb-3 para dar espacio a la curva descendente de la 'g'. w-full para asegurar la alineación */}
        <div className={`relative pb-3 overflow-hidden w-full flex ${justifyClasses[align]}`}>
          <motion.h2 
            initial={{ y: "100%", skewY: 5 }}
            whileInView={{ y: 0, skewY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            /* Aplicamos w-full y justifyClasses aquí también para controlar el salto de línea (wrap) */
            className={`text-2xl lg:text-[2.2rem] font-black text-white dark:text-main-text tracking-tighter uppercase leading-tight flex flex-wrap gap-x-3 drop-shadow-md w-full ${justifyClasses[align]}`}
          >
            <span className="opacity-100 dark:opacity-90">
              {tituloPrincipal}
            </span>
            
            <motion.span 
              initial={{ opacity: 0, filter: "blur(12px)", x: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="relative italic font-extrabold lowercase tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] via-[#c026d3] to-[#4c1d95] drop-shadow-[0_2px_12px_rgba(107,33,168,0.3)]"
            >
              {tituloHighlight}.
            </motion.span>
          </motion.h2>
        </div>

        {/* 3. GLOW ATMOSFÉRICO MORADO OSCURO */}
        <motion.div 
          animate={{ opacity: [0.03, 0.1, 0.03], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-10 bg-[#581c87] blur-[100px] -z-10 rounded-full"
        />
      </div>
    </div>
  );
}
