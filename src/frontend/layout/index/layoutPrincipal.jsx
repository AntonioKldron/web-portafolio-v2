import React from 'react';
import { motion } from 'framer-motion';

// Importamos el nuevo navbar móvil
import Navigation from '../navigation.jsx'; 
import MiCartaPerfil from '../../features/perfil/miCartaPerfil.jsx';
import SeccionSobreMi from '../../features/sobreMi/seccionSobreMi.jsx';
import SeccionHerramientas from '../../features/herramientas/seccionHerramienta.jsx';
import ExperienciaSeccion from '../../features/experiencia/seccionExperiencia.jsx';
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
    <div className="layout-principal-container relative flex flex-col lg:flex-row w-full min-h-screen bg-transparent overflow-x-hidden">
      
      <Navigation />

      {/* PANEL IZQUIERDO: CARTA DE PERFIL */}
      {/* Eliminamos el 'pr-20' que te robaba espacio en móvil. Ahora usa 'px-4' (padding simétrico en móvil) */}
      <motion.aside 
        className="informational-card-container w-full lg:w-[25%] flex flex-col lg:fixed lg:left-0 lg:top-0 lg:h-screen z-20 px-4 sm:px-8 lg:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <MiCartaPerfil observerRef={observerRef} />
      </motion.aside>

      {/* PANEL DERECHO: CONTENIDO PRINCIPAL */}
      {/* Reemplazamos 'pl-6 pr-20' por 'px-4 sm:px-8' para que ocupe todo el ancho en celulares sin salirse */}
      <main
        ref={observerRef} 
        className="custom-scrollbar lg:w-[75%] lg:ml-[25%] px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 h-auto lg:h-screen lg:overflow-y-auto scroll-smooth relative z-10 flex flex-col"
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