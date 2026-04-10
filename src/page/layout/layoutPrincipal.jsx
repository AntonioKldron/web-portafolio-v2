import React from 'react';
import { motion } from 'framer-motion';

import Navigation from './navigation';
import MiCartaPerfil from '@features/perfil/miCartaPerfil';
import SeccionSobreMi from '@features/sobreMi/seccionSobreMi';
import SeccionHerramientas from '@features/herramientas/seccionHerramienta';
import ExperienciaSeccion from '@features/experiencia/seccionExperiencia';
import SeccionGitProyectos from '@features/proyectos/seccionGitProyectos';
import SeccionEducacion from '@features/educacion/seccionEducacion';
import Footer from './footer';


const SECCIONES = [
  { id: 'sobre-mi', component: <SeccionSobreMi /> },
  { id: 'herramientas', component: <SeccionHerramientas /> },
  { id: 'experiencia', component: <ExperienciaSeccion /> },
  { id: 'proyectos', component: <SeccionGitProyectos /> },
  { id: 'educacion', component: <SeccionEducacion /> },
  { id: 'footer', component: <Footer /> }
];

const LayoutPrincipal = ({ observerRef }) => {
  return (
    <div className="layout-principal-container relative flex flex-col lg:flex-row w-full max-w-full min-h-screen lg:h-screen lg:overflow-hidden overscroll-x-none bg-[var(--color-bg-card)] lg:bg-transparent">
      <div className="relative z-50">
        <Navigation />
      </div>
      <motion.aside 
        className="informational-card-container w-full lg:w-[25%] flex flex-col lg:fixed lg:left-0 lg:top-0 lg:h-screen z-20 px-4 sm:px-8 lg:px-0 bg-[var(--color-bg-card)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <MiCartaPerfil observerRef={observerRef} />
      </motion.aside>
      <main
        ref={observerRef} 
        className="custom-scrollbar lg:w-[75%] lg:ml-[25%] px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 h-auto lg:h-screen lg:overflow-y-auto scroll-smooth relative z-10 flex flex-col bg-transparent flex-grow"
      >
        {SECCIONES.map((sec) => (
          <section
            key={sec.id}
            id={sec.id}
            className="reveal-section w-full py-4" 
          >
            {sec.component}
          </section>
        ))}
      </main>
    </div>
  );
};

export default LayoutPrincipal;