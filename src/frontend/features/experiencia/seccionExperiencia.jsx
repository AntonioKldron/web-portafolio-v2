import React, { useState } from "react";
import { useExperienciaData } from "@backend/data/experiencia/experienciaData";
import { ExperienciaUnidad } from "@features/experiencia/components/experienciaUnidad";
import EncabezadoSeccion from '@shared/components/encabezadoSeccion';

export default function ExperienciaSeccion() {
  const [openUnit, setOpenUnit] = useState(null);
  const { data: t, isLoading } = useExperienciaData();

  if (isLoading || !t) {
    return (
      <section className="px-4 bg-transparent relative w-full h-full min-h-[50vh] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-6 bg-gray-500/20 rounded w-1/3 mb-4"></div>
          <div className="h-32 bg-gray-500/20 rounded w-full max-w-2xl"></div>
          <div className="h-32 bg-gray-500/20 rounded w-full max-w-2xl"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 bg-transparent relative w-full h-full">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <EncabezadoSeccion 
            subtitulo={t.header.subtitulo} 
            tituloPrincipal={t.header.titulo} 
            tituloHighlight={t.header.highlight} 
            align="left" 
          />
        </div>

        <div className="relative flex flex-col md:ml-12">
          {t.items?.map((exp, idx) => (
            <ExperienciaUnidad 
              key={exp.id} 
              data={exp} 
              isOpen={openUnit === idx} 
              toggle={() => setOpenUnit(openUnit === idx ? null : idx)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
