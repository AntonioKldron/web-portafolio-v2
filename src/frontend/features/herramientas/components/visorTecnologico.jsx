import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CartaTecnologia from '@features/herramientas/components/cartaTecnologias';
import CarruselInfinito from '@features/herramientas/components/carruselInfinito';
import ConsolaHabilidades from '@features/herramientas/components/habilidadesConsola';

export default function VisorTecnologico({ items, idCategoria, tituloCategoria }) {
  const LIMITE_CARRUSEL = 6;
  const debeMostrarCarrusel = items.length > LIMITE_CARRUSEL;

  // Variantes para el contenedor principal
  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.4, 
        ease: "easeOut",
        // Esto crea el efecto cascada automático para los hijos
        staggerChildren: 0.05 
      } 
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
  };

  // Variantes para cada tarjeta individual (efecto rebote sutil)
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { type: "spring", stiffness: 300, damping: 24 } 
    }
  };

  return (
    <div className="w-full relative">
      <ConsolaHabilidades tituloCategoria={tituloCategoria}>
        <AnimatePresence mode="wait">
          <motion.div 
            key={idCategoria} 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full h-full flex flex-col"
          >
            {!debeMostrarCarrusel ? (
              /* Grid con mejor distribución de espacios (whitespace) */
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 w-full h-full content-start pt-2">
                {items.map((item, i) => (
                  <motion.div 
                    key={`grid-${idCategoria}-${i}`} 
                    variants={itemVariants}
                    className="flex justify-center items-center"
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
              /* Contenedor del carrusel centrado suavemente */
              <motion.div 
                className="h-full flex items-center w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <CarruselInfinito listaItems={items} idCategoria={idCategoria} />
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </ConsolaHabilidades>
    </div>
  );
}
