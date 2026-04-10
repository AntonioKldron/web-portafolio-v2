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
    <div className="relative flex flex-col lg:flex-row w-full min-h-screen lg:h-screen lg:overflow-hidden bg-[var(--color-bg-card)] lg:bg-transparent">
      
      {/* Navigation siempre visible y por encima */}
      <div className="z-50">
        <Navigation />
      </div>

      <motion.aside 
        className="w-full lg:w-[25%] lg:fixed lg:h-screen z-20"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
      >
        <MiCartaPerfil observerRef={observerRef} />
      </motion.aside>

      <main
        ref={observerRef} 
        /* h-auto en móvil permite que el body detecte el scroll y anime las luces.
           lg:h-screen activa el scroll interno solo en PC. */
        className="custom-scrollbar lg:w-[75%] lg:ml-[25%] px-4 md:px-16 xl:px-32 h-auto lg:h-screen lg:overflow-y-auto scroll-smooth z-10 flex flex-col flex-grow"
      >
        {SECCIONES.map(({ id, component }) => (
          <section key={id} id={id} className="reveal-section w-full py-4">
            {component}
          </section>
        ))}
      </main>
    </div>
  );
};

export default LayoutPrincipal;