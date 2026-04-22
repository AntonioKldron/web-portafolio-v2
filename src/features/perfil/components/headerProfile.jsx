import React from "react";
import { motion } from "framer-motion"; // Asegúrate de tener framer-motion instalado
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
        staggerChildren: 0.15, // Retraso entre cada hijo
        delayChildren: 0.3,    // Retraso inicial antes de empezar
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

  return (
    <header className="flex flex-col items-center lg:items-start relative z-10 w-full group/header pl-2">
      
      {/* ESTILOS DE ANIMACIÓN CSS (Para rotaciones y efectos continuos) */}
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
        
        {/* AVATAR CON HALO ANIMADO (Imagen estática) */}
        <div className="relative w-32 h-32 lg:w-40 lg:h-40 group/avatar mt-2 shrink-0">
          
          {/* Capa 1: Resplandor Ambiental (Con latido/pulsación de expansión) */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-3 bg-gradient-to-tr from-[#22d3ee] via-[#2563eb] to-[#00f6ff] rounded-full blur-xl group-hover/avatar:opacity-70 transition-opacity duration-500" 
          />
          
          {/* Capa 2: Anillo Exterior Giratorio (Sentido Horario) */}
          <div className="absolute -inset-1.5 rounded-full border border-transparent bg-gradient-to-br from-[#00f6ff] via-transparent to-[#3b82f6] opacity-70 animate-[spin_4s_linear_infinite] mask-border" style={{ WebkitMaskImage: 'linear-gradient(#fff, #fff)', WebkitMaskClip: 'content-box, border-box' }} />
          
          {/* Capa 3: Anillo Interior Giratorio (Sentido Antihorario) */}
          <div className="absolute -inset-0.5 rounded-full border border-transparent bg-gradient-to-tl from-[#2563eb] via-transparent to-[#22d3ee] opacity-80 animate-spin-reverse mask-border" style={{ WebkitMaskImage: 'linear-gradient(#fff, #fff)', WebkitMaskClip: 'content-box, border-box' }} />

          {/* Contenedor Principal de la Imagen (Estática) */}
          <div className="absolute inset-1 bg-main-bg rounded-full border-2 border-black/40 overflow-hidden z-10 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
            
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
          
          {/* Nombre con color dinámico (Modo Claro/Oscuro) */}
          <motion.span 
            variants={itemVariants} 
            className={`${isDark ? 'text-white' : 'text-blue-950'} drop-shadow-sm transition-colors duration-300 inline-block`}
          >
            {nombre}
          </motion.span> 
          
          {/* Apellido con Gradiente Azul Neón y Flujo Continuo */}
          <motion.span 
            variants={itemVariants} 
            className="not-italic font-light animate-neon-flow bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] via-[#00f6ff] to-[#2563eb] drop-shadow-[0_0_12px_rgba(0,246,255,0.4)] inline-block pb-1 mt-1.5"
          >
            {apellido}
          </motion.span>
        </h1>
        
        {/* Rol con Neón Líquido más fino */}
        <motion.span 
          variants={itemVariants} 
          className="text-[10px] md:text-[11px] font-mono tracking-[0.4em] uppercase pt-4 block font-bold 
            bg-clip-text text-transparent animate-neon-flow
            bg-gradient-to-r from-[#60a5fa] via-[#22d3ee] to-[#3b82f6] drop-shadow-[0_0_6px_rgba(34,211,238,0.3)]"
        >
          {rol}
        </motion.span>
      </motion.div>
    </header>
  );
};