// ─────────────────────────────────────────────────────────────────────────────
//  DATOS DE PROYECTOS — src/data/proyectos/proyectosData.jsx
//
//  📌 CÓMO AGREGAR UN PROYECTO:
//  1. Crea una nueva constante PROYECTO_XX_ES y PROYECTO_XX_EN debajo.
//  2. Añade ambas constantes al array dentro de proyectosData.es.proyectos
//     y proyectosData.en.proyectos respectivamente.
//  3. Los campos obligatorios son: id, titulo, lanzamiento, descripcion_corta,
//     descripcion, imagen, detalles[], tecnologias[], imagenes[],
//     urlSitio, urlRepositorio.
// ─────────────────────────────────────────────────────────────────────────────

import { data as dt } from '@data/icons/iconsRegistro';
import website from "@img/proyect/website/website.png";

// ── Carrusel de imágenes (Vite glob import) ──────────────────────────────────
const WebsiteImages = import.meta.glob(
  '@img/proyect/website/carrusel/*.png',
  { eager: true, import: 'default' }
);
const carruselWebsite = Object.values(WebsiteImages);

// ─────────────────────────────────────────────────────────────────────────────
//  PROYECTO 01 — Mi Portafolio Web
// ─────────────────────────────────────────────────────────────────────────────
const PROY_01_ES = {
  id: "PROY_01",
  titulo: "Mi Portafolio Web",
  lanzamiento: "Octubre 2025",
  descripcion_corta: "Portafolio profesional desarrollado con React enfocado en arquitectura frontend moderna.",
  descripcion: "Aplicación web desarrollada con React que funciona como portafolio profesional para presentar proyectos, experiencia y habilidades técnicas. El sistema está construido con una arquitectura modular, optimización de recursos y micro-animaciones que mejoran la experiencia de usuario, integrando TailwindCSS y Framer Motion para lograr una interfaz moderna, rápida y escalable.",
  imagen: website,
  detalles: [
    "Diseño e implementación de una arquitectura modular basada en componentes reutilizables.",
    "Desarrollo de una interfaz de usuario fluida mediante el uso avanzado de Framer Motion para micro-interacciones.",
    "Optimización del rendimiento mediante Lazy Loading y manejo eficiente de assets multimedia.",
    "Configuración y personalización de estilos globales con TailwindCSS para garantizar consistencia visual.",
  ],
  tecnologias: [dt.react, dt.tailwind, dt.vercel],
  imagenes: carruselWebsite,
  urlSitio: "/",
  urlRepositorio: "https://github.com/AntonioKldron/web-portafolio-v2.git",
};

const PROY_01_EN = {
  ...PROY_01_ES,
  titulo: "My Web Portfolio",
  lanzamiento: "October 2025",
  descripcion_corta: "Professional portfolio built with React focused on modern frontend architecture.",
  descripcion: "Web application developed with React that works as a professional portfolio to showcase projects, experience, and technical skills. The system is built with a modular architecture, resource optimization, and micro-animations that enhance the user experience, integrating TailwindCSS and Framer Motion to achieve a modern, fast, and scalable interface.",
  detalles: [
    "Design and implementation of a modular architecture based on reusable components.",
    "Development of a fluid UI using Framer Motion for high-end micro-interactions.",
    "Performance optimization via Lazy Loading and efficient multimedia asset management.",
    "Custom styling and configuration with TailwindCSS to ensure visual consistency.",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
//  PROYECTO 02 — Techani v2
// ─────────────────────────────────────────────────────────────────────────────
const PROY_02_ES = {
  id: "PROY_02",
  titulo: "Techani v2",
  lanzamiento: "Enero 2024",
  descripcion_corta: "Aplicación para monitoreo y control de diabetes tipo 1.",
  descripcion: "Aplicación desarrollada con React para el monitoreo de pacientes con diabetes tipo 1, permitiendo registrar niveles de glucosa, visualizar información médica y facilitar el seguimiento del tratamiento mediante una interfaz moderna conectada a Supabase como backend.",
  imagen: "",
  detalles: [
    "Integración y gestión del estado del servidor utilizando Supabase como Backend-as-a-Service.",
    "Desarrollo de módulos de visualización de datos médicos y gráficas de niveles de glucosa.",
    "Implementación de lógica de validación de registros de salud en tiempo real.",
    "Despliegue y containerización de la aplicación utilizando Docker para entornos de desarrollo y producción.",
  ],
  tecnologias: [dt.react, dt.javascript, dt.html, dt.css, dt.nodejs, dt.supabase, dt.tailwind, dt.docker],
  imagenes: [],
  urlSitio: "https://techani.net/",
  urlRepositorio: "https://github.com/alfonsonadamas/Techani-2.0.git",
};

const PROY_02_EN = {
  ...PROY_02_ES,
  lanzamiento: "January 2024",
  descripcion_corta: "Application for monitoring and managing type 1 diabetes.",
  descripcion: "Application developed with React for monitoring patients with type 1 diabetes, allowing the registration of glucose levels, visualization of medical information, and facilitating treatment tracking through a modern interface connected to Supabase as a backend.",
  detalles: [
    "Integration and management of server state using Supabase as a Backend-as-a-Service.",
    "Development of medical data visualization modules and glucose level charts.",
    "Implementation of real-time health record validation logic.",
    "Deployment and containerization of the application using Docker for dev/prod environments.",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
//  EXPORT PRINCIPAL — Datos i18n completos
// ─────────────────────────────────────────────────────────────────────────────
export const proyectosData = {
  es: {
    header: {
      subtitulo: "Proyectos",
      tituloPrincipal: "Desarrollos",
      tituloHighlight: "Realizados",
    },
    // 📌 Agrega nuevos proyectos aquí: ..., PROY_03_ES
    proyectos: [PROY_01_ES, PROY_02_ES],
  },
  en: {
    header: {
      subtitulo: "Projects",
      tituloPrincipal: "Featured",
      tituloHighlight: "Works",
    },
    // 📌 Agrega nuevos proyectos aquí: ..., PROY_03_EN
    proyectos: [PROY_01_EN, PROY_02_EN],
  },
};
