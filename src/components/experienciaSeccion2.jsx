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
        descripcion="Participación como desarrollador en proyectos académicos de posgrado y en iniciativas del sector privado, a través de una unidad interna de desarrollo conocida como Fábrica Académica de Software."
        tecnologias={[
          { icon: <SiPhp/>, name: "PHP" },
          { icon: <SiReact/>, name: "React" },
          { icon: <SiLaravel/>, name: "Laravel" },
        ]}
        experienciaCompleta={{
          empresa: itmmorelia,
          cargo: "Desarrollador Full Stack jr",
          duracion: "Febrero 2023-Noviembre 2023",
          tecnologias: [
            { icon: <SiPhp/>, name: "PHP" },
            { icon: <SiReact/>, name: "React" },
            { icon: <SiLaravel/>, name: "Laravel" },
            { name: "Git", icon: <SiGit /> },
          ],
          descripcion:
            "Durante mi participación como Desarrollador Full Stack Jr. en la Fábrica Académica de Software del Instituto Tecnológico de Morelia (enero 2023 - enero 2024), formé parte de un equipo multidisciplinario enfocado en el desarrollo de soluciones tecnológicas para proyectos académicos e institucionales. Mis responsabilidades incluyeron el diseño y desarrollo de aplicaciones web full stack, empleando tecnologías como React.js para el frontend y Django con SQLite o MariaDB para el backend, asegurando siempre la integridad de los datos y el rendimiento en las consultas. Colaboré en la creación de landing pages responsivas utilizando HTML5, CSS y PHP, siguiendo buenas prácticas de diseño y accesibilidad. Participé también en el modelado de bases de datos relacionales, y en la implementación de APIs REST para proyectos internos. Además, apoyé en el diseño de interfaces gráficas y prototipos en Figma, contribuyendo a mejorar la experiencia de usuario en cada aplicación. Esta experiencia me permitió desarrollar habilidades tanto técnicas como de trabajo en equipo, así como una visión integral del ciclo de vida del software, desde la conceptualización hasta la entrega del producto final.",
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
                nombre: "BYD CRM Integración",
                tecnologias: ["SQL Server", "C#"],
                descripcion: "Integración para la sincronización de datos de agencias automotrices con sistemas CRM.",
                repositorio: "/404",
              },
              {
                nombre: "Clear Mechanics Integración",
                tecnologias: ["SQL Server", "C#"],
                descripcion: "Sincronización de información entre Intelisis y la plataforma ClearMechanics para soporte técnico y diagnóstico vehicular.",
                repositorio: "/404",
              },
              {
                nombre: "API Servicios",
                tecnologias: ["Python", "Django", "REST Framework"],
                descripcion: "Exposición de servicios del DMS Intelisis para consumo externo: citas, órdenes, clientes, tipos de orden, inventario y VINs.",
                repositorio: "/404",
              },
              {
                nombre: "API Prospectos",
                tecnologias: ["Python", "Django", "REST Framework"],
                descripcion: "API para la gestión, creación y conversión de prospectos en clientes, integrando sistemas externos con Intelisis.",
                repositorio: "/404",
              },
              {
                nombre: "Geely Integración",
                tecnologias: ["SQL Server", "C#"],
                descripcion: "Integración entre Intelisis y sistemas externos de Geely para el manejo de prospectos y conversión a clientes.",
                repositorio: "/404",
              },
              {
                nombre: "Seekop Integración",
                tecnologias: ["SQL Server", "C#"],
                descripcion: "Implementación de integración entre Intelisis y la plataforma Seekop para la gestión de prospectos y su seguimiento.",
                repositorio: "/404",
              },
              {
                nombre: "Salesforce Mazda",
                tecnologias: ["SQL Server", "C#"],
                descripcion: "Integración de Intelisis con Salesforce para automatizar la gestión de prospectos del ecosistema Mazda.",
                repositorio: "/404",
              },
              {
                nombre: "Salesforce Daimler",
                tecnologias: ["SQL Server", "C#"],
                descripcion: "Sincronización de prospectos y clientes entre Intelisis y Salesforce para Daimler.",
                repositorio: "/404",
              },
              {
                nombre: "7 Técnicas Mazda",
                tecnologias: ["SQL Server", "C#"],
                descripcion: "Interfaz de integración con plataforma de Mazda para la gestión y seguimiento de prospectos generados.",
                repositorio: "/404",
              },
              {
                nombre: "API Fame",
                tecnologias: ["Python", "Django", "REST Framework"],
                descripcion: "Desarrollo de una API REST para la administración de prospectos desde plataformas externas hacia Intelisis para el grupo FAME.",
                repositorio: "/404",
              },
              {
                nombre: "Xentry Integración",
                tecnologias: ["SQL Server", "C#"],
                descripcion: "Integración con plataforma Xentry para el consumo de servicios del DMS Intelisis, facilitando la transferencia de información automotriz.",
                repositorio: "/404",
              },
              {
                nombre: "CRM Postventa Toyota",
                tecnologias: ["JavaScript", "TypeScript", "Angular"],
                descripcion: "Desarrollo de un CRM postventa para Toyota, integrando servicios de Intelisis y mejorando la experiencia del cliente.",
                repositorio: "/404",
              },
            ],
        }}
      />
    </section>
  );
}
