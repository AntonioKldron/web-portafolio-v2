import React, { useState, useMemo } from 'react';
import { useApp } from '@app/context/appContext'; 
import { herramientasData } from '@data/herramientas/herramientasData';
import MenuNavegacionStack from '@features/herramientas/components/menuNavegacionStack';
import VisorTecnologico from '@features/herramientas/components/visorTecnologico';
import EncabezadoSeccion from '@shared/components/encabezadoSeccion';

export default function SeccionHerramientas() {
  const [indiceCategoria, setIndiceCategoria] = useState(0);
  const { lang } = useApp();

  // 1. Obtenemos la traducción correcta basada en el idioma actual
  const t = useMemo(() => {
    return herramientasData[lang] || herramientasData.es;
  }, [lang]);

  // Si no hay data por alguna razón, no renderizamos nada para evitar errores
  if (!t) return null;

  // Las categorías ya vienen filtradas por idioma dentro de 't'
  const categoriasConIconos = t.categorias || [];
  const categoriaActual = categoriasConIconos[indiceCategoria];

  return (
    <section className="py-12 px-4 bg-transparent relative font-sans w-full">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Encabezado con textos traducidos */}
        <EncabezadoSeccion
          subtitulo={t.header.subtitulo}
          tituloPrincipal={t.header.tituloPrincipal}
          tituloHighlight={t.header.tituloHighlight}
          align="right"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* VISOR (Consola) - Muestra las herramientas de la categoría seleccionada */}
          <div className="lg:col-span-8 order-last lg:order-first h-full flex items-center">
            <VisorTecnologico
              items={categoriaActual?.items || []}
              idCategoria={categoriaActual?.id}
              tituloCategoria={categoriaActual?.title}
            />
          </div>

          {/* NAVEGACIÓN - El menú de la derecha para cambiar de categoría */}
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