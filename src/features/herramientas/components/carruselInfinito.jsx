import React, { useState, useEffect, useContext } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import CartaTecnologia from '@features/herramientas/components/cartaTecnologias';
import { ConsolaContext } from '@features/herramientas/components/habilidadesConsola'; 

const FilaAnimada = ({ baseFila, direccion, velocidad, idCategoria, keyPrefix }) => {
  const baseX = useMotionValue(0);

  let baseExpandida = [...baseFila];
  while (baseExpandida.length < 15) {
    baseExpandida = [...baseExpandida, ...baseFila];
  }
  const fila = [...baseExpandida, ...baseExpandida];

  useAnimationFrame((t, delta) => {
    const moveBy = direccion * (velocidad * 0.00009) * delta;
    
    let newX = baseX.get() + moveBy;

    if (direccion === -1) { 
      if (newX <= -50) newX += 50; 
    } else { 
      if (newX >= 0) newX -= 50;
    }

    baseX.set(newX);
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  if (baseFila.length === 0) return null;

  return (
    <div className="flex overflow-hidden w-full">
      <motion.div 
        style={{ x }} 
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

export default function CarruselInfinito({ listaItems = [], idCategoria }) {
  const [esMovil, setEsMovil] = useState(false);
  
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

  return (
    <div className="w-full h-full flex flex-col justify-center gap-6 md:gap-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <FilaAnimada baseFila={baseFila1} direccion={-1} velocidad={velocidad} idCategoria={idCategoria} keyPrefix="f1" />
      <FilaAnimada baseFila={baseFila2} direccion={1} velocidad={velocidad} idCategoria={idCategoria} keyPrefix="f2" />
      {esMovil && <FilaAnimada baseFila={baseFila3} direccion={-1} velocidad={velocidad} idCategoria={idCategoria} keyPrefix="f3" />}
    </div>
  );
}
