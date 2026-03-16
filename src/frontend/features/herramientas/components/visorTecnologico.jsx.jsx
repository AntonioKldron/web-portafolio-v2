import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CartaTecnologia from './cartaTecnologias';
import CarruselInfinito from './carruselInfinito';
import ConsolaHabilidades from './ConsolaHabilidades';

export default function VisorTecnologico({ items, idCategoria, tituloCategoria }) {
  const LIMITE_CARRUSEL = 6;
  const debeMostrarCarrusel = items.length > LIMITE_CARRUSEL;

  return (
    <div className="w-full">
      <ConsolaHabilidades tituloCategoria={tituloCategoria}>
        <AnimatePresence mode="wait">
          <motion.div 
            key={idCategoria} 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }} 
            transition={{ duration: 0.3 }}
            /* h-full y content-start son vitales aquí */
            className="w-full h-full"
          >
            {!debeMostrarCarrusel ? (
              /* content-start evita que los pocos items se centren verticalmente */
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 w-full h-full content-start">
                {items.map((item, i) => (
                  <motion.div 
                    key={`grid-${idCategoria}-${i}`} 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="flex justify-center lg:justify-start"
                  >
                    <CartaTecnologia 
                      icono={item?.icon} 
                      nombre={item?.name} 
                      colorMarca={item?.primary} 
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              /* El carrusel también se centra dentro de la altura fija */
              <div className="h-full flex items-center">
                <CarruselInfinito listaItems={items} idCategoria={idCategoria} />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </ConsolaHabilidades>
    </div>
  );
}