import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaChevronDown, FaTerminal, FaCode, FaGithub, 
  FaPlus, FaMinus, FaCalendarAlt, FaMapMarkerAlt 
} from "react-icons/fa";

export default function ExperienciaUnidad({ data, isOpen, toggle }) {
  const [showAllTech, setShowAllTech] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Estandarización de límites visuales
  const visibleTech = showAllTech ? data.tecnologias : data.tecnologias.slice(0, 5);
  const visibleProjects = showAllProjects ? data.proyectos : data.proyectos.slice(0, 3);

  return (
    <div className="relative pl-8 md:pl-0">
      {/* Línea de tiempo industrial */}
      <div className="absolute left-[-17px] top-0 h-full w-[2px] bg-gradient-to-b from-indigo-500/50 via-white/5 to-transparent hidden md:block" />
      
      <div className={`group relative mb-8 transition-all duration-500 ${isOpen ? 'scale-[1.01]' : 'hover:translate-x-2'}`}>
        {/* Nodo de estado */}
        <div className={`absolute left-[-22px] top-8 w-3 h-3 rounded-full border-2 border-[#0a0f1c] z-20 transition-all duration-500 hidden md:block ${isOpen ? 'bg-indigo-400 shadow-[0_0_15px_rgba(99,102,241,1)] scale-125' : 'bg-gray-700'}`} />

        <div 
          onClick={toggle}
          className={`relative z-10 cursor-pointer overflow-hidden rounded-2xl border transition-all duration-500 
            ${isOpen ? 'bg-[#0f172a]/90 border-indigo-500/40 shadow-[0_0_30px_rgba(99,102,241,0.1)]' : 'bg-[#0a0f1c]/60 border-white/5 hover:border-indigo-500/20'} backdrop-blur-xl`}
        >
          <div className="p-5 sm:p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              
              <div className="flex items-center gap-5 flex-1">
                <div className="relative w-16 h-16 rounded-xl bg-white/5 border border-white/10 p-2.5 flex items-center justify-center shrink-0 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                  <img 
                    src={data.logo} 
                    alt={data.empresa} 
                    className={`w-full h-full object-contain transition-all duration-500 ${isOpen ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`} 
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  {/* INVERSIÓN DE TÍTULOS: Primero Trayectoria, luego Empresa */}
                  <h3 className="text-xl font-black tracking-tighter text-white group-hover:text-indigo-400 transition-colors uppercase leading-none italic">
                    {data.puestos ? "Trayectoria Profesional" : data.puesto}
                  </h3>
                  <p className="text-[13px] font-bold text-gray-400 uppercase tracking-widest opacity-70">
                    {data.puestos ? data.empresa : data.empresa}
                  </p>
                </div>
              </div>

              {/* Metadatos alineados */}
              <div className="flex flex-col items-start md:items-end justify-center min-w-[210px] space-y-2">
                <div className="flex items-center gap-3 text-[11px] font-black text-indigo-400 uppercase tracking-[0.2em] bg-indigo-500/10 px-4 py-2 rounded-lg border border-indigo-500/20 w-full md:w-auto justify-center">
                  <FaCalendarAlt className="opacity-70 text-[10px]" />
                  {data.periodo}
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] w-full md:w-auto justify-center md:justify-end pr-1">
                  <FaMapMarkerAlt className="text-indigo-500/40 text-[11px]" />
                  {data.ubicacion}
                </div>
              </div>

              <motion.div 
                animate={{ rotate: isOpen ? 180 : 0 }} 
                className="hidden md:flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 text-indigo-500 border border-white/5"
              >
                <FaChevronDown />
              </motion.div>
            </div>

            {!isOpen && (
              <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="mt-6 md:ml-20">
                <p className="text-[12px] text-gray-400 leading-relaxed italic border-l-2 border-indigo-500/30 pl-6 py-1 font-medium max-w-5xl">
                  {data.resumen_largo}
                </p>
              </motion.div>
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
                <div className="pt-8 border-t border-white/5 space-y-12">
                  
                  {/* Contenido de Puestos (Multi-puesto vs Único) */}
                  <div className="space-y-10">
                    {data.puestos ? (
                      data.puestos.map((p, idx) => (
                        <div key={idx} className="relative pl-8 space-y-4">
                          <div className="absolute left-0 top-0 h-full w-[1px] bg-indigo-500/20" />
                          <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            <h4 className="text-md font-black text-indigo-400 uppercase italic tracking-tight">{p.nombre}</h4>
                            <span className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">{p.fecha}</span>
                          </div>
                          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                            <div className="lg:col-span-2"><p className="text-sm text-gray-300 leading-relaxed text-justify">{p.descripcion}</p></div>
                            <div className="lg:col-span-3">
                              <ul className="grid grid-cols-1 gap-2">
                                {p.detalles.map((det, i) => (
                                  <li key={i} className="flex gap-3 p-4 rounded-2xl bg-white/[0.01] border border-white/5 text-[13px] text-gray-400 hover:bg-white/[0.03] transition-all">
                                    <span className="text-indigo-500 font-mono font-black text-xs mt-0.5">»</span>{det}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-2 space-y-4">
                          <p className="text-[10px] font-black text-indigo-400/80 uppercase tracking-[0.4em]">Operaciones</p>
                          <p className="text-[15px] text-gray-300 leading-relaxed text-justify font-medium">{data.descripcion}</p>
                        </div>
                        <div className="lg:col-span-3 space-y-4">
                          <p className="text-[10px] font-black text-indigo-400/80 uppercase tracking-[0.4em]">Logs de Impacto</p>
                          <ul className="grid grid-cols-1 gap-4">
                            {data.detalles.map((detalle, i) => (
                              <li key={i} className="flex gap-5 p-4 rounded-2xl bg-white/[0.01] border border-white/5 text-[13px] text-gray-400 hover:bg-white/[0.03] transition-all">
                                <span className="text-indigo-500 font-mono font-black text-xs mt-0.5">0{i+1}</span>{detalle}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Deployment Registry (Proyectos con repositorios) */}
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                      <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em]">Deployment Registry</p>
                      {data.proyectos.length > 3 && (
                        <button onClick={(e) => { e.stopPropagation(); setShowAllProjects(!showAllProjects); }} className="text-[10px] font-black text-indigo-400 hover:text-white uppercase flex items-center gap-2 bg-indigo-500/10 px-4 py-2 rounded-lg border border-indigo-500/20 transition-all">
                          {showAllProjects ? <><FaMinus /> Minimizar</> : <><FaPlus /> Ver Todo ({data.proyectos.length})</>}
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {visibleProjects.map((pro, i) => (
                        <div key={i} className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/5 hover:border-indigo-500/40 transition-all flex flex-col h-full shadow-2xl group/card">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400"><FaTerminal size={12} /></div>
                              <h4 className="text-[12px] font-black text-white uppercase italic tracking-tight">{pro.nombre}</h4>
                            </div>
                            <a href={pro.repositorio} target="_blank" rel="noreferrer" className="p-2 text-gray-500 hover:text-indigo-400 transition-colors"><FaGithub size={18} /></a>
                          </div>
                          <p className="text-[11px] text-gray-400 leading-relaxed mb-6 italic flex-grow">{pro.descripcion}</p>
                          <div className="flex flex-wrap gap-1.5 mt-auto">
                            {pro.tecnologias.map((t, idx) => (
                              <span key={idx} className="text-[8px] px-2 py-1 rounded-md bg-white/5 text-gray-500 border border-white/10 font-mono uppercase">[{t}]</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Unidad de Herramientas (Límite de 5 con expansión) */}
                  <div className="space-y-4 pt-4">
                    <p className="text-[10px] font-black text-indigo-400/70 uppercase tracking-[0.4em]">Unidad de Herramientas</p>
                    <div className="flex flex-wrap gap-3">
                      {visibleTech.map((tech, i) => (
                        <div key={i} className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-xl border border-white/5 group/t hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all">
                          <span className="text-2xl text-gray-400 group-hover/t:text-indigo-400 transition-all w-7 h-7 flex items-center justify-center">{tech.icon}</span>
                          <span className="text-[11px] font-bold text-gray-500 group-hover/t:text-white uppercase tracking-widest">{tech.name}</span>
                        </div>
                      ))}
                      {data.tecnologias.length > 5 && (
                        <button 
                          onClick={(e) => { e.stopPropagation(); setShowAllTech(!showAllTech); }}
                          className="px-4 py-2 text-[10px] font-black text-indigo-400 bg-indigo-500/5 rounded-xl border border-indigo-500/20 hover:bg-indigo-500/10 transition-all uppercase"
                        >
                          {showAllTech ? "Contraer" : `+${data.tecnologias.length - 5} Herramientas`}
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}