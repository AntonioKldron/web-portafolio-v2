import React from 'react';

export default function Educacion({ estudios }) {
  return (
    <section
      id="educacion"
      className="py-16 px-6 max-w-4xl mx-auto text-white from-indigo-900 to-black"
    >
      <h1 className="text-3xl font-extrabold text-center mb-12 tracking-wide">Educación</h1>

      <div className="space-y-12 text-justify">
        {estudios.map((estudio, index) => (
          <div key={index} className="border-l-2 border-indigo-500 pl-6">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-lg font-semibold text-indigo-300">{estudio.titulo}</h2>
              <span className="text-sm text-indigo-400 font-mono">{estudio.fecha}</span>
            </div>
            <p className="text-indigo-200">{estudio.institucion}</p>
            {estudio.descripcion && (
              <p className="mt-1 text-indigo-400 text-sm leading-relaxed">{estudio.descripcion}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
