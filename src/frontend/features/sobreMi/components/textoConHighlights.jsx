import React from 'react';

const Highlight = ({ children }) => (
  <strong className="font-semibold text-primary-accent drop-shadow-[0_0_8px_rgba(var(--color-primary-accent),0.2)] transition-colors duration-300 hover:text-cyan-400 cursor-default">
    {children}
  </strong>
);

export default function TextoConHighlights({ texto, highlights }) {
  const partes = texto.split(/\{(\w+)\}/g);

  return (
    <p className="text-justify transition-all duration-500">
      {partes.map((parte, i) => {
        if (highlights[parte]) {
          return <Highlight key={i}>{highlights[parte]}</Highlight>;
        }
        return parte;
      })}
    </p>
  );
}
