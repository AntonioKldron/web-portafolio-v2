import React, { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { experienciaData } from "../../data/experiencia/experienciaData";
import { ExperienciaUnidad } from "./components/ExperienciaUnidad";
import { useApp } from "../../context/AppContext";
import EncabezadoSeccion from '../components/encabezadoSeccion.jsx';

export default function ExperienciaSeccion() {
  const [openUnit, setOpenUnit] = useState(null);
  const t = useTranslation(experienciaData);
  const { isDark } = useApp();

  return (
    <section className="py-24 px-4 bg-transparent relative w-full h-full">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* COMPONENTE DE ENCABEZADO INTEGRADO */}
        <EncabezadoSeccion 
          subtitulo={t.header.subtitulo} 
          tituloPrincipal={t.header.titulo} 
          tituloHighlight={t.header.highlight} 
          align="left" 
        />

        <div className="relative flex flex-col md:ml-12">
          {/* Mapeo seguro de items de experiencia */}
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