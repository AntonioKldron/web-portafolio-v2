import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CartaTecnologia from './cartaTecnologias';
import CarruselInfinito from './carruselInfinito';

export default function VisorTecnologico({ items, idCategoria }) {
  const LIMITE_CARRUSEL = 6;
  const debeMostrarCarrusel = items.length > LIMITE_CARRUSEL;

  return (
    /* Establecemos una altura mínima fija (min-h) para que el box no "salte".
       flex-col y justify-start aseguran que el contenido empiece siempre arriba.
    */
    <div className="lg:col-span-9 relative bg-transparent lg:pl-10 min-h-[500px] md:min-h-[450px] overflow-hidden flex flex-col justify-start">
      <AnimatePresence mode="wait">
        <motion.div 
          key={idCategoria} 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -10 }} 
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          {!debeMostrarCarrusel ? (
            /* ORDEN EN COLUMNAS:
               - grid-cols-2 siempre como base (móvil y escritorio).
               - md:grid-cols-3 para aprovechar el ancho en pantallas grandes.
               - content-start: Clave para que si hay 1 solo item, no se mueva el box.
            */
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4 py-10 w-full content-start items-start">
              {items.map((item, i) => (
                <div 
                  key={`grid-${idCategoria}-${i}`} 
                  className="flex justify-center lg:justify-start min-h-[140px]"
                >
                  <CartaTecnologia 
                    icono={item?.icon} 
                    nombre={item?.name} 
                    colorMarca={item?.primary} 
                  />
                </div>
              ))}
            </div>
          ) : (
            /* Envoltorio del carrusel con el mismo padding superior 
               para que la posición visual sea idéntica al grid.
            */
            <div className="py-10">
              <CarruselInfinito listaItems={items} idCategoria={idCategoria} />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}