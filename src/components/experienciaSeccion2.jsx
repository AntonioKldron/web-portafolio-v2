import React, { useState } from "react";
import ExperienciaUnidad from "./ExperienciaUnidad";
import cinepolis from '../assets/img/cinepolis/cinepolis.png';
import intelisis from '../assets/img/intelisis/intelisis.png';
import itmmorelia from '../assets/img/itm/itmorelia.png';
import { SiPython, SiDjango, SiPostgresql, SiJavascript, SiAngular, SiDocker, SiLinux, SiGit, SiPhp, SiReact, SiLaravel, SiFastapi, SiOracle, SiMariadb, SiSqlite } from "react-icons/si";
import { FaDatabase, FaServer, FaCogs, FaJava } from "react-icons/fa";

export default function ExperienciaSeccion2() {
  const [openUnit, setOpenUnit] = useState(null);

  const experienciaData = [
    {
      id: "EXP_00",
      empresa: "Cinépolis",
      ubicacion: "Morelia, Michoacán",
      logo: cinepolis,
      puesto: "Analista ERP",
      periodo: "Enero 2026 - Actualidad",
      resumen_largo: "Ingeniería de Software especializada en la optimización de PeopleSoft y la integración de librerías Java personalizadas para la resolución de lógica compleja de negocio a nivel global.",
      descripcion: "Diseño, desarrollo y optimización de soluciones robustas utilizando PeopleTools: PeopleCode, Application Designer, Application Packages y Application Engine.",
      detalles: [
        "Desarrollo avanzado en PeopleTools: PeopleCode, Application Designer y Application Packages.",
        "Integración de librerías Java (.jar) personalizadas para potenciar funcionalidades nativas.",
        "Gestión y soporte de servicios web REST/SOAP mediante Integration Broker.",
        "Análisis de datos mediante SQL Oracle, Meta-SQL y reporteo avanzado con BI Publisher.",
        "Consultoría técnico-funcional para áreas de Finanzas, RH y Operaciones asegurando cumplimiento de SLAs."
      ],
      tecnologias: [
        { name: "Oracle SQL", icon: <SiOracle /> }, 
        { name: "Java", icon: <FaJava /> },
        { name: "PeopleSoft", icon: <FaServer /> }
      ],
      proyectos: []
    },
    {
      id: "EXP_01",
      empresa: "Intelisis Solution CA de SV",
      ubicacion: "Morelia, Michoacán",
      logo: intelisis,
      puesto: "Desarrollador SQL / Backend", // Se mantiene como título principal de la unidad
      periodo: "Feb 2024 - Enero 2026",
      resumen_largo: "Evolución profesional desde la optimización técnica inicial como becario hasta el liderazgo en el desarrollo de APIs RESTful y arquitectura backend para el sector automotriz.",
      puestos: [
        {
          nombre: "Desarrollador Back-End",
          fecha: "Julio 2024 – Enero 2026",
          descripcion: "Arquitectura y despliegue de APIs RESTful empleando Django y FastAPI para la gestión integral de flujos operativos (clientes, vehículos y órdenes de servicio).",
          detalles: [
            "Implementación de protocolos OAuth2 y esquemas de control de acceso granular para protección de activos.",
            "Ingeniería de bases de datos senior en SQL Server: procedimientos, triggers y ensamblados optimizados.",
            "Sincronización en tiempo real entre el ERP e interfaces externas, incrementando eficiencia multiagencia.",
            "Liderazgo en fases de pruebas unitarias, despliegues controlados y elaboración de documentación técnica."
          ]
        },
        {
          nombre: "Becario de Desarrollo",
          fecha: "Febrero 2024 – Julio 2024",
          descripcion: "Optimización de Backend y gestión de infraestructura inicial para el DMS Intelisis, enfocado en rendimiento y estabilidad.",
          detalles: [
            "Desarrollo y depuración de scripts SQL en SQL Server para la mejora del rendimiento en la gestión de datos.",
            "Gestión de actualizaciones y puesta en producción en entornos WAMP Server, garantizando estabilidad.",
            "Colaboración activa bajo metodologías ágiles, integrando módulos internos y brindando soporte técnico."
          ]
        }
      ],
      tecnologias: [
        { name: "Python", icon: <SiPython /> }, 
        { name: "Django", icon: <SiDjango /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "SQL Server", icon: <FaDatabase /> }, 
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Docker", icon: <SiDocker /> }, 
        { name: "Linux", icon: <SiLinux /> },
        { name: "Git", icon: <SiGit /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Angular", icon: <SiAngular /> }
      ],
      proyectos: [
        { nombre: "BYD Integración", descripcion: "Sincronización de agencias automotrices con sistemas CRM de la marca BYD.", tecnologias: ["SQL", "C#"], repositorio: "/404" },
        { nombre: "Clear Mechanics", descripcion: "Sincronización de información técnica para soporte y diagnóstico vehicular.", tecnologias: ["SQL", "C#"], repositorio: "/404" },
        { nombre: "API Servicios", descripcion: "Exposición de servicios del DMS: citas, órdenes, clientes, inventario y VINs.", tecnologias: ["Django", "DRF"], repositorio: "/404" },
        { nombre: "API Prospectos", descripcion: "Gestión, creación y conversión de prospectos integrando sistemas externos.", tecnologias: ["Django", "DRF"], repositorio: "/404" },
        { nombre: "Geely Integración", descripcion: "Manejo de prospectos, inventarios y venta de unidades de la marca Geely.", tecnologias: ["SQL", "C#"], repositorio: "/404" },
        { nombre: "Seekop Integration", descripcion: "Gestión de prospectos y venta de unidades mediante la plataforma Seekop.", tecnologias: ["SQL", "C#"], repositorio: "/404" },
        { nombre: "Salesforce Mazda", descripcion: "Automatización de la gestión de prospectos del ecosistema Mazda.", tecnologias: ["SQL", "C#"], repositorio: "/404" },
        { nombre: "Salesforce Daimler", descripcion: "Generación de KPIs para ventas, servicios e inventarios en Salesforce.", tecnologias: ["SQL", "C#"], repositorio: "/404" },
        { nombre: "7 Técnicas Mazda", descripcion: "Interfaz de KPIs para reportar el ciclo de vida completo de las unidades.", tecnologias: ["SQL", "C#"], repositorio: "/404" },
        { nombre: "API Fame", descripcion: "API REST para administración y conexión entre CRMs del grupo FAME.", tecnologias: ["Python", "Django"], repositorio: "/404" },
        { nombre: "Xentry API", descripcion: "Consumo de servicios para facilitar la transferencia de información automotriz.", tecnologias: ["SQL", "C#"], repositorio: "/404" },
        { nombre: "CRM Postventa Toyota", descripcion: "Desarrollo de CRM postventa integrando servicios nativos de Intelisis.", tecnologias: ["Angular", "TS"], repositorio: "/404" }
      ]
    },
    {
      id: "EXP_02",
      empresa: "Fábrica Académica de Software (ITM)",
      ubicacion: "Morelia, Michoacán",
      logo: itmmorelia,
      puesto: "Desarrollador Full Stack Jr",
      periodo: "Enero 2023 - Enero 2024",
      resumen_largo: "Desarrollo integral de aplicaciones web institucionales de extremo a extremo y modelado de bases de datos relacionales en el Instituto Tecnológico de Morelia.",
      descripcion: "Construcción de aplicaciones web de extremo a extremo utilizando React.js para el frontend y Django para el backend, enfocadas en la optimización de procesos internos.",
      detalles: [
        "Desarrollo Full Stack con React.js para el frontend y Django/Laravel para el backend.",
        "Modelado de prototipos y sistemas de diseño responsivos en Figma para UX/UI.",
        "Diseño de esquemas de bases de datos relacionales en MariaDB y SQLite.",
        "Aseguramiento de la integridad referencial y eficiencia en consultas REST."
      ],
      tecnologias: [
        { name: "React", icon: <SiReact /> }, 
        { name: "PHP", icon: <SiPhp /> },
        { name: "Laravel", icon: <SiLaravel /> }, 
        { name: "MariaDB", icon: <SiMariadb /> },
        { name: "SQLite", icon: <SiSqlite /> },
        { name: "Git", icon: <SiGit /> }
      ],
      proyectos: [
        { nombre: "Techani 2.0", descripcion: "Aplicación para gestión de salud en diabetes tipo 1 con base de datos en tiempo real.", tecnologias: ["React", "Supabase", "Tailwind"], repositorio: "https://github.com/alfonsonadamas/Techani-2.0.git" },
        { nombre: "Techani 1", descripcion: "Versión inicial en PHP para el monitoreo y gestión de pacientes diabéticos.", tecnologias: ["PHP", "CSS"], repositorio: "https://github.com/alfonsonadamas/Techani.git" },
        { nombre: "OMD System", descripcion: "Plataforma de gestión web para una organización sin fines de lucro.", tecnologias: ["PHP", "MariaDB"], repositorio: "/404" }
      ]
    }
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16 relative z-10">

      <div className="flex flex-col mb-6 space-y-1">
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-8 bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
          <span className="text-[10px] font-bold tracking-[0.3em] text-indigo-400 uppercase font-mono">System Timeline</span>
        </div>
        <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter uppercase italic leading-tight">
        Trayectoria <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-light not-italic">Profesional.</span>
        </h2>
      </div>

      <div className="relative flex flex-col md:ml-12">
        {experienciaData.map((exp, idx) => (
          <ExperienciaUnidad key={exp.id} data={exp} isOpen={openUnit === idx} toggle={() => setOpenUnit(openUnit === idx ? null : idx)} />
        ))}
      </div>
    </section>
  );
}