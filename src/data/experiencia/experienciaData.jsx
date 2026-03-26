import cinepolis from '@img/experiencia/cinepolis/cinepolis.png';
import intelisis from '@img/experiencia/intelisis/intelisis.png';
import itmmorelia from '@img/experiencia/itm/itmorelia.png';
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
        resumen_largo: "Ingeniero en Sistemas especializado en el ecosistema PeopleSoft. Desarrollo, optimización y mantenimiento de soluciones robustas en áreas clave (Finanzas, RH, Operaciones) mediante PeopleCode, integraciones Java y herramientas avanzadas del ERP.",
        descripcion: "Como Ingeniero en Sistemas dentro del departamento Global IT (área AR and BI), mi rol principal consiste en el desarrollo, optimización y mantenimiento continuo de soluciones tecnológicas utilizando PeopleCode, Application Designer y componentes avanzados del ERP (Records, Fields, Pages, Components, Application Engine y Application Packages). Traduzco requerimientos complejos de las áreas de Finanzas, Recursos Humanos, Operaciones y Compras en soluciones robustas y escalables. Me especializo en la creación, integración y mantenimiento de librerías .jar en Java para extender las funcionalidades nativas de PeopleSoft, habilitando lógica avanzada de negocio. Además, gestiono integraciones mediante Integration Broker administrando servicios REST/SOAP, automatizo procesos con lógica orientada a eventos y realizo gestión avanzada de datos con SQL Oracle, Meta-SQL y BI Publisher. Mi responsabilidad abarca todo el ciclo de vida: diagnóstico y resolución de incidencias asegurando el cumplimiento de SLAs, participación en ciclos de liberación con pruebas exhaustivas (unitarias, integradas y de usuario), y elaboración de documentación técnica y funcional detallada para garantizar la trazabilidad de cada desarrollo.",
        detalles: [
          "Desarrollo y mantenimiento de soluciones con PeopleCode, Application Designer, Application Engine y Application Packages.",
          "Creación e integración de librerías Java (.jar) para extender funcionalidades nativas de PeopleSoft y habilitar lógica avanzada de negocio.",
          "Administración de Integration Broker para la gestión de servicios REST/SOAP, garantizando el flujo seguro de información entre sistemas.",
          "Gestión avanzada de consultas, reportes y validaciones con SQL Oracle, Meta-SQL, Query Manager y BI Publisher.",
          "Participación en ciclos de liberación, diagnóstico de incidencias (SLA) y elaboración de documentación técnico-funcional."
        ],
        tecnologias: [dt.oracle, dt.java, dt.peoplesoft],
        proyectos: []
      },
      {
        id: "EXP_01",
        empresa: "Intelisis Solution S.A. de C.V.",
        ubicacion: "Morelia, Michoacán",
        logo: intelisis,
        puesto: "Desarrollador Back-End",
        periodo: "Febrero 2024 - Enero 2026",
        resumen_largo: "Evolución de Becario a Desarrollador de Proyectos Especiales. Experiencia en arquitectura de APIs RESTful, integración de sistemas multiplataforma y administración avanzada de bases de datos SQL Server para el sector automotriz.",
        descripcion: "Durante mi trayectoria en el departamento de TICS (área de Interfaces), evolucioné de Becario a Desarrollador de Proyectos Especiales, asumiendo la responsabilidad integral de la arquitectura backend y base de datos para el DMS automotriz. Diseñé y desarrollé APIs RESTful de alto rendimiento utilizando Django y FastAPI para gestionar flujos operativos críticos (citas, clientes, vehículos y órdenes de servicio), implementando protocolos de seguridad estrictos como OAuth2 y control de acceso granular. Participé en la automatización de procesos del ERP sincronizando información en tiempo real con sistemas externos y plataformas multiagencia. A nivel de base de datos, realicé desarrollo avanzado y administración en SQL Server, creando y optimizando procedimientos almacenados, funciones, triggers y ensamblados. Mi rol incluyó el consumo y exposición de servicios internos, despliegue en entornos controlados (incluyendo mi etapa inicial gestionando WAMP Server), pruebas, depuración y la creación de documentación técnica exhaustiva para garantizar la escalabilidad y estabilidad del ecosistema tecnológico.",
        puestos: [
          {
            nombre: "Desarrollador Back-End",
            fecha: "Julio 2024 – Enero 2026",
            descripcion: "Como Ingeniero en Sistemas en el área de Interfaces, participé en el diseño y desarrollo de APIs RESTful de alto rendimiento con Django y FastAPI, enfocadas en la gestión integral de módulos críticos del ERP (citas, clientes, vehículos y órdenes de servicio). Fui responsable de implementar protocolos de seguridad estrictos como OAuth2 y esquemas de control de acceso granular adaptados a la jerarquía de sucursales. Además, colaboré en la automatización y optimización de procesos clave mediante integraciones en tiempo real con sistemas externos y plataformas multiagencia, asegurando un flujo de información ágil y seguro. Todo esto respaldado por una sólida administración y desarrollo avanzado en SQL Server, abarcando desde la creación de procedimientos almacenados hasta triggers y ensamblados.",
            detalles: [
              "Construcción de APIs RESTful para la gestión de citas, clientes, vehículos y órdenes de servicio.",
              "Implementación de mecanismos de autenticación OAuth2 y control de acceso granular según normativas empresariales.",
              "Desarrollo avanzado en bases de datos SQL Server: creación y mantenimiento de procedimientos almacenados, funciones, triggers y ensamblados.",
              "Consumo y exposición de servicios internos para integraciones multiagencia y sincronización en tiempo real.",
              "Despliegue de aplicaciones en entornos controlados y redacción de documentación técnica detallada."
            ]
          },
          {
            nombre: "Becario de Desarrollo",
            fecha: "Febrero 2024 – Julio 2024",
            descripcion: "Durante mi etapa como Becario en el área web, brindé un soporte vital en la optimización del DMS Intelisis, centrándome en el desarrollo, mantenimiento y depuración de scripts, procedimientos almacenados y funciones en SQL Server para mejorar la gestión de datos. Participé activamente en la automatización de tareas recurrentes y en la integración inicial de módulos internos para agilizar la comunicación entre departamentos. Además, fui responsable de gestionar despliegues de aplicaciones y actualizaciones en entornos WAMP Server, asegurando transiciones suaves a producción. Esta experiencia me permitió aplicar metodologías ágiles en un entorno corporativo real, fortaleciendo mis habilidades técnicas y de trabajo colaborativo.",
            detalles: [
              "Desarrollo y optimización de procedimientos almacenados, funciones y consultas en SQL Server.",
              "Automatización de procesos básicos y soporte en la integración inicial de módulos internos.",
              "Realización de despliegues y actualizaciones de aplicaciones en entornos WAMP Server.",
              "Depuración de scripts y aplicación de metodologías ágiles en el desarrollo corporativo."
            ]
          }
        ],
        tecnologias: [
          dt.python, dt.django, dt.djangorest, dt.fastapi, dt.sqlserver,
          dt.postgresql, dt.docker, dt.linux, dt.git, dt.gitlab,
          dt.javascript, dt.angular, dt.intelisis, dt.json,
          dt.typescript, dt.xml, dt.api, dt.html, dt.css,
          dt.csharp, dt.net, dt.php, dt.codeigniter, dt.jquery
        ],
        proyectos: [
          { nombre: "BYD Integración", descripcion: "Sincronización de agencias automotrices con sistemas CRM de la marca BYD.", tecnologias: [dt.sqlserver, dt.json, dt.api, dt.intelisis], repositorio: "/404" },
          { nombre: "Clear Mechanics", descripcion: "Sincronización de información técnica para soporte y diagnóstico vehicular.", tecnologias: [dt.sqlserver, dt.json, dt.api], repositorio: "/404" },
          { nombre: "API Servicios", descripcion: "Exposición de servicios del DMS: citas, órdenes, clientes, inventario y VINs.", tecnologias: [dt.sqlserver, dt.djangorest, dt.django, dt.python, dt.api, dt.json, dt.docker, dt.linux], repositorio: "/404" },
          { nombre: "API Prospectos", descripcion: "Gestión, creación y conversión de prospectos integrando sistemas externos.", tecnologias: [dt.sqlserver, dt.djangorest, dt.django, dt.python, dt.api, dt.json, dt.intelisis, dt.docker, dt.linux], repositorio: "/404" },
          { nombre: "Geely Integración", descripcion: "Manejo de prospectos, inventarios y venta de unidades de la marca Geely.", tecnologias: [dt.sqlserver, dt.json, dt.api], repositorio: "/404" },
          { nombre: "Seekop Integration", descripcion: "Gestión de prospectos y venta de unidades mediante la plataforma Seekop.", tecnologias: [dt.sqlserver, dt.json, dt.api, dt.intelisis], repositorio: "/404" },
          { nombre: "Salesforce Mazda", descripcion: "Automatización de la gestión de prospectos del ecosistema Mazda.", tecnologias: [dt.sqlserver, dt.intelisis], repositorio: "/404" },
          { nombre: "Salesforce Daimler", descripcion: "Generación de KPIs para ventas, servicios e inventarios en Salesforce.", tecnologias: [dt.sqlserver, dt.intelisis], repositorio: "/404" },
          { nombre: "7 Técnicas Mazda", descripcion: "Interfaz de KPIs para reportar el ciclo de vida completo de las unidades.", tecnologias: [dt.sqlserver, dt.intelisis], repositorio: "/404" },
          { nombre: "API Fame", descripcion: "API REST para administración y conexión entre CRMs del grupo FAME.", tecnologias: [dt.sqlserver, dt.djangorest, dt.django, dt.python, dt.api, dt.json, dt.docker, dt.linux], repositorio: "/404" },
          { nombre: "Xentry", descripcion: "Consumo de servicios para facilitar la transferencia de información automotriz.", tecnologias: [dt.sqlserver, dt.json, dt.api, dt.intelisis], repositorio: "/404" },
          { nombre: "CRM Postventa Toyota", descripcion: "Desarrollo de CRM postventa integrando servicios nativos de Intelisis.", tecnologias: [dt.angular, dt.javascript, dt.typescript, dt.html, dt.css], repositorio: "/404" },
          { nombre: "API Pilot", descripcion: "API REST para administración y conexión entre CRM de Pilot e Intelisis.", tecnologias: [dt.sqlserver, dt.djangorest, dt.django, dt.python, dt.api, dt.json, dt.docker, dt.linux], repositorio: "/404" },
          { nombre: "Services Tablet", descripcion: "API REST para mostrar clientes e información de vehículos.", tecnologias: [dt.sqlserver, dt.xml, dt.api, dt.csharp, dt.net], repositorio: "/404" },
          { nombre: "Services Excellent", descripcion: "Portales web para mostrar servicios de Intelisis.", tecnologias: [dt.sqlserver, dt.php, dt.jquery, dt.javascript, dt.css, dt.html, dt.codeigniter], repositorio: "/404" },
          { nombre: "ISAPI", descripcion: "Librería personalizada para la creación de APIs REST del ecosistema Intelisis (función creación de estimaciones).", tecnologias: [dt.sqlserver, dt.postgresql, dt.djangorest, dt.django, dt.api, dt.python, dt.json], repositorio: "/404" },
        ]
      },
      {
        id: "EXP_02",
        empresa: "Fábrica Académica de Software (ITM)",
        ubicacion: "Morelia, Michoacán",
        logo: itmmorelia,
        puesto: "Desarrollador Full Stack Jr.",
        periodo: "Enero 2023 - Octubre 2023",
        resumen_largo: "Desarrollo Full Stack de aplicaciones web institucionales, integrando soluciones dinámicas desde el modelado de bases de datos hasta la implementación de interfaces de usuario modernas.",
        descripcion: "En mi rol como Desarrollador Full Stack Jr., participé activamente en la construcción de aplicaciones web de extremo a extremo para proyectos institucionales y académicos. Mi enfoque abarcó tanto el desarrollo frontend, creando landing pages responsivas e interfaces de usuario dinámicas con React.js, PHP, HTML5 y CSS, como la arquitectura backend, diseñando y desarrollando APIs REST robustas utilizando Django y SQLite. Además, fui responsable del modelado, gestión y optimización de bases de datos relacionales en MariaDB, asegurando en todo momento la integridad referencial y la eficiencia en la ejecución de consultas. Trabajé en estrecha colaboración con equipos de diseño para conceptualizar y materializar prototipos y sistemas de diseño en Figma, logrando una experiencia de usuario (UX/UI) altamente optimizada y orientada a los objetivos de cada proyecto.",
        detalles: [
          "Implementación de interfaces de usuario dinámicas con React.js y creación de landing pages responsivas con PHP, HTML5 y CSS.",
          "Diseño y desarrollo de APIs REST utilizando Django y SQLite para dar soporte a proyectos internos.",
          "Modelado y gestión de bases de datos relacionales en MariaDB, garantizando la integridad de las consultas.",
          "Colaboración en el diseño UX/UI mediante la creación de prototipos e interfaces gráficas en Figma."
        ],
        tecnologias: [dt.react, dt.php, dt.laravel, dt.mysql, dt.sqlite, dt.git, dt.figma, dt.supabase, dt.docker, dt.django, dt.html, dt.css, dt.javascript, dt.tailwind],
        proyectos: [
          { nombre: "Techani 2.0", descripcion: "Aplicación para gestión de salud en diabetes tipo 1 con base de datos en tiempo real.", tecnologias: [dt.react, dt.javascript, dt.html, dt.css, dt.nodejs, dt.supabase, dt.tailwind, dt.docker], repositorio: "https://github.com/alfonsonadamas/Techani-2.0.git" },
          { nombre: "Techani 1.0", descripcion: "Versión inicial en PHP para el monitoreo y gestión de pacientes diabéticos.", tecnologias: [dt.php, dt.css, dt.html, dt.javascript, dt.jquery, dt.mysql], repositorio: "https://github.com/alfonsonadamas/Techani.git" },
          { nombre: "OMD System", descripcion: "Plataforma de gestión web para una organización sin fines de lucro.", tecnologias: [dt.php, dt.javascript, dt.html, dt.css, dt.mysql], repositorio: "/404" }
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
        resumen_largo: "Systems Engineer specialized in the PeopleSoft ecosystem. Development, optimization, and maintenance of robust solutions in key areas (Finance, HR, Operations) using PeopleCode, Java integrations, and advanced ERP tools.",
        descripcion: "As a Systems Engineer within the Global IT department (AR and BI area), my primary role involves the continuous development, optimization, and maintenance of technological solutions using PeopleCode, Application Designer, and advanced ERP components (Records, Fields, Pages, Components, Application Engine, and Application Packages). I translate complex business requirements from Finance, Human Resources, Operations, and Procurement into robust and scalable solutions. I specialize in the creation, integration, and maintenance of Java (.jar) libraries to extend native PeopleSoft functionalities, enabling advanced business logic. Additionally, I manage integrations via Integration Broker by administrating REST/SOAP services, automate processes with event-driven logic, and perform advanced data management using Oracle SQL, Meta-SQL, and BI Publisher. My responsibilities span the entire lifecycle: diagnosing and resolving incidents ensuring SLA compliance, participating in release cycles with comprehensive testing (unit, integrated, and user acceptance), and drafting detailed technical and functional documentation to guarantee traceability.",
        detalles: [
          "Development and maintenance of solutions using PeopleCode, Application Designer, Application Engine, and Application Packages.",
          "Creation and integration of Java libraries (.jar) to extend native PeopleSoft functionalities and enable advanced business logic.",
          "Integration Broker administration for REST/SOAP services management, ensuring secure information flow between systems.",
          "Advanced management of queries, reports, and validations with Oracle SQL, Meta-SQL, Query Manager, and BI Publisher.",
          "Participation in release cycles, incident diagnostics (SLA compliance), and creation of technical-functional documentation."
        ],
        tecnologias: [dt.oracle, dt.java, dt.peoplesoft],
        proyectos: []
      },
      {
        id: "EXP_01",
        empresa: "Intelisis Solution S.A. de C.V.",
        ubicacion: "Morelia, Mexico",
        logo: intelisis,
        puesto: "Back-End Developer",
        periodo: "February 2024 - January 2026",
        resumen_largo: "Evolution from Intern to Special Projects Developer. Experience in RESTful API architecture, multi-platform system integration, and advanced SQL Server database administration for the automotive sector.",
        descripcion: "During my trajectory in the ICT department (Interfaces area), I evolved from an Intern to a Special Projects Developer, taking full responsibility for the backend architecture and database management of the automotive DMS. I designed and developed high-performance RESTful APIs using Django and FastAPI to manage critical operational flows (appointments, customers, vehicles, and service orders), implementing strict security protocols such as OAuth2 and granular access control. I participated in the automation of ERP processes by synchronizing real-time information with external systems and multi-agency platforms. At the database level, I performed advanced development and administration in SQL Server, creating and optimizing stored procedures, functions, triggers, and assemblies. My role also included the consumption and exposure of internal services, deployment in controlled environments (including my initial stage managing WAMP Server), testing, debugging, and the creation of exhaustive technical documentation to ensure the scalability and stability of the technological ecosystem.",
        puestos: [
          {
            nombre: "Back-End Developer",
            fecha: "July 2024 – January 2026",
            descripcion: "As a Systems Engineer in the Interfaces area, I participated in the design and development of high-performance RESTful APIs using Django and FastAPI, focused on the comprehensive management of critical ERP modules (appointments, customers, vehicles, and service orders). I was responsible for implementing strict security protocols such as OAuth2 and granular access control schemes adapted to branch hierarchies. Furthermore, I collaborated in automating and optimizing key processes through real-time integrations with external systems and multi-agency platforms, ensuring an agile and secure information flow. All of this was supported by solid administration and advanced development in SQL Server, ranging from the creation of stored procedures to triggers and assemblies.",
            detalles: [
              "Construction of RESTful APIs for the management of appointments, customers, vehicles, and service orders.",
              "Implementation of OAuth2 authentication mechanisms and granular access control according to business regulations.",
              "Advanced SQL Server database development: creation and maintenance of stored procedures, functions, triggers, and assemblies.",
              "Consumption and exposure of internal services for multi-agency integrations and real-time synchronization.",
              "Application deployment in controlled environments and drafting of detailed technical documentation."
            ]
          },
          {
            nombre: "Development Intern",
            fecha: "February 2024 – July 2024",
            descripcion: "During my time as an Intern in the web area, I provided vital support in optimizing the Intelisis DMS, focusing on the development, maintenance, and debugging of scripts, stored procedures, and functions in SQL Server to improve data management. I actively participated in the automation of recurring tasks and the initial integration of internal modules to streamline communication between departments. Additionally, I was responsible for managing application deployments and updates in WAMP Server environments, ensuring smooth transitions to production. This experience allowed me to apply agile methodologies in a real corporate setting, strengthening my technical problem-solving and collaborative teamwork skills.",
            detalles: [
              "Development and optimization of stored procedures, functions, and queries in SQL Server.",
              "Automation of basic processes and support in the initial integration of internal modules.",
              "Execution of application deployments and updates in WAMP Server environments.",
              "Script debugging and application of agile methodologies in corporate development."
            ]
          }
        ],
        tecnologias: [
          dt.python, dt.django, dt.djangorest, dt.fastapi, dt.sqlserver,
          dt.postgresql, dt.docker, dt.linux, dt.git, dt.gitlab,
          dt.javascript, dt.angular, dt.intelisis, dt.json,
          dt.typescript, dt.xml, dt.api, dt.html, dt.css,
          dt.csharp, dt.net, dt.php, dt.codeigniter, dt.jquery
        ],
        proyectos: [
          { nombre: "BYD Integration", descripcion: "Synchronization of automotive agencies with BYD brand CRM systems.", tecnologias: [dt.sqlserver, dt.json, dt.api, dt.intelisis], repositorio: "/404" },
          { nombre: "Clear Mechanics", descripcion: "Technical sync for support and vehicle diagnostic data.", tecnologias: [dt.sqlserver, dt.json, dt.api], repositorio: "/404" },
          { nombre: "Services API", descripcion: "DMS service exposure: appointments, orders, customers, inventory and VINs.", tecnologias: [dt.sqlserver, dt.djangorest, dt.django, dt.python, dt.api, dt.json, dt.docker, dt.linux], repositorio: "/404" },
          { nombre: "Leads API", descripcion: "Management, creation, and conversion of leads integrating external systems.", tecnologias: [dt.sqlserver, dt.djangorest, dt.django, dt.python, dt.api, dt.json, dt.intelisis, dt.docker, dt.linux], repositorio: "/404" },
          { nombre: "Geely Integration", descripcion: "Geely brand leads, inventory, and unit sales management.", tecnologias: [dt.sqlserver, dt.json, dt.api], repositorio: "/404" },
          { nombre: "Seekop Integration", descripcion: "Leads and sales management through the Seekop platform.", tecnologias: [dt.sqlserver, dt.json, dt.api, dt.intelisis], repositorio: "/404" },
          { nombre: "Mazda Salesforce", descripcion: "Automation of leads management for the Mazda ecosystem.", tecnologias: [dt.sqlserver, dt.intelisis], repositorio: "/404" },
          { nombre: "Daimler Salesforce", descripcion: "KPI generation for sales, services, and inventory in Salesforce.", tecnologias: [dt.sqlserver, dt.intelisis], repositorio: "/404" },
          { nombre: "7 Mazda Techniques", descripcion: "KPI interface for reporting the full unit life cycle.", tecnologias: [dt.sqlserver, dt.intelisis], repositorio: "/404" },
          { nombre: "Fame API", descripcion: "REST API for administration and connection between FAME group CRMs.", tecnologias: [dt.sqlserver, dt.djangorest, dt.django, dt.python, dt.api, dt.json, dt.docker, dt.linux], repositorio: "/404" },
          { nombre: "Xentry", descripcion: "Consumption of services to facilitate automotive information transfer.", tecnologias: [dt.sqlserver, dt.json, dt.api, dt.intelisis], repositorio: "/404" },
          { nombre: "Toyota After-sales CRM", descripcion: "After-sales CRM development integrating native Intelisis services.", tecnologias: [dt.angular, dt.javascript, dt.typescript, dt.html, dt.css], repositorio: "/404" },
          { nombre: "Pilot API", descripcion: "REST API for administration and connection between Pilot CRM and Intelisis.", tecnologias: [dt.sqlserver, dt.djangorest, dt.django, dt.python, dt.api, dt.json, dt.docker, dt.linux], repositorio: "/404" },
          { nombre: "Services Tablet", descripcion: "REST API to display customer and vehicle information.", tecnologias: [dt.sqlserver, dt.xml, dt.api, dt.csharp, dt.net], repositorio: "/404" },
          { nombre: "Services Excellent", descripcion: "Web portals to display Intelisis services.", tecnologias: [dt.sqlserver, dt.php, dt.jquery, dt.javascript, dt.css, dt.html, dt.codeigniter], repositorio: "/404" },
          { nombre: "ISAPI", descripcion: "Custom library for the creation of REST APIs in the Intelisis ecosystem (estimates creation function).", tecnologias: [dt.sqlserver, dt.postgresql, dt.djangorest, dt.django, dt.api, dt.python, dt.json], repositorio: "/404" },
        ]
      },
      {
        id: "EXP_02",
        empresa: "Academic Software Factory (ITM)",
        ubicacion: "Morelia, Mexico",
        logo: itmmorelia,
        puesto: "Jr. Full Stack Developer",
        periodo: "January 2023 - October 2023",
        resumen_largo: "Full Stack development of institutional web applications, integrating dynamic solutions from database modeling to the implementation of modern user interfaces.",
        descripcion: "In my role as a Jr. Full Stack Developer, I actively participated in building end-to-end web applications for institutional and academic projects. My focus covered both frontend development, creating responsive landing pages and dynamic user interfaces with React.js, PHP, HTML5, and CSS, as well as backend architecture, designing and developing robust REST APIs using Django and SQLite. Furthermore, I was responsible for modeling, managing, and optimizing relational databases in MariaDB, always ensuring referential integrity and query execution efficiency. I worked closely with design teams to conceptualize and materialize prototypes and design systems in Figma, achieving a highly optimized user experience (UX/UI) aligned with the goals of each project.",
        detalles: [
          "Implementation of dynamic user interfaces with React.js and creation of responsive landing pages using PHP, HTML5, and CSS.",
          "Design and development of REST APIs using Django and SQLite to support internal projects.",
          "Modeling and management of relational databases in MariaDB, ensuring query integrity.",
          "Collaboration in UX/UI design by creating prototypes and graphical interfaces in Figma."
        ],
        tecnologias: [dt.react, dt.php, dt.laravel, dt.mysql, dt.sqlite, dt.git, dt.figma, dt.supabase, dt.docker, dt.django, dt.html, dt.css, dt.javascript, dt.tailwind],
        proyectos: [
          { nombre: "Techani 2.0", descripcion: "Health management app for type 1 diabetes with real-time database.", tecnologias: [dt.react, dt.javascript, dt.html, dt.css, dt.nodejs, dt.supabase, dt.tailwind, dt.docker], repositorio: "https://github.com/alfonsonadamas/Techani-2.0.git" },
          { nombre: "Techani 1.0", descripcion: "Initial PHP version for monitoring and managing patients.", tecnologias: [dt.php, dt.css, dt.html, dt.javascript, dt.jquery, dt.mysql], repositorio: "https://github.com/alfonsonadamas/Techani.git" },
          { nombre: "OMD System", descripcion: "Web management platform for a non-profit organization.", tecnologias: [dt.php, dt.javascript, dt.html, dt.css, dt.mysql], repositorio: "/404" }
        ]
      }
    ]
  }
};