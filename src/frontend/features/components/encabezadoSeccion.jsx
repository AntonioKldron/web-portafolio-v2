import React from 'react';

export default function EncabezadoSeccion({ 
  subtitulo, 
  tituloPrincipal, 
  tituloHighlight 
}) {
  return (
    <div className="flex flex-col mb-12">
      {/* Línea decorativa y Subtítulo */}
      <header className="flex items-center gap-4 mb-4 ml-1">
        <span className="h-[1px] w-10 bg-indigo-500"></span>
        <span className="text-indigo-400 font-bold tracking-[0.4em] uppercase text-[10px]">
          {subtitulo}
        </span>
      </header>

      {/* Título con Estilo Mixto */}
      <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter uppercase italic mt-2">
        {tituloPrincipal}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-light not-italic">
          {tituloHighlight}.
        </span>
      </h2>
    </div>
  );
}