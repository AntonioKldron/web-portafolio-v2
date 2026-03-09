import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaGithub, FaExternalLinkAlt, FaExpandAlt, FaCode, FaTerminal } from 'react-icons/fa';

export default function ProyectoCarta({ data, isOpen, toggle, abrirModal }) {
  if (!data) return null;

  return (
    <div className={`w-full max-w-7xl mx-auto border transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden rounded-[1.5rem]
      ${isOpen 
        ? 'bg-[#0f172a] border-indigo-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] translate-y-[-4px]' 
        : 'bg-[#0a0f1c] border-white/10 hover:border-indigo-500/50 hover:bg-[#0d1324]'
      } group`}>
      
      {/* CABECERA: COLOR SÓLIDO Y DISEÑO LIMPIO */}
      <div 
        onClick={toggle} 
        className="w-full p-6 sm:p-8 cursor-pointer select-none relative"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
          <div className="flex items-center gap-8 flex-1">
            
            {/* INSPECTOR DE IMAGEN (Gatillo Modal) */}
            <div 
              className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-2xl bg-[#030712] border-2 border-white/5 p-1 flex items-center justify-center shrink-0 overflow-hidden group/img transition-all duration-500 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
              onClick={(e) => { e.stopPropagation(); abrirModal(); }}
            >
              <img src={data.imagen} alt={data.titulo} className="w-full h-full object-cover rounded-xl opacity-60 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all duration-700" />
              
              {/* Overlay de Inspección Táctica */}
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover/img:opacity-100 transition-all duration-300 flex flex-col items-center justify-center backdrop-blur-[1px]">
                <FaExpandAlt size={18} className="text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                <span className="text-[7px] font-mono text-white tracking-[0.3em] font-black bg-indigo-600 px-2 py-0.5 rounded">VIEW_ASSETS</span>
              </div>
              
              {/* Marco de Escaneo esquinas */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-indigo-400 opacity-0 group-hover/img:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-indigo-400 opacity-0 group-hover/img:opacity-100 transition-opacity" />
            </div>
            
            <div className="flex flex-col space-y-3 flex-1">
              <div className="flex items-center gap-3">
                <h3 className={`text-2xl lg:text-3xl font-black tracking-tighter uppercase leading-none italic transition-colors duration-500 ${isOpen ? 'text-indigo-400' : 'text-white'}`}>
                  {data.titulo}
                </h3>
                {isOpen && (
                  <span className="hidden sm:block text-[8px] font-mono bg-indigo-500 text-white px-2 py-0.5 rounded animate-pulse">
                    SYSTEM_LINK_ACTIVE
                  </span>
                )}
              </div>

              <p className="text-[14px] lg:text-[15px] text-gray-400 leading-relaxed font-light line-clamp-2 md:line-clamp-1 max-w-4xl">
                {data.descripcion_corta}
              </p>

              <div className="flex items-center gap-5 pt-1">
                <div className="flex items-center gap-2 bg-[#030712] px-3 py-1 rounded-md border border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                  <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">
                    DEPLOYED_{data.lanzamiento}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            animate={{ rotate: isOpen ? 180 : 0 }} 
            className={`p-3 rounded-xl border-2 transition-all duration-500 ${isOpen ? 'bg-indigo-500 border-indigo-400 text-white' : 'bg-transparent border-white/10 text-gray-500 group-hover:border-indigo-500/50'}`}
          >
            <FaChevronDown size={16} />
          </motion.div>
        </div>
      </div>

      {/* ÁREA DE DATOS TÉCNICOS (Solo Abierta) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            className="px-8 sm:px-12 pb-12 bg-[#0d1324] border-t border-white/5"
          >
            <div className="pt-10 space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Lógica de Negocio */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-indigo-400">
                    <FaCode size={14} />
                    <p className="text-[10px] font-black uppercase tracking-[0.4em]">Arquitectura & Propósito</p>
                  </div>
                  <p className="text-[15px] text-gray-300 leading-relaxed text-justify font-medium">
                    {data.descripcion}
                  </p>
                </div>

                {/* Logs Operativos */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-indigo-400">
                    <FaTerminal size={14} />
                    <p className="text-[10px] font-black uppercase tracking-[0.4em]">Módulos del Sistema</p>
                  </div>
                  <ul className="space-y-3">
                    {data.detalles.map((det, i) => (
                      <li key={i} className="flex gap-4 text-[13px] text-gray-400 bg-[#030712] p-3 border border-white/5 rounded-lg">
                        <span className="text-indigo-500 font-mono font-black">{i + 1}.</span>
                        <span className="font-light tracking-wide">{det}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FOOTER DE ACCIONES */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5">
                <div className="flex gap-4 w-full md:w-auto">
                  {data.urlSitio && (
                    <a href={data.urlSitio} target="_blank" className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-3 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
                      <FaExternalLinkAlt size={10} /> Live Build
                    </a>
                  )}
                  <a href={data.urlRepositorio} target="_blank" className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-3 bg-white/5 text-white rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-all active:scale-95">
                    <FaGithub size={12} /> Registry
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {data.tecnologias.map((tech, i) => (
                    <span key={i} className="flex items-center gap-2 px-4 py-2 bg-[#030712] rounded-lg border border-white/5 text-[9px] font-black text-gray-500 uppercase tracking-tighter hover:text-white transition-colors">
                      <span className="text-indigo-400 text-sm">{tech.icon}</span> {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}