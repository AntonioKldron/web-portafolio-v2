import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaRocket } from 'react-icons/fa';
import DeployBadge from '@features/proyectos/components/locales/deployBadge';

export default function CartaFooter({ data, isDark }) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-10 pt-10 border-t border-white/10">

      {/* BOTONES DE ACCIÓN + DEPLOY BADGE */}
      <div className="flex flex-col gap-3 items-start">
        <div className="flex gap-4">
          <motion.a
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={data.urlRepositorio}
            target="_blank"
            rel="noreferrer"
            className="p-5 bg-indigo-600 text-white rounded-2xl shadow-xl shadow-indigo-600/20 hover:bg-indigo-500 transition-colors"
          >
            <FaGithub size={24} />
          </motion.a>

          {data.urlSitio && (
            <motion.a
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={data.urlSitio}
              target="_blank"
              rel="noreferrer"
              className={`p-5 rounded-2xl border-2 transition-all ${
                isDark
                  ? 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                  : 'bg-slate-900 border-slate-800 text-white hover:bg-slate-800'
              }`}
            >
              <FaRocket size={24} />
            </motion.a>
          )}
        </div>

        {/* Deploy badge */}
        {data.deploy && (
          <DeployBadge
            estado={data.deploy.estado}
            url={data.deploy.url}
            isDark={isDark}
          />
        )}
      </div>

      {/* TECH STACK CHIPS */}
      <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
        {data.tecnologias.map((tech, i) => {
          const techPrimary = tech.primary || 'text-indigo-500';
          return (
            <div
              key={i}
              className={`flex items-center gap-3 px-4 py-2 rounded-xl border transition-all ${
                isDark
                  ? 'bg-black/50 border-white/5 text-slate-400 hover:text-white hover:border-indigo-500/50'
                  : 'bg-white border-slate-200 text-slate-500 shadow-sm hover:shadow-md'
              }`}
            >
              <span className={`text-2xl drop-shadow-sm ${techPrimary}`}>
                {React.isValidElement(tech.icon)
                  ? React.cloneElement(tech.icon, {
                      className: `${tech.icon.props.className || ''} ${techPrimary}`.trim(),
                    })
                  : tech.icon}
              </span>
              <span className="text-[11px] font-black uppercase tracking-tight">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
