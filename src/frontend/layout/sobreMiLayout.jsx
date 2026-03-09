import React, { useEffect, useState } from 'react';
import rostro from '../assets/img/perfil/Foto.png';
import CV from '../../../public/pdf/Cv-Jose Antonio Cornelio Calderon.pdf';

export default function MiCartaPerfil({ observerRef }) {
    const [activeSections, setActiveSections] = useState([]);
  
    useEffect(() => {
      const container = observerRef?.current || null;
      const sections = document.querySelectorAll("section");
  
      const observer = new IntersectionObserver(
        (entries) => {
          const intersectingSections = entries
            .filter((entry) => entry.isIntersecting)
            .map((entry) => entry.target.id);
          
          if (intersectingSections.length > 0) {
            setActiveSections([intersectingSections[0]]);
          }
        },
        {
          root: container, 
          threshold: 0.3,
          rootMargin: "0px",
        }
      );
  
      sections.forEach((section) => observer.observe(section));
      return () => sections.forEach((section) => observer.unobserve(section));
    }, [observerRef]);
  
    const linkClass = (id) => {
      const isActive = activeSections.includes(id);
      return `relative block w-max pb-1.5 text-base lg:text-lg transition-all duration-500 ease-out ${
        isActive 
          ? "text-indigo-300 font-bold tracking-widest translate-x-3" 
          : "text-gray-400 hover:text-white hover:translate-x-1.5"
      } 
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:transition-all after:duration-500 after:ease-out
      ${isActive ? "after:w-full after:opacity-100 after:shadow-[0_0_10px_rgba(99,102,241,0.8)]" : "after:w-0 after:opacity-0 hover:after:w-full hover:after:opacity-100"}`;
    };
  
    return (
      <div className="flex flex-col justify-between h-full w-full bg-gradient-to-b from-[#0f172a] to-[#030712] text-gray-300 p-6 lg:p-10 lg:border-r border-indigo-900/30 relative z-20 overflow-hidden">
      
        {/* --- CABECERA: Foto y Títulos Alineados --- */}
        <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-0 flex-shrink-0">
          <div className="relative group w-24 h-24 lg:w-36 lg:h-36 mb-2 lg:mb-6 cursor-pointer">
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

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-1 leading-tight tracking-tight drop-shadow-sm uppercase italic">
              José Antonio <br className="hidden lg:block" /> Cornelio Calderón
            </h1>
            <h3 className="text-[10px] lg:text-[0.9rem] font-semibold text-indigo-400/90 tracking-[0.2em] uppercase">
              Ingeniero de Software
            </h3>
          </div>
        </div>

        {/* --- MENÚ: Visible en Desktop --- */}
        <nav className="hidden lg:flex flex-1 flex-col justify-center mt-5 space-y-3.5">
          <a href="#sobre-mi" className={linkClass("sobre-mi")}>Sobre mí</a>
          <a href="#herramientas" className={linkClass("herramientas")}>Herramientas</a>
          <a href="#experiencia" className={linkClass("experiencia")}>Experiencia</a>
          <a href="#proyectos" className={linkClass("proyectos")}>Proyectos</a>
          <a href="#formacion" className={linkClass("formacion")}>Educación</a>
        </nav>

        {/* --- PIE: REDES SOCIALES MANTENIDAS --- */}
        <div className="mt-8 lg:mt-auto pt-6 border-t border-gray-800/60 w-full">
          {/* justify-start en móvil para evitar el Navbar a la derecha */}
          <div className="flex items-center justify-start lg:justify-between w-full text-gray-400 gap-5 lg:gap-4">
            
            {/* Botón CV */}
            <a
              href={CV}
              download='CV-Jose-Antonio-Cornelio-Calderon'
              className="group relative inline-flex items-center justify-center gap-2 px-4 py-2 text-[10px] lg:text-sm font-bold text-white transition-all duration-300 rounded-full overflow-hidden bg-indigo-600/20 hover:bg-indigo-500 border border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] flex-shrink-0"
              title="Descargar CV"
            >
              <span className="relative z-10 tracking-wider uppercase">CV</span>
              <i className="fas fa-download text-[10px] transition-transform duration-300 group-hover:translate-y-1 relative z-10"></i>
            </a>
            
            {/* Iconos de Redes Socialies */}
            <div className="flex items-center gap-4 lg:gap-5 ml-2 lg:ml-0">
              <a href="https://github.com/AntonioKldron" className="text-xl lg:text-2xl hover:text-white transition-all duration-300 transform hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              
              <a href="https://www.linkedin.com/in/josé-antonio-cornelio-calderón-201885291" className="text-xl lg:text-2xl hover:text-[#0A66C2] transition-all duration-300 transform hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              
              <a href="https://wa.me/524431582962" className="text-xl lg:text-2xl hover:text-[#25D366] transition-all duration-300 transform hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              
              <a href="mailto:antoncc47@gmail.com" className="text-xl lg:text-2xl hover:text-[#EA4335] transition-all duration-300 transform hover:-translate-y-1">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    );
}