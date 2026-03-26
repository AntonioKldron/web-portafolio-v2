// src/frontend/data/experiencia/experienciaData.jsx
// Refactored: fixed arrays (logo, techs, proyectos keys) extracted once.
// Only text (puesto, descripcion, detalles) varies per lang.
const cinepolis = '/img/data-icons/cinepolis.png';
// import cinepolis from '/img/data-icons/cinepolis.png';
const intelisis = '/img/data-icons/intelisis.png';
// import intelisis from '/img/data-icons/intelisis.png';
const itmmorelia = '/img/data-icons/itmmorelia.png';
// import itmmorelia from '/img/data-icons/itmmorelia.png';
import { data as dt } from '@backend/data/icons/iconsRegistro';

// ─── Fixed — same across all languages ────────────────────────────────────────
const experienciaBase = [
  {
    id: 'EXP_00',
    empresa: 'Cinépolis',
    logo: cinepolis,
    tecnologias: [dt.oracle, dt.java, dt.peoplesoft],
    proyectos: [],
  },
  {
    id: 'EXP_01',
    empresa: 'Intelisis Solution S.A. de C.V.',
    logo: intelisis,
    tecnologias: [
      dt.python, dt.django, dt.djangorest, dt.fastapi, dt.sqlserver,
      dt.postgresql, dt.docker, dt.linux, dt.git, dt.gitlab,
      dt.javascript, dt.angular, dt.intelisis, dt.json,
      dt.typescript, dt.xml, dt.api, dt.html, dt.css,
      dt.csharp, dt.net, dt.php, dt.codeigniter, dt.jquery,
    ],
    proyectos: [
      { nombre: 'BYD Integración', tecnologias: [dt.sqlserver, dt.json, dt.api, dt.intelisis], repositorio: '/404' },
      { nombre: 'Clear Mechanics', tecnologias: [dt.sqlserver, dt.json, dt.api], repositorio: '/404' },
      { nombre: 'API Servicios', tecnologias: [dt.sqlserver, dt.djangorest, dt.django, dt.python, dt.api, dt.json, dt.docker, dt.linux], repositorio: '/404' },
      { nombre: 'API Prospectos', tecnologias: [dt.sqlserver, dt.djangorest, dt.django, dt.python, dt.api, dt.json, dt.intelisis, dt.docker, dt.linux], repositorio: '/404' },
      { nombre: 'Geely Integración', tecnologias: [dt.sqlserver, dt.json, dt.api], repositorio: '/404' },
      { nombre: 'Seekop Integration', tecnologias: [dt.sqlserver, dt.json, dt.api, dt.intelisis], repositorio: '/404' },
      { nombre: 'Salesforce Mazda', tecnologias: [dt.sqlserver, dt.intelisis], repositorio: '/404' },
      { nombre: 'Salesforce Daimler', tecnologias: [dt.sqlserver, dt.intelisis], repositorio: '/404' },
      { nombre: '7 Técnicas Mazda', tecnologias: [dt.sqlserver, dt.intelisis], repositorio: '/404' },
      { nombre: 'API Fame', tecnologias: [dt.sqlserver, dt.djangorest, dt.django, dt.python, dt.api, dt.json, dt.docker, dt.linux], repositorio: '/404' },
      { nombre: 'Xentry', tecnologias: [dt.sqlserver, dt.json, dt.api, dt.intelisis], repositorio: '/404' },
      { nombre: 'CRM Postventa Toyota', tecnologias: [dt.angular, dt.javascript, dt.typescript, dt.html, dt.css], repositorio: '/404' },
      { nombre: 'API Pilot', tecnologias: [dt.sqlserver, dt.djangorest, dt.django, dt.python, dt.api, dt.json, dt.docker, dt.linux], repositorio: '/404' },
      { nombre: 'Services Tablet', tecnologias: [dt.sqlserver, dt.xml, dt.api, dt.csharp, dt.net], repositorio: '/404' },
      { nombre: 'Services Excellent', tecnologias: [dt.sqlserver, dt.php, dt.jquery, dt.javascript, dt.css, dt.html, dt.codeigniter], repositorio: '/404' },
      { nombre: 'ISAPI', tecnologias: [dt.sqlserver, dt.postgresql, dt.djangorest, dt.django, dt.api, dt.python, dt.json], repositorio: '/404' },
    ],
  },
  {
    id: 'EXP_02',
    empresa: 'Fábrica Académica de Software (ITM)',
    logo: itmmorelia,
    tecnologias: [dt.react, dt.php, dt.laravel, dt.mysql, dt.sqlite, dt.git, dt.figma, dt.firebase, dt.docker, dt.django, dt.html, dt.css, dt.javascript, dt.tailwind],
    proyectos: [
      { nombre: 'Techani 2.0', tecnologias: [dt.react, dt.javascript, dt.html, dt.css, dt.nodejs, dt.firebase, dt.tailwind, dt.docker], repositorio: 'https://github.com/alfonsonadamas/Techani-2.0.git' },
      { nombre: 'Techani 1.0', tecnologias: [dt.php, dt.css, dt.html, dt.javascript, dt.jquery, dt.mysql], repositorio: 'https://github.com/alfonsonadamas/Techani.git' },
      { nombre: 'OMD System', tecnologias: [dt.php, dt.javascript, dt.html, dt.css, dt.mysql], repositorio: '/404' },
    ],
  },
];

