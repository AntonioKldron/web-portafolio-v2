import React, { useRef, useEffect } from 'react';
import FondoAnimado from '../static/fondo';
import ExperienciaSeccion2 from '../components/experienciaSeccion2';
import SeccionProyectos from '../components/proyectoSeccion';
import SeccionEducacion from '../components/estudiosSeccion';
import Sidebar from '../layout/navbarMovil.jsx'; 
import SeccionHerramientas from '../features/herramientas/seccionHerramienta.jsx'
import SeccionSobreMi from '../features/sobreMi/seccionSobreMi.jsx'
import MiCartaPerfil from '../features/perfil/miCartaPerfil.jsx'

export default function Index() {
  const observerRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll('.reveal-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="
      relative min-h-screen w-full overflow-x-hidden 
      /* COLORES DINÁMICOS: Usamos las variables de Tailwind */
      text-main-text bg-screen-bg selection:bg-primary-accent/30
      transition-colors duration-500
    ">
      <style>{`
        .reveal-section { opacity: 0; transform: translateY(20px); transition: all 0.8s ease-out; }
        .reveal-section.active { opacity: 1; transform: translateY(0); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* FONDO GLOBAL CON ANIMACIÓN ORIGINAL RESTAURADA */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FondoAnimado isActive={true} />
      </div>
      
      <Sidebar />

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen w-full bg-transparent">
        
        {/* PANEL IZQUIERDO FIJO (CON CARTA SIEMPRE OSCURA) */}
        <div className="w-full lg:w-[25%] flex flex-col lg:fixed lg:left-0 lg:top-0 lg:h-screen z-20">
          <MiCartaPerfil observerRef={observerRef} />
        </div>

        {/* PANEL DERECHO - CONTENEDOR DE SCROLL (FONDO DINÁMICO) */}
        <div ref={observerRef} className="no-scrollbar w-full lg:w-[75%] lg:ml-[25%] px-6 md:px-16 lg:px-20 xl:px-32 lg:h-screen lg:overflow-y-auto scroll-smooth relative z-10">
          <section id="sobre-mi" className="min-h-screen flex items-center reveal-section"><SeccionSobreMi /></section>
          <section id="herramientas" className="min-h-screen flex items-center reveal-section"><SeccionHerramientas /></section>
          <section id="experiencia" className="min-h-screen flex items-center reveal-section"><ExperienciaSeccion2 /></section>
          <section id="proyectos" className="min-h-screen flex items-center reveal-section"><SeccionProyectos /></section>
          <section id="formacion" className="min-h-screen flex items-center reveal-section"><SeccionEducacion /></section>
          
          <footer className="w-full py-24 text-center opacity-40 text-[9px] tracking-[0.6em] font-mono text-muted-text">
            © {new Date().getFullYear()} J. ANTONIO CORNELIO // SYSTEMS ENGINEER
          </footer>
        </div>
      </div>
    </div>
  );
}