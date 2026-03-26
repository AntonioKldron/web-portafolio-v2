import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { githubIconMap } from '@data/git/gitHubData';

export default function RepositoriosCarrusel({ repos, isDark, username }) {
  const infiniteRepos = [...repos, ...repos];

  return (
    <div className={`w-full relative overflow-hidden flex items-center h-20 group/carousel select-none transition-all
      ${isDark ? 'bg-transparent' : 'bg-transparent'}`}
    >
      {/* Degradados laterales para suavizar la entrada/salida */}
      <div className={`absolute inset-y-0 left-0 w-20 z-20 pointer-events-none bg-gradient-to-r 
        ${isDark ? 'from-slate-900/40' : 'from-white/60'} to-transparent`} />
      <div className={`absolute inset-y-0 right-0 w-20 z-20 pointer-events-none bg-gradient-to-l 
        ${isDark ? 'from-slate-900/40' : 'from-white/60'} to-transparent`} />

      <motion.div 
        className="flex gap-4 items-center w-max px-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 70, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {infiniteRepos.map((repo, i) => (
          <div 
            key={i} 
            className={`flex items-center gap-4 px-5 py-2.5 rounded-2xl transition-all duration-300 group/card border
              ${isDark 
                ? 'bg-slate-900/60 border-white/5 hover:bg-slate-800 hover:border-blue-500/30' 
                : 'bg-white border-slate-100 hover:shadow-lg hover:shadow-blue-500/5 hover:border-blue-200'}`}
          >

            <div className="flex flex-col min-w-[110px]">
              <span className={`text-[10px] font-black uppercase tracking-widest leading-none mb-2
                ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {repo.name.replace(/-/g, '_')}
              </span>
              
              {/* Renderizado de TODAS las tecnologías con sus iconos */}
              <div className="flex gap-2 items-center">
                {repo.languages.edges.map((lang, idx) => {
                  const iconData = githubIconMap[lang.node.name.toLowerCase()];
                  return iconData ? (
                    <span 
                      key={idx} 
                      className="text-[14px] transition-transform group-hover/card:scale-110" 
                      style={{ color: lang.node.color }}
                      title={lang.node.name}
                    >
                      {iconData.icon}
                    </span>
                  ) : (
                    /* Fallback por si no hay icono en el map: el puntito de color */
                    <div 
                      key={idx}
                      className="w-1.5 h-1.5 rounded-full" 
                      style={{ backgroundColor: lang.node.color }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Link a GitHub */}
            <a 
              href={`https://github.com/${username}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-all group-hover/card:bg-blue-600 group-hover/card:text-white
                ${isDark ? 'bg-white/5 text-slate-400' : 'bg-slate-100 text-slate-400'}`}
            >
              <FaGithub className="text-sm" />
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
}