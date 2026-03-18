import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { herramientasData } from '../../data/herramientas/herramientasData.jsx';
import MenuNavegacionStack from './components/menuNavegacionStack.jsx';
import VisorTecnologico from './components/visorTecnologico.jsx';
import EncabezadoSeccion from '../components/encabezadoSeccion.jsx';

export default function SeccionHerramientas() {
  const [indiceCategoria, setIndiceCategoria] = useState(0);
  const t = useTranslation(herramientasData);
  
  const categoriasConIconos = t.categorias.map(cat => ({
    ...cat,
    icon: herramientasData.iconosCategorias[cat.id.replace('-', '')]
  }));

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