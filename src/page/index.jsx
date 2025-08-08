import React, { useRef } from 'react'; // Importa useRef
import MiCartaPerfil from '../layout/sobreMiLayout';
import MouseLightSpot from '../components/SpotlightCard'; 
import SobreMiSeccion from '../components/sobreMiCarta';
import StackSection from '../components/herramientasSeccion';
import FondoAnimado from '../static/fondo';
import ExperienciaSeccion2 from '../components/experienciaSeccion2';
import SeccionProyectos from '../components/proyectoSeccion';
import SeccionEducacion from '../components/estudiosSeccion';

export default function Index() {
  const observerRef = useRef(null); // Crea la referencia

  return (
    <div className="relative min-h-screen w-full text-indigo-100 overflow-hidden px-6">
      
      {/* Fondo siempre activo y fijo */}
      <div className="fixed inset-0 z-0">
        <FondoAnimado isActive={true} />
      </div>

      {/* Luz del mouse siempre activa */}
      <MouseLightSpot />

      <div className="relative z-10 flex flex-col lg:flex-row h-screen">
        {/* Columna izquierda */}
        <div className="lg:w-1/2 flex-shrink-0 p-4 flex items-center justify-center">
          <MiCartaPerfil observerRef={observerRef} /> {/* Pasa la referencia como prop */}
        </div>

       {/* Contenedor con scroll sin padding para que la scroll bar esté pegada al borde derecho */}
        <div ref={observerRef} className="lg:w-1/2 flex-shrink-0 overflow-y-auto space-y-8 h-screen">
          {/* Contenedor interno con padding para separar contenido del borde */}
          <div className="p-4">
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

            <footer className="text-center text-sm text-gray-400 py-4">
              © {new Date().getFullYear()} José Antonio Cornelio Calderón <br /> Todos los derechos reservados.
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}