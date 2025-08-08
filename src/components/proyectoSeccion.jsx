import React from 'react';
import Proyecto from '../components/proyectoCarta';
import { FaReact, FaPhp, FaCss3Alt, FaJsSquare, FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss, SiSupabase } from 'react-icons/si';
import website from "../assets/img/proyect/website/website.png"

export default function SeccionProyectos() {
  const imgWebSite = import.meta.glob('../assets/img/proyect/website/carrusel/*.png', {
    eager: true,
    import: 'default'
  });

  const proyectos = [
    {
        titulo: "Mi Portafolio Web",
        descripcion: "Proyecto personal desarrollado con React y Tailwind para mostrar mi trabajo profesional y académico.",
        imagen: website,
        tecnologias: [
          { name: "React", icon: <FaReact /> },
          { name: "Tailwind", icon: <SiTailwindcss /> }
        ],
        imagenes: Object.entries(imgWebSite)
        .sort(([a], [b]) => a.localeCompare(b)) // opcional
        .map(([, value]) => value),
        urlSitio: "/",
        urlRepositorio: "https://github.com/AntonioKldron/web-portafolio-v2.git"
      }
  ];

  return (
    <section className="py-16 px-4 from-indigo-950 to-black" id="proyectos">
      <h1 className="text-3xl font-bold text-white text-center mb-12">Proyectos</h1>
      <div className="space-y-12 max-w-6xl mx-auto">
        {proyectos.map((proyecto, index) => (
          <Proyecto key={index} {...proyecto} />
        ))}
      </div>
    </section>
  );
}
