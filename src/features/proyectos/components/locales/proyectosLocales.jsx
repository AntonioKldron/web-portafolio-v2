import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import ProyectoCarta from '@features/proyectos/components/locales/proyectoCarta';

export default function ProyectosLocales({ proyectos, isDark, titles }) {
  // El estado se mueve aquí para evitar re-renders innecesarios en el componente padre
  const [openProject, setOpenProject] = useState(null);

  if (!proyectos || proyectos.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 w-full">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className={`w-full relative p-6  flex flex-col transition-all  overflow-visible
          ${isDark ? 'bg-slate-900/50 shadow-indigo-900/20' : 'bg-white/80 -slate-200 shadow-indigo-500/10'}`}
      >
        <div className="flex justify-between items-center mb-6 relative z-50">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${isDark ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>
              <FaCode className="text-lg" />
            </div>
            <span className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {titles?.projects|| 'Deployments'}
            </span>
          </div>
          
          <div className={`
            inline-flex items-center justify-center min-w-[24px] h-6 px-1.5 rounded -b-2
            text-[11px] font-black font-mono
            ${isDark 
              ? 'bg-slate-800 -indigo-500 text-indigo-300' 
              : 'bg-slate-100 -slate-300 text-slate-700'}
          `}>
            {proyectos.length.toString().padStart(2, '0')}
          </div>
        </div>

        <div className="flex flex-col gap-4 relative z-10">
          {proyectos.map((pro, idx) => (
            <ProyectoCarta
              key={pro.id || idx}
              data={pro}
              isOpen={openProject === idx}
              toggle={() => setOpenProject(openProject === idx ? null : idx)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}