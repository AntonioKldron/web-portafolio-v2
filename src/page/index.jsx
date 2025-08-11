import React, { useRef, useState } from 'react';
import MiCartaPerfil from '../layout/sobreMiLayout';
import MouseLightSpot from '../components/SpotlightCard'; 
import SobreMiSeccion from '../components/sobreMiCarta';
import StackSection from '../components/herramientasSeccion';
import FondoAnimado from '../static/fondo';
import ExperienciaSeccion2 from '../components/experienciaSeccion2';
import SeccionProyectos from '../components/proyectoSeccion';
import SeccionEducacion from '../components/estudiosSeccion';
import Sidebar from '../layout/navbarMovil.jsx'

export default function Index() {
  const observerRef = useRef(null);

  return (
    <div className="relative min-h-screen w-full text-indigo-100 overflow-hidden px-[60px] lg:px-5">
      <div className="fixed inset-0 z-0">
        <FondoAnimado isActive={true} />
      </div>
        <Sidebar />

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        <div id="encabezado" className="lg:w-1/2 p-4 flex flex-col items-center justify-center lg:items-end lg:justify-center lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:pr-10">
          <MiCartaPerfil observerRef={observerRef} />
        </div>

        <div ref={observerRef} className="contenido-scroll lg:w-1/2 lg:ml-auto p-4 space-y-8 overflow-y-auto">
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
  );
}