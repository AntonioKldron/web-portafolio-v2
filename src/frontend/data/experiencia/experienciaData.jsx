import cinepolis from '../../assets/img/cinepolis/cinepolis.png';
import intelisis from '../../assets/img/intelisis/intelisis.png';
import itmmorelia from '../../assets/img/itm/itmorelia.png';
import { data as dt } from '../icons/iconsRegistro';

export const experienciaData = {
  es: {
    header: {
      subtitulo: "Experiencia",
      titulo: "Trayectoria",
      highlight: "Profesional."
    },
    items: [
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
        tecnologias: [dt.oracle, dt.java, dt.peoplesoft],
        proyectos: []
      },
      {
        id: "EXP_01",
        empresa: "Intelisis Solution CA de SV",
        ubicacion: "Morelia, Michoacán",
        logo: intelisis,
        puesto: "Desarrollador SQL / Backend",
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
          dt.python, dt.django, dt.fastapi, dt.sqlserver, 
          dt.postgresql, dt.docker, dt.linux, dt.git, 
          dt.javascript, dt.angular
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
        tecnologias: [dt.react, dt.php, dt.laravel, dt.mysql, dt.sqlite, dt.git],
        proyectos: [
          { nombre: "Techani 2.0", descripcion: "Aplicación para gestión de salud en diabetes tipo 1 con base de datos en tiempo real.", tecnologias: ["React", "Supabase", "Tailwind"], repositorio: "https://github.com/alfonsonadamas/Techani-2.0.git" },
          { nombre: "Techani 1", descripcion: "Versión inicial en PHP para el monitoreo y gestión de pacientes diabéticos.", tecnologias: ["PHP", "CSS"], repositorio: "https://github.com/alfonsonadamas/Techani.git" },
          { nombre: "OMD System", descripcion: "Plataforma de gestión web para una organización sin fines de lucro.", tecnologias: ["PHP", "MariaDB"], repositorio: "/404" }
        ]
      }
    ]
  },
