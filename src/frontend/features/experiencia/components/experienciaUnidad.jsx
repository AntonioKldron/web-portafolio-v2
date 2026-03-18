import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaInfoCircle, FaTasks } from "react-icons/fa";
import { useApp } from "../../../context/AppContext";

// Importaciones de tus otros componentes
import { MetaInfo } from "./infoMeta";
import { PuestosTimeline } from "./timeLinePuestos";
import { DeploymentRegistry } from "./registryDeployment";
import { TechStackRegistry } from "./stackTechRegistry";

// --- VARIANTES DE ANIMACIÓN ---
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } 
};

const detailsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, staggerChildren: 0.08, delayChildren: 0.05 }
  },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export const ExperienciaUnidad = ({ data, isOpen, toggle }) => {
  const { isDark } = useApp();
  const [showAllTech, setShowAllTech] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  if (!data) return null;

  const tecnologias = data.tecnologias ?? [];
  const proyectos = data.proyectos ?? [];
  const detalles = data.detalles ?? [];
  const puestos = data.puestos ?? [];

  const visibleTech = showAllTech ? tecnologias : tecnologias.slice(0, 5);
  const visibleProjects = showAllProjects ? proyectos : proyectos.slice(0, 3);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="relative pl-6 md:pl-0 w-full"
    >
      {/* LÍNEA DE TIEMPO (Fondo) */}
      <div className={`absolute left-[-17px] top-0 h-full w-[2px] hidden md:block 
        ${isDark ? 'bg-gradient-to-b from-indigo-500/30 via-indigo-500/5 to-transparent' : 'bg-gradient-to-b from-indigo-200 to-transparent'}`} />
      
      <div className="group relative mb-8 w-full">
        
        {/* PUNTO DE LÍNEA DE TIEMPO ANIMADO */}
        <div className={`absolute left-[-21px] top-8 w-2.5 h-2.5 rounded-full z-20 transition-all duration-500 hidden md:block 
          ${isOpen 
            ? 'bg-indigo-400 shadow-[0_0_12px_#6366f1] scale-150 border-none' 
            : 'bg-slate-300 dark:bg-slate-700 border border-white dark:border-[#0f172a] group-hover:bg-indigo-400 group-hover:border-indigo-400'}`} 
        />
        {isOpen && (
          <div className="absolute left-[-21px] top-8 w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping opacity-40 hidden md:block" />
        )}

        {/* TARJETA PRINCIPAL */}
        <motion.div 
          layout
          onClick={toggle} 
          className={`relative z-10 cursor-pointer overflow-hidden rounded-2xl border transition-all duration-500
          ${isOpen 
            ? (isDark ? 'bg-[#0b101a]/95 border-indigo-500/30 shadow-2xl backdrop-blur-xl' : 'bg-white border-indigo-200 shadow-xl shadow-indigo-100/40') 
            : (isDark ? 'bg-[#0f1423]/70 border-white/5 hover:border-white/10 backdrop-blur-md hover:bg-[#13192b]' : 'bg-slate-50/80 border-slate-200 hover:border-slate-300 hover:bg-white shadow-sm')}`}
        >
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none
            ${isDark ? 'bg-gradient-to-br from-indigo-500/[0.03] to-purple-500/[0.03]' : 'bg-gradient-to-br from-indigo-500/[0.01] to-purple-500/[0.01]'}`} />

          <div className="p-5 sm:p-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
              
              <div className="flex items-start md:items-center gap-4 flex-1 min-w-0">
                {/* LOGO: Ahora SIEMPRE con fondo blanco (bg-white) sin importar el modo oscuro */}
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border p-2 flex items-center justify-center shrink-0 transition-colors bg-white border-slate-200 shadow-sm"
                >
                  <img src={data.logo} alt={data.empresa} className="w-full h-full object-contain" />
                </motion.div>

                {/* Títulos */}
                <div className="flex flex-col flex-1 min-w-0 justify-center">
                  <motion.h3 layout className={`text-lg sm:text-xl md:text-[22px] font-black italic uppercase leading-tight break-words text-wrap tracking-tight
                    ${isDark ? 'text-white' : 'text-slate-900'}
                    ${isOpen ? 'text-indigo-500 dark:text-indigo-400' : ''}`}>
                    {puestos.length > 1 
                      ? data.empresa 
                      : (puestos.length === 1 ? puestos[0].nombre : data.puesto)}
                  </motion.h3>

                  {puestos.length <= 1 && (
                    <p className={`text-[11px] sm:text-[12px] font-bold uppercase tracking-widest mt-0.5 break-words
                      ${isDark ? 'text-slate-400' : 'text-indigo-600/80'}`}>
                      {data.empresa}
                    </p>
                  )}
                </div>
              </div>

              {/* Contenedor MetaInfo + Botón */}
              <div className="flex items-center justify-between w-full md:w-auto border-t md:border-none border-white/5 pt-4 md:pt-0 gap-4 shrink-0">
                <MetaInfo periodo={data.periodo} ubicacion={data.ubicacion} isDark={isDark} />
                
                <motion.div 
                  animate={{ rotate: isOpen ? 180 : 0 }} 
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300
                    ${isOpen 
                      ? 'bg-indigo-500 text-white shadow-md' 
                      : (isDark ? 'bg-white/5 text-slate-400 group-hover:bg-white/10 group-hover:text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600')}`}
                >
                  <FaChevronDown size={12} />
                </motion.div>
              </div>
            </div>

            {/* RESUMEN MODO CERRADO */}
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 md:mt-4 md:ml-[4.5rem] overflow-hidden"
                >
                  <p className={`text-[13.5px] border-l-[1.5px] pl-4 py-0.5 text-justify leading-relaxed break-words
                    ${isDark ? 'border-white/10 text-slate-400/90' : 'border-indigo-100 text-slate-600'}`}>
                    {data.resumen_largo}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CONTENIDO EXPANDIDO */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }} 
                animate={{ height: "auto", opacity: 1 }} 
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`overflow-hidden border-t ${isDark ? 'bg-white/[0.01] border-white/5' : 'bg-slate-50/50 border-slate-100'}`}
              >
                <motion.div 
                  variants={detailsVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="px-5 sm:px-6 pb-6 sm:pb-8 pt-6 space-y-10 sm:space-y-12"
                >
                  
                  <motion.div variants={itemVariants}>
                    {puestos.length > 0 ? (
                      <PuestosTimeline puestos={puestos} isDark={isDark} />
                    ) : (
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                        
                        {/* Columna 1: Descripción */}
                        <div className="lg:col-span-5 space-y-3">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center
                              ${isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
                              <FaInfoCircle size={14} />
                            </div>
                            <h4 className={`font-bold text-xs uppercase tracking-widest ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>Rol & Visión</h4>
                          </div>
                          <p className={`text-[13.5px] leading-relaxed text-justify break-words
                            ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            {data.descripcion}
                          </p>
                        </div>
                        
                        {/* Columna 2: Tareas/Logros */}
                        <div className="lg:col-span-7 space-y-3">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center
                              ${isDark ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
                              <FaTasks size={14} />
                            </div>
                            <h4 className={`font-bold text-xs uppercase tracking-widest ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>Logros Clave</h4>
                          </div>
                          <ul className="grid grid-cols-1 gap-2.5">
                            {detalles.map((detalle, i) => (
                              <motion.li 
                                variants={itemVariants}
                                whileHover={{ scale: 1.005, x: 3 }}
                                key={i} 
                                className={`flex gap-3.5 p-3.5 rounded-xl border text-[13.5px] text-justify leading-relaxed transition-all
                                  ${isDark ? 'bg-white/[0.02] border-white/5 text-slate-300 hover:border-indigo-500/30' : 'bg-white border-slate-200 text-slate-600 shadow-sm hover:border-indigo-300'}`}
                              >
                                <span className={`font-black shrink-0 ${isDark ? 'text-indigo-500/70' : 'text-indigo-400'}`}>
                                  {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="break-words">{detalle}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    )}
                  </motion.div>

                  {/* Componentes Internos */}
                  <div className={`pt-8 border-t space-y-10 ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
                    {proyectos.length > 0 && (
                      <motion.div variants={itemVariants}>
                        <DeploymentRegistry 
                          proyectos={proyectos} 
                          visibleProjects={visibleProjects} 
                          showAll={showAllProjects} 
                          onToggle={(e) => { e.stopPropagation(); setShowAllProjects(!showAllProjects); }} 
                          isDark={isDark} 
                        />
                      </motion.div>
                    )}

                    <motion.div variants={itemVariants}>
                      <TechStackRegistry 
                        tecnologias={tecnologias} 
                        visibleTech={visibleTech} 
                        showAll={showAllTech} 
                        onToggle={(e) => { e.stopPropagation(); setShowAllTech(!showAllTech); }} 
                        isDark={isDark} 
                      />
                    </motion.div>
                  </div>

                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};