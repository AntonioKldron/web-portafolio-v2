import React, { useRef, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import FondoAnimado from '../shared/static/fondo';
import LoaderWeb from '../shared/components/loader/loaderWeb';
import LoaderMobile from '../shared/components/loader/loaderMobile';
import LayoutPrincipal from './layout/layoutPrincipal';

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
    <div className="relative w-full max-w-full min-h-[100dvh] font-sans overflow-x-hidden flex flex-col">
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