import React, { useState, useEffect } from 'react';

export default function Proyecto({
  titulo,
  descripcion,
  tecnologias = [],
  imagen,
  imagenes = [],
  urlSitio,
  urlRepositorio
}) {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [indiceImagen, setIndiceImagen] = useState(0);
  const [fade, setFade] = useState(true);

  // Abrir modal
  const abrirModal = () => {
    setIndiceImagen(0);
    setModalAbierto(true);
    setFade(true);
  };

  // Cerrar modal con animación
  const cerrarModal = () => {
    setFade(false);
    setTimeout(() => setModalAbierto(false), 300);
  };

  // Cambio manual de imágenes
  const imagenSiguiente = () => {
    setFade(false);
    setTimeout(() => {
      setIndiceImagen((prev) => (prev + 1) % imagenes.length);
      setFade(true);
    }, 100);
  };

  const imagenAnterior = () => {
    setFade(false);
    setTimeout(() => {
      setIndiceImagen((prev) => (prev - 1 + imagenes.length) % imagenes.length);
      setFade(true);
    }, 100);
  };

  // Escape key para cerrar modal
  useEffect(() => {
    const manejarEscape = (e) => {
      if (e.key === 'Escape') cerrarModal();
    };

    if (modalAbierto) {
      window.addEventListener('keydown', manejarEscape);
    }

    return () => window.removeEventListener('keydown', manejarEscape);
  }, [modalAbierto]);

  // Rotación automática de imágenes
  useEffect(() => {
    if (!modalAbierto || imagenes.length <= 1) return;

    const intervalo = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndiceImagen((prev) => (prev + 1) % imagenes.length);
        setFade(true);
      }, 100);
    }, 8000);

    return () => clearInterval(intervalo);
  }, [modalAbierto, imagenes]);

  return (
    <>
      <div className="bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col lg:flex-row gap-6 text-white">
        {imagen && (
          <div className="lg:w-1/3 w-full cursor-pointer" onClick={abrirModal}>
            <img
              src={imagen}
              alt={`Imagen del proyecto ${titulo}`}
              className="rounded-xl w-full object-cover h-48 lg:h-full hover:opacity-80 transition"
            />
          </div>
        )}

        <div className={imagen ? 'flex flex-col justify-between lg:w-2/3' : 'flex flex-col justify-between w-full'}>
          <div>
            <h2 className="text-2xl font-semibold">{titulo}</h2>
            <p className="text-sm text-white/70 mt-2 text-justify">{descripcion}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-xl">
            {tecnologias.map((tec, index) => (
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

          <div className="mt-4 flex gap-4 text-sm font-medium">
            {urlSitio && (
              <a
                href={urlSitio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition"
              >
                Ver sitio →
              </a>
            )}
            {urlRepositorio && (
              <a
                href={urlRepositorio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition"
              >
                Ver repositorio →
              </a>
            )}
          </div>
        </div>
      </div>

      {modalAbierto && (
      <div className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center transition-opacity duration-300 px-4 py-8">
        {/* Botón cerrar */}
        <button
          onClick={cerrarModal}
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl transition-colors z-50"
          aria-label="Cerrar"
        >
          ✖
        </button>

        <div className="relative w-full max-w-4xl">
          {/* Imagen principal */}
          <img
            src={imagenes[indiceImagen]}
            alt={`Imagen ${indiceImagen + 1}`}
            className={`w-full max-h-[70vh] object-contain rounded-xl shadow-xl transition-opacity duration-300 ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Botones de navegación */}
          {imagenes.length > 1 && (
            <>
              <button
                onClick={imagenAnterior}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/50 hover:bg-black/70 p-3 rounded-full shadow-md"
                aria-label="Imagen anterior"
              >
                ‹
              </button>
              <button
                onClick={imagenSiguiente}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/50 hover:bg-black/70 p-3 rounded-full shadow-md"
                aria-label="Imagen siguiente"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Miniaturas */}
        {imagenes.length > 1 && (
          <div className="mt-4 flex flex-wrap justify-center gap-2 max-w-4xl overflow-y-hidden overflow-x-auto whitespace-nowrap">
            {imagenes.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Miniatura ${index + 1}`}
                onClick={() => setIndiceImagen(index)}
                className={`h-20 w-20 object-cover rounded-md cursor-pointer border-2 transition-all ${
                  index === indiceImagen ? 'border-white scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    )}
    </>
  );
}
