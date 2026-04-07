import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaRocket } from 'react-icons/fa';
import DeployBadge from '@features/proyectos/components/locales/deployBadge';

export default function CartaFooter({ data, isDark }) {
  return (
    <div className={`flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 pt-6 border-t transition-colors duration-500 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>

      {/* SECCIÓN IZQUIERDA: Barra de herramientas (Botones + Badge) */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full xl:w-auto">
        
        {/* Contenedor de botones */}
        <div className="flex items-center gap-3">
          
          {/* Botón de Código (GitHub) */}
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={data.urlRepositorio}
            target="_blank"
            rel="noreferrer"
            className={`group flex items-center gap-2.5 px-4 py-2 rounded-full transition-all duration-300 ${
              isDark
                ? 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            <FaGithub size={15} className="transition-transform duration-300 group-hover:scale-110" />
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase">Código</span>
          </motion.a>

          {/* Botón de Sitio Vivo (Rocket) */}
          {data.urlSitio && (
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={data.urlSitio}
              target="_blank"
              rel="noreferrer"
              className={`group flex items-center gap-2.5 px-4 py-2 rounded-full transition-all duration-300 ${
                isDark
                  ? 'bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-300'
                  : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
              }`}
            >
              <FaRocket size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase">Visitar</span>
            </motion.a>
          )}
        </div>

        {/* Separador y Badge de Deploy (Solo si existe deploy y en pantallas medianas o mayores) */}
        {data.deploy && (
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            {/* Separador vertical "hairline" */}
            <div className={`hidden sm:block w-px h-5 ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
            
            <DeployBadge
              estado={data.deploy.estado}
              url={data.deploy.url}
              isDark={isDark}
            />
          </div>
        )}
      </div>

      {/* SECCIÓN DERECHA: Tech Stack Chips */}
      <div className="flex flex-wrap gap-2 justify-start xl:justify-end w-full xl:w-auto">
        {data.tecnologias.map((tech, i) => {
          const techPrimary = tech.primary || 'text-indigo-500';
          
          return (
            <div
              key={i}
              // Diseño exacto de "etiquetas fantasma" (Sin bordes, colores planos en hover)
              className={`group/t flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors duration-300 cursor-default ${
                isDark
                  ? 'bg-white/5 hover:bg-white/10'
                  : 'bg-slate-50 hover:bg-slate-100/80'
              }`}
            >
              <span className={`text-[14px] transition-transform duration-300 group-hover/t:scale-110 ${techPrimary}`}>
                {React.isValidElement(tech.icon)
                  ? React.cloneElement(tech.icon, {
                      className: `${tech.icon.props.className || ''} ${techPrimary}`.trim(),
                    })
                  : tech.icon}
              </span>
              <span className={`text-[9px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                isDark ? 'text-slate-400 group-hover/t:text-slate-200' : 'text-slate-500 group-hover/t:text-slate-800'
              }`}>
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}