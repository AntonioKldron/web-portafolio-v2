import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaUsers, FaBook, FaCodeBranch } from 'react-icons/fa';

export default function PerfilGithub({ perfil, totalCommits, isDark, username, t }) {
  const { name, avatarUrl, bio, followers, repositories } = perfil;

  // Variantes para los Badges (Entrada desde abajo)
  const badgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 + i * 0.1, type: "spring", stiffness: 100 }
    })
  };

  const Badge = ({ icono: Icono, valor, tooltip, index }) => (
    <motion.div 
      custom={index}
      variants={badgeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ 
        y: -5, 
        backgroundColor: isDark ? "rgba(139, 92, 246, 0.15)" : "rgba(99, 102, 241, 0.1)",
        borderColor: isDark ? "rgba(139, 92, 246, 0.4)" : "rgba(99, 102, 241, 0.3)"
      }}
      title={tooltip}
      className={`flex flex-col items-center gap-1.5 px-2 py-3 rounded-2xl transition-all cursor-help flex-1 justify-center border
      ${isDark ? 'bg-white/5 border-white/5 shadow-inner' : 'bg-slate-50 border-slate-100 shadow-sm'}`}>
      
      <Icono className={`text-xl md:text-2xl mb-1 ${isDark ? 'text-violet-400' : 'text-indigo-600'}`} />
      <span className={`text-base md:text-lg font-black leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>{valor}</span>
      <span className={`text-[8px] font-black uppercase tracking-tighter opacity-50 ${isDark ? 'text-violet-200' : 'text-slate-500'}`}>
        {tooltip.split(" ")[0]}
      </span>
    </motion.div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`w-full h-full relative p-6 md:p-8 rounded-[2.5rem] border overflow-hidden flex flex-col justify-between gap-6 transition-all duration-700 shadow-2xl
      ${isDark ? 'bg-slate-950/60 border-white/5 shadow-violet-900/15' : 'bg-white/80 border-slate-100 shadow-indigo-900/10 backdrop-blur-sm'}`}
    >
      {/* --- EFECTOS DE FONDO --- */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[90px] pointer-events-none 
        ${isDark ? 'bg-violet-600' : 'bg-indigo-300'}`} 
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-5">
        
        {/* --- AVATAR CON PULSO Y GLOW --- */}
        <motion.a 
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group cursor-pointer shrink-0 mt-2 block"
        >
          {/* Anillo de pulso infinito */}
          <motion.div 
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className={`absolute inset-0 rounded-full border-2 ${isDark ? 'border-violet-500' : 'border-indigo-400'}`}
          />
          
          {/* Glow al hover */}
          <div className={`absolute inset-0 rounded-full blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-60 ${isDark ? 'bg-violet-500' : 'bg-indigo-400'}`}></div>
          
          <img 
            src={avatarUrl} 
            alt={name || username} 
            className={`relative w-28 h-28 md:w-32 md:h-32 rounded-full border-[4px] object-cover z-10 transition-all duration-500 
            ${isDark ? 'border-slate-900 shadow-[0_0_20px_rgba(139,92,246,0.3)]' : 'border-white shadow-xl'}`} 
          />
          
          {/* Badge de GitHub flotante */}
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className={`absolute bottom-1 right-1 p-2 rounded-xl border-2 z-20 shadow-lg transition-transform duration-500 group-hover:rotate-12 
            ${isDark ? 'bg-slate-900 border-violet-500/50 text-violet-400' : 'bg-white border-indigo-100 text-indigo-600'}`}>
            <FaGithub className="text-xl" />
          </motion.div>
        </motion.a>
        
        {/* --- TEXTOS --- */}
        <div className="flex flex-col gap-1">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`text-2xl md:text-3xl font-black tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {name || username}
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-2"
          >
            <span className={`text-[9px] font-mono font-bold uppercase tracking-[0.2em] ${isDark ? 'text-violet-400' : 'text-indigo-600'}`}>
              @{username} // system_user
            </span>
            <p className={`text-xs md:text-sm leading-relaxed line-clamp-3 px-4 opacity-70 italic ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              "{bio || t.bioFallback}"
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* --- BOTONES / BADGES INFERIORES --- */}
      <div className="relative z-10 flex gap-3 mt-4 w-full">
        <Badge icono={FaBook} valor={repositories.totalCount} tooltip={t.repos} index={0} />
        <Badge icono={FaUsers} valor={followers.totalCount} tooltip={t.followers} index={1} />
        <Badge icono={FaCodeBranch} valor={totalCommits} tooltip={t.commits} index={2} />
      </div>

      {/* Línea decorativa estilo escáner (Sincronizada con los otros componentes) */}
      <motion.div 
        animate={{ x: ['-100%', '100%'] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className={`absolute bottom-0 left-0 h-[1px] w-full ${isDark ? 'bg-gradient-to-r from-transparent via-violet-500/50 to-transparent' : 'bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent'}`} 
      />
    </motion.div>
  );
}