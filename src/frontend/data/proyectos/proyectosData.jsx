// src/data/proyectos/proyectosData.js
import { data as dt } from '../icons/iconsRegistro';
import website from "../../assets/img/proyect/website/website.png";

const globImages = import.meta.glob('../../assets/img/proyect/website/carrusel/*.png', { eager: true, import: 'default' });
const carruselWebsite = Object.values(globImages);

export const proyectosData = {
  es: {
    header: { subtitulo: "Proyectos", tituloPrincipal: "Desarrollos", tituloHighlight: "Realizados" },
    proyectos: [
      {
        id: "PROY_01",
        titulo: "Mi Portafolio Web",
        lanzamiento: "Octubre 2025",
        descripcion_corta: "Portafolio profesional desarrollado con React enfocado en arquitectura frontend moderna.",
        descripcion: "Aplicación web desarrollada con React que funciona como portafolio profesional para presentar proyectos, experiencia y habilidades técnicas. El sistema está construido con una arquitectura modular, optimización de recursos y micro-animaciones que mejoran la experiencia de usuario, integrando TailwindCSS y Framer Motion para lograr una interfaz moderna, rápida y escalable.",
        imagen: website,
        detalles: [
          "Arquitectura modular en React",
          "Diseño responsivo con TailwindCSS",
          "Micro-animaciones con Framer Motion",
          "Optimización de rendimiento y carga de recursos"
        ],
        tecnologias: [dt.react, dt.tailwind],
        imagenes: carruselWebsite,
        urlSitio: "/",
        urlRepositorio: "https://github.com/AntonioKldron/web-portafolio-v2.git"
      },
      {
        id: "PROY_02",
        titulo: "Techani v2",
        lanzamiento: "Enero 2024",
        descripcion_corta: "Aplicación para monitoreo y control de diabetes tipo 1.",
        descripcion: "Aplicación desarrollada con React para el monitoreo de pacientes con diabetes tipo 1, permitiendo registrar niveles de glucosa, visualizar información médica y facilitar el seguimiento del tratamiento mediante una interfaz moderna conectada a Supabase como backend.",
        imagen: "",
        detalles: [
          "Registro y seguimiento de niveles de glucosa",
          "Interfaz desarrollada con React",
          "Backend utilizando Supabase",
          "Visualización y monitoreo de datos de salud"
        ],
        tecnologias: [dt.react, dt.supabase, dt.tailwind, dt.docker],
        imagenes: [],
        urlSitio: "",
        urlRepositorio: ""
      }
    ]
  },
  en: {
    header: { subtitulo: "Projects", tituloPrincipal: "Featured", tituloHighlight: "Works" },
    proyectos: [
      {
        id: "PROY_01",
        titulo: "My Web Portfolio",
        lanzamiento: "October 2025",
        descripcion_corta: "Professional portfolio built with React focused on modern frontend architecture.",
        descripcion: "Web application developed with React that works as a professional portfolio to showcase projects, experience and technical skills. The system was built using a modular architecture with optimized assets and dynamic micro-animations to enhance user experience, integrating TailwindCSS and Framer Motion to create a modern, fast and scalable interface.",
        imagen: website,
        detalles: [
          "Modular architecture in React",
          "Responsive design with TailwindCSS",
          "Micro-animations with Framer Motion",
          "Performance and asset optimization"
        ],
        tecnologias: [dt.react, dt.tailwind],
        imagenes: carruselWebsite,
        urlSitio: "/",
        urlRepositorio: "https://github.com/AntonioKldron/web-portafolio-v2.git"
      },
      {
        id: "PROY_02",
        titulo: "Techani v2",
        lanzamiento: "January 2024",
        descripcion_corta: "Application for monitoring and managing type 1 diabetes.",
        descripcion: "Application developed with React for monitoring patients with type 1 diabetes, allowing glucose level tracking, health data visualization, and treatment follow-up through a modern interface connected to Supabase as backend.",
        imagen: "",
        detalles: [
          "Glucose level tracking",
          "React-based interface",
          "Supabase backend",
          "Health data visualization"
        ],
        tecnologias: [dt.react, dt.supabase, dt.tailwind, dt.docker],
        imagenes: [],
        urlSitio: "",
        urlRepositorio: ""
      }
    ]
  }
};