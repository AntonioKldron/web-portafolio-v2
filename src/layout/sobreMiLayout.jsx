import React, { useEffect, useState, useRef } from 'react';
import rostro from '../assets/img/perfil/Foto.png';
import CV from '../../public/pdf/Cv-Jose Antonio Cornelio Calderon.pdf';

export default function MiCartaPerfil() {
    const [activeSections, setActiveSections] = useState([]);
    const observerRef = useRef(null);
  
    useEffect(() => {
      const sections = document.querySelectorAll("section");
      const container = observerRef.current;
  
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
  
    const linkClass = (id) => {
      const isActive = activeSections.includes(id);
      return `relative block w-max pb-1.5 text-base lg:text-lg transition-all duration-500 ease-out ${
        isActive 
          ? "text-indigo-300 font-bold tracking-widest translate-x-3" 
          : "text-gray-400 hover:text-white hover:translate-x-1.5"
      } 
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:transition-all after:duration-500 after:ease-out
      ${
        isActive
          ? "after:w-full after:opacity-100 after:shadow-[0_0_10px_rgba(99,102,241,0.8)]"
          : "after:w-0 hover:after:w-full after:opacity-0 hover:after:opacity-100 hover:after:shadow-[0_0_8px_rgba(99,102,241,0.5)]"
      }`;
    };
  
    return (
      <div className="flex flex-col justify-between h-full w-full bg-gradient-to-b from-[#0f172a] to-[#070b14] text-gray-300 p-6 lg:p-10 border-r border-indigo-900/30 shadow-[8px_0_30px_rgba(0,0,0,0.6)] relative z-20">
      
        {/* --- CABECERA: Foto, Nombre y Título --- */}
        <div className="flex-shrink-0">
          <div className="relative group w-32 h-32 lg:w-40 lg:h-40 mb-6 cursor-pointer">
            <div className="absolute inset-0 rounded-full bg-indigo-500 blur-lg opacity-30 group-hover:opacity-70 transition-opacity duration-700 transform scale-105"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#1e293b] group-hover:border-indigo-400 transition-colors duration-500 z-10 shadow-2xl">
              <img
                src={rostro}
                alt="José Antonio Cornelio Calderón"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
            </div>
          </div>

          <h1 className="text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-1.5 leading-tight tracking-tight drop-shadow-sm">
            José Antonio <br /> Cornelio Calderón
          </h1>
          <h3 className="text-sm lg:text-[0.9rem] font-semibold text-indigo-400/90 tracking-wider uppercase">
            Ingeniero de Software
          </h3>
        </div>

        {/* --- MENÚ --- */}
        <nav className="flex-1 flex flex-col justify-center mt-5 space-y-3.5">
          <a href="#sobre-mi" className={linkClass("sobre-mi")}>Sobre mí</a>
          <a href="#herramientas" className={linkClass("herramientas")}>Herramientas</a>
          <a href="#experiencia" className={linkClass("experiencia")}>Experiencia</a>
          <a href="#proyectos" className={linkClass("proyectos")}>Proyectos</a>
          <a href="#formacion" className={linkClass("formacion")}>Educación</a>
        </nav>

        {/* --- PIE: Botón CV y Redes --- */}
        <div className="mt-auto pt-6 border-t border-gray-800/60 w-full">
          {/* AQUÍ ESTÁ EL CAMBIO: justify-between y w-full para repartir el espacio equitativamente */}
          <div className="flex items-center justify-between w-full text-gray-400">
            
            {/* Botón de CV */}
            <a
              href={CV}
              download='CV-Jose-Antonio-Cornelio-Calderon'
              className="group relative inline-flex items-center justify-center gap-2 px-4 py-2 text-xs lg:text-sm font-bold text-white transition-all duration-300 rounded-full overflow-hidden bg-indigo-600/20 hover:bg-indigo-500 border border-indigo-500/50 hover:border-transparent hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] hover:-translate-y-1 flex-shrink-0"
              title="Descargar CV"
            >
              <span className="relative z-10 tracking-wider">CV</span>
              <i className="fas fa-download text-xs transition-transform duration-300 group-hover:translate-y-1 relative z-10"></i>
            </a>
            
            {/* GitHub */}
            <a href="https://github.com/AntonioKldron" className="text-xl lg:text-2xl hover:text-white transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-110 drop-shadow-md" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/josé-antonio-cornelio-calderón-201885291" className="text-xl lg:text-2xl hover:text-[#0A66C2] transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-110 drop-shadow-md" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            
            {/* WhatsApp */}
            <a href="https://wa.me/524431582962" className="text-xl lg:text-2xl hover:text-[#25D366] transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-110 drop-shadow-md" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            
            {/* Correo */}
            <a href="mailto:antoncc47@gmail.com" className="text-xl lg:text-2xl hover:text-[#EA4335] transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-110 drop-shadow-md" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>

          </div>
        </div>

      </div>
    );
}