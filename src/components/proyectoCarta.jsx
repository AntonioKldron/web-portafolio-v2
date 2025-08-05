import React from 'react';

export default function Proyecto({ titulo, descripcion, tecnologias = [], imagen, enlace }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col lg:flex-row gap-6 text-white ">

      {/* Solo renderiza imagen si existe */}
      {imagen && (
        <div className="lg:w-1/3 w-full">
          <img 
            src={imagen} 
            alt={`Imagen del proyecto ${titulo}`} 
            className="rounded-xl w-full object-cover h-48 lg:h-full"
          />
        </div>
      )}

      {/* Contenido ocupa todo el ancho si no hay imagen, o 2/3 si hay */}
      <div className={imagen ? "flex flex-col justify-between lg:w-2/3" : "flex flex-col justify-between w-full"}>
        <div>
          <h2 className="text-2xl font-semibold">{titulo}</h2>
          <p className="text-sm text-white/70 mt-2 text-justify">{descripcion}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-xl">
          {Array.isArray(tecnologias) && tecnologias.map((tec, index) => (
            <span
              key={index}
              className="flex items-center gap-2 text-white/80 hover:text-white transition"
              title={tec.name}
            >
              {tec.icon}
              <span className="text-sm hidden sm:inline">{tec.name}</span>
            </span>
          ))}
        </div>

        {enlace && (
          <a 
            href={enlace} 
            className="mt-4 inline-block text-indigo-400 hover:text-indigo-300 transition text-sm font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver proyecto →
          </a>
        )}
      </div>
    </div>
  );
}
