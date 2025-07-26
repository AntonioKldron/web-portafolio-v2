import React from 'react';

export default function ExperienciaCarta({ empresa, año, roll, descripcion, tecnologias }) {
  return (
    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-xl p-6 max-w-xl mx-auto text-white space-y-4">
      <div className="flex justify-between items-start border-b border-white/10 pb-2">
        <div>
          <h1 className="text-xl font-semibold tracking-wide">{empresa}</h1>
          <p className="text-sm text-white/60">{roll}</p>
        </div>
        <span className="text-sm text-white/50">{año}</span>
      </div>

      <div className="space-y-3">
        <p className="text-white/80 leading-relaxed text-sm text-justify">
          {descripcion}
        </p>

        <a 
          href="#" 
          className="inline-block text-indigo-400 hover:text-indigo-300 transition duration-200 text-sm font-medium"
        >
          Ver más →
        </a>
      </div>

      {/* Tecnologías */}
      <div className="pt-4 border-t border-white/10">
        <h2 className="text-xs font-semibold text-white/60 mb-2 uppercase tracking-widest">
          Tecnologías
        </h2>
        <div className="flex items-center gap-4">
          {tecnologias.map((tec, index) => (
            <span 
              key={index} 
              className="text-white/80 text-xl hover:text-white transition"
              title={tec.name}
            >
              {tec.icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
