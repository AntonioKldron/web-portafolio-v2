import React from 'react';
import ExperienciaCarta from '../components/experienciaCarta';
import { SiDjango, SiPython, SiPhp, SiReact, SiLaravel } from "react-icons/si";
import { TbSql } from "react-icons/tb";

export default function ExperienciaSeccion() {
  const tecnologiasIntelisis = [
    { icon: <SiDjango size={20} />, name: "Django" },
    { icon: <SiPython size={20} />, name: "Python" },
    { icon: <TbSql size={20} />, name: "SQL Server" },
  ];

  const tecnologiasFabrica = [
    { icon: <SiPhp size={20} />, name: "PHP" },
    { icon: <SiReact size={20} />, name: "React" },
    { icon: <SiLaravel size={20} />, name: "Laravel" },
  ];

  return (
    <div className='w-11/12 lg:w-789 mx-auto space-y-10'>
      <h2 className="text-3xl font-bold text-center text-white/90"> 
        Experiencia
      </h2>

      <ExperienciaCarta
        empresa="TecNM Campus Morelia"
        año="2022-2023"
        roll="Desarrollador Fullstack Jr."
        descripcion="Desarrollo de sistemas web académicos con Laravel (backend) y React (frontend), optimizando procesos escolares."
        tecnologias={tecnologiasFabrica}
        link="/itm"
      />

      <ExperienciaCarta
        empresa="Intelisis Solution CA de SV"
        año="2024-Act"
        roll="Desarrollador SQL / Backend"
        descripcion="Desarrollo de soluciones SQL, automatización de procesos y APIs para integrar sistemas empresariales en el sector automotriz."
        tecnologias={tecnologiasIntelisis}
        link="/intelisis"
      />
    </div>
  );
}