en: {
    header: {
      subtitulo: "Experience",
      titulo: "Professional",
      highlight: "Journey."
    },
    items: [
      {
        id: "EXP_00",
        empresa: "Cinépolis",
        ubicacion: "Morelia, Mexico",
        logo: cinepolis,
        puesto: "ERP Analyst",
        periodo: "January 2026 - Present",
        resumen_largo: "Software Engineering specialized in PeopleSoft optimization and custom Java library integration for resolving complex business logic globally.",
        descripcion: "Design, development, and optimization of robust solutions using PeopleTools: PeopleCode, Application Designer, Application Packages, and Application Engine.",
        detalles: [
          "Advanced development in PeopleTools: PeopleCode, Application Designer, and Application Packages.",
          "Integration of custom Java libraries (.jar) to enhance native functionalities.",
          "Management and support of REST/SOAP web services through Integration Broker.",
          "Data analysis via Oracle SQL, Meta-SQL, and advanced reporting with BI Publisher.",
          "Technical-functional consultancy for Finance, HR, and Operations ensuring SLA compliance."
        ],
        tecnologias: [dt.oracle, dt.java, dt.peoplesoft],
        proyectos: []
      },
      {
        id: "EXP_01",
        empresa: "Intelisis Solution CA de SV",
        ubicacion: "Morelia, Mexico",
        logo: intelisis,
        puesto: "SQL / Backend Developer",
        periodo: "Feb 2024 - January 2026",
        resumen_largo: "Professional evolution from initial technical optimization as an intern to leadership in RESTful API development and backend architecture for the automotive sector.",
        puestos: [
          {
            nombre: "Back-End Developer",
            fecha: "July 2024 – January 2026",
            descripcion: "Architecture and deployment of RESTful APIs using Django and FastAPI for comprehensive operational flow management (customers, vehicles, and service orders).",
            detalles: [
              "Implementation of OAuth2 protocols and granular access control schemes for asset protection.",
              "Senior database engineering in SQL Server: procedures, triggers, and optimized assemblies.",
              "Real-time synchronization between ERP and external interfaces, increasing multi-agency efficiency.",
              "Leadership in unit testing phases, controlled deployments, and technical documentation."
            ]
          },
          {
            nombre: "Development Intern",
            fecha: "February 2024 – July 2024",
            descripcion: "Backend optimization and initial infrastructure management for the Intelisis DMS, focused on performance and stability.",
            detalles: [
              "Development and debugging of SQL scripts in SQL Server to improve data management performance.",
              "Management of updates and production deployment in WAMP Server environments.",
              "Active collaboration under agile methodologies and technical support."
            ]
          }
        ],
        tecnologias: [
          dt.python, dt.django, dt.fastapi, dt.sqlserver, 
          dt.postgresql, dt.docker, dt.linux, dt.git, 
          dt.javascript, dt.angular
        ],
        proyectos: [
          { nombre: "BYD Integration", descripcion: "Synchronization of automotive agencies with BYD brand CRM systems.", tecnologias: ["SQL", "C#"], repositorio: "/404" },
          { nombre: "Clear Mechanics", descripcion: "Technical sync for support and vehicle diagnostic data.", tecnologias: ["SQL", "C#"], repositorio: "/404" },
          { nombre: "Services API", descripcion: "DMS service exposure: appointments, orders, customers, and inventory.", tecnologias: ["Django", "DRF"], repositorio: "/404" },
          { nombre: "Leads API", descripcion: "Management, creation, and conversion of leads integrating external systems.", tecnologias: ["Django", "DRF"], repositorio: "/404" },
          { nombre: "Geely Integration", descripcion: "Geely brand leads, inventory, and unit sales management.", tecnologias: ["SQL", "C#"], repositorio: "/404" },
          { nombre: "Seekop Integration", descripcion: "Leads and sales management through the Seekop platform.", tecnologias: ["SQL", "C#"], repositorio: "/404" },
          { nombre: "Mazda Salesforce", descripcion: "Automation of leads management for the Mazda ecosystem.", tecnologias: ["SQL", "C#"], repositorio: "/404" },
          { nombre: "Daimler Salesforce", descripcion: "KPI generation for sales, services, and inventory in Salesforce.", tecnologias: ["SQL", "C#"], repositorio: "/404" },
          { nombre: "7 Mazda Techniques", descripcion: "KPI interface for reporting the full unit life cycle.", tecnologias: ["SQL", "C#"], repositorio: "/404" },
          { nombre: "Fame API", descripcion: "REST API for administration and connection between FAME group CRMs.", tecnologias: ["Python", "Django"], repositorio: "/404" },
          { nombre: "Xentry API", descripcion: "Consumption of services to facilitate automotive information transfer.", tecnologias: ["SQL", "C#"], repositorio: "/404" },
          { nombre: "Toyota After-sales CRM", descripcion: "After-sales CRM development integrating native Intelisis services.", tecnologias: ["Angular", "TS"], repositorio: "/404" }
        ]
      },
      {
        id: "EXP_02",
        empresa: "Academic Software Factory (ITM)",
        ubicacion: "Morelia, Mexico",
        logo: itmmorelia,
        puesto: "Jr Full Stack Developer",
        periodo: "January 2023 - January 2024",
        resumen_largo: "End-to-end development of institutional web applications and relational database modeling at the Morelia Institute of Technology.",
        descripcion: "Building end-to-end web applications using React.js for frontend and Django for backend, focused on process optimization.",
        detalles: [
          "Full Stack development with React.js for frontend and Django/Laravel for backend.",
          "Modeling of prototypes and responsive design systems in Figma for UX/UI.",
          "Relational database design in MariaDB and SQLite.",
          "Ensuring referential integrity and efficiency in REST queries."
        ],
        tecnologias: [dt.react, dt.php, dt.laravel, dt.mysql, dt.sqlite, dt.git],
        proyectos: [
          { nombre: "Techani 2.0", descripcion: "Health management app for type 1 diabetes with real-time database.", tecnologias: ["React", "Supabase", "Tailwind"], repositorio: "https://github.com/alfonsonadamas/Techani-2.0.git" },
          { nombre: "Techani 1", descripcion: "Initial PHP version for monitoring and managing patients.", tecnologias: ["PHP", "CSS"], repositorio: "https://github.com/alfonsonadamas/Techani.git" },
          { nombre: "OMD System", descripcion: "Web management platform for a non-profit organization.", tecnologias: ["PHP", "MariaDB"], repositorio: "/404" }
        ]
      }
    ]
  }
};