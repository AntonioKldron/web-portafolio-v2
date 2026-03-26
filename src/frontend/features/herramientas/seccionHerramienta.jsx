import React, { useState } from 'react';
import { useHerramientasData } from '@backend/data/herramientas/herramientasData';
import MenuNavegacionStack from '@features/herramientas/components/menuNavegacionStack';
import VisorTecnologico from '@features/herramientas/components/visorTecnologico';
import EncabezadoSeccion from '@shared/components/encabezadoSeccion';

export default function SeccionHerramientas() {
  const [indiceCategoria, setIndiceCategoria] = useState(0);
  const { data: t, isLoading } = useHerramientasData();

  if (isLoading || !t) {
    return (
      <section className="py-12 px-4 bg-transparent relative font-sans w-full min-h-[50vh] flex items-center justify-center">
        <div className="animate-pulse h-64 bg-gray-500/20 rounded w-full max-w-4xl"></div>
      </section>
    );
  }

  // Icons are now embedded in each category object (no separate iconosCategorias needed)
  const categoriasConIconos = t.categorias || [];

  const categoriaActual = categoriasConIconos[indiceCategoria];

  return (
    <section className="py-12 px-4 bg-transparent relative font-sans w-full">
      <div className="max-w-7xl mx-auto space-y-10">

        <EncabezadoSeccion
          subtitulo={t.header.subtitulo}
          tituloPrincipal={t.header.tituloPrincipal}
          tituloHighlight={t.header.tituloHighlight}
          align="right"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* VISOR (Consola) */}
          <div className="lg:col-span-8 order-last lg:order-first h-full flex items-center">
            <VisorTecnologico
              items={categoriaActual?.items || []}
              idCategoria={categoriaActual?.id}
              tituloCategoria={categoriaActual?.title}
            />
          </div>

          {/* NAVEGACIÓN */}
          <div className="lg:col-span-4 order-first lg:order-last flex justify-center lg:justify-end">
            <MenuNavegacionStack
              categorias={categoriasConIconos}
              indiceActivo={indiceCategoria}
              alSeleccionar={setIndiceCategoria}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
