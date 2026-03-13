import React, { useRef, useEffect } from 'react';
import FondoAnimado from '../static/fondo';
import ExperienciaSeccion2 from '../components/experienciaSeccion2'; 
import SeccionProyectos from '../components/proyectoSeccion';
import SeccionEducacion from '../components/estudiosSeccion';
import Sidebar from '../layout/navbarMovil.jsx'; 
import SeccionHerramientas from '../features/herramientas/seccionHerramienta.jsx'
import SeccionSobreMi from '../features/sobreMi/seccionSobreMi.jsx'
import MiCartaPerfil from '../features/perfil/miCartaPerfil.jsx'
import Footer from '../layout/footer.jsx'

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
    <div className="relative min-h-screen w-full overflow-x-hidden text-main-text bg-screen-bg transition-colors duration-500">
      <style>{`
        .reveal-section { opacity: 0; transform: translateY(20px); transition: all 0.8s ease-out; }
        .reveal-section.active { opacity: 1; transform: translateY(0); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* 1. FONDOS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="hidden lg:block h-full w-full">
          <FondoAnimado isActive={true} />
        </div>
        <div className="block lg:hidden h-full w-full bg-card-bg" />
      </div>
      
      <div className="relative z-[100]">
        <Sidebar />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row w-full bg-transparent">
        
        {/* 2. PANEL IZQUIERDO (CARTA) 
            pr-20: Sincronizado con el panel derecho para no chocar con el Sidebar
        */}
        <div className="w-full lg:w-[25%] flex flex-col lg:fixed lg:left-0 lg:top-0 lg:h-screen z-20 pl-6 pr-20 lg:pr-0 lg:pl-0">
          <MiCartaPerfil observerRef={observerRef} />
        </div>

        {/* 3. PANEL DERECHO - FLUJO CONTINUO 
            pl-6: Margen mínimo izquierdo
            pr-20: Espacio considerable para el Sidebar móvil
        */}
        <div 
          ref={observerRef} 
          className="no-scrollbar w-full lg:w-[75%] lg:ml-[25%] pl-6 pr-20 md:px-16 lg:px-20 xl:px-32 bg-card-bg lg:bg-transparent h-auto lg:h-screen lg:overflow-y-auto scroll-smooth relative z-10"
        >
          <div className="h-8 lg:hidden" />

          <section id="sobre-mi" className="h-auto reveal-section py-12 lg:py-20">
            <SeccionSobreMi />
          </section>
          
          <section id="herramientas" className="h-auto reveal-section py-12 lg:py-20">
            <SeccionHerramientas />
          </section>
          
          <section id="experiencia" className="h-auto reveal-section py-12 lg:py-20">
            <ExperienciaSeccion2 />
          </section>
          
          <section id="proyectos" className="h-auto reveal-section py-12 lg:py-20">
            <SeccionProyectos />
          </section>
          
          <section id="formacion" className="h-auto reveal-section py-12 lg:py-20">
            <SeccionEducacion />
          </section>
          
          <Footer />

        </div>
      </div>
    </div>
  );
}