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
  } from "react-icons/si";
  
  import {
    FaDatabase,         // Base de datos (SQL Server)
    FaMicrosoft,        // Representa Microsoft / .NET / C#
    FaCode,             // REST API genérico
    FaProjectDiagram,   // Arquitectura/REST
  } from "react-icons/fa";
  
  import { DiVisualstudio } from "react-icons/di";
import intelisis from '../assets/img/Intelisis/intelisis.png';

export default function ExperienciaSeccion2({ empresa, año, roll, descripcion, tecnologias, link }) {
  return (
    <section id="educacion" className="w-12/12 lg:w-789 mx-auto space-y-10 flex items-center justify-center">
      <ExperienciaCarta2
        empresa="Intelisis Solution CA de SV"
        año="Febrero 2024-Actualmente"
        roll="Desarrollador SQL / Backend"
        descripcion="Desarrollo de soluciones SQL, automatización de procesos y APIs para integrar sistemas empresariales en el sector automotriz."
        tecnologias={[
          { name: "Python", icon: <SiPython /> },
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
