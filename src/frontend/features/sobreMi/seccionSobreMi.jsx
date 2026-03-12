import React from 'react';
import { sobreMiContenido as data } from '../../data/sobreMi/sobreMiData';
import ItemParrafoSobreMi from './components/itemParrafoSobreMi';
import CoreStack from './components/coreStack';
import EncabezadoSeccion from '../components/encabezadoSeccion';

export default function SeccionSobreMi() {
  return (
    /* mt-2 para esa separación mínima que pediste y pt-0 para evitar huecos */
    <div className="mt-4 pt-0 bg-transparent relative font-sans w-full">
      <style>
        {`@keyframes verticalFlow { 0% { top: -20%; opacity: 0; } 50% { opacity: 0.8; } 100% { top: 100%; opacity: 0; } }
          .animate-flow-slim { position: absolute; width: 100%; height: 30%; background: linear-gradient(to bottom, transparent, #6366f1, transparent); animation: verticalFlow 5s linear infinite; }`}
      </style>

    <EncabezadoSeccion 
      subtitulo={data.subtitulo} 
      tituloPrincipal={data.tituloPrincipal} 
      tituloHighlight={data.tituloHighlight}
      align="left"
    />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start w-full">
        
        {/* COLUMNA IZQUIERDA (30%) - Eliminado el sticky para evitar desplazamientos */}
        <div className="lg:col-span-4 flex flex-col space-y-10 w-full">
          
          <div className="relative pl-6 group">
            {/* Barra lateral estática */}
            <div className="absolute left-0 top-0 h-full w-[1px] bg-white/10 rounded-full overflow-hidden">
              <div className="animate-flow-slim" />
            </div>
            
            <p className="text-lg lg:text-[1.35rem] font-extralight text-gray-200 leading-[1.35] italic tracking-tight">
              "{data.fraseCorta.split('motor invisible')[0]}
              <span className="font-bold text-indigo-400 not-italic">
                motor invisible
              </span>
              {data.fraseCorta.split('motor invisible')[1]}"
            </p>
          </div>

          <CoreStack skills={data.coreStack} />
        </div>

        {/* COLUMNA DERECHA (70%) */}
        <div className="lg:col-span-8 w-full">
          <div className="flex flex-col">
            {data.parrafos.map((p, i) => (
              <ItemParrafoSobreMi 
                key={i} 
                texto={p.texto} 
                highlights={p.highlights} 
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}