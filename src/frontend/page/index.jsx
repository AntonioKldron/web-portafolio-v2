import React, { useRef, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import FondoAnimado from '../static/fondo';
import LoaderWeb from '../layout/index/loaderWeb';       
import LoaderMobile from '../layout/index/loaderMobile'; 
import LayoutPrincipal from '../layout/index/layoutPrincipal';

// IMPORTAMOS EL PROVEEDOR DEL CONTEXTO GLOBAL (Asegúrate de que la ruta sea correcta)
import { LanguageProvider } from '../context/languageContext.jsx'; 

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false); 
  const observerRef = useRef(null);

  useEffect(() => {
    const checkDevice = () => {
      // Ajustado a 1024px para coincidir con el comportamiento de Tailwind "lg"
      setIsMobile(window.innerWidth < 1024);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    const timer = setTimeout(() => setIsLoading(false), 3700);

    return () => {
      window.removeEventListener('resize', checkDevice);
      clearTimeout(timer);
    };
  }, []);

  return (
    // ENVOLVEMOS TODA LA APLICACIÓN CON EL PROVEEDOR DE IDIOMA
    <LanguageProvider>
      <div className="relative min-h-screen w-full overflow-x-hidden font-sans">
        
        <FondoAnimado isActive={true} />

        <AnimatePresence mode="wait">
          {isLoading ? (
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
    </LanguageProvider>
  );
}