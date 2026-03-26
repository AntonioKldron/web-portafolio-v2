import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaUsers, FaBook, FaCodeBranch } from 'react-icons/fa';

export default function PerfilGithub({ perfil, isDark, username, t }) {
  const { name, avatarUrl, bio, followers, repositories } = perfil;

  const Badge = ({ icono: Icono, valor, tooltip }) => (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className={`flex flex-col items-center justify-center p-3 rounded-xl border backdrop-blur-sm transition-colors cursor-help w-full
      ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-slate-50 border-slate-200 hover:bg-white'}`}
      title={tooltip}
    >
      <Icono className={`text-xl mb-1 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
      <span className={`text-sm md:text-base font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{valor}</span>
    </motion.div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`w-full relative p-6 rounded-[2rem] border flex flex-col items-center justify-center gap-4 transition-all shadow-xl overflow-hidden
      ${isDark ? 'bg-slate-900/50 border-white/10 shadow-indigo-900/20' : 'bg-white/80 border-slate-200 shadow-indigo-500/10'}`}
    >
      {/* Glow de fondo */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-[60px] pointer-events-none ${isDark ? 'bg-indigo-600/40' : 'bg-indigo-300/40'}`} />

      <motion.a 
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, rotate: -5 }}
        className="relative group mt-4"
      >
        <img src={avatarUrl} alt={name} className={`w-24 h-24 rounded-full border-4 object-cover relative z-10 transition-transform 
          ${isDark ? 'border-slate-800' : 'border-white shadow-md'}`} />
        <div className={`absolute -bottom-2 -right-2 p-2 rounded-full border-2 z-20 
          ${isDark ? 'bg-slate-900 border-indigo-500 text-indigo-400' : 'bg-white border-indigo-200 text-indigo-600'}`}>
          <FaGithub className="text-lg" />
        </div>
      </motion.a>

      <div className="text-center z-10">
        <h2 className={`text-xl md:text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {name || username}
        </h2>
        <span className={`text-xs font-mono font-bold uppercase tracking-widest ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
          @{username}
        </span>
        <p className={`mt-2 text-xs leading-relaxed line-clamp-2 px-2 italic ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {bio || t.bioFallback}
        </p>
      </div>

      <div className="flex gap-2 w-full mt-auto z-10">
        <Badge icono={FaBook} valor={repositories.totalCount} tooltip={t.repos} />
        <Badge icono={FaUsers} valor={followers.totalCount} tooltip={t.followers} />
      </div>
    </motion.div>
  );
}
