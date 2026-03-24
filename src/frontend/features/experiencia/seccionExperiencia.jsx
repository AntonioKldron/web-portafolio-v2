import React, { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation.js";
import { experienciaData } from "../../data/experiencia/experienciaData.jsx";
import { ExperienciaUnidad } from "./components/experienciaUnidad.jsx";
import { useApp } from "../../context/AppContext.jsx";
import EncabezadoSeccion from '../components/encabezadoSeccion.jsx';

export default function ExperienciaSeccion() {
  const [openUnit, setOpenUnit] = useState(null);
  const t = useTranslation(experienciaData);
  const { isDark } = useApp();

  return (
    <section className="px-4 bg-transparent relative w-full h-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Ajustado con mb-6 para reducir espacio con las cartas */}
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