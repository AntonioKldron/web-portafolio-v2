import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CartaTecnologia from './cartaTecnologias';

export default function CarruselInfinito({ listaItems, idCategoria }) {
  const [esMovil, setEsMovil] = useState(false);

  useEffect(() => {
    // Función para detectar si estamos en un dispositivo móvil (< 768px es el estándar en Tailwind)
    const comprobarResolucion = () => {
      setEsMovil(window.innerWidth < 768);
    };

    comprobarResolucion(); // Comprobar al montar el componente

    // Agregar un "listener" para reaccionar si el usuario voltea el celular o ajusta la ventana
    window.addEventListener('resize', comprobarResolucion);
    return () => window.removeEventListener('resize', comprobarResolucion);
  }, []);

  const rellenarFila = (arreglo) => {
    if (!arreglo || arreglo.length === 0) return [];
    let relleno = [...arreglo];
    while (relleno.length < 12) { 
      relleno = [...relleno, ...arreglo];
    }
    return relleno;
  };

  // Variables para nuestras filas
  let fila1, fila2, fila3;

  // Lógica matemática para separar el arreglo dependiendo de la pantalla
  if (esMovil) {
    const tercio = Math.ceil(listaItems.length / 3);
    fila1 = rellenarFila(listaItems.slice(0, tercio));
    fila2 = rellenarFila(listaItems.slice(tercio, tercio * 2));
    fila3 = rellenarFila(listaItems.slice(tercio * 2));
  } else {
    const mitad = Math.ceil(listaItems.length / 2);
    fila1 = rellenarFila(listaItems.slice(0, mitad));
    fila2 = rellenarFila(listaItems.slice(mitad));
    fila3 = []; // Esta queda vacía en escritorio
  }

  return (
    <div className="flex flex-col gap-8 md:gap-12 py-10">
      
      {/* Fila 1 - Siempre visible */}
      <div className="flex overflow-hidden">
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

      {/* Fila 2 - Siempre visible */}
      <div className="flex overflow-hidden">
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

      {/* Fila 3 - Se renderiza SOLO en móvil */}
      {esMovil && (
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1200] }} // Hace el mismo recorrido que la Fila 1
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