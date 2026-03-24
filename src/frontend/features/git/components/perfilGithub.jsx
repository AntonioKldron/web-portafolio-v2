import React from 'react';
import { FaGithub, FaUsers, FaBook, FaCodeBranch } from 'react-icons/fa';

export default function PerfilGithub({ perfil, totalCommits, isDark, username, t }) {
  const { name, avatarUrl, bio, followers, repositories } = perfil;

  const Badge = ({ icono: Icono, valor, etiqueta, tooltip }) => (
    <div 
      title={tooltip}
      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg cursor-help flex-1 justify-center
      ${isDark ? 'bg-white/5 hover:bg-white/10 border border-white/5' : 'bg-black/5 hover:bg-black/10 border border-black/5'}`}>
      <Icono className={`text-xl ${isDark ? 'text-violet-400' : 'text-indigo-600'}`} />
      <span className={`text-lg font-black leading-none ${isDark ? 'text-white' : 'text-slate-800'}`}>{valor}</span>
    </div>
  );

  return (
    <div className={`w-full h-full relative p-6 rounded-[2rem] border overflow-hidden flex flex-col justify-between gap-6 transition-colors shadow-2xl
      ${isDark ? 'bg-gradient-to-b from-slate-900/80 to-slate-950/90 border-white/5 shadow-violet-900/20' : 'bg-gradient-to-b from-white to-slate-50 border-slate-100 shadow-indigo-900/10'}`}>
      
      {/* Brillo púrpura de fondo */}
      <div className={`absolute -right-16 -top-16 w-56 h-56 rounded-full blur-[80px] opacity-30 pointer-events-none ${isDark ? 'bg-violet-500' : 'bg-indigo-400'}`}></div>

      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        
        {/* Tu foto con enlace a GitHub */}
        <a 
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Ir a mi perfil de GitHub"
          className="relative group cursor-pointer shrink-0 mt-2 block"
        >
          <div className={`absolute inset-0 rounded-full blur-md transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${isDark ? 'bg-violet-500' : 'bg-indigo-400'}`}></div>
          
          <img 
            src={avatarUrl} 
            alt={name || username} 
            className={`relative w-24 h-24 md:w-28 md:h-28 rounded-full border-[3px] object-cover transition-transform duration-500 group-hover:scale-105 ${isDark ? 'border-violet-500/50' : 'border-white shadow-xl'}`} 
          />
          
          <div className={`absolute bottom-0 right-0 p-1.5 rounded-full border-4 transition-transform duration-500 group-hover:rotate-12 ${isDark ? 'bg-slate-900 border-slate-900 text-violet-400' : 'bg-white border-white text-indigo-600 shadow-sm'}`}>
            <FaGithub className="text-lg" />
          </div>
        </a>
        
        <div>
          <h2 className={`text-2xl font-black tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {name || username}
          </h2>
          <p className={`text-xs mt-2 leading-relaxed line-clamp-2 px-2 opacity-70 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {bio || t.bioFallback}
          </p>
        </div>
      </div>
      
      <div className="relative z-10 flex gap-2 mt-auto w-full">
        <Badge icono={FaBook} valor={repositories.totalCount} tooltip={t.repos} />
        <Badge icono={FaUsers} valor={followers.totalCount} tooltip={t.followers} />
        <Badge icono={FaCodeBranch} valor={totalCommits} tooltip={t.commits} />
      </div>
    </div>
  );
}