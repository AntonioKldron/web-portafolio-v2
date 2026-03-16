import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaInfoCircle, FaTasks } from "react-icons/fa";
import { useApp } from "../../../context/AppContext";

// Importaciones de componentes
import { MetaInfo } from "./infoMeta";
import { PuestosTimeline } from "./PuestosTimeline";
import { DeploymentRegistry } from "./DeploymentRegistry";
import { TechStackRegistry } from "./TechStackRegistry";

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
    <div className="relative pl-8 md:pl-0">
      <div className={`absolute left-[-17px] top-0 h-full w-[2px] hidden md:block 
        ${isDark ? 'bg-gradient-to-b from-indigo-500/50 via-white/5 to-transparent' : 'bg-slate-200'}`} />
      
      <div className={`group relative mb-8 transition-all duration-500 ${isOpen ? 'scale-[1.01]' : 'hover:translate-x-2'}`}>
        <div className={`absolute left-[-22px] top-8 w-3 h-3 rounded-full border-2 z-20 transition-all duration-500 hidden md:block 
          ${isOpen ? 'bg-indigo-400 shadow-[0_0_15px_#6366f1] scale-125' : 'bg-gray-700 border-white dark:border-[#0a0f1c]'}`} />

        <div onClick={toggle} className={`relative z-10 cursor-pointer overflow-hidden rounded-2xl border transition-all duration-500 backdrop-blur-xl
          ${isOpen ? (isDark ? 'bg-[#0f172a]/90 border-indigo-500/40 shadow-2xl' : 'bg-white border-indigo-200 shadow-xl') 
                   : (isDark ? 'bg-[#0a0f1c]/60 border-white/5 hover:border-indigo-500/20' : 'bg-slate-50 border-slate-200 hover:border-indigo-300')}`}>
          
          <div className="p-5 sm:p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex items-center gap-5 flex-1">
                <div className={`w-16 h-16 rounded-xl border p-2 bg-white flex items-center justify-center shrink-0`}>
                  <img src={data.logo} alt={data.empresa} className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  {/* Título: Si hay más de 1 puesto, muestra la Empresa. Si no, el puesto individual */}
                  <h3 className={`text-xl font-black italic uppercase leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {puestos.length > 1 
                      ? data.empresa 
                      : (puestos.length === 1 ? puestos[0].nombre : data.puesto)}
                  </h3>

                  {/* Subtítulo: Solo se muestra si NO hay múltiples roles para evitar repetir el nombre de la empresa */}
                  {puestos.length <= 1 && (
                    <p className={`text-[13px] font-bold uppercase tracking-widest mt-1 ${isDark ? 'text-gray-400' : 'text-indigo-600'}`}>
                      {data.empresa}
                    </p>
                  )}
                </div>
              </div>
              <MetaInfo periodo={data.periodo} ubicacion={data.ubicacion} isDark={isDark} />
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-indigo-500 hidden md:block">
                <FaChevronDown />
              </motion.div>
            </div>
            {!isOpen && (
              <motion.p className={`mt-6 md:ml-20 text-[12px] italic border-l-2 border-indigo-500/30 pl-6 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                {data.resumen_largo}
              </motion.p>
            )}
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }} 
                animate={{ height: "auto", opacity: 1 }} 
                exit={{ height: 0, opacity: 0 }} 
                className="px-6 pb-8"
              >
                <div className={`pt-8 border-t space-y-12 ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
                  {puestos.length > 0 ? (
                    <PuestosTimeline puestos={puestos} isDark={isDark} />
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                      <div className="lg:col-span-2 space-y-4">
                        <div className="text-indigo-400 text-lg">
                          <FaInfoCircle />
                        </div>
                        <p className={`text-[15px] leading-relaxed text-justify ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                          {data.descripcion}
                        </p>
                      </div>
                      <div className="lg:col-span-3 space-y-4">
                        <div className="text-indigo-400 text-lg">
                          <FaTasks />
                        </div>
                        <ul className="grid grid-cols-1 gap-4">
                          {detalles.map((detalle, i) => (
                            <li key={i} className={`flex gap-5 p-4 rounded-2xl border text-[13px] ${isDark ? 'bg-white/[0.01] border-white/5 text-gray-400' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
                              <span className="text-indigo-500 font-black">0{i+1}</span>{detalle}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {proyectos.length > 0 && (
                    <DeploymentRegistry 
                      proyectos={proyectos} 
                      visibleProjects={visibleProjects} 
                      showAll={showAllProjects} 
                      onToggle={(e) => { e.stopPropagation(); setShowAllProjects(!showAllProjects); }} 
                      isDark={isDark} 
                    />
                  )}

                  <TechStackRegistry 
                    tecnologias={tecnologias} 
                    visibleTech={visibleTech} 
                    showAll={showAllTech} 
                    onToggle={(e) => { e.stopPropagation(); setShowAllTech(!showAllTech); }} 
                    isDark={isDark} 
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};