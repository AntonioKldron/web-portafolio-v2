// src/components/MouseLightSpot.jsx
import React, { useState, useEffect } from 'react';

export default function MouseLightSpot() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Define el tamaño deseado del halo (lo hemos aumentado para un efecto más vistoso)
  const haloSize = 200; 
  // Calcula el desplazamiento para centrar (la mitad del tamaño)
  const centerOffset = haloSize / 2;

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 transition-transform duration-75 ease-out"
      style={{
        // Restamos la mitad del tamaño del div para centrarlo en el puntero.
        transform: `translate(${mousePosition.x - centerOffset}px, ${mousePosition.y - centerOffset}px)`,
      }}
    >
      <div
        className={`
          w-70 h-70         /* ¡Aumentado a 208px para un halo más grande! */
          bg-gradient-to-br /* Un gradiente para más profundidad */
          from-indigo-950   /* Color de inicio vibrante */
          via-indigo-950      /* Color intermedio para transición suave */
          to-indigo-950       /* Color de finalización llamativo */
          rounded-full      /* Sigue siendo un círculo perfecto */
          blur-3xl          /* Desenfoque fuerte para un efecto de luz suave */
          opacity-70        /* Un poco más opaco para que destaque más */
          animate-pulse-slow /* Animación de pulsación sutil para vida */
        `}
      ></div>
    </div>
  );
}