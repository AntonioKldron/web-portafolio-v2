import React from 'react';

const Highlight = ({ children }) => (
  <strong className="font-semibold text-indigo-300 drop-shadow-[0_0_8px_rgba(99,102,241,0.4)] transition-colors duration-300 hover:text-cyan-300 cursor-default">
    {children}
  </strong>
);

export default function TextoConHighlights({ texto, highlights }) {
  // Divide el texto buscando patrones tipo {clave}
  const partes = texto.split(/\{(\w+)\}/g);

  return (
    <p className="transition-all duration-500 hover:text-gray-200 text-justify">
      {partes.map((parte, i) => {
        // Si la parte es una clave en el objeto highlights, envuélvela
        if (highlights[parte]) {
          return <Highlight key={i}>{highlights[parte]}</Highlight>;
        }
        return parte;
      })}
    </p>
  );
}