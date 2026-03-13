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
        <div className="relative h-[1px] w-12 bg-main-border overflow-hidden hidden md:block">
          <motion.div 
            initial={{ left: "-100%" }}
            whileInView={{ left: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute h-full w-full bg-gradient-to-r from-transparent via-primary-accent to-transparent"
          />
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className={`absolute inset-0 bg-primary-accent ${lineOrigin[align]}`}
          />
        </div>

        <motion.span 
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-primary-accent font-black uppercase text-[9px] tracking-[0.5em] relative"
        >
          {subtitulo}
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            className="ml-1 inline-block w-1 h-1 bg-cyan-400 rounded-full"
          />
        </motion.span>
      </div>

      {/* 2. TÍTULO PRINCIPAL CON ADAPTACIÓN DE COLOR */}
      <div className="relative group">
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: "100%", skewY: 5 }}
            whileInView={{ y: 0, skewY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            /* MODO CLARO: text-white (resalta sobre el azul vibrante)
               MODO OSCURO: text-main-text (blanco azulado suave)
            */
            className="text-2xl lg:text-[2.2rem] font-black text-white dark:text-main-text tracking-tighter uppercase leading-tight flex flex-wrap gap-x-3 drop-shadow-sm"
          >
            <span className="opacity-100 dark:opacity-90">
              {tituloPrincipal}
            </span>
            
            <motion.span 
              initial={{ opacity: 0, filter: "blur(12px)", x: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              /* HIGHLIGHT: 
                 Claro: Cyan muy claro/Blanco para que "brille" sobre el azul.
                 Oscuro: Tu degradado original de acento.
              */
              className="relative italic font-light lowercase tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-100 dark:from-primary-accent dark:via-cyan-400 dark:to-blue-500"
            >
              {tituloHighlight}.
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 1 }}
                /* Subrayado adaptable */
                className="absolute -bottom-1 left-0 h-[1px] w-full bg-gradient-to-r from-white/40 to-transparent dark:from-primary-accent/50 dark:to-transparent origin-left"
              />
            </motion.span>
          </motion.h2>
        </div>

        {/* 3. GLOW ATMOSFÉRICO (Opacidad reducida en modo claro para no ensuciar) */}
        <motion.div 
          animate={{ opacity: [0.03, 0.08, 0.03], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-10 bg-primary-accent blur-[80px] -z-10 rounded-full"
        />
      </div>
    </div>
  );
}