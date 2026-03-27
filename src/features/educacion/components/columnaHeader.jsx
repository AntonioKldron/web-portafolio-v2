import React from 'react';
import { motion } from 'framer-motion';

export default function ColumnaHeader({ titulo, Icono }) {
  return (
    <header className="flex items-center gap-4 mb-8 select-none">
      {Icono && (
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-accent/10 border border-primary-accent/20">
          <Icono className="text-primary-accent" size={20} />
        </div>
      )}

      <div className="flex flex-col">
        <h3 className="text-2xl font-black text-main-text uppercase tracking-tighter leading-none flex items-center gap-3">
          {titulo}
          
          <div className="h-[2px] w-12 bg-primary-accent/30 rounded-full" />
        </h3>
      </div>

      <div className="flex-1 h-[1px] bg-main-border/10 ml-2" />
    </header>
  );
}
