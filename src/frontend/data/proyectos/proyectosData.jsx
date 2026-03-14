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
        titulo: "Portafolio Web",
        lanzamiento: "Octubre 2025",
        descripcion_corta: "Consola de ingeniería profesional con React y Tailwind.",
        descripcion: "Arquitectura frontend de alto rendimiento con micro-animaciones dinámicas y optimización de activos multimedia.",
        imagen: website,
        detalles: ["Interfaz reactiva con React.js", "Animaciones con Framer Motion", "Arquitectura modular"],
        tecnologias: [dt.react, dt.tailwind],
        imagenes: carruselWebsite,
        urlSitio: "/",
        urlRepositorio: "https://github.com/AntonioKldron/web-portafolio-v2.git"
      }
    ]
  },
  en: {
    header: { subtitulo: "Projects", tituloPrincipal: "Featured", tituloHighlight: "Works" },
    proyectos: [
      {
        id: "PROY_01",
        titulo: "Web Portfolio",
        lanzamiento: "October 2025",
        descripcion_corta: "Professional engineering console with React and Tailwind.",
        descripcion: "High-performance frontend architecture with dynamic micro-animations and multimedia optimization.",
        imagen: website,
        detalles: ["Reactive interface with React.js", "Framer Motion animations", "Modular architecture"],
        tecnologias: [dt.react, dt.tailwind],
        imagenes: carruselWebsite,
        urlSitio: "/",
        urlRepositorio: "https://github.com/AntonioKldron/web-portafolio-v2.git"
      }
    ]
  }
};