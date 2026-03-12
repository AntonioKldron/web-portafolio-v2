import React from 'react';

export const ProfileHeader = ({ foto, nombre, apellido, rol }) => (
  <header className="flex flex-col items-center lg:items-start relative z-10">
    <div className="relative mb-8 group">
      <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-cyan-500 rounded-full blur opacity-10 group-hover:opacity-30 transition duration-1000" />
      <div className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-full border-2 border-white/10 p-1.5 bg-[#030712] overflow-hidden">
        <img src={foto} alt={nombre} className="w-full h-full rounded-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
      </div>
      <div className="absolute bottom-3 right-3 w-4 h-4 bg-emerald-500 border-4 border-[#030712] rounded-full shadow-[0_0_15px_#10b981] animate-pulse" />
    </div>

    <div className="space-y-1 text-center lg:text-left">
      <h1 className="text-3xl lg:text-4xl font-black text-white tracking-tighter uppercase italic leading-none drop-shadow-md">
        {nombre} <br /> <span className="text-indigo-500 not-italic font-light">{apellido}</span>
      </h1>
      <div className="flex items-center gap-3 pt-2 justify-center lg:justify-start">
        <span className="text-[10px] font-mono tracking-[0.4em] text-gray-500 uppercase">{rol}</span>
      </div>
    </div>
  </header>
);