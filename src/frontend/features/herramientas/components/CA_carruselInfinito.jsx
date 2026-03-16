import React from 'react';
import { motion } from 'framer-motion';
import CartaTecnologia from './cartaTecnologias';

export default function CarruselInfinito({ listaItems, idCategoria }) {
  const indiceMedio = Math.ceil(listaItems.length / 2);

  const rellenarFila = (arreglo) => {
    if (arreglo.length === 0) return [];
    let relleno = [...arreglo];
    while (relleno.length < 12) { 
      relleno = [...relleno, ...arreglo];
    }
    return relleno;
  };

  const filaSuperior = rellenarFila(listaItems.slice(0, indiceMedio));
  const filaInferior = rellenarFila(listaItems.slice(indiceMedio));

  return (
    <div className="flex flex-col gap-12 py-10">
      <div className="flex overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1200] }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
          className="flex gap-16 shrink-0"
        >
          {filaSuperior.map((item, i) => (
            <CartaTecnologia 
              key={`fs-${idCategoria}-${i}`} 
              icono={item?.icon} 
              nombre={item?.name} 
              colorMarca={item?.primary} 
            />
          ))}
        </motion.div>
      </div>
      <div className="flex overflow-hidden">
        <motion.div 
          animate={{ x: [-1200, 0] }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
          className="flex gap-16 shrink-0"
        >
          {filaInferior.map((item, i) => (
            <CartaTecnologia 
              key={`fi-${idCategoria}-${i}`} 
              icono={item?.icon} 
              nombre={item?.name} 
              colorMarca={item?.primary} 
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}