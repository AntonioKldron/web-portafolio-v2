import React from 'react';

export default function TechCard({ icon, name }) {
  return (
    <div className="
      flex flex-col items-center justify-center 
      p-1 m-0.5                         /* Padding y margen mínimos para la compacidad */
      bg-gradient-to-br from-gray-800 to-gray-900 /* Fondo con un degradado sutil */
      rounded-md                         /* Bordes suavemente redondeados */
      shadow-sm                          /* Sombra discreta para profundidad */
      border border-gray-700             /* Borde fino y oscuro */
      h-12                               /* Altura compacta para encajar en el layout */
      text-center                        /* Centra el texto y el ícono */
      transition-all duration-300 ease-in-out /* Transiciones suaves para todos los efectos */
      hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 /* Degradado más claro en hover */
      hover:border-indigo-500            /* Borde se ilumina a indigo en hover */
      hover:shadow-md                    /* Sombra ligeramente más pronunciada en hover */
      hover:scale-105                    /* Efecto de escala sutil en hover */
    ">
      <div className="text-2xl text-indigo-400 mb-0.5">
        {icon}
      </div>
      <p className="text-xs font-semibold text-gray-200">
        {name}
      </p>
    </div>
  );
}