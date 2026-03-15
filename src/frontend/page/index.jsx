import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import FondoAnimado from '../static/fondo';
import SeccionEducacion from '../components/estudiosSeccion';
import Sidebar from '../layout/navbarMovil.jsx'; 
import SeccionProyectos from '../features/proyectos/seccionProyectos.jsx'
import ExperienciaSeccion from '../features/experiencia/experienciaSeccion.jsx'
import SeccionHerramientas from '../features/herramientas/seccionHerramienta.jsx'
import SeccionSobreMi from '../features/sobreMi/seccionSobreMi.jsx'
import MiCartaPerfil from '../features/perfil/miCartaPerfil.jsx'
import Footer from '../layout/footer.jsx'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)", scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const observerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800);
    
    const sections = document.querySelectorAll('.reveal-section');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.05 });

    sections.forEach(section => revealObserver.observe(section));
    return () => { clearTimeout(timer); revealObserver.disconnect(); };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-main-text bg-screen-bg selection:bg-indigo-500/30">
      
      {/* 1. FONDO PERSISTENTE (Base de la carga) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FondoAnimado isActive={true} />
        {/* Capa de atmósfera que se aclara al cargar */}
        <motion.div 
          animate={{ 
            opacity: isLoading ? 0.85 : 0,
            backdropFilter: isLoading ? "blur(12px)" : "blur(0px)"
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-slate-950/80 z-[1]"
        />
      </div>

      {/* 2. LOADER GEOMÉTRICO (Sin texto) */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            key="loader"
            exit={{ 
              opacity: 0,
              scale: 1.1,
              filter: "blur(30px)",
              transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 z-[200] flex items-center justify-center pointer-events-none"
          >
            <div className="relative">
              {/* Núcleo de luz */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-indigo-500 rounded-full blur-[60px]"
              />
              
              {/* Geometría Cinética */}
              <div className="flex gap-1.5 items-center">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scaleY: [0.5, 2.5, 0.5],
                      backgroundColor: ["#6366f1", "#a855f7", "#6366f1"],
                    }}
                    transition={{ 
                      duration: 1, 
                      repeat: Infinity, 
                      delay: i * 0.15,
                      ease: "easeInOut"
                    }}
                    className="w-1 h-8 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.6)]"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. CONTENIDO DEL SITIO */}
      {!isLoading && (
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={containerVariants} 
          className="relative z-10 flex flex-col lg:flex-row w-full bg-transparent"
        >
          <div className="relative z-[100]"><Sidebar /></div>

          {/* PANEL IZQUIERDO */}
          <motion.div 
            variants={itemVariants} 
            className="w-full lg:w-[25%] flex flex-col lg:fixed lg:left-0 lg:top-0 lg:h-screen z-20 pl-6 pr-20 lg:pr-0 lg:pl-0"
          >
            <MiCartaPerfil observerRef={observerRef} />
          </motion.div>

          {/* PANEL DERECHO */}
          <div 
            ref={observerRef} 
            className="no-scrollbar w-full lg:w-[75%] lg:ml-[25%] pl-6 pr-20 md:px-16 lg:px-20 xl:px-32 bg-card-bg lg:bg-transparent h-auto lg:h-screen lg:overflow-y-auto scroll-smooth relative z-10 flex flex-col"
          >
            <motion.section variants={itemVariants} id="sobre-mi" className="reveal-section w-full">
              <SeccionSobreMi />
            </motion.section>
            
            <motion.section variants={itemVariants} id="herramientas" className="reveal-section w-full">
              <SeccionHerramientas />
            </motion.section>
            
            <motion.section variants={itemVariants} id="experiencia" className="reveal-section w-full">
              <ExperienciaSeccion />
            </motion.section>
            
            <motion.section variants={itemVariants} id="proyectos" className="reveal-section w-full">
              <SeccionProyectos />
            </motion.section>
            
            <motion.section variants={itemVariants} id="formacion" className="reveal-section w-full">
              <SeccionEducacion />
            </motion.section>
            
            <motion.section variants={itemVariants} className="reveal-section w-full">
              <Footer />
            </motion.section>
          </div>
        </motion.div>
      )}
    </div>
  );
}