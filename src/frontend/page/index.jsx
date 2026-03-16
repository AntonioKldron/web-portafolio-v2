import React, { useRef, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import FondoAnimado from '../static/fondo';
// Importamos AMBOS loaders
import LoaderWeb from '../layout/index/loaderWeb';       // Tu loader original grande
import LoaderMobile from '../layout/index/loaderMobile'; // El loader que ajustamos para que no crashee
import LayoutPrincipal from '../layout/index/layoutPrincipal';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false); // Estado para saber si es celular
  const observerRef = useRef(null);

  useEffect(() => {
    // 1. Función que revisa el ancho de la pantalla
    const checkDevice = () => {
      // Si la pantalla mide menos de 768px de ancho, asumimos que es móvil/tablet
      setIsMobile(window.innerWidth < 768);
    };

    // Ejecutamos la revisión nada más cargar
    checkDevice();

    // (Opcional) Escuchamos si el usuario voltea el celular o cambia el tamaño de la ventana
    window.addEventListener('resize', checkDevice);

    // 2. Temporizador para quitar el loader y mostrar el contenido
    const timer = setTimeout(() => setIsLoading(false), 3700);

    // 3. Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('resize', checkDevice);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden font-sans">
      
      {/* FONDO ANIMADO */}
      <FondoAnimado isActive={true} />

      {/* CONTENIDO PRINCIPAL */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          // AQUÍ ESTÁ LA MAGIA: Operador ternario para decidir cuál mostrar
          isMobile ? (
            <LoaderMobile key="loader-mobile" />
          ) : (
            <LoaderWeb key="loader-web" />
          )
        ) : (
          <LayoutPrincipal key="content" observerRef={observerRef} />
        )}
      </AnimatePresence>
      
    </div>
  );
}