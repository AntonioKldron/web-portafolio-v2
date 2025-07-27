import React from 'react';
import Proyecto from '../components/proyectoCarta';
import { FaReact, FaPhp, FaCss3Alt, FaJsSquare, FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss, SiSupabase } from 'react-icons/si';

export default function SeccionProyectos() {
  const proyectos = [
    {
        titulo: "Techani-v1",
        descripcion: "Versión inicial desarrollada con PHP, CSS y JavaScript.",
        tecnologias: [
          { name: "PHP", icon: <FaPhp /> },
          { name: "HTML", icon: <FaHtml5 /> },
          { name: "CSS", icon: <FaCss3Alt /> },
          { name: "JavaScript", icon: <FaJsSquare /> }
        ],
        enlace: "#"
      },
    {
      titulo: "Techani-v2",
      descripcion: "Aplicación para monitoreo de diabetes tipo 1, desarrollada como proyecto universitario.",
      tecnologias: [
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Supabase", icon: <SiSupabase /> }
      ],
      enlace: "#"
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
