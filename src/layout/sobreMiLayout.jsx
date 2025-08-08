import React, { useEffect, useState, useRef } from 'react';
import rostro from '../assets/img/miFoto.png';
import CV from '../../public/pdf/Cv-Jose Antonio Cornelio Calderon.pdf';

export default function MiCartaPerfil() {
    const [activeSections, setActiveSections] = useState([]);
    const observerRef = useRef(null);
  
    useEffect(() => {
      const sections = document.querySelectorAll("section");
      const container = observerRef.current;
  
      // Se crea el observador y se le pasa el contenedor del scroll como 'root'.
      const observer = new IntersectionObserver(
        (entries) => {
          const intersectingSections = entries
            .filter((entry) => entry.isIntersecting)
            .map((entry) => entry.target.id);
          
          if (intersectingSections.length > 0) {
            setActiveSections([intersectingSections[0]]);
          } else {
            setActiveSections([]);
          }
        },
        {
          root: container, 
          threshold: 0.5,
          rootMargin: "0px",
        }
      );
  
      sections.forEach((section) => observer.observe(section));
  
      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    }, []);
  
    const linkClass = (id) =>
        `relative text-indigo-300 transition-colors duration-300 ${
          activeSections.includes(id) ? "text-indigo-400 font-semibold" : "hover:text-indigo-400"
        } 
        after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-full after:h-[2px] after:bg-indigo-400 after:transition-transform after:duration-500 after:ease-in-out
        ${
          activeSections.includes(id)
            ? "after:scale-x-100"
            : "after:scale-x-0 hover:after:scale-x-100"
        }`;
  
    return (
      <div className="flex flex-col space-y-6 text-gray-300">
      {/* Cabecera */}
      <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-10 text-gray-300">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg flex-shrink-0">
          <img
            src={rostro}
            alt="José Antonio Cornelio Calderón"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-4xl font-bold text-white mb-1">
            José Antonio Cornelio Calderón
          </h1>
          <h3 className="text-xl font-semibold text-indigo-400 mb-4">
            Ingeniero de software
          </h3>
          <p className="text-justify text-base leading-relaxed max-w-xl">
            Ingeniero de software especializado en{' '}
            <span className="text-indigo-400 font-semibold">APIs REST</span> e integración de{' '}
            <span className="text-indigo-400 font-semibold">sistemas ERP</span> con experiencia en{' '}
            <span className="text-indigo-400 font-semibold">React</span>,{' '}
            <span className="text-indigo-400 font-semibold">Django</span> y{' '}
            <span className="text-indigo-400 font-semibold">SQL Server</span>.
          </p>
        </div>
      </div>

      {/* Menú y redes */}
      <div className="flex flex-row justify-between items-center mt-8 w-full">
        <div className="space-y-8">
          {/* Menú con animación de sección activa */}
          <div className="flex flex-col space-y-2 font-medium">
            <a href="#sobre-mi" className={linkClass("sobre-mi")}>Sobre mí</a>
            <a href="#herramientas" className={linkClass("herramientas")}>Herramientas</a>
            <a href="#experiencia" className={linkClass("experiencia")}>Experiencia</a>
            <a href="#proyectos" className={linkClass("proyectos")}>Proyectos</a>
            <a href="#formacion" className={linkClass("formacion")}>Educación</a>
          </div>

          {/* Enlaces sociales */}
          <div className="flex space-x-6 justify-center text-gray-400">
            <a href="https://github.com/AntonioKldron" className="text-2xl hover:text-blue-400 transition-colors transform hover:scale-105" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/josé-antonio-cornelio-calderón-201885291" className="text-2xl hover:text-blue-500 transition-colors transform hover:scale-105" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://wa.me/524431582962" className="text-2xl hover:text-green-400 transition-colors transform hover:scale-105" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:antoncc47@gmail.com" className="text-2xl hover:text-red-400 transition-colors transform hover:scale-105" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Botón de CV */}
        <div className="flex-1 flex justify-center items-center">
          <a
            href={CV}
            download='CV-Jose-Antonio-Cornelio-Calderon'
            className="px-6 py-3 bg-gray-800 text-white rounded-xl font-medium hover:bg-indigo-500 active:scale-95 transition duration-200"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  );
}
