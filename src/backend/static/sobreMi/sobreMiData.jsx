// src/frontend/data/sobreMi/sobreMiData.jsx
// Refactored: fixed data is top-level, only text varies per lang.
import { data as dt } from '@backend/data/icons/iconsRegistro';

// Fixed — same in any language
export const sobreMiCore = {
  coreStack: [dt.csharp, dt.python, dt.sql],
};

export const sobreMiStaticData = {
  es: {
    subtitulo:       'Sobre mí',
    tituloPrincipal: 'Ingeniería de Software Full Stack',
    tituloHighlight: 'Arquitectura & Extensibilidad',
    fraseCorta:      'Diseño y desarrollo el motor tecnológico que conecta la lógica de negocio compleja con interfaces modernas, optimizando sistemas core y arquitecturas de datos empresariales.',
    parrafos: [
      {
        texto: 'Como {ingeniero}, participo en el ciclo de vida completo de aplicaciones escalables, logrando una integración fluida entre un {frontend} interactivo y arquitecturas de backend robustas diseñadas para el entorno corporativo.',
        highlights: { ingeniero: 'Ingeniero en Sistemas', frontend: 'React.js (Hooks y Gestión de Estado)' },
      },
      {
        texto: 'Actualmente en {empresa}, enfoco mis esfuerzos en la optimización del ecosistema {plataforma}. Utilizo {herramientas} para desarrollar lógica de negocio avanzada y asegurar la interoperabilidad mediante {integraciones}.',
        highlights: { empresa: 'Cinépolis', plataforma: 'Oracle PeopleSoft', herramientas: 'PeopleCode y Application Engine', integraciones: 'servicios web REST y SOAP' },
      },
      {
        texto: 'Cuento con una especialización técnica en {extensibilidad}, donde desarrollo librerías en {java} y ensamblados en {csharp} para potenciar funcionalidades que exceden las capacidades nativas de los sistemas ERP.',
        highlights: { extensibilidad: 'extensibilidad de sistemas', java: 'Java (.jar)', csharp: 'C# (.dll)' },
      },
      {
        texto: 'Durante mi trayectoria en {experienciaAnterior}, contribuí al diseño de {apis} seguras bajo estándares profesionales y a la optimización de {db} en entornos de misión crítica.',
        highlights: { experienciaAnterior: 'Intelisis DMS', apis: 'APIs RESTful (Django/FastAPI)', db: 'SQL Server (Triggers y Stored Procedures)' },
      },
    ],
  },
  en: {
    subtitulo:       'About me',
    tituloPrincipal: 'Full Stack Software Engineering',
    tituloHighlight: 'Architecture & Extensibility',
    fraseCorta:      'I design and develop the technological engine that connects complex business logic with modern interfaces, optimizing core systems and enterprise data architectures.',
    parrafos: [
      {
        texto: 'As a {ingeniero}, I participate in the full lifecycle of scalable applications, achieving seamless integration between an interactive {frontend} and robust backend architectures designed for corporate environments.',
        highlights: { ingeniero: 'Systems Engineer', frontend: 'React.js (Hooks & State Management)' },
      },
      {
        texto: 'Currently at {empresa}, I focus on optimizing the {plataforma} ecosystem. I use {herramientas} to develop advanced business logic and ensure interoperability through {integraciones}.',
        highlights: { empresa: 'Cinépolis', plataforma: 'Oracle PeopleSoft', herramientas: 'PeopleCode & Application Engine', integraciones: 'REST & SOAP web services' },
      },
      {
        texto: 'I possess technical expertise in {extensibilidad}, developing {java} libraries and {csharp} assemblies to power functionalities that exceed native ERP system capabilities.',
        highlights: { extensibilidad: 'system extensibility', java: 'Java (.jar)', csharp: 'C# (.dll)' },
      },
      {
        texto: 'Throughout my career at {experienciaAnterior}, I contributed to the design of secure {apis} under professional standards and {db} optimization in mission-critical environments.',
        highlights: { experienciaAnterior: 'Intelisis DMS', apis: 'RESTful APIs (Django/FastAPI)', db: 'SQL Server (Triggers & Stored Procedures)' },
      },
    ],
  },
};

// Backward-compatible export for useTranslation hook
export const sobreMiContenido = {
  coreStack: sobreMiCore.coreStack,
  es: sobreMiStaticData.es,
  en: sobreMiStaticData.en,
};
