import React from 'react';
import TextoConHighlights from './textoConHighlights';

export default function ItemParrafoSobreMi({ texto, highlights }) {
  return (
    <div className="pb-6 last:pb-0">
      <div className="text-gray-400 text-sm lg:text-[0.92rem] leading-[1.8] font-light hover:text-gray-200 transition-colors duration-500">
        <TextoConHighlights texto={texto} highlights={highlights} />
      </div>
    </div>
  );
}