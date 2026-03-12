import React, { useState } from 'react';
import { herramientasData } from '../../data/herramientas/herramientasData.jsx';
import MenuNavegacionStack from './components/menuNavegacionStack.jsx';
import VisorTecnologico from './components/visorTecnologico.jsx';
import EncabezadoSeccion from '../components/encabezadoSeccion.jsx';

export default function SeccionHerramientas() {
  const [indiceCategoria, setIndiceCategoria] = useState(0);
  
  const { header, categorias } = herramientasData;
  const categoriaActual = categorias[indiceCategoria];

  return (
    <section className="py-12 px-4 bg-transparent relative font-sans w-full">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <EncabezadoSeccion 
          subtitulo={header.subtitulo} 
          tituloPrincipal={header.tituloPrincipal} 
          tituloHighlight={header.tituloHighlight} 
          align="right" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Columna de Visor (70% aprox) - Ahora a la IZQUIERDA en LG */}
          <div className="lg:col-span-8 order-last lg:order-first">
            <VisorTecnologico 
              items={categoriaActual?.items || []} 
              idCategoria={categoriaActual?.id} 
            />
          </div>

          {/* Columna de Navegación (30% aprox) - Ahora a la DERECHA en LG */}
          <div className="lg:col-span-4 order-first lg:order-last">
            <MenuNavegacionStack 
              categorias={categorias} 
              indiceActivo={indiceCategoria} 
              alSeleccionar={setIndiceCategoria} 
            />
          </div>

        </div>
      </div>
    </section>
  );
}