import React from 'react';

export default function TechCard({ icon, name, colorClass }) {
  return (
    <div className="px-1 py-2"> {/* Reducido para compactar el carrusel */}
      <div className={`group relative flex flex-col items-center justify-center p-3 rounded-xl 
                    bg-[#0a0f1c]/60 backdrop-blur-lg border border-white/5 transition-all 
                    duration-300 hover:border-indigo-500/50 hover:bg-white/5 ${colorClass}`}>
        
        {/* Icono escalado a 3xl para ahorrar espacio vertical */}
        <div className="text-3xl mb-1.5 transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>
        
        <p className="text-[9px] font-bold tracking-[0.1em] text-gray-500 
                    group-hover:text-white transition-colors uppercase text-center font-mono">
          {name}
        </p>

        <div className="absolute top-1.5 right-1.5 w-1 h-1 bg-white/5 rounded-full group-hover:bg-indigo-400" />
      </div>
    </div>
  );
}