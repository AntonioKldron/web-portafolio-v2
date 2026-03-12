import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CartaTecnologia from './cartaTecnologias';
import CarruselInfinito from './carruselInfinito';

export default function VisorTecnologico({ items, idCategoria }) {
  const LIMITE_CARRUSEL = 6;
  const debeMostrarCarrusel = items.length > LIMITE_CARRUSEL;

  return (
    <div className="lg:col-span-9 relative bg-transparent lg:pl-10 overflow-hidden min-h-[400px]">
      <AnimatePresence mode="wait">
        <motion.div 
          key={idCategoria} 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          exit={{ opacity: 0, x: -20 }} 
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          {!debeMostrarCarrusel ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 py-10">
              {items.map((item, i) => (
                <div key={`grid-${idCategoria}-${i}`} className="flex justify-center lg:justify-start">
                   <CartaTecnologia 
                    icono={item?.icon} 
                    nombre={item?.name} 
                    colorMarca={item?.primary} 
                  />
                </div>
              ))}
            </div>
          ) : (
            <CarruselInfinito listaItems={items} idCategoria={idCategoria} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}