import React, { useRef, useEffect } from 'react';
import FondoAnimado from '../static/fondo';
import ExperienciaSeccion2 from '../components/experienciaSeccion2'; 
import SeccionProyectos from '../components/proyectoSeccion';
import SeccionEducacion from '../components/estudiosSeccion';
import Sidebar from '../layout/navbarMovil.jsx'; 
/**/ 
import ExperienciaSeccion from '../features/experiencia/ExperienciaSeccion.jsx'
import SeccionHerramientas from '../features/herramientas/seccionHerramienta.jsx'
import SeccionSobreMi from '../features/sobreMi/seccionSobreMi.jsx'
import MiCartaPerfil from '../features/perfil/miCartaPerfil.jsx'
import Footer from '../layout/footer.jsx'

export default function Index() {
  const observerRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll('.reveal-section');
    
    // Observer para las animaciones de aparición (Fade In)
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.05 });

    sections.forEach(section => revealObserver.observe(section));
    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-main-text bg-screen-bg transition-colors duration-500">
      <style>{`
        /* Animación suave sin saltos de espacio */
        .reveal-section { 
          opacity: 0; 
          transform: translateY(10px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          margin: 0 !important;
          padding: 0 !important;
        }
        .reveal-section.active { 
          opacity: 1; 
          transform: translateY(0);
        }
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
            Pasamos el observerRef para que la barra azul sepa dónde mirar
        */}
        <div className="w-full lg:w-[25%] flex flex-col lg:fixed lg:left-0 lg:top-0 lg:h-screen z-20 pl-6 pr-20 lg:pr-0 lg:pl-0">
          <MiCartaPerfil observerRef={observerRef} />
        </div>

        {/* 3. PANEL DERECHO - FLUJO CONTINUO 
            IMPORTANTE: lg:h-screen y lg:overflow-y-auto son vitales para que el Nav funcione
        */}
        <div 
          ref={observerRef} 
          className="no-scrollbar w-full lg:w-[75%] lg:ml-[25%] pl-6 pr-20 md:px-16 lg:px-20 xl:px-32 bg-card-bg lg:bg-transparent h-auto lg:h-screen lg:overflow-y-auto scroll-smooth relative z-10 flex flex-col"
        >
          <section id="sobre-mi" className="reveal-section w-full">
            <SeccionSobreMi />
          </section>
          
          <section id="herramientas" className="reveal-section w-full">
            <SeccionHerramientas />
          </section>
          
          <section id="experiencia" className="reveal-section w-full">
            <ExperienciaSeccion />
          </section>
          
          <section id="proyectos" className="reveal-section w-full">
            <SeccionProyectos />
          </section>
          
          <section id="formacion" className="reveal-section w-full">
            <SeccionEducacion />
          </section>
          
          <section  className="reveal-section w-full">
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
}