import React from 'react';
import LenguajesGithub from '@features/proyectos/components/github/lenguajesGithub';
import PerfilGithub from '@features/proyectos/components/github/perfilGithub';
import MetricasGithub from '@features/proyectos/components/github/metricasGithub';
import RepositoriosCarrusel from '@features/proyectos/components/github/repositoriosCarrusel';
import SkeletonGithub from './SkeletonGithub'; // Asegúrate de ajustar la ruta

export default function EcosistemaGithub({ isLoading, githubData, username, isDark, txtGit, stats }) {
  if (isLoading || !githubData) {
    return <SkeletonGithub isDark={isDark} />;
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* FILA 1: Grid Asimétrico */}
      <div className="grid grid-cols-1 xl:grid-cols-[2.2fr_1fr] gap-4 items-stretch">
        
        {/* Columna Izquierda: Stack (Segundo en móvil, Primero en desktop) */}
        <div className="h-full w-full flex flex-col order-2 xl:order-1">
          <div className="flex-grow">
            <LenguajesGithub reposStats={githubData.statsRepos} isDark={isDark} t={txtGit.stack || {}} />
          </div>
        </div>
        
        {/* Columna Derecha: Perfil + Métricas (Primero en móvil, Segundo en desktop) */}
        <div className="flex flex-col gap-4 h-full w-full justify-between order-1 xl:order-2">
          <div className="flex-shrink-0">
            <PerfilGithub perfil={githubData} isDark={isDark} username={username} t={txtGit.profile || {}} />
          </div>
          <div className="flex-grow flex flex-col justify-end">
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
      
      {/*
      FILA 2: Repositorios 
      <div className={`w-full overflow-hidden rounded-[2rem] backdrop-blur-xl shadow-2xl transition-all duration-500 border group
        ${isDark ? 'bg-slate-900/40 border-white/5 hover:border-blue-500/30' : 'bg-white/60 border-slate-200/80 hover:border-blue-400/30'}`}>
        <div className="p-1">
          <RepositoriosCarrusel repos={githubData.repositories?.nodes || []} isDark={isDark} username={username} />
        </div>
      </div>*/}
    </div>
  );
}