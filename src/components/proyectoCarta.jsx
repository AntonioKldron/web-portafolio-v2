import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaGithub, FaExternalLinkAlt, FaExpandAlt, FaCode } from 'react-icons/fa';

export default function ProyectoCarta({ data, isOpen, toggle, abrirModal }) {
  if (!data) return null;

  return (
    <div className={`w-full max-w-7xl mx-auto border rounded-[2rem] transition-all duration-500 overflow-hidden 
      ${isOpen 
        ? 'bg-[#0f172a]/80 border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.05)]' 
        : 'bg-[#0a0f1c]/60 border-white/5 hover:border-indigo-500/20 hover:bg-[#0a0f1c]/90'
      } backdrop-blur-xl group`}>
      
      {/* CABECERA DE LA CARTA */}
      <div onClick={toggle} className="w-full p-6 sm:p-8 cursor-pointer select-none">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-6 flex-1">
            <div 
              className="relative w-20 h-20 rounded-2xl bg-white/5 border border-white/10 p-1 flex items-center justify-center shrink-0 overflow-hidden group/img transition-all duration-500 hover:border-indigo-500/50 shadow-2xl"
              onClick={(e) => { e.stopPropagation(); abrirModal(); }}
            >
              <img src={data.imagen} alt={data.titulo} className="w-full h-full object-cover rounded-xl" />
              <div className="absolute inset-0 bg-indigo-600/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                 <FaExpandAlt size={16} className="text-white scale-110" />
              </div>
            </div>
            
            <div className="flex flex-col space-y-2 flex-1">
              <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-indigo-400 transition-colors uppercase leading-none italic">
                {data.titulo}
              </h3>
              <p className="text-[13px] text-gray-400 leading-relaxed font-medium line-clamp-2 md:line-clamp-1 max-w-4xl">
                {data.descripcion_corta}
              </p>
              <div className="flex items-center gap-4 pt-1">
                 <span className="text-[10px] font-black text-indigo-400/60 uppercase tracking-[0.3em]">
                    Desplegado en: {data.lanzamiento}
                 </span>
                 <div className="h-[1px] w-8 bg-indigo-500/30" />
                 <span className="text-[9px] font-mono text-indigo-400/40 uppercase tracking-widest italic font-bold">System Certified</span>
              </div>
            </div>
          </div>

          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-indigo-500 bg-indigo-500/5 p-3 rounded-2xl border border-indigo-500/10 shrink-0">
            <FaChevronDown size={16} />
          </motion.div>
        </div>
      </div>

      {/* CONTENIDO DESPLEGADO */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-8 sm:px-12 pb-12">
            <div className="pt-8 border-t border-white/5 space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-indigo-500"><FaCode size={12} /><p className="text-[10px] font-black uppercase tracking-[0.4em]">System Specs</p></div>
                  <p className="text-[15px] text-gray-300 leading-relaxed text-justify font-medium">{data.descripcion}</p>
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-indigo-400/80 uppercase tracking-[0.4em]">Deployment Details</p>
                  <ul className="space-y-3">
                    {data.detalles.map((det, i) => (
                      <li key={i} className="flex gap-4 text-[13px] text-gray-400 group/item">
                        <span className="text-indigo-500 font-mono font-black group-hover/item:scale-125 transition-transform">»</span>
                        <span className="group-hover/item:text-white transition-colors leading-snug">{det}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-end gap-8 pt-8 border-t border-white/5">
                <div className="flex gap-4">
                  {data.urlSitio && (
                    <a href={data.urlSitio} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-7 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
                      <FaExternalLinkAlt size={10} /> Live Build
                    </a>
                  )}
                  <a href={data.urlRepositorio} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-7 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-white/10 active:scale-95">
                    <FaGithub size={12} /> Git Registry
                  </a>
                </div>
                <div className="flex flex-wrap gap-2.5 justify-end">
                  {data.tecnologias.map((tech, i) => (
                    <span key={i} className="flex items-center gap-2.5 px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-[10px] font-bold text-gray-400 hover:text-white transition-all uppercase tracking-tighter">
                      <span className="text-indigo-400 text-lg">{tech.icon}</span> {tech.name}
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