import React from 'react';
import LenguajesGithub from '@features/proyectos/components/github/lenguajesGithub';
import PerfilGithub from '@features/proyectos/components/github/perfilGithub';
import MetricasGithub from '@features/proyectos/components/github/metricasGithub';
import SkeletonGithub from './skeletonGithub';

export default function EcosistemaGithub({ isLoading, githubData, username, isDark, txtGit, stats }) {
  if (isLoading || !githubData) {
    return <SkeletonGithub isDark={isDark} />;
  }

  return (
<div className="w-full flex flex-col">
      {/* FILA 1: Grid Asimétrico sin ningún gap */}
      <div className="grid grid-cols-1 xl:grid-cols-[2.2fr_1fr] items-stretch w-full h-full">
        
        {/* Panel Izquierdo: Stack (Lleva borde a la derecha en PC, o arriba en móvil por el cambio de orden) */}
        <div className={`flex flex-col order-2 xl:order-1 h-full w-full transition-colors
          ${isDark ? 'border-t xl:border-t-0 xl:border-r border-[#1e293b]' : 'border-t xl:border-t-0 xl:border-r border-slate-200'}`}>
          {/* Se quitó el div extra con paddings. El componente hijo toma el 100% */}
          <LenguajesGithub reposStats={githubData.statsRepos} isDark={isDark} t={txtGit.stack || {}} />
        </div>
        
        {/* Panel Derecho: Perfil + Métricas (Sin espacios, divididos por una línea) */}
        <div className="flex flex-col h-full w-full order-1 xl:order-2">
          
          {/* Sub-panel 1: Perfil (Ocupa su espacio natural, choca contra los bordes) */}
          <div className={`w-full transition-colors border-b
            ${isDark ? 'border-[#1e293b]' : 'border-slate-200'}`}>
            <PerfilGithub perfil={githubData} isDark={isDark} username={username} t={txtGit.profile || {}} />
          </div>
          
          {/* Sub-panel 2: Métricas (Se expande para llenar el resto del panel derecho) */}
          <div className="flex-grow w-full h-full">
            <MetricasGithub 
              commits={stats?.totalCommitContributions || 0} 
              prs={stats?.totalPullRequestContributions || 0} 
              issues={stats?.totalIssueContributions || 0} 
              isDark={isDark} 
              t={txtGit.profile || {}} 
            />
          </div>

        </div>
      </div>
      
    </div>
  );
}