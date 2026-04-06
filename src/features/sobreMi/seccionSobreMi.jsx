import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '@app/context/appContext'; 
import { sobreMiData } from '@data/sobreMi/sobreMiData';
import ItemParrafoSobreMi from '@features/sobreMi/components/itemParrafoSobreMi';
import CoreStack from '@features/sobreMi/components/coreStack';
import EncabezadoSeccion from '@shared/components/encabezadoSeccion';

// --- Variantes de Animación ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Retardo entre cada párrafo
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export default function SeccionSobreMi() {
  const { lang } = useApp();

  const t = useMemo(() => {
    return sobreMiData[lang] || sobreMiData.es;
  }, [lang]);

  if (!t) return null;

  return (
    // Agregamos max-w-7xl y mx-auto para asegurar que no se deforme
    <div className="max-w-7xl mx-auto relative font-sans w-full text-main-text mt-4 pt-0">
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
      >
        <EncabezadoSeccion 
          subtitulo={t.subtitulo} 
          tituloPrincipal={t.tituloPrincipal} 
          tituloHighlight={t.tituloHighlight}
          align="left"
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full mt-8">
        
        {/* COLUMNA IZQUIERDA: Frase y CoreStack */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="lg:col-span-5 flex flex-col space-y-12 w-full"
        >
          {/* Tarjeta de Frase Premium con Glow */}
          <div className="relative pl-8 py-2 group">
            {/* Línea vertical base */}
            <div className="absolute left-0 top-0 h-full w-[3px] bg-slate-200/50 dark:bg-slate-800/50 rounded-full overflow-hidden">
              {/* Gota de luz animada con Framer Motion */}
              <motion.div 
                className="w-full h-1/2 bg-gradient-to-b from-transparent via-blue-500 to-orange-500 rounded-full"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5, 
                  ease: "linear" 
                }}
              />
            </div>
            
            <p className="text-xl lg:text-[1.45rem] font-medium leading-relaxed italic tracking-tight opacity-90 text-slate-800 dark:text-slate-200">
              "{t.fraseCorta}"
            </p>
          </div>

          <div className="w-full">
            <CoreStack skills={t.coreStack || []} />
          </div>
        </motion.div>

        {/* COLUMNA DERECHA: Párrafos en Cascada */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 w-full"
        >
          <div className="flex flex-col space-y-8"> 
            {t.parrafos.map((p, i) => (
              <motion.div key={i} variants={fadeUpVariant}>
                <ItemParrafoSobreMi 
                  texto={p.texto} 
                  highlights={p.highlights} 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}