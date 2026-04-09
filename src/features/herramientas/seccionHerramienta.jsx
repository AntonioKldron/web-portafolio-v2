import React, { useState, useMemo } from 'react';
import { useApp } from '@app/context/appContext'; 
import { herramientasData } from '@data/herramientas/herramientasData';
import EncabezadoSeccion from '@shared/components/encabezadoSeccion';
import InterfazUnificada from '@features/herramientas/components/interfazUnificada';
import TerminalNavigation from '@features/herramientas/components/TerminalNavigation'; 

export default function SeccionHerramientas() {
  const [indiceCategoria, setIndiceCategoria] = useState(0);
  const { lang, isDark } = useApp();

  const t = useMemo(() => herramientasData[lang] || herramientasData.es, [lang]);

  if (!t) return null;

  const categoriasConIconos = t.categorias || [];

  return (
    /* ✅ Quitamos py-20 para eliminar el espacio arriba y abajo de la sección */
    /* ✅ Usamos h-auto en lugar de min-h-screen para que no fuerce un tamaño gigante si no es necesario */
    <section className="px-4 bg-transparent relative font-sans w-full h-auto flex flex-col justify-center">
      
      {/* ✅ Reducimos space-y-12 a space-y-6 o eliminamos si quieres pegarlo más al encabezado */}
      <div className="max-w-7xl mx-auto w-full space-y-6 py-10">
        
        <EncabezadoSeccion
          subtitulo={t.header.subtitulo}
          tituloPrincipal={t.header.tituloPrincipal}
          tituloHighlight={t.header.tituloHighlight}
          align="right" 
        />

        {/* --- SELECT PARA MÓVIL --- */}
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