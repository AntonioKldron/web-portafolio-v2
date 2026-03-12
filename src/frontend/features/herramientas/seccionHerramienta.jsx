import React, { useState } from 'react';
import { herramientasData } from '../../data/herramientas/herramientasData.jsx';
import MenuNavegacionStack from './components/menuNavegacionStack.jsx';
import VisorTecnologico from './components/visorTecnologico.jsx';
import EncabezadoSeccion from '../components/encabezadoSeccion.jsx';

export default function SeccionHerramientas() {
  const [indiceCategoria, setIndiceCategoria] = useState(0);
  
  // Extraemos la data estructurada
  const { header, categorias } = herramientasData;
  const categoriaActual = categorias[indiceCategoria];

  return (
    /* Reducimos el py-24 a py-12 para mantener el flujo continuo sin gaps */
    <section className="py-12 px-4 bg-transparent relative font-sans w-full">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Encabezado dinámico desde data */}
        <EncabezadoSeccion 
          subtitulo={header.subtitulo} 
          tituloPrincipal={header.tituloPrincipal} 
          tituloHighlight={header.tituloHighlight} 
          align="left" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Columna de Navegación (30% aprox) */}
          <div className="lg:col-span-4">
            <MenuNavegacionStack 
              categorias={categorias} 
              indiceActivo={indiceCategoria} 
              alSeleccionar={setIndiceCategoria} 
            />
          </div>

          {/* Columna de Visor (70% aprox) */}
          <div className="lg:col-span-8">
            <VisorTecnologico 
              items={categoriaActual?.items || []} 
              idCategoria={categoriaActual?.id} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}