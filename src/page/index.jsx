import React from 'react';
import MiCartaPerfil from '../layout/sobreMiLayout'
import MouseLightSpot from '../components/SpotlightCard'; 
import SobreMiSeccion from '../components/sobreMiCart';
import StackSection from '../components/herramientasSeccion'

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-900 text-indigo-100 flex flex-row">
      <MouseLightSpot />

      {/* Columna Izquierda: Ocupa 1/2 del ancho y 100% de la altura de su padre */}
      <div className="w-1/2 h-screen flex items-center justify-center p-4"> 
        <MiCartaPerfil />
      </div>

      <div className="w-1/2 h-screen flex flex-col p-4 overflow-y-auto"> 
        <div id='sobre-mi' className='h-screen flex-shrink-0 flex items-center justify-center'>
          <SobreMiSeccion />
        </div>
        <div id='herramientas'className='h-screen flex-shrink-0 flex items-center justify-center'>
          <StackSection />
        </div>
      </div>
    </div>
  );
}