import React, { useState, useMemo } from "react";
import { useApp } from "@app/context/appContext"; 
import { experienciaData } from "@data/experiencia/experienciaData";
import { ExperienciaUnidad } from "@features/experiencia/components/experienciaUnidad";
import EncabezadoSeccion from '@shared/components/encabezadoSeccion';

export default function ExperienciaSeccion() {
  const [openUnit, setOpenUnit] = useState(null);
  const { lang } = useApp(); // Obtenemos el idioma global

  // 1. Obtenemos la traducción correcta (es/en)
  const t = useMemo(() => {
    return experienciaData[lang] || experienciaData.es;
  }, [lang]);

  // Si no hay data, evitamos el renderizado
  if (!t) return null;

  return (
    <section className="px-4 bg-transparent relative w-full h-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado con textos dinámicos según el idioma */}
        <div className="mb-6">
          <EncabezadoSeccion 
            subtitulo={t.header.subtitulo} 
            tituloPrincipal={t.header.titulo} 
            tituloHighlight={t.header.highlight} 
            align="left" 
          />
        </div>

        {/* Listado de experiencias laborales */}
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