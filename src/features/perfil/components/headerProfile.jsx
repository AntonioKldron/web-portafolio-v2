import React from "react";
import { motion } from "framer-motion";
import { UtilityButtons } from "@shared/components/utilityButtons"; 
import { useApp } from '@app/context/appContext';

export const ProfileHeader = ({ foto, nombre, apellido, rol }) => {
  const { isDark } = useApp();

  // --- VARIANTES DE FRAMER MOTION PARA ENTRADA EN CASCADA ---
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3, 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, filter: "blur(5px)" },
    show: { 
      y: 0, 
      opacity: 1, 
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 120, damping: 12 }
    }
  };

  // --- LÓGICA DE COLORES DEL AVATAR SEGÚN EL TEMA (SOLO AZULES FUERTES) ---
  // Capa 1: Resplandor desenfocado de fondo
  const glowGradient = isDark 
    ? 'from-[#22d3ee] via-[#2563eb] to-[#00f6ff]' // Neón Oscuro
    : 'from-blue-400 via-blue-700 to-blue-900';   // Azules Fuertes Claro

  // Capa 2: Anillo exterior
  const outerRingGradient = isDark 
    ? 'from-[#00f6ff] via-transparent to-[#3b82f6]' 
    : 'from-blue-600 via-transparent to-blue-950';

  // Capa 3: Anillo interior
  const innerRingGradient = isDark 
    ? 'from-[#2563eb] via-transparent to-[#22d3ee]' 
    : 'from-blue-950 via-transparent to-blue-500';

  return (
    <header className="flex flex-col items-center lg:items-start relative z-10 w-full group/header pl-2">
      
      <style>
        {`
          @keyframes spin-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          .animate-spin-reverse {
            animation: spin-reverse 8s linear infinite;
          }
          
          @keyframes neon-flow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-neon-flow {
            background-size: 200% auto;
            animation: neon-flow 5s linear infinite;
          }
        `}
      </style>

      <div className="w-full flex justify-center lg:justify-between items-start mb-8">
        
        {/* AVATAR CON HALO ANIMADO */}
        <div className="relative w-32 h-32 lg:w-40 lg:h-40 group/avatar mt-2 shrink-0">
          
          {/* Capa 1: Resplandor Ambiental */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: isDark ? [0.3, 0.5, 0.3] : [0.15, 0.3, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute -inset-3 bg-gradient-to-tr ${glowGradient} rounded-full blur-xl transition-all duration-500`} 
          />
          
          {/* Capa 2: Anillo Exterior Giratorio */}
          <div 
            className={`absolute -inset-1.5 rounded-full border border-transparent bg-gradient-to-br ${outerRingGradient} opacity-70 animate-[spin_4s_linear_infinite] mask-border transition-colors duration-500`} 
            style={{ WebkitMaskImage: 'linear-gradient(#fff, #fff)', WebkitMaskClip: 'content-box, border-box' }} 
          />
          
          {/* Capa 3: Anillo Interior Giratorio */}
          <div 
            className={`absolute -inset-0.5 rounded-full border border-transparent bg-gradient-to-tl ${innerRingGradient} opacity-80 animate-spin-reverse mask-border transition-colors duration-500`} 
            style={{ WebkitMaskImage: 'linear-gradient(#fff, #fff)', WebkitMaskClip: 'content-box, border-box' }} 
          />

          {/* Contenedor Principal de la Imagen */}
          <div className={`absolute inset-1 rounded-full border-2 overflow-hidden z-10 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] transition-colors duration-500 ${isDark ? 'bg-main-bg border-black/40' : 'bg-white border-blue-200'}`}>
            <img 
              src={foto} 
              alt={nombre} 
              className="w-full h-full aspect-square rounded-full object-cover grayscale-[40%]" 
            />
            {/* Overlay sutil de cristal sobre la foto */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-full" />
          </div>
        </div>

        {/* BOTONES DE UTILIDAD */}
        <UtilityButtons customClasses="hidden lg:flex gap-2 scale-75 opacity-30 hover:opacity-100 transition-all duration-500 origin-top-right" />
      </div>

      {/* TEXTOS PRINCIPALES CON ENTRADA EN CASCADA */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-1 text-center lg:text-left cursor-default select-none pointer-events-none relative z-20"
      >
        <h1 className="text-3xl lg:text-4xl font-black tracking-tighter uppercase italic leading-none transition-colors duration-300 flex flex-col items-center lg:items-start">
          
          {/* Nombre */}
          <motion.span 
            variants={itemVariants} 
            className={`${isDark ? 'text-white' : 'text-blue-950'} drop-shadow-sm transition-colors duration-300 inline-block`}
          >
            {nombre}
          </motion.span> 
          
          {/* Apellido */}
          <motion.span 
            variants={itemVariants} 
            className={`not-italic font-light animate-neon-flow bg-clip-text text-transparent inline-block pb-1 mt-1.5 transition-all duration-300 bg-gradient-to-r ${
              isDark 
                ? 'from-[#3b82f6] via-[#00f6ff] to-[#2563eb] drop-shadow-[0_0_12px_rgba(0,246,255,0.4)]' 
                : 'from-blue-800 via-blue-600 to-blue-950' /* Solo Azules Fuertes */
            }`}
          >
            {apellido}
          </motion.span>
        </h1>
        
        {/* Rol */}
        <motion.span 
          variants={itemVariants} 
          className={`text-[10px] md:text-[11px] font-mono tracking-[0.4em] uppercase pt-4 block font-bold bg-clip-text text-transparent animate-neon-flow transition-all duration-300 bg-gradient-to-r ${
            isDark
              ? 'from-[#60a5fa] via-[#22d3ee] to-[#3b82f6] drop-shadow-[0_0_6px_rgba(34,211,238,0.3)]'
              : 'from-blue-700 via-sky-600 to-blue-900' /* Solo Azules Fuertes */
          }`}
        >
          {rol}
        </motion.span>
      </motion.div>
    </header>
  );
};