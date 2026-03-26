import React from 'react';
import { useSobreMiData } from '@backend/data/sobreMi/sobreMiData';
import ItemParrafoSobreMi from '@features/sobreMi/components/itemParrafoSobreMi';
import CoreStack from '@features/sobreMi/components/coreStack';
import EncabezadoSeccion from '@shared/components/encabezadoSeccion';

export default function SeccionSobreMi() {
  const { data: t, isLoading } = useSobreMiData();

  if (isLoading || !t) {
    return (
      <div className="mt-4 pt-0 bg-transparent w-full min-h-[50vh] flex items-center justify-center">
        <div className="animate-pulse h-64 bg-gray-500/20 rounded w-full max-w-4xl"></div>
      </div>
    );
  }

  return (
    /* Añadimos 'text-main-text' que ahora apunta a blanco en modo oscuro 
       gracias a tu configuración de CSS global. 
    */
    <div className="mt-4 pt-0 bg-transparent relative font-sans w-full text-main-text">
      <style>
        {`@keyframes verticalFlow { 0% { top: -20%; opacity: 0; } 50% { opacity: 0.8; } 100% { top: 100%; opacity: 0; } }
          .animate-flow-slim { 
            position: absolute; width: 100%; height: 30%; 
            background: linear-gradient(to bottom, transparent, var(--color-primary-accent), transparent); 
            animation: verticalFlow 5s linear infinite; 
          }`}
      </style>

      <EncabezadoSeccion 
        subtitulo={t.subtitulo} 
        tituloPrincipal={t.tituloPrincipal} 
        tituloHighlight={t.tituloHighlight}
        align="left"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start w-full">
        
        <div className="lg:col-span-4 flex flex-col space-y-10 w-full">
          <div className="relative pl-6 group">
            {/* Línea vertical decorativa */}
            <div className="absolute left-0 top-0 h-full w-[1px] bg-white/10 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="animate-flow-slim" />
            </div>
            
            {/* FRASE CORTA: 
                Cambiamos 'text-main-text' por 'text-current' para asegurar que herede 
                el blanco puro que definimos en el CSS global del dark mode.
            */}
            <p className="text-lg lg:text-[1.35rem] font-medium leading-[1.35] italic tracking-tight opacity-90">
              {t.fraseCorta}
            </p>
          </div>

          <CoreStack skills={t.coreStack || []} />
        </div>

        <div className="lg:col-span-8 w-full">
          <div className="flex flex-col space-y-6"> {/* Añadido espacio entre párrafos */}
            {t.parrafos.map((p, i) => (
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