// ─── i18n text only ───────────────────────────────────────────────────────────
const experienciaI18n = {
  es: [
    {
      id: 'EXP_00',
      ubicacion: 'Morelia, Michoacán',
      puesto: 'Analista ERP',
      periodo: 'Enero 2026 - Actualidad',
      resumen_largo: 'Ingeniero en Sistemas especializado en el ecosistema PeopleSoft. Desarrollo, optimización y mantenimiento de soluciones robustas en áreas clave mediante PeopleCode, integraciones Java y herramientas avanzadas del ERP.',
      descripcion: 'Como Ingeniero en Sistemas dentro del departamento Global IT (área AR and BI), mi rol principal consiste en el desarrollo, optimización y mantenimiento continuo de soluciones tecnológicas utilizando PeopleCode, Application Designer y componentes avanzados del ERP.',
      detalles: [
        'Desarrollo y mantenimiento de soluciones con PeopleCode, Application Designer, Application Engine y Application Packages.',
        'Creación e integración de librerías Java (.jar) para extender funcionalidades nativas de PeopleSoft.',
        'Administración de Integration Broker para la gestión de servicios REST/SOAP.',
        'Gestión avanzada con SQL Oracle, Meta-SQL, Query Manager y BI Publisher.',
        'Participación en ciclos de liberación, diagnóstico de incidencias (SLA) y documentación técnico-funcional.',
      ],
      puestos: [],
      proyectos: [],
    },
    {
      id: 'EXP_01',
      ubicacion: 'Morelia, Michoacán',
      puesto: 'Desarrollador Back-End',
      periodo: 'Febrero 2024 - Enero 2026',
      resumen_largo: 'Evolución de Becario a Desarrollador de Proyectos Especiales. Experiencia en arquitectura de APIs RESTful, integración de sistemas multiplataforma y administración avanzada de SQL Server para el sector automotriz.',
      descripcion: 'Durante mi trayectoria en el departamento de TICS (área de Interfaces), evolucioné de Becario a Desarrollador de Proyectos Especiales asumiendo la responsabilidad integral de la arquitectura backend y base de datos para el DMS automotriz.',
      detalles: [
        'Construcción de APIs RESTful para la gestión de citas, clientes, vehículos y órdenes de servicio.',
        'Implementación de mecanismos de autenticación OAuth2 y control de acceso granular.',
        'Desarrollo avanzado en SQL Server: procedimientos almacenados, funciones, triggers y ensamblados.',
        'Consumo y exposición de servicios internos para integraciones multiagencia en tiempo real.',
        'Despliegue de aplicaciones en entornos controlados y documentación técnica detallada.',
      ],
      puestos: [
        { nombre: 'Desarrollador Back-End', fecha: 'Julio 2024 – Enero 2026', descripcion: 'Diseño y desarrollo de APIs RESTful con Django y FastAPI para gestión de módulos críticos del ERP.', detalles: ['Construcción de APIs RESTful para citas, clientes, vehículos y órdenes de servicio.', 'Implementación de OAuth2 y control de acceso granular.', 'Administración y desarrollo avanzado en SQL Server.', 'Consumo y exposición de servicios internos para integraciones multiagencia.', 'Despliegue y documentación técnica.'] },
        { nombre: 'Becario de Desarrollo', fecha: 'Febrero 2024 – Julio 2024', descripcion: 'Soporte en la optimización del DMS Intelisis, desarrollo de scripts, procedimientos almacenados y gestión de despliegues en WAMP Server.', detalles: ['Desarrollo y optimización de procedimientos almacenados en SQL Server.', 'Automatización de procesos básicos y soporte en integración de módulos.', 'Despliegues y actualizaciones en entornos WAMP Server.', 'Depuración de scripts y metodologías ágiles.'] },
      ],
      proyectos: [
        { nombre: 'BYD Integración', descripcion: 'Sincronización de agencias automotrices con sistemas CRM de la marca BYD.' },
        { nombre: 'Clear Mechanics', descripcion: 'Sincronización de información técnica para soporte y diagnóstico vehicular.' },
        { nombre: 'API Servicios', descripcion: 'Exposición de servicios del DMS: citas, órdenes, clientes, inventario y VINs.' },
        { nombre: 'API Prospectos', descripcion: 'Gestión, creación y conversión de prospectos integrando sistemas externos.' },
        { nombre: 'Geely Integración', descripcion: 'Manejo de prospectos, inventarios y venta de unidades de la marca Geely.' },
        { nombre: 'Seekop Integration', descripcion: 'Gestión de prospectos y venta de unidades mediante la plataforma Seekop.' },
        { nombre: 'Salesforce Mazda', descripcion: 'Automatización de la gestión de prospectos del ecosistema Mazda.' },
        { nombre: 'Salesforce Daimler', descripcion: 'Generación de KPIs para ventas, servicios e inventarios en Salesforce.' },
        { nombre: '7 Técnicas Mazda', descripcion: 'Interfaz de KPIs para reportar el ciclo de vida completo de las unidades.' },
        { nombre: 'API Fame', descripcion: 'API REST para administración y conexión entre CRMs del grupo FAME.' },
        { nombre: 'Xentry', descripcion: 'Consumo de servicios para facilitar la transferencia de información automotriz.' },
        { nombre: 'CRM Postventa Toyota', descripcion: 'Desarrollo de CRM postventa integrando servicios nativos de Intelisis.' },
        { nombre: 'API Pilot', descripcion: 'API REST para administración y conexión entre CRM de Pilot e Intelisis.' },
        { nombre: 'Services Tablet', descripcion: 'API REST para mostrar clientes e información de vehículos.' },
        { nombre: 'Services Excellent', descripcion: 'Portales web para mostrar servicios de Intelisis.' },
        { nombre: 'ISAPI', descripcion: 'Librería personalizada para la creación de APIs REST del ecosistema Intelisis.' },
      ],
    },
    {
      id: 'EXP_02',
      ubicacion: 'Morelia, Michoacán',
      puesto: 'Desarrollador Full Stack Jr.',
      periodo: 'Enero 2023 - Octubre 2023',
      resumen_largo: 'Desarrollo Full Stack de aplicaciones web institucionales, integrando soluciones dinámicas desde el modelado de bases de datos hasta la implementación de interfaces de usuario modernas.',
      descripcion: 'Participé activamente en la construcción de aplicaciones web de extremo a extremo para proyectos institucionales y académicos.',
      detalles: [
        'Implementación de interfaces dinámicas con React.js y landing pages responsivas.',
        'Diseño y desarrollo de APIs REST con Django y SQLite.',
        'Modelado y gestión de bases de datos relacionales en MariaDB.',
        'Colaboración en diseño UX/UI mediante prototipos en Figma.',
      ],
      puestos: [],
      proyectos: [
        { nombre: 'Techani 2.0', descripcion: 'Aplicación para gestión de salud en diabetes tipo 1 con base de datos en tiempo real.' },
        { nombre: 'Techani 1.0', descripcion: 'Versión inicial en PHP para el monitoreo y gestión de pacientes diabéticos.' },
        { nombre: 'OMD System', descripcion: 'Plataforma de gestión web para una organización sin fines de lucro.' },
      ],
    },
  ],
  en: [
    {
      id: 'EXP_00',
      ubicacion: 'Morelia, Mexico',
      puesto: 'ERP Analyst',
      periodo: 'January 2026 - Present',
      resumen_largo: 'Systems Engineer specialized in the PeopleSoft ecosystem. Development, optimization, and maintenance of robust solutions using PeopleCode, Java integrations, and advanced ERP tools.',
      descripcion: 'As a Systems Engineer within the Global IT department (AR and BI area), my primary role involves continuous development, optimization, and maintenance of technological solutions using PeopleCode, Application Designer and advanced ERP components.',
      detalles: [
        'Development and maintenance of solutions using PeopleCode, Application Designer, Application Engine and Application Packages.',
        'Creation and integration of Java libraries (.jar) to extend native PeopleSoft functionalities.',
        'Integration Broker administration for REST/SOAP service management.',
        'Advanced management using Oracle SQL, Meta-SQL, Query Manager, and BI Publisher.',
        'Release cycles, incident diagnostics (SLA compliance), and technical documentation.',
      ],
      puestos: [],
      proyectos: [],
    },
    {
      id: 'EXP_01',
      ubicacion: 'Morelia, Mexico',
      puesto: 'Back-End Developer',
      periodo: 'February 2024 - January 2026',
      resumen_largo: 'Evolution from Intern to Special Projects Developer. RESTful API architecture, multi-platform system integration, and advanced SQL Server administration for the automotive sector.',
      descripcion: 'During my trajectory in the ICT department (Interfaces area), I evolved from Intern to Special Projects Developer, taking full responsibility for backend architecture and database management of the automotive DMS.',
      detalles: [
        'Construction of RESTful APIs for appointments, customers, vehicles, and service orders.',
        'OAuth2 authentication mechanisms and granular access control implementation.',
        'Advanced SQL Server development: stored procedures, functions, triggers, and assemblies.',
        'Internal service consumption and exposure for multi-agency real-time integrations.',
        'Application deployment in controlled environments and technical documentation.',
      ],
      puestos: [
        { nombre: 'Back-End Developer', fecha: 'July 2024 – January 2026', descripcion: 'Design and development of high-performance RESTful APIs using Django and FastAPI for critical ERP modules.', detalles: ['RESTful API construction for appointments, customers, vehicles, and service orders.', 'OAuth2 and granular access control implementation.', 'Advanced SQL Server database development.', 'Internal service consumption for multi-agency integrations.', 'Deployment and technical documentation.'] },
        { nombre: 'Development Intern', fecha: 'February 2024 – July 2024', descripcion: 'Vital support in optimizing the Intelisis DMS, focusing on scripts, stored procedures, and WAMP Server deployments.', detalles: ['Development and optimization of stored procedures in SQL Server.', 'Process automation and initial module integration.', 'Application deployments in WAMP Server environments.', 'Script debugging and agile methodologies.'] },
      ],
      proyectos: [
        { nombre: 'BYD Integration', descripcion: 'Synchronization of automotive agencies with BYD brand CRM systems.' },
        { nombre: 'Clear Mechanics', descripcion: 'Technical sync for support and vehicle diagnostic data.' },
        { nombre: 'Services API', descripcion: 'DMS service exposure: appointments, orders, customers, inventory and VINs.' },
        { nombre: 'Leads API', descripcion: 'Management, creation, and conversion of leads integrating external systems.' },
        { nombre: 'Geely Integration', descripcion: 'Geely brand leads, inventory, and unit sales management.' },
        { nombre: 'Seekop Integration', descripcion: 'Leads and sales management through the Seekop platform.' },
        { nombre: 'Mazda Salesforce', descripcion: 'Automation of leads management for the Mazda ecosystem.' },
        { nombre: 'Daimler Salesforce', descripcion: 'KPI generation for sales, services, and inventory in Salesforce.' },
        { nombre: '7 Mazda Techniques', descripcion: 'KPI interface for reporting the full unit life cycle.' },
        { nombre: 'Fame API', descripcion: 'REST API for administration and connection between FAME group CRMs.' },
        { nombre: 'Xentry', descripcion: 'Consumption of services to facilitate automotive information transfer.' },
        { nombre: 'Toyota After-sales CRM', descripcion: 'After-sales CRM development integrating native Intelisis services.' },
        { nombre: 'Pilot API', descripcion: 'REST API for Pilot CRM and Intelisis connection.' },
        { nombre: 'Services Tablet', descripcion: 'REST API to display customer and vehicle information.' },
        { nombre: 'Services Excellent', descripcion: 'Web portals to display Intelisis services.' },
        { nombre: 'ISAPI', descripcion: 'Custom library for REST API creation in the Intelisis ecosystem.' },
      ],
    },
    {
      id: 'EXP_02',
      ubicacion: 'Morelia, Mexico',
      puesto: 'Jr. Full Stack Developer',
      periodo: 'January 2023 - October 2023',
      resumen_largo: 'Full Stack development of institutional web applications, from database modeling to modern user interface implementation.',
      descripcion: 'I actively participated in building end-to-end web applications for institutional and academic projects.',
      detalles: [
        'Dynamic UI implementation with React.js and responsive landing pages.',
        'REST API design and development using Django and SQLite.',
        'Relational database modeling and management in MariaDB.',
        'UX/UI design collaboration through Figma prototypes.',
      ],
      puestos: [],
      proyectos: [
        { nombre: 'Techani 2.0', descripcion: 'Health management app for type 1 diabetes with real-time database.' },
        { nombre: 'Techani 1.0', descripcion: 'Initial PHP version for monitoring and managing patients.' },
        { nombre: 'OMD System', descripcion: 'Web management platform for a non-profit organization.' },
      ],
    },
  ],
};

// ─── Merged static data ───────────────────────────────────────────────────────
const merge = (lang) =>
  experienciaBase.map((base) => {
    const text = experienciaI18n[lang].find((t) => t.id === base.id) ?? {};
    // Merge proyectos descriptions into fixed proyectos (keeping tecnologias + repositorio)
    const proyectos = base.proyectos.map((p) => {
      const pText = text.proyectos?.find((pt) => pt.nombre === p.nombre) ?? {};
      return { ...p, ...pText };
    });
    return { ...base, ...text, proyectos };
  });

export const experienciaStaticData = {
  es: {
    header: { subtitulo: 'Experiencia', titulo: 'Trayectoria', highlight: 'Profesional.' },
    items: merge('es'),
  },
  en: {
    header: { subtitulo: 'Experience', titulo: 'Professional', highlight: 'Journey.' },
    items: merge('en'),
  },
};

// Backward-compatible export
export const experienciaData = experienciaStaticData;
