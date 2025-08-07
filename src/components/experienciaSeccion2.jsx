import React from 'react';
import ExperienciaCarta2 from './ExperienciaCarta2';
import {
    SiPython,
    SiDjango,
    SiPostgresql,
    SiJavascript,
    SiAngular,
    SiDocker,
    SiLinux,
    SiFastapi,
    SiSwagger,
    SiJsonwebtokens,
    SiGit,
    SiGithub,
    SiPhp,
    SiReact,
    SiLaravel
  } from "react-icons/si";
  
  import {
    FaDatabase,         // Base de datos (SQL Server)
    FaMicrosoft,        // Representa Microsoft / .NET / C#
    FaCode,             // REST API genérico
    FaProjectDiagram,   // Arquitectura/REST
  } from "react-icons/fa";
  import { 
    TbSql 
  } from "react-icons/tb";
  
import { DiVisualstudio } from "react-icons/di";
import intelisis from '../assets/img/Intelisis/intelisis.png';
import itmmorelia from '../assets/img/Itm/Itmorelia.png';

export default function ExperienciaSeccion2({ empresa, año, roll, descripcion, tecnologias, link }) {
  return (
    <section id="educacion" className="w-12/12 lg:w-789 mx-auto space-y-10 flex items-center justify-center flex-col">
      <h2 className="text-3xl font-bold text-center text-white/90"> 
        Experiencia
      </h2>

      <ExperienciaCarta2
        empresa="Instituto Tecnologico de Morelia"
        año="Febrero 2023-Noviembre 2023"
        roll="Desarrollador Full Stack jr"
        descripcion="Desarrollo de soluciones SQL, automatización de procesos y APIs para integrar sistemas empresariales en el sector automotriz."
        tecnologias={[
          { icon: <SiPhp size={20} />, name: "PHP" },
          { icon: <SiReact size={20} />, name: "React" },
          { icon: <SiLaravel size={20} />, name: "Laravel" },
        ]}
        experienciaCompleta={{
          empresa: itmmorelia,
          cargo: "Desarrollador Full Stack jr",
          duracion: "Febrero 2023-Noviembre 2023",
          tecnologias: [
            { icon: <SiPhp size={20} />, name: "PHP" },
            { icon: <SiReact size={20} />, name: "React" },
            { icon: <SiLaravel size={20} />, name: "Laravel" },
            { name: "Git", icon: <SiGit /> },
          ],
          descripcion:
            "Durante mi estancia en Intelisis, desempeñé un papel clave en el diseño, desarrollo e integración de soluciones tecnológicas orientadas a la automatización y mejora de procesos dentro del ERP de la empresa. Desarrollé APIs RESTful utilizando Django y FastAPI, enfocadas en la gestión de módulos críticos como citas, clientes, vehículos y órdenes de servicio, implementando OAuth2 para garantizar seguridad y control de acceso granular por empresa y sucursal. Contribuí a la integración en tiempo real entre sistemas externos e Intelisis, optimizando la eficiencia operativa. Realicé desarrollo avanzado en SQL Server, incluyendo procedimientos almacenados, funciones, triggers y ensamblados, extendiendo así las capacidades del ERP. Además, participé activamente en el consumo y exposición de servicios internos, habilitando una comunicación fluida entre áreas del sistema. Implementé soluciones escalables para entornos multiagencia y colaboré en el despliegue, pruebas y mantenimiento de aplicaciones en entornos controlados, asegurando su estabilidad. Finalmente, elaboré documentación técnica detallada para facilitar la continuidad y escalabilidad de los desarrollos realizados.",
          proyectos: [
            {
              nombre: "OMD",
              tecnologias: ["PHP"],
              descripcion: "Aplicaion web para la gestion de una organizacion sin fines de lucro",
              repositorio: "",
            },
            {
              nombre: "Techani 1",
              tecnologias: ["PHP"],
              descripcion: "Aplicaion web para la gestion de la diabetes tipo 1",
              repositorio: "",
            },
            {
              nombre: "Techani 2",
              tecnologias: ["React,Supabase,Talwind"],
              descripcion: "Aplicaion web para la gestion de la diabetes tipo 1",
              repositorio: "",
            },
            {
              nombre: "Modulo SIM",
              tecnologias: ["Laravel"],
              descripcion: "Modulo del sistema para la realizacion del proceso de titulacion",
              repositorio: "",
            },
          ],
        }}
      />

<ExperienciaCarta2
        empresa="Intelisis Solution CA de SV"
        año="Febrero 2024-Actualmente"
        roll="Desarrollador SQL / Backend"
        descripcion="Desarrollo de soluciones SQL, automatización de procesos y APIs para integrar sistemas empresariales en el sector automotriz."
        tecnologias={[
          { name: "Python", icon: <SiPython /> },
          { name: "SQL Server", icon: <TbSql /> },
          { name: "Django", icon: <SiDjango /> },
        ]}
        experienciaCompleta={{
          empresa: intelisis,
          cargo: "Desarrollador SQL / Backend",
          duracion: "Febrero 2024-Actualmente",
          tecnologias: [
            { name: "Python", icon: <SiPython /> },
            { name: "Django", icon: <SiDjango /> },
            { name: "SQL Server", icon: <FaDatabase /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "Angular", icon: <SiAngular /> },
            { name: "Docker", icon: <SiDocker /> },
            { name: "Linux", icon: <SiLinux /> },
            { name: "Git", icon: <SiGit /> },
          ],
          descripcion:
            "Durante mi estancia en Intelisis, desempeñé un papel clave en el diseño, desarrollo e integración de soluciones tecnológicas orientadas a la automatización y mejora de procesos dentro del ERP de la empresa. Desarrollé APIs RESTful utilizando Django y FastAPI, enfocadas en la gestión de módulos críticos como citas, clientes, vehículos y órdenes de servicio, implementando OAuth2 para garantizar seguridad y control de acceso granular por empresa y sucursal. Contribuí a la integración en tiempo real entre sistemas externos e Intelisis, optimizando la eficiencia operativa. Realicé desarrollo avanzado en SQL Server, incluyendo procedimientos almacenados, funciones, triggers y ensamblados, extendiendo así las capacidades del ERP. Además, participé activamente en el consumo y exposición de servicios internos, habilitando una comunicación fluida entre áreas del sistema. Implementé soluciones escalables para entornos multiagencia y colaboré en el despliegue, pruebas y mantenimiento de aplicaciones en entornos controlados, asegurando su estabilidad. Finalmente, elaboré documentación técnica detallada para facilitar la continuidad y escalabilidad de los desarrollos realizados.",
          proyectos: [
            {
              nombre: "BYD CRM Integration",
              tecnologias: ["SQL Server", "C#"],
              descripcion: "Sincronización de datos de agencias automotrices.",
              repositorio: "https://github.com/tuusuario/byd-api",
            },
          ],
        }}
      />
    </section>
  );
}
