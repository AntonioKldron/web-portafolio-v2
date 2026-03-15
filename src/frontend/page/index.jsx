import React, { useRef, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import FondoAnimado from '../static/fondo';
import Loader from '../layout/index/loader';
import LayoutPrincipal from '../layout/index/LayoutPrincipal';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const observerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden font-sans">
      
      {/* 1. FONDO ANIMADO (Aislado en la capa base) */}
      <FondoAnimado isActive={true} />

      {/* 2. CONTENIDO PRINCIPAL */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <LayoutPrincipal key="content" observerRef={observerRef} />
        )}
      </AnimatePresence>
      
    </div>
  );
}