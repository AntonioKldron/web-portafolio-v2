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
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { 
      // Sincronización técnica: root apunta al div de scroll en PC
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
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
    </div>
  );

  return (
    <div className="relative min-h-screen w-full text-indigo-100 overflow-x-hidden bg-[#030712]">
      <style>{`
        .reveal-section {
          opacity: 0;
          transform: translateY(40px) scale(0.95);
          filter: blur(10px);
          transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-section.active {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0px);
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {!isMobile && (
        <div className="fixed inset-0 z-0 opacity-40">
          <FondoAnimado isActive={true} />
        </div>
      )}
      
      <Sidebar />

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen w-full bg-transparent">
        
        {/* PANEL PERFIL (Fijo en PC) */}
        <div id="encabezado" className="w-full lg:w-[25%] flex flex-col lg:fixed lg:left-0 lg:top-0 lg:h-screen z-20 bg-transparent lg:border-r border-white/5">
          <MiCartaPerfil observerRef={observerRef} />
        </div>

        {/* COLUMNA DE CONTENIDO (Scrollable) */}
        <div 
          ref={observerRef} 
          className="lg:overflow-y-auto no-scrollbar w-full lg:w-[75%] lg:ml-[25%] pl-6 pr-20 md:pl-12 md:pr-24 lg:px-20 lg:h-screen scroll-smooth relative z-10 space-y-4 bg-transparent"
        >
          {/* Todas las secciones con IDs exactos para el Sidebar */}
          <section id="sobre-mi" className="min-h-screen flex flex-col items-center justify-center reveal-section pt-10 lg:pt-0">
            <SobreMiSeccion />
          </section>
          
          <Separador />
          
          <section id="herramientas" className="min-h-screen flex flex-col items-center justify-center reveal-section">
            <StackSection /> 
          </section>
          
          <Separador />
          
          <section id="experiencia" className="min-h-screen flex flex-col items-center justify-center reveal-section">
            <ExperienciaSeccion2 />
          </section>
          
          <Separador />
          
          <section id="proyectos" className="min-h-screen flex flex-col items-center justify-center reveal-section">
            <SeccionProyectos />
          </section>
          
          <Separador />
          
          <section id="formacion" className="min-h-screen flex flex-col items-center justify-center reveal-section pb-20">
            <SeccionEducacion />
          </section>

          <footer className="w-full py-20 reveal-section border-t border-white/5 bg-transparent">
            <div className="flex flex-col items-center justify-center space-y-3 px-8 text-center uppercase tracking-[0.4em] font-mono">
              
              {/* Línea Principal */}
              <p className="text-[10px] text-gray-400 font-black">
                © {new Date().getFullYear()} <span className="text-indigo-500/80">José Antonio Cornelio Calderón</span>
              </p>

              {/* Línea de Subtítulo con separador Cyberpunk */}
              <div className="flex items-center gap-4 text-[9px] text-gray-600">
                <div className="h-[1px] w-8 bg-white/5" />
                <span>Software Engineer</span>
                <div className="h-[1px] w-8 bg-white/5" />
              </div>

              {/* Nota de Derechos */}
              <p className="text-[8px] text-gray-700 tracking-widest">
                All Systems Operational | Derechos Reservados
              </p>

            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}