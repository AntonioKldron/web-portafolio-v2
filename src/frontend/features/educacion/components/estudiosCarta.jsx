// src/components/estudiosCarta.jsx
import React from 'react';

export default function EstudiosCarta({ item }) {
  return (
    <div className="group relative pl-8 pb-10 last:pb-0">
      {/* Timeline Indicator */}
      <div className="absolute left-0 top-0 h-full w-[1px] bg-main-border group-last:h-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-primary-accent bg-main-bg group-hover:bg-primary-accent transition-all duration-500" />
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-mono tracking-widest text-primary-accent uppercase opacity-80">
          {item.fecha}
        </span>
        <h3 className="text-xl font-black text-main-text uppercase italic tracking-tighter leading-tight">
          {item.titulo}
        </h3>
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
          {item.institucion}
        </p>
        <p className="mt-3 text-sm text-muted-text leading-relaxed max-w-2xl text-justify opacity-90">
          {item.descripcion}
        </p>
      </div>
    </div>
  );
}