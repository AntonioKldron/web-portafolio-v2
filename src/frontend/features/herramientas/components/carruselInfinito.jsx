import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import CartaTecnologia from './cartaTecnologias';
// ✨ IMPORTAMOS EL CONTEXTO (Ajusta la ruta si ConsolaHabilidades está en otra carpeta)
import { ConsolaContext } from './habilidadesConsola'; 

export default function CarruselInfinito({ listaItems = [], idCategoria }) {
  const [esMovil, setEsMovil] = useState(false);
  
  // ✨ LEEMOS LA VELOCIDAD DIRECTO DEL CONTEXTO (10 por defecto si hay algún error)
  const velocidadContexto = useContext(ConsolaContext);
  const velocidad = velocidadContexto !== undefined ? velocidadContexto : 10;

  useEffect(() => {
    const comprobarResolucion = () => setEsMovil(window.innerWidth < 768);
    
    comprobarResolucion();
    window.addEventListener('resize', comprobarResolucion);
    return () => window.removeEventListener('resize', comprobarResolucion);
  }, []);

  if (!listaItems || listaItems.length === 0) return null;

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

  const renderFila = (baseFila, direccion, keyPrefix) => {
    if (baseFila.length === 0) return null;

    const fila = [...baseFila, ...baseFila];

    // Cálculos matemáticos usando la velocidad del contexto
    const tiempoPorCarta = 21 - velocidad; 
    const duracionDinamica = baseFila.length * tiempoPorCarta;

    return (
      <div className="flex overflow-hidden w-full">
        <motion.div 
          key={`animacion-${keyPrefix}-${velocidad}`}
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
    <div className="w-full h-full flex flex-col justify-center gap-6 md:gap-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {renderFila(baseFila1, 1, 'f1')}
      {renderFila(baseFila2, -1, 'f2')}
      {esMovil && renderFila(baseFila3, 1, 'f3')}
    </div>
  );
}