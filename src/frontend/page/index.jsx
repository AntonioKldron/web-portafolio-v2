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

  // DETECTAR MÓVIL PARA ELIMINAR FONDO Y AJUSTAR COMPORTAMIENTO
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const sections = document.querySelectorAll('.reveal-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });

    sections.forEach(section => observer.observe(section));
    
    return () => {
      window.removeEventListener('resize', handleResize);
      sections.forEach(section => observer.unobserve(section));
    };
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

      {/* FONDO PERSONALIZADO: Solo aparece si NO es móvil */}
      {!isMobile && (
        <div className="fixed inset-0 z-0 fade-in-delayed" style={{ animationDelay: '0.2s' }}>
          <FondoAnimado isActive={true} />
        </div>
      )}
      
      <Sidebar />

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen w-full">
        
        {/* CARTA DE PERFIL: 25% para mejor ajuste a zoom 100% */}
        <div 
          id="encabezado" 
          className="w-full lg:w-[25%] flex flex-col p-0 lg:fixed lg:left-0 lg:top-0 lg:h-screen z-20"
        >
          <MiCartaPerfil observerRef={observerRef} />
        </div>

        {/* CONTENIDO PRINCIPAL: 75% con MARGEN DERECHO (pr-20) para el Sidebar */}
        <div 
          ref={observerRef} 
          className="w-full lg:w-[75%] lg:ml-[25%] pl-6 pr-20 md:pl-12 md:pr-24 lg:px-20 space-y-24 lg:h-screen lg:overflow-y-auto scroll-smooth relative z-10"
        >
          <section id="sobre-mi" className="min-h-screen flex items-center justify-center reveal-section pt-10 lg:pt-0">
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

          <section id="formacion" className="min-h-screen flex items-center justify-center reveal-section pb-20">
            <SeccionEducacion />
          </section>

          <footer className="text-center text-sm text-gray-500 py-10 reveal-section border-t border-white/5 pr-8">
            © {new Date().getFullYear()} José Antonio Cornelio Calderón <br /> 
            <span className="text-xs opacity-60 italic uppercase tracking-widest font-mono">
              Ingeniero de Software | Intelisis & Cinépolis
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}