// src/data/proyectos/proyectosData.js
import { data as dt } from '../icons/iconsRegistro';

// ─── ASSETS E IMÁGENES ──────────────────────────────────────────────────
import website from "../../assets/img/proyect/website/website.png";

// Importación dinámica de carrusel mediante Vite
const WebsiteImages = import.meta.glob(
  '../../assets/img/proyect/website/carrusel/*.png', 
  { eager: true, import: 'default' }
);
const carruselWebsite = Object.values(WebsiteImages);

/**
 * 1. MAPEO DE ICONOS PARA GITHUB
 * Vincula lenguajes de la API con componentes de iconos locales.
 */
export const githubIconMap = {
  javascript: dt?.javascript,
  typescript: dt?.typescript,
  python: dt?.python,
  html: dt?.html,
  css: dt?.css,
  'c#': dt?.csharp,
  java: dt?.java,
  sql: dt?.sql,
  vue: dt?.vue,
  php: dt?.php,
  tsql: dt?.sql,
  'jupyter notebook': dt?.jupyter,
  astro: dt?.astro,
  hack: dt?.terminal,
  plpgsql: dt?.postgresql,
};

/**
 * 2. ITEMS TÉCNICOS (Lógica y Assets)
 * Datos estructurales persistentes (URLs, IDs, Assets Técnicos).
 */
const proyectosItems = [
  {
    id: 'PROY_01',
    imagen: website,
    imagenes: carruselWebsite,
    tecnologias: [dt.react, dt.tailwind, dt.vercel, dt.json, dt.nodejs].filter(Boolean),
    urlSitio: '/',
    urlRepositorio: 'https://github.com/AntonioKldron/web-portafolio-v2.git',
    deploy: { estado: 'live', url: '/' },
  },
  {
    id: 'PROY_02',
    imagen: '', 
    imagenes: [],
    tecnologias: [dt.react, dt.supabase, dt.nodejs, dt.tailwind, dt.docker, dt.javascript].filter(Boolean),
    urlSitio: 'https://techani.net/',
    urlRepositorio: 'https://github.com/alfonsonadamas/Techani-2.0.git',
    deploy: { estado: 'live', url: 'https://techani.net/' },
  },
];

/**
 * 3. DATA ESTÁTICA (Traducciones con Finalidad Estratégica)
 */
export const proyectosStaticData = {
  es: {
    github: {
      header: { subtitulo: 'Ecosistema de Desarrollo', titulo: 'Productividad y Código en', highlight: 'GitHub' },
      profile: { bioFallback: 'Ingeniero de Software especializado en sistemas de misión crítica y arquitecturas extensibles.', repos: 'Proyectos', followers: 'Red', commits: 'Actividad' },
      stack: { title: 'Stack Tecnológico Dominante', subtitle: 'Análisis basado en los últimos 50 repositorios' },
      calendar: { title: 'Ciclo de Contribución Anual', updating: 'Sincronizando métricas...', days: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'] },
      loading: 'Iniciando_Dashboard_Métricas...',
    },
    titles: { projects: 'Sistemas & Desarrollos Core' },
    header: { subtitulo: 'Git & Proyectos', tituloPrincipal: 'Ingeniería de', tituloHighlight: 'Software' },
    proyectos: [
      {
        id: 'PROY_01',
        titulo: 'Portfolio',
        lanzamiento: 'Edición 2025',
        descripcion_corta: 'Infraestructura de marca personal diseñada para la validación técnica de arquitecturas frontend.',
        descripcion: 'La finalidad de este proyecto es establecer un estándar de ingeniería para mi marca personal. Más que un catálogo, es un ecosistema de alto rendimiento que sirve como prueba de concepto para demostrar el dominio en la optimización de Web Vitals, gestión de estado compleja y despliegue automatizado, garantizando una interfaz que proyecta solvencia técnica y profesionalismo.',
        detalles: [
          'Arquitectura modular escalable que facilita la mantenibilidad y el testing unitario.',
          'Optimización agresiva de Web Vitals (LCP, FID, CLS) mediante lazy-loading y purga de assets.',
          'Sistema de diseño atómico implementado con TailwindCSS para garantizar consistencia visual absoluta.',
          'Pipeline de CI/CD automatizado para despliegues atómicos y alta disponibilidad.'
        ],
      },
      {
        id: 'PROY_02',
        titulo: 'Techani v2',
        lanzamiento: 'Enero 2024',
        descripcion_corta: 'Plataforma de e-Health diseñada para optimizar el control clínico de la Diabetes Tipo 1.',
        descripcion: 'Este proyecto nace con la finalidad de transformar la gestión diaria de la salud en un proceso basado en datos precisos. El sistema centraliza métricas biométricas críticas para reducir el margen de error en el tratamiento, proporcionando a pacientes y médicos una herramienta de trazabilidad en tiempo real que facilita decisiones clínicas informadas.',
        detalles: [
          'Integración de servicios Backend-as-a-Service (BaaS) con Supabase para persistencia reactiva de datos.',
          'Desarrollo de dashboards analíticos con procesamiento dinámico de métricas glucémicas.',
          'Implementación de lógica de negocio en el borde (Edge) para validación de registros en tiempo real.',
          'Contenerización completa mediante Docker para garantizar la paridad absoluta entre entornos.'
        ],
      },
    ],
  },
  en: {
    github: {
      header: { subtitulo: 'Development Ecosystem', titulo: 'Code Productivity on', highlight: 'GitHub' },
      profile: { bioFallback: 'Software Engineer specialized in mission-critical systems and extensible backend architectures.', repos: 'Projects', followers: 'Network', commits: 'Activity' },
      stack: { title: 'Dominant Tech Stack', subtitle: 'Language analysis based on the last 50 repositories' },
      calendar: { title: 'Annual Contribution Cycle', updating: 'Syncing real-time metrics...', days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
      loading: 'Initializing_Metrics_Dashboard...',
    },
    titles: { projects: 'Core Systems & Development' },
    header: { subtitulo: 'Git & Projects', tituloPrincipal: 'Software', tituloHighlight: 'Engineering' },
    proyectos: [
      {
        id: 'PROY_01',
        titulo: 'Portfolio',
        lanzamiento: '2025 Edition',
        descripcion_corta: 'Personal branding infrastructure designed for technical validation of frontend architectures.',
        descripcion: 'The purpose of this project is to establish an engineering standard for my personal brand. Far from being a simple catalog, it is a high-performance ecosystem serving as a proof-of-concept to demonstrate mastery in Web Vitals optimization, complex state management, and automated deployment, ensuring an interface that projects technical solvency.',
        detalles: [
          'Scalable modular architecture facilitating maintainability and unit testing.',
          'Aggressive Web Vitals optimization (LCP, FID, CLS) via lazy-loading and asset purging.',
          'Atomic design system implemented with TailwindCSS for absolute visual consistency.',
          'Automated CI/CD pipeline for atomic deployments and high availability.'
        ],
      },
      {
        id: 'PROY_02',
        titulo: 'Techani v2',
        lanzamiento: 'January 2024',
        descripcion_corta: 'e-Health platform designed to optimize clinical control of Type 1 Diabetes.',
        descripcion: 'This project was created with the purpose of transforming daily health management into a data-driven process. The system centralizes critical biometric metrics to reduce treatment error margins, providing patients and physicians with a real-time traceability tool that facilitates informed clinical decisions.',
        detalles: [
          'Backend-as-a-Service (BaaS) integration with Supabase for reactive data persistence.',
          'Development of analytical dashboards with dynamic processing of glycemic metrics.',
          'Implementation of business logic at the Edge for real-time health record validation.',
          'Full containerization via Docker to ensure absolute parity across environments.'
        ],
      },
    ],
  },
};

/**
 * 4. EXPORTACIÓN UNIFICADA
 */
export const proyectosData = {
  getMerged: (lang = 'es') => {
    const texts = proyectosStaticData[lang]?.proyectos || [];
    return proyectosItems.map(item => ({
      ...item,
      ...(texts.find(t => t.id === item.id) || {})
    }));
  },
  es: { 
    header: proyectosStaticData.es.header, 
    github: proyectosStaticData.es.github,
    titles: proyectosStaticData.es.titles
  },
  en: { 
    header: proyectosStaticData.en.header, 
    github: proyectosStaticData.en.github,
    titles: proyectosStaticData.en.titles
  }
};