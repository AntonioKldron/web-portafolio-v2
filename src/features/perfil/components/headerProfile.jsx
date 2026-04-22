import React from "react";
import { UtilityButtons } from "@shared/components/utilityButtons"; 

export const ProfileHeader = ({ foto, nombre, apellido, rol }) => {
  return (
    <header className="flex flex-col items-center lg:items-start relative z-10 w-full group/header">
      
      {/* ESTILOS DE ANIMACIÓN AVANZADOS */}
      <style>
        {`
          /* Rotación inversa para el segundo anillo del halo */
          @keyframes spin-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          .animate-spin-reverse {
            animation: spin-reverse 8s linear infinite;
          }
          
          /* Flujo de neón líquido para los textos */
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
        
        {/* AVATAR - CON HALO DE NEÓN MULTICAPA INTERACTIVO */}
        <div className="relative w-32 h-32 lg:w-40 lg:h-40 group/avatar cursor-pointer mt-2">
          
          {/* Capa 1: Resplandor Ambiental (Glow expansivo) */}
          <div className="absolute -inset-3 bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 rounded-full blur-xl opacity-30 group-hover/avatar:opacity-60 transition duration-1000 animate-[spin_10s_linear_infinite]" />
          
          {/* Capa 2: Anillo Exterior Giratorio (Sentido Horario) */}
          <div className="absolute -inset-1.5 rounded-full border border-transparent bg-gradient-to-br from-cyan-400 via-transparent to-blue-500 opacity-70 animate-[spin_4s_linear_infinite] mask-border" style={{ WebkitMaskImage: 'linear-gradient(#fff, #fff)', WebkitMaskClip: 'content-box, border-box' }} />
          
          {/* Capa 3: Anillo Interior Giratorio (Sentido Antihorario) */}
          <div className="absolute -inset-0.5 rounded-full border border-transparent bg-gradient-to-tl from-purple-400 via-transparent to-cyan-300 opacity-80 animate-spin-reverse mask-border" style={{ WebkitMaskImage: 'linear-gradient(#fff, #fff)', WebkitMaskClip: 'content-box, border-box' }} />

          {/* Contenedor Principal de la Imagen */}
          <div className="absolute inset-1 bg-main-bg rounded-full border-2 border-black/40 overflow-hidden z-10 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/avatar:scale-105 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
            <img 
              src={foto} 
              alt={nombre} 
              // Se añadieron 'rounded-full' y 'aspect-square' para forzar el círculo perfecto siempre
              className="w-full h-full aspect-square rounded-full object-cover grayscale-[40%] group-hover/avatar:grayscale-0 transition-all duration-700 ease-out transform scale-100 group-hover/avatar:scale-110" 
            />
            {/* Overlay sutil de cristal sobre la foto */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full" />
          </div>
        </div>

        {/* BOTONES DE UTILIDAD */}
        <UtilityButtons customClasses="hidden lg:flex gap-2 scale-75 opacity-40 hover:opacity-100 hover:scale-[0.80] transition-all duration-500 origin-top-right ease-out" />
      </div>

      {/* TEXTOS PRINCIPALES */}
      <div className="space-y-1 text-center lg:text-left cursor-default select-none pointer-events-none">
        
        <h1 className="text-3xl lg:text-4xl font-black text-white tracking-tighter uppercase italic leading-none">
          {nombre} <br /> 
          {/* Apellido con Brillo Fijo y Flujo de Energía */}
          <span className="not-italic font-light animate-neon-flow bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-500 to-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.5)] inline-block pb-1">
            {apellido}
          </span>
        </h1>
        
        {/* Rol con Neón Líquido más fino */}
        <span className="text-[10px] md:text-[11px] font-mono tracking-[0.4em] uppercase pt-3 block font-bold 
          bg-clip-text text-transparent animate-neon-flow
          bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 drop-shadow-[0_0_5px_rgba(168,85,247,0.4)]">
          {rol}
        </span>
      </div>
    </header>
  );
};