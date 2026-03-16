import React from 'react';
import { motion } from 'framer-motion';

import Sidebar from '../navbarMovil.jsx'; 
import MiCartaPerfil from '../../features/perfil/miCartaPerfil.jsx';
import SeccionSobreMi from '../../features/sobreMi/seccionSobreMi.jsx';
import SeccionHerramientas from '../../features/herramientas/seccionHerramienta.jsx';
import ExperienciaSeccion from '../../features/experiencia/experienciaSeccion.jsx';
import SeccionProyectos from '../../features/proyectos/seccionProyectos.jsx';
import SeccionEducacion from '../../features/educacion/seccionEducacion.jsx';
import Footer from '../footer.jsx';

const SECCIONES = [
  { id: 'sobre-mi', component: <SeccionSobreMi /> },
  { id: 'herramientas', component: <SeccionHerramientas /> },
  { id: 'experiencia', component: <ExperienciaSeccion /> },
  { id: 'proyectos', component: <SeccionProyectos /> },
  { id: 'educacion', component: <SeccionEducacion /> },
  { id: 'footer', component: <Footer /> }
];

const LayoutPrincipal = ({ observerRef }) => {
  return (
    <div className="layout-principal-container relative flex flex-col lg:flex-row w-full min-h-screen bg-transparent">
      
      {/* Sidebar para dispositivos móviles */}
      <div className="relative z-[100]"><Sidebar /></div>

      {/* PANEL IZQUIERDO: CARTA DE PERFIL */}
      <motion.aside 
        className="informational-card-container w-full lg:w-[25%] flex flex-col lg:fixed lg:left-0 lg:top-0 lg:h-screen z-20 px-6 pr-20 lg:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <MiCartaPerfil observerRef={observerRef} />
      </motion.aside>

      {/* PANEL DERECHO: CONTENIDO PRINCIPAL */}
      <main
        ref={observerRef} 
        // Aplicamos la clase custom-scrollbar definida en el CSS
        className="custom-scrollbar lg:w-[75%] lg:ml-[25%] pl-6 pr-20 md:px-16 lg:px-20 xl:px-32 h-auto lg:h-screen lg:overflow-y-auto scroll-smooth relative z-10 flex flex-col"
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