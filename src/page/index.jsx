import React from 'react';
import MiCartaPerfil from '../layout/sobreMiLayout';
import MouseLightSpot from '../components/SpotlightCard'; 
import SobreMiSeccion from '../components/sobreMiCarta';
import StackSection from '../components/herramientasSeccion';
import FondoAnimado from '../static/fondo'
import ExperienciaSeccion from '../components/experienciaSeccion'
import SeccionProyectos from '../components/proyectoSeccion'
import SeccionEducacion from '../components/estudiosSeccion'
import ExperienciaSeccion2 from '../components/experienciaSeccion2'

export default function Index() {
  return (
    <div className="min-h-screen w-full text-indigo-100  saoverflow-hidden animated-gradient">
      <FondoAnimado isActive={true} />
      <MouseLightSpot />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex-shrink-0 overflow-visible lg:overflow-y-auto h-full lg:h-screen p-4">
          <div className="min-h-full flex items-center justify-center">
            <MiCartaPerfil />
          </div>
        </div>

        {/* Contenedor combinado para móvil / columna derecha en escritorio */}
        <div className="lg:w-1/2 flex-shrink-0 overflow-visible lg:overflow-y-auto h-fit lg:h-screen p-4 scroll-smooth space-y-8">
          
          <section id="sobre-mi" className="min-h-screen flex items-center justify-center">
            <SobreMiSeccion />
          </section>

          <section id="herramientas" className="min-h-screen flex items-center justify-center">
            <StackSection />
          </section>

          <section id="experiencia" className="min-h-screen flex items-center justify-center">
            <ExperienciaSeccion2 />
          </section>

          <section id="proyectos" className="min-h-screen flex items-center justify-center">
            <SeccionProyectos />
            
          </section>
          <section id="formacion" className="min-h-screen flex items-center justify-center">
            <SeccionEducacion />
          </section>

          {/* Footer siempre visible al fondo */}
          <footer className="text-center text-sm text-gray-400 py-4">
            © {new Date().getFullYear()} José Antonio Cornelio Calderón <br /> Todos los derechos reservados.
          </footer>
        </div>
      </div>
    </div>
  );
}
