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

  // Determinar cuántas filas necesitamos
  const numFilas = esMovil ? 3 : 2;
  
  // Crear arreglos vacíos para nuestras filas
  const filasTemporales = Array.from({ length: numFilas }, () => []);

  // 1. DISTRIBUCIÓN EQUITATIVA (Repartir uno por uno)
  if (listaItems && listaItems.length > 0) {
    listaItems.forEach((item, index) => {
      filasTemporales[index % numFilas].push(item);
    });
  }

  // 2. FUNCIÓN DE RELLENO INTELIGENTE
  const rellenarFila = (arreglo) => {
    // Si la fila quedó vacía (porque había muy pocos items), usamos la lista completa original
    let baseParaRellenar = arreglo.length > 0 ? arreglo : (listaItems || []);
    
    // Si no hay nada en absoluto, retornamos vacío
    if (baseParaRellenar.length === 0) return [];

    let relleno = [...baseParaRellenar];
    // Rellenamos hasta tener al menos 12 elementos para que la animación fluya bien
    while (relleno.length < 12) { 
      relleno = [...relleno, ...baseParaRellenar];
    }
    return relleno;
  };

  // Asignar las filas ya rellenadas y listas
  const fila1 = rellenarFila(filasTemporales[0]);
  const fila2 = rellenarFila(filasTemporales[1]);
  const fila3 = esMovil ? rellenarFila(filasTemporales[2]) : [];

  return (
    <div className="flex flex-col gap-8 md:gap-12 py-10">
      
      {/* Fila 1 - Siempre visible */}
      {fila1.length > 0 && (
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
      )}

      {/* Fila 2 - Siempre visible */}
      {fila2.length > 0 && (
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
      )}

      {/* Fila 3 - Se renderiza SOLO en móvil */}
      {esMovil && fila3.length > 0 && (
        <div className="flex overflow-hidden">
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