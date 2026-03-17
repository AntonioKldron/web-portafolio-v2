import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CartaTecnologia from './cartaTecnologias';

export default function CarruselInfinito({ listaItems, idCategoria }) {
  const [esMovil, setEsMovil] = useState(false);

  useEffect(() => {
    const comprobarResolucion = () => {
      setEsMovil(window.innerWidth < 768);
    };

    comprobarResolucion();
    window.addEventListener('resize', comprobarResolucion);
    return () => window.removeEventListener('resize', comprobarResolucion);
  }, []);

  const numFilas = esMovil ? 3 : 2;
  const filasTemporales = Array.from({ length: numFilas }, () => []);

  if (listaItems && listaItems.length > 0) {
    listaItems.forEach((item, index) => {
      filasTemporales[index % numFilas].push(item);
    });
  }

  const rellenarFila = (arreglo) => {
    if (!arreglo) return [];
    let baseParaRellenar = arreglo.length > 0 ? arreglo : (listaItems || []);
    if (!baseParaRellenar || baseParaRellenar.length === 0) return [];

    let relleno = [...baseParaRellenar];
    while (relleno.length < 12) { 
      relleno = [...relleno, ...baseParaRellenar];
    }
    return relleno;
  };

  const fila1 = rellenarFila(filasTemporales[0]);
  const fila2 = rellenarFila(filasTemporales[1]);
  const fila3 = esMovil ? rellenarFila(filasTemporales[2]) : [];

  return (
    // LA MAGIA ESTÁ AQUÍ: w-full max-w-[100vw] y overflow-hidden previenen que los elementos empujen la pantalla
    <div className="flex flex-col gap-8 md:gap-12 py-10 w-full max-w-[100vw] overflow-hidden box-border">
      
      {/* Fila 1 */}
      {fila1.length > 0 && (
        <div className="flex w-full overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1200] }} 
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
            className="flex gap-8 md:gap-16 shrink-0"
          >
            {fila1.map((item, i) => (
              <CartaTecnologia 
                key={`f1-${idCategoria}-${i}`} 
                icono={item?.icon} 
                nombre={item?.name} 
                colorMarca={item?.primary} 
              />
            ))}
          </motion.div>
        </div>
      )}

      {/* Fila 2 */}
      {fila2.length > 0 && (
        <div className="flex w-full overflow-hidden">
          <motion.div 
            animate={{ x: [-1200, 0] }} 
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
            className="flex gap-8 md:gap-16 shrink-0"
          >
            {fila2.map((item, i) => (
              <CartaTecnologia 
                key={`f2-${idCategoria}-${i}`} 
                icono={item?.icon} 
                nombre={item?.name} 
                colorMarca={item?.primary} 
              />
            ))}
          </motion.div>
        </div>
      )}

      {/* Fila 3 */}
      {esMovil && fila3.length > 0 && (
        <div className="flex w-full overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1200] }} 
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
            className="flex gap-8 md:gap-16 shrink-0"
          >
            {fila3.map((item, i) => (
              <CartaTecnologia 
                key={`f3-${idCategoria}-${i}`} 
                icono={item?.icon} 
                nombre={item?.name} 
                colorMarca={item?.primary} 
              />
            ))}
          </motion.div>
        </div>
      )}

    </div>
  );
}