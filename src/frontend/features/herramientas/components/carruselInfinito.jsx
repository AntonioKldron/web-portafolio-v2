import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CartaTecnologia from './cartaTecnologias';

export default function CarruselInfinito({ listaItems = [], idCategoria }) {
  const [esMovil, setEsMovil] = useState(false);

  useEffect(() => {
    const comprobarResolucion = () => {
      setEsMovil(window.innerWidth < 768);
    };

    comprobarResolucion();
    window.addEventListener('resize', comprobarResolucion);
    return () => window.removeEventListener('resize', comprobarResolucion);
  }, []);

  if (!listaItems || listaItems.length === 0) return null;

  // 1. Distribuir como "baraja de cartas"
  // Repartimos una por una a cada fila para asegurar variedad absoluta en las columnas
  let baseFila1 = [];
  let baseFila2 = [];
  let baseFila3 = [];

  listaItems.forEach((item, index) => {
    if (esMovil) {
      if (index % 3 === 0) baseFila1.push(item);
      else if (index % 3 === 1) baseFila2.push(item);
      else baseFila3.push(item);
    } else {
      if (index % 2 === 0) baseFila1.push(item);
      else baseFila2.push(item);
    }
  });

  // 2. Función para alargar la fila y prepararla para el loop infinito
  const prepararFila = (filaBase) => {
    if (filaBase.length === 0) return [];
    
    let filaExtendida = [...filaBase];
    // Rellenamos hasta tener al menos 15 elementos para asegurar que cubra toda la pantalla
    // Esto evita que el ciclo se repita en el rango visual de inmediato
    while (filaExtendida.length < 15) {
      filaExtendida = [...filaExtendida, ...filaBase];
    }
    
    // Duplicamos el arreglo final para el truco de la animación al -50%
    return [...filaExtendida, ...filaExtendida];
  };

  const fila1 = prepararFila(baseFila1);
  const fila2 = prepararFila(baseFila2);
  const fila3 = esMovil ? prepararFila(baseFila3) : [];

  // 3. Helper de renderizado para simplificar el JSX
  const renderFila = (fila, direccion, keyPrefix) => (
    <div className="flex overflow-hidden">
      <motion.div 
        animate={{ x: direccion === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }} 
        // DURATION: 80. Entre más alto sea este número, más lento irá el carrusel.
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }} 
        className="flex gap-8 md:gap-16 shrink-0 w-max"
      >
        {fila.map((item, i) => (
          <CartaTecnologia 
            key={`${keyPrefix}-${idCategoria}-${i}`} 
            icono={item?.icon} 
            nombre={item?.name} 
            colorMarca={item?.primary} 
          />
        ))}
      </motion.div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8 md:gap-12 py-10 overflow-hidden">
      {/* Fila 1 - Izquierda */}
      {renderFila(fila1, 1, 'f1')}

      {/* Fila 2 - Derecha */}
      {renderFila(fila2, -1, 'f2')}

      {/* Fila 3 - Izquierda (Solo móvil) */}
      {esMovil && renderFila(fila3, 1, 'f3')}
    </div>
  );
}