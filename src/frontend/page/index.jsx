import React, { useRef, useEffect, useState } from 'react';
import MiCartaPerfil from '../layout/sobreMiLayout';
import SobreMiSeccion from '../components/sobreMiCarta';
import StackSection from '../components/herramientasMenu'; 
import FondoAnimado from '../static/fondo';
import ExperienciaSeccion2 from '../components/experienciaSeccion2';
import SeccionProyectos from '../components/proyectoSeccion';
import SeccionEducacion from '../components/estudiosSeccion';
import Sidebar from '../layout/navbarMovil.jsx';

export default function Index() {
  const observerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const sections = document.querySelectorAll('.reveal-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.15 });

    sections.forEach(section => observer.observe(section));
    return () => {
      window.removeEventListener('resize', handleResize);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Componente Separador Sutil
  const Separador = () => (
    <div className="w-full flex justify-center py-2 opacity-20">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
    </div>
  );

  return (
    <div className="relative min-h-screen w-full text-indigo-100 overflow-x-hidden bg-[#030712]">
      
      <style>{`
        .reveal-section {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-section.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {!isMobile && (
        <div className="fixed inset-0 z-0">
          <FondoAnimado isActive={true} />
        </div>
      )}
      
      <Sidebar />

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen w-full">
        
        {/* PANEL PERFIL (25%) */}
        <div id="encabezado" className="w-full lg:w-[25%] flex flex-col lg:fixed lg:left-0 lg:top-0 lg:h-screen z-20">
          <MiCartaPerfil observerRef={observerRef} />
        </div>

        {/* COLUMNA DE CONTENIDO (75%) */}
        <div 
          ref={observerRef} 
          className="w-full lg:w-[75%] lg:ml-[25%] pl-6 pr-20 md:pl-12 md:pr-24 lg:px-20 lg:h-screen lg:overflow-y-auto scroll-smooth relative z-10 space-y-4"
        >
          {/* SECCIONES EN COLUMNA CON MÁRGENES MÍNIMOS */}
          <section id="sobre-mi" className="min-h-fit lg:min-h-screen flex flex-col items-center justify-center reveal-section pt-10 lg:pt-0">
            <SobreMiSeccion />
          </section>

          <Separador />

          <section id="herramientas" className="min-h-fit lg:min-h-screen flex flex-col items-center justify-center reveal-section">
            <StackSection /> 
          </section>

          <Separador />

          <section id="experiencia" className="min-h-fit lg:min-h-screen flex flex-col items-center justify-center reveal-section">
            <ExperienciaSeccion2 />
          </section>

          <Separador />

          <section id="proyectos" className="min-h-fit lg:min-h-screen flex flex-col items-center justify-center reveal-section">
            <SeccionProyectos />
          </section>

          <Separador />

          <section id="formacion" className="min-h-fit lg:min-h-screen flex flex-col items-center justify-center reveal-section pb-20">
            <SeccionEducacion />
          </section>

          <footer className="text-center text-sm text-gray-500 py-10 reveal-section border-t border-white/5 pr-8">
            © {new Date().getFullYear()} José Antonio Cornelio Calderón <br /> 
            <span className="text-[10px] opacity-60 italic uppercase tracking-widest font-mono">
              todos los derechos reservados
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}