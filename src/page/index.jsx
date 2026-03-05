import React, { useRef, useEffect } from 'react';
import MiCartaPerfil from '../layout/sobreMiLayout';
import SobreMiSeccion from '../components/sobreMiCarta';
import StackSection from '../components/herramientasMenu'; // <-- Importado como StackSection
import FondoAnimado from '../static/fondo';
import ExperienciaSeccion2 from '../components/experienciaSeccion2';
import SeccionProyectos from '../components/proyectoSeccion';
import SeccionEducacion from '../components/estudiosSeccion';
import Sidebar from '../layout/navbarMovil.jsx';

export default function Index() {
  const observerRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll('.reveal-section');
    
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
    
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="relative min-h-screen w-full text-indigo-100 overflow-x-hidden bg-[#030712]">
      
      <style>{`
        .reveal-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-section.active {
          opacity: 1;
          transform: translateY(0);
        }
        .fade-in-delayed {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div className="fixed inset-0 z-0 fade-in-delayed" style={{ animationDelay: '0.2s' }}>
        <FondoAnimado isActive={true} />
      </div>
      
      <Sidebar />

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen w-full">
        
        <div 
          id="encabezado" 
          className="lg:w-[30%] flex flex-col p-0 lg:fixed lg:left-0 lg:top-0 lg:h-screen z-20 animate-in fade-in slide-in-from-left duration-1000 fill-mode-forwards"
        >
          <MiCartaPerfil observerRef={observerRef} />
        </div>

        <div 
          ref={observerRef} 
          className="contenido-scroll w-full lg:w-[70%] lg:ml-[30%] px-6 lg:px-12 space-y-24 overflow-y-auto h-screen relative z-10 scroll-smooth"
        >
          <section id="sobre-mi" className="min-h-screen flex items-center justify-center reveal-section">
            <SobreMiSeccion />
          </section>

          <section id="herramientas" className="min-h-screen flex items-center justify-center reveal-section">
            <StackSection /> 
          </section>

          <section id="experiencia" className="min-h-screen flex items-center justify-center reveal-section">
            <ExperienciaSeccion2 />
          </section>

          <section id="proyectos" className="min-h-screen flex items-center justify-center reveal-section">
            <SeccionProyectos />
          </section>

          <section id="formacion" className="min-h-screen flex items-center justify-center reveal-section">
            <SeccionEducacion />
          </section>

          <footer className="text-center text-sm text-gray-500 py-10 reveal-section border-t border-white/5">
            © {new Date().getFullYear()} José Antonio Cornelio Calderón <br /> 
            <span className="text-xs opacity-60 italic">Ingeniero de Software | Intelisis Solution & Cinépolis</span>
          </footer>
        </div>
      </div>
    </div>
  );
}