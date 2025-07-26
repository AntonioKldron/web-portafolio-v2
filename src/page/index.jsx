import React from 'react';
import MiCartaPerfil from '../layout/sobreMiLayout'
import MouseLightSpot from '../components/SpotlightCard'; 
import SobreMiSeccion from '../components/sobreMiCart';
import StackSection from '../components/herramientasSeccion'

export default function Index() {
  return (
<div className="min-h-screen bg-gray-900 text-indigo-100 flex flex-col lg:flex-row">
  <MouseLightSpot />

  {/* Columna Izquierda: MiCartaPerfil */}
  <div className="w-full lg:w-1/2 h-screen flex items-center justify-center p-4">
    <MiCartaPerfil />
  </div>

  {/* Columna Derecha: Secciones de contenido */}
  <div className="w-full lg:w-1/2 h-screen flex flex-col p-4 overflow-y-auto">
    <div id='sobre-mi' className='h-screen flex-shrink-0 flex items-center justify-center'>
      <div>
       <SobreMiSeccion /> 
      </div>
    </div>
    <div id='herramientas' className='h-screen flex-shrink-0 flex items-center justify-center'>
      <div>
       <StackSection /> 
      </div>
    </div>
  </div>
</div>
  );
}