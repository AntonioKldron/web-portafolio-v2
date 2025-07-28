import React from "react";
import { 
  SiDjango, 
  SiDotnet, 
  SiAngular, 
  SiPython 
} from "react-icons/si";
import { FaLinux, FaDocker } from "react-icons/fa";
import ExperienciaCard from "../components/empresaCarta";
import Intelisis from '../assets/img/Intelisis/Intelisis.png';


const IntelisisSection = () => {
  return (
    <ExperienciaCard
      empresa={Intelisis}
      cargo="Desarrollador Backend SQL"
      duracion="Febrero 2024 - Actualidad"
      tecnologias={[
        { name: "Django", icon: <SiDjango /> },
        { name: "Django REST Framework", icon: <SiDjango /> }, 
        { name: "C#", icon: <SiDotnet /> },
        { name: ".NET", icon: <SiDotnet /> },
        { name: "Linux", icon: <FaLinux /> },
        { name: "Docker", icon: <FaDocker /> },
      ]}
      descripcion={`
        Desarrollo y mantenimiento de soluciones backend robustas y escalables para Intelisis, centradas en la integración de sistemas mediante APIs RESTful utilizando Django y Django REST Framework. 
        Optimizo consultas y procedimientos almacenados en SQL Server para mejorar el rendimiento de la base de datos. 
        Desarrollo componentes y servicios en C# y .NET para ampliar la funcionalidad del ERP. 
        Implemento aplicaciones frontend con Angular para interfaces de usuario modernas y responsivas. 
        Administro despliegues y configuraciones en entornos Linux, utilizando contenedores Docker para garantizar consistencia y portabilidad en las aplicaciones. 
        Trabajo coordinadamente con equipos multidisciplinarios para asegurar la calidad, seguridad y eficiencia de las soluciones implementadas.
      `}
      proyectos={[
        {
          nombre: "API Servicios DMS",
          tecnologias: ["Django", "Django REST", "SQL Server", "OAuth2"],
          descripcion:
            "Desarrollo de una API RESTful que gestiona servicios, clientes y citas del ERP, facilitando la comunicación entre planta y agencias, con autenticación segura basada en OAuth2 para garantizar integridad y confidencialidad de datos.",
          repositorio: "https://github.com/usuario/api-servicios-dms",
        },
        {
          nombre: "Portal CRM Postventa",
          tecnologias: ["Angular", "C#", ".NET", "SQL Server"],
          descripcion:
            "Portal web para gestión de postventa que permite la administración de citas, recepción activa y seguimiento de órdenes. Integrado con el ERP mediante servicios web desarrollados en C# y .NET, asegurando sincronización eficiente de información.",
          repositorio: "https://github.com/usuario/crm-postventa",
        },
        {
          nombre: "Integración ERP Intelisis - BYD",
          tecnologias: ["Python", "SQL Server", "REST API", "Docker", "Linux"],
          descripcion:
            "Proyecto de integración entre el ERP Intelisis y el CRM BYD para sincronizar datos de vehículos, clientes y órdenes de venta, utilizando APIs REST implementadas en Python, desplegadas en contenedores Docker sobre servidores Linux para garantizar estabilidad y escalabilidad.",
          repositorio: "https://github.com/usuario/integracion-intelisis-byd",
        },
      ]}
    />
  );
};

export default IntelisisSection;
