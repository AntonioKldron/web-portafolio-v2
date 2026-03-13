import React, { useRef, useEffect } from 'react';
import FondoAnimado from '../static/fondo';
import ExperienciaSeccion2 from '../components/experienciaSeccion2'; // <--- Nombre importado
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
        
        {/* 2. PANEL IZQUIERDO (CARTA) */}
        <div className="w-full lg:w-[25%] flex flex-col lg:fixed lg:left-0 lg:top-0 lg:h-screen z-20">
          <MiCartaPerfil observerRef={observerRef} />
        </div>

        {/* 3. PANEL DERECHO - FLUJO CONTINUO */}
        <div 
          ref={observerRef} 
          className="no-scrollbar w-full lg:w-[75%] lg:ml-[25%] px-8 md:px-16 lg:px-20 xl:px-32 bg-card-bg lg:bg-transparent h-auto lg:h-screen lg:overflow-y-auto scroll-smooth relative z-10"
        >
          <div className="h-8 lg:hidden" />

          <section id="sobre-mi" className="h-auto reveal-section py-12 lg:py-20">
            <SeccionSobreMi />
          </section>
          
          <section id="herramientas" className="h-auto reveal-section py-12 lg:py-20">
            <SeccionHerramientas />
          </section>
          
          {/* CORRECCIÓN AQUÍ: Usamos el nombre ExperienciaSeccion2 */}
          <section id="experiencia" className="h-auto reveal-section py-12 lg:py-20">
            <ExperienciaSeccion2 />
          </section>
          
          <section id="proyectos" className="h-auto reveal-section py-12 lg:py-20">
            <SeccionProyectos />
          </section>
          
          <section id="formacion" className="h-auto reveal-section py-12 lg:py-20">
            <SeccionEducacion />
          </section>
          
          {/* FOOTER PREMIUM */}
          <footer className="w-full pt-20 pb-16 flex flex-col items-center gap-6 relative overflow-hidden group">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
            <div className="flex flex-col items-center gap-4 relative z-10 text-center">
              <p className="text-[11px] md:text-[13px] tracking-[0.5em] font-mono text-white uppercase leading-relaxed">
                <span className="font-black drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">José Antonio Cornelio Calderón</span>
              </p>
              <p className="text-[9px] tracking-[0.4em] font-mono text-white/80 uppercase flex flex-wrap justify-center gap-2">
                <span>© {new Date().getFullYear()}</span>
                <span className="text-purple-500 font-bold">//</span>
                <span>Todos los derechos reservados</span>
                <span className="text-purple-500 font-bold">//</span>
                <span className="font-bold text-purple-400">Software Engineer</span>
              </p>
            </div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-2xl h-32 bg-purple-900/20 blur-[120px] pointer-events-none" />
          </footer>

        </div>
      </div>
    </div>
  );
}