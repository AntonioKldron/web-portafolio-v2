import React, { useState, useMemo } from 'react';
import { useApp } from '@app/context/appContext'; 
import { herramientasData } from '@data/herramientas/herramientasData';
import EncabezadoSeccion from '@shared/components/encabezadoSeccion';
import InterfazUnificada from '@features/herramientas/components/interfazUnificada';
import TerminalNavigation from '@features/herramientas/components/terminalNavigation'; 

export default function SeccionHerramientas() {
  const [indiceCategoria, setIndiceCategoria] = useState(0);
  const { lang, isDark } = useApp();

  const t = useMemo(() => herramientasData[lang] || herramientasData.es, [lang]);

  if (!t) return null;

  const categoriasConIconos = t.categorias || [];

  return (
    <section className="px-4 bg-transparent relative font-sans w-full h-auto flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full space-y-6 py-10">
        <EncabezadoSeccion
          subtitulo={t.header.subtitulo}
          tituloPrincipal={t.header.tituloPrincipal}
          tituloHighlight={t.header.tituloHighlight}
          align="right" 
        />
        <div className="md:hidden w-full">
          <TerminalNavigation 
            categorias={categoriasConIconos}
            indiceCategoria={indiceCategoria}
            setIndiceCategoria={setIndiceCategoria}
            isDark={isDark}
            mobileMode="select" 
          />
        </div>
        <InterfazUnificada 
          categorias={categoriasConIconos}
          indiceCategoria={indiceCategoria}
          setIndiceCategoria={setIndiceCategoria}
        />
      </div>
    </section>
  );
}