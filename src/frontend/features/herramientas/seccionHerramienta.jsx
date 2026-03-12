import React, { useState } from 'react';
import { herramientasData } from '../../data/herramientas/herramientasData.jsx';
import MenuNavegacionStack from './components/menuNavegacionStack.jsx';
import VisorTecnologico from './components/visorTecnologico.jsx.jsx';
import EncabezadoSeccion from '../components/encabezadoSeccion.jsx';

export default function SeccionHerramientas() {
  const [indiceCategoria, setIndiceCategoria] = useState(0);
  const categoriaActual = herramientasData[indiceCategoria];

  return (
    <section className="py-24 px-4 bg-transparent relative overflow-hidden font-sans w-full h-full">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <EncabezadoSeccion 
          subtitulo="Herramientas" 
          tituloPrincipal="Stack" 
          tituloHighlight="Tecnológico" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <MenuNavegacionStack 
            categorias={herramientasData} 
            indiceActivo={indiceCategoria} 
            alSeleccionar={setIndiceCategoria} 
          />

          <VisorTecnologico 
            items={categoriaActual?.items || []} 
            idCategoria={categoriaActual?.id} 
          />
        </div>
      </div>
    </section>
  );
}