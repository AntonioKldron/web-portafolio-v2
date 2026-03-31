import React from 'react';
import TextoConHighlights from '@features/sobreMi/components/textoConHighlights';

export default function ItemParrafoSobreMi({ texto, highlights }) {
  return (
    <div className="last:pb-0">
      <div className="text-muted-text text-sm lg:text-[0.92rem] leading-[1.8] font-medium hover:text-main-text transition-colors duration-500">
        <TextoConHighlights texto={texto} highlights={highlights} />
      </div>
    </div>
  );
}
