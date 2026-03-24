import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CartaTecnologia from './cartaTecnologias';

export default function CarruselInfinito({ listaItems = [], idCategoria }) {
  const [esMovil, setEsMovil] = useState(false);

  // Necesitamos detectar la pantalla para saber en cuántos grupos dividir las cartas
  useEffect(() => {
    const comprobarResolucion = () => setEsMovil(window.innerWidth < 768);
    
    comprobarResolucion();
    window.addEventListener('resize', comprobarResolucion);
    return () => window.removeEventListener('resize', comprobarResolucion);
  }, []);

  if (!listaItems || listaItems.length === 0) return null;

  // 1. REPARTIR CARTAS DINÁMICAMENTE
  // Si es móvil, dividimos en 3 grupos. Si es PC, en 2 grupos.
  const baseFila1 = [];
  const baseFila2 = [];
  const baseFila3 = [];

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

  // 2. Helper de renderizado
  const renderFila = (baseFila, direccion, keyPrefix) => {
    if (baseFila.length === 0) return null;

    // Duplicamos estrictamente UNA SOLA VEZ para que funcione el loop de Framer Motion.
    const fila = [...baseFila, ...baseFila];

    // 3. VELOCIDAD UNIFORME: 
    // Le tomará 12 segundos a cada carta atravesar la pantalla.
    // Al multiplicar por baseFila.length, garantizamos que sin importar si la fila
    // tiene 2 cartas o 10 cartas, la velocidad visual (píxeles por segundo) sea idéntica.
    const duracionDinamica = baseFila.length * 12;

    return (
      <div className="flex overflow-hidden">
        <motion.div 
          animate={{ x: direccion === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }} 
          transition={{ duration: duracionDinamica, repeat: Infinity, ease: "linear" }} 
          className="flex gap-6 md:gap-12 shrink-0 w-max"
        >
          {fila.map((item, i) => (
            <div key={`${keyPrefix}-${idCategoria}-${i}`} className="transition-transform duration-300 hover:scale-105">
              <CartaTecnologia 
                icono={item?.icon} 
                nombre={item?.name} 
                colorMarca={item?.primary} 
              />
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="relative flex flex-col gap-6 md:gap-12 py-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      
      {/* Fila 1 - Izquierda */}
      {renderFila(baseFila1, 1, 'f1')}

      {/* Fila 2 - Derecha */}
      {renderFila(baseFila2, -1, 'f2')}

      {/* Fila 3 - Izquierda (Solo se llena y renderiza si estamos en móvil) */}
      {esMovil && renderFila(baseFila3, 1, 'f3')}
      
    </div>
  );
}