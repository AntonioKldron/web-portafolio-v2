import React, { useRef, useEffect, useState } from 'react';
import MiCartaPerfil from '../layout/sobreMiLayout';
import SobreMiSeccion from '../components/sobreMiCarta';
import FondoAnimado from '../static/fondo';
import ExperienciaSeccion2 from '../components/experienciaSeccion2';
import SeccionProyectos from '../components/proyectoSeccion';
import SeccionEducacion from '../components/estudiosSeccion';
import Sidebar from '../layout/navbarMovil.jsx'; 
/*Seccion*/
import SeccionHerramientas from '../features/herramientas/seccionHerramienta.jsx'

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
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { 
      root: window.innerWidth >= 1024 ? observerRef.current : null,
      threshold: 0.1
    });

    sections.forEach(section => observer.observe(section));
    return () => {
      window.removeEventListener('resize', handleResize);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const Separador = () => (
    <div className="w-full flex justify-center py-4 opacity-10">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </div>
  );

  return (
    <div className="relative min-h-screen w-full text-blue-100 overflow-x-hidden bg-[#020617]">
      <style>{`
        .reveal-section {
          opacity: 0;
          transform: translateY(30px);
          filter: blur(8px);
          transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-section.active {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0px);
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* FONDO GLOBAL: Siempre fijo, detrás de todo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FondoAnimado isActive={true} />
      </div>
      
      <Sidebar />

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen w-full bg-transparent">
        
        {/* PANEL PERFIL (IZQUIERDA FIJA) */}
        <div className="w-full lg:w-[25%] flex flex-col lg:fixed lg:left-0 lg:top-0 lg:h-screen z-20 bg-transparent lg:border-r border-white/5">
          <MiCartaPerfil observerRef={observerRef} />
        </div>

        {/* COLUMNA CONTENIDO (DERECHA SCROLLABLE) */}
        <div 
          ref={observerRef} 
          className="lg:overflow-y-auto no-scrollbar w-full lg:w-[75%] lg:ml-[25%] pl-6 pr-10 md:pl-12 md:pr-20 lg:px-24 lg:h-screen scroll-smooth relative z-10 space-y-10 bg-transparent"
        >
          <section id="sobre-mi" className="min-h-screen flex flex-col justify-center reveal-section pt-10 lg:pt-0">
            <SobreMiSeccion />
          </section>
          
          <Separador />
          
          <section id="herramientas" className="min-h-screen flex flex-col justify-center reveal-section">
            <SeccionHerramientas /> 
          </section>
          
          <Separador />
          
          <section id="experiencia" className="min-h-screen flex flex-col justify-center reveal-section">
            <ExperienciaSeccion2 />
          </section>
          
          <Separador />
          
          <section id="proyectos" className="min-h-screen flex flex-col justify-center reveal-section">
            <SeccionProyectos />
          </section>
          
          <Separador />
          
          <section id="formacion" className="min-h-screen flex flex-col justify-center reveal-section pb-20">
            <SeccionEducacion />
          </section>

          <footer className="w-full py-20 text-center opacity-50 text-[10px] tracking-[0.5em] font-mono">
            © {new Date().getFullYear()} JOSÉ ANTONIO CORNELIO CALDERÓN // SYSTEMS ENGINEER
          </footer>
        </div>
      </div>
    </div>
  );
}