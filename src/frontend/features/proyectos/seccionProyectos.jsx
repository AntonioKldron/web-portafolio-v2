import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { proyectosData } from '../../data/proyectos/proyectosData';
import EncabezadoSeccion from '../components/encabezadoSeccion';
import ProyectoCarta from './components/proyectoCarta';

export default function SeccionProyectos() {
  const t = useTranslation(proyectosData);
  const [openProject, setOpenProject] = useState(null);

  return (
    <section className=" px-4 bg-transparent relative font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        <EncabezadoSeccion 
          subtitulo={t.header.subtitulo} 
          tituloPrincipal={t.header.tituloPrincipal} 
          tituloHighlight={t.header.tituloHighlight} 
          align="right" 
        />
        <div className="space-y-6">
          {t.proyectos.map((pro, idx) => (
            <ProyectoCarta 
              key={pro.id} 
              data={pro} 
              isOpen={openProject === idx} 
              toggle={() => setOpenProject(openProject === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}