// src/frontend/data/proyectos/proyectosData.jsx
// Unified data file for the Git + Projects section
// Pattern: fixed data (IDs, urls, techs) is top-level. Only text varies by lang.
import { data as dt } from '@backend/data/icons/iconsRegistro';
const website = '/img/proyect/website/website.png';
// import website from '/img/proyect/website/website.png';

const WebsiteImages = import.meta.glob(
  '/img/proyect/website/carrusel/*.png',
  { eager: true, import: 'default' }
);
const carruselWebsite = Object.values(WebsiteImages);

// ─── GitHub icon map (moved from gitHubData.jsx) ─────────────────────────────
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
};

// ─── Proyectos — fixed (non-translatable) data ───────────────────────────────
export const proyectosItems = [
  {
    id: 'PROY_01',
    imagen: website,
    imagenes: carruselWebsite,
    tecnologias: [dt.react, dt.tailwind, dt.vercel],
    urlSitio: '/',
    urlRepositorio: 'https://github.com/AntonioKldron/web-portafolio-v2.git',
    deploy: { estado: 'live', url: 'https://antoniokldron.vercel.app' },
  },
  {
    id: 'PROY_02',
    imagen: '',
    imagenes: [],
    tecnologias: [dt.react, dt.javascript, dt.html, dt.css, dt.nodejs, dt.firebase, dt.tailwind, dt.docker],
    urlSitio: 'https://techani.net/',
    urlRepositorio: 'https://github.com/alfonsonadamas/Techani-2.0.git',
    deploy: { estado: 'live', url: 'https://techani.net/' },
  },
];

// ─── Unified i18n data ────────────────────────────────────────────────────────
export const proyectosStaticData = {
  es: {
    // GitHub labels
    github: {
      header: { subtitulo: 'Métricas Git', titulo: 'Mi Código en', highlight: 'GitHub' },
      profile: { bioFallback: 'Construyendo software y explorando nuevas tecnologías.', repos: 'Repos', followers: 'Seguidores', commits: 'Commits' },
      stack: { title: 'Stack Dominante', subtitle: 'Basado en últimos 50 repos' },
      calendar: { title: 'Actividad_', updating: 'Sincronizando...', days: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'] },
      loading: 'Cargando_Dashboard...',
    },
    // Section header
    header: {
      subtitulo: 'Proyectos & GitHub',
      tituloPrincipal: 'Desarrollos &',
      tituloHighlight: 'Métricas',
    },
    // Per-project translations (matched by id)
    proyectos: [
      {
        id: 'PROY_01',
        titulo: 'Mi Portafolio Web',
        lanzamiento: 'Octubre 2025',
        descripcion_corta: 'Portafolio profesional desarrollado con React enfocado en arquitectura frontend moderna.',
        descripcion: 'Aplicación web desarrollada con React que funciona como portafolio profesional para presentar proyectos, experiencia y habilidades técnicas. El sistema está construido con una arquitectura modular, optimización de recursos y micro-animaciones que mejoran la experiencia de usuario.',
        detalles: [
          'Diseño e implementación de una arquitectura modular basada en componentes reutilizables.',
          'Desarrollo de una interfaz fluida mediante Framer Motion para micro-interacciones.',
          'Optimización del rendimiento mediante Lazy Loading y manejo eficiente de assets.',
          'Estilos globales con TailwindCSS para garantizar consistencia visual.',
        ],
      },
      {
        id: 'PROY_02',
        titulo: 'Techani v2',
        lanzamiento: 'Enero 2024',
        descripcion_corta: 'Aplicación para monitoreo y control de diabetes tipo 1.',
        descripcion: 'Aplicación desarrollada con React para el monitoreo de pacientes con diabetes tipo 1, permitiendo registrar niveles de glucosa, visualizar información médica y facilitar el seguimiento del tratamiento mediante una interfaz moderna conectada a Firebase.',
        detalles: [
          'Integración y gestión del estado del servidor utilizando Firebase como BaaS.',
          'Desarrollo de módulos de visualización de datos médicos y gráficas de glucosa.',
          'Implementación de lógica de validación de registros de salud en tiempo real.',
          'Despliegue y containerización de la aplicación utilizando Docker.',
        ],
      },
    ],
  },
  en: {
    github: {
      header: { subtitulo: 'Git Metrics', titulo: 'My Code on', highlight: 'GitHub' },
      profile: { bioFallback: 'Building software and exploring new technologies.', repos: 'Repos', followers: 'Followers', commits: 'Commits' },
      stack: { title: 'Dominant Stack', subtitle: 'Based on last 50 repos' },
      calendar: { title: 'Activity_', updating: 'Syncing...', days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
      loading: 'Loading_Dashboard...',
    },
    header: {
      subtitulo: 'Projects & GitHub',
      tituloPrincipal: 'Featured Works &',
      tituloHighlight: 'Metrics',
    },
    proyectos: [
      {
        id: 'PROY_01',
        titulo: 'My Web Portfolio',
        lanzamiento: 'October 2025',
        descripcion_corta: 'Professional portfolio built with React focused on modern frontend architecture.',
        descripcion: 'Web application developed with React that works as a professional portfolio to showcase projects, experience, and technical skills. Built with a modular architecture, resource optimization, and micro-animations.',
        detalles: [
          'Design and implementation of a modular architecture based on reusable components.',
          'Fluid UI development using Framer Motion for high-end micro-interactions.',
          'Performance optimization via Lazy Loading and efficient asset management.',
          'Custom styling with TailwindCSS to ensure visual consistency.',
        ],
      },
      {
        id: 'PROY_02',
        titulo: 'Techani v2',
        lanzamiento: 'January 2024',
        descripcion_corta: 'Application for monitoring and managing type 1 diabetes.',
        descripcion: 'Application developed with React for monitoring type 1 diabetes patients, allowing registration of glucose levels and treatment tracking through a modern interface connected to Firebase.',
        detalles: [
          'Server state integration using Firebase as a Backend-as-a-Service.',
          'Medical data visualization modules and glucose level charts.',
          'Real-time health record validation logic implementation.',
          'Application containerization and deployment using Docker.',
        ],
      },
    ],
  },
};

/**
 * Merges fixed proyectosItems with i18n text for the given language.
 * Returns an array ready to render.
 */
export const getProyectosMerged = (lang = 'es') => {
  const i18n = proyectosStaticData[lang]?.proyectos ?? [];
  return proyectosItems.map((item) => {
    const text = i18n.find((t) => t.id === item.id) ?? {};
    return { ...item, ...text };
  });
};
