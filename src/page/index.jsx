import React, { useRef, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import FondoAnimado from '../shared/static/fondo';
import LoaderWeb from '../shared/components/loader/loaderWeb';
import LoaderMobile from '../shared/components/loader/loaderMobile';
import LayoutPrincipal from './layout/layoutPrincipal';

// ❌ ELIMINA ESTA LÍNEA: 
// import { AppProvider } from '@context/appContext';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const checkDevice = () => {
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
    <div className="relative min-h-[100dvh] w-full font-sans ">
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
  );
}