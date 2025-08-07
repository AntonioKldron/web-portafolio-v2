import React from "react";
import FondoAnimado from "../static/fondo";

export default function ExperienciaCard({
  empresa,
  cargo,
  duracion,
  tecnologias,
  descripcion,
  proyectos = [],
  onClose, // ✅ nueva prop
}) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden text-white">

      {/* Fondo animado si aplica */}
      {/* <FondoAnimado /> */}

      <div className="flex flex-col h-auto lg:h-screen relative z-10">
        {/* Encabezado */}
        <div className="flex flex-col lg:flex-row flex-grow h-1/2">
          <div className="lg:w-1/4 w-full flex items-center justify-center p-6">
            {typeof empresa === "string" ? (
              <button
                onClick={onClose} // ✅ Cierra al hacer clic en el logo
                className="block"
              >
                <img
                  src={empresa}
                  alt="Logo empresa"
                  className="max-h-40 object-contain cursor-pointer mx-auto"
                />
              </button>
            ) : (
              empresa
            )}
          </div>

          {/* Rol y tecnologías */}
          <div className="lg:w-3/4 w-full flex flex-col justify-center px-6 py-6 space-y-6">
            <section className="h-1/3">
              <h3 className="text-lg font-semibold border-b border-indigo-400 pb-1 mb-2">
                Rol
              </h3>
              <p className="text-sm text-indigo-200 tracking-wide">
                {cargo}
                <span className="mx-2 text-indigo-400">·</span>
                <span className="italic">{duracion}</span>
              </p>
            </section>

            <section className="h-2/3">
              <h3 className="text-lg font-semibold border-b border-indigo-400 pb-1 mb-4">
                Tecnologías
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {tecnologias.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-indigo-100 text-xs font-medium hover:scale-105 transition-transform"
                    title={tech.name}
                  >
                    <div className="text-2xl mb-1">{tech.icon}</div>
                    <span className="text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Descripción */}
        <div className="w-full px-6 py-8 h-1/2">
          <h3 className="text-lg font-semibold border-b border-indigo-400 pb-2 mb-4">
            Descripción
          </h3>
          <p
            className="text-indigo-200 text-sm leading-relaxed text-justify tracking-wide w-full"
            dangerouslySetInnerHTML={{ __html: descripcion }}
          />
        </div>
      </div>

      {/* Tabla de proyectos */}
      {proyectos.length > 0 && (
        <div className="w-full overflow-x-auto px-6 pb-10 relative z-10">
          <h3 className="text-lg font-semibold border-b border-indigo-400 pb-2 mb-4">
            Proyectos
          </h3>
          <table className="min-w-full text-sm text-left text-indigo-200 border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b border-indigo-400 font-semibold">Proyecto</th>
                <th className="px-4 py-2 border-b border-indigo-400 font-semibold">Tecnologías</th>
                <th className="px-4 py-2 border-b border-indigo-400 font-semibold">Descripción</th>
                <th className="px-4 py-2 border-b border-indigo-400 font-semibold">Repositorio</th>
              </tr>
            </thead>
            <tbody>
              {proyectos.map((proj, index) => (
                <tr
                  key={index}
                  className="hover:bg-indigo-700 hover:bg-opacity-20 transition-colors cursor-pointer"
                >
                  <td className="px-4 py-2">{proj.nombre}</td>
                  <td className="px-4 py-2">{proj.tecnologias.join(", ")}</td>
                  <td className="px-4 py-2">{proj.descripcion}</td>
                  <td className="px-4 py-2">
                    <a
                      href={proj.repositorio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-300 underline hover:text-indigo-100"
                    >
                      Ver repositorio
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ✅ Botón para cerrar modal abajo */}
      <div className="flex justify-center p-6 z-20">
        <button
          onClick={onClose}
          className="px-6 py-3 bg-gray-800 text-white rounded-xl font-semibold shadow-md hover:bg-indigo-500 transition-colors duration-300"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
