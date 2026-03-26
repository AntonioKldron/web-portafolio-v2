// src/frontend/features/proyectos/seccionGitProyectos.jsx
// Unified section: Projects + GitHub metrics in one cohesive view.
import React, { useState } from 'react';
import { useApp }          from '@app/context/appContext';
import { useProyectosData } from '@backend/data/proyectos/proyectosData';
import { useGithubData }   from '@backend/hooks/useGithubData';

import EncabezadoSeccion     from '@shared/components/encabezadoSeccion';
import RepositoriosCarrusel  from '@features/proyectos/components/repositoriosCarrusel';
import ProyectoCarta         from '@features/proyectos/components/proyectoCarta';
import PerfilGithub          from '@features/proyectos/components/perfilGithub';
import LenguajesGithub       from '@features/proyectos/components/lenguajesGithub';
import CalendarioGithub      from '@features/proyectos/components/calendarioGithub';
import MetricasGithub        from '@features/proyectos/components/metricasGithub';

export default function SeccionGitProyectos() {
  const { isDark } = useApp();
  const { data: t, isLoading: isProyectosLoading } = useProyectosData();

  // GitHub data (via hook → repository → service)
  const {
    githubData,
    username,
    isLoading: githubLoading,
    anioSeleccionado,
    setAnioSeleccionado,
  } = useGithubData();

  const [openProject, setOpenProject] = useState(null);

  if (isProyectosLoading || !t) {
    return (
      <section className="w-full py-20 min-h-[50vh] flex items-center justify-center">
        <div className="animate-pulse h-96 bg-gray-500/20 rounded-3xl w-full max-w-5xl"></div>
      </section>
    );
  }

  const proyectos = t.proyectos || [];
  const header = t.header || {};
  const txtGit = t.github || {};
  const stats = githubData?.contributionsCollection;

  return (
    <section className="w-full py-0 overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-8 relative z-10">

        {/* ── HEADER ── */}
        <EncabezadoSeccion
          subtitulo={header.subtitulo}
          tituloPrincipal={header.tituloPrincipal}
          tituloHighlight={header.tituloHighlight}
          align="left"
        />

        {/* ── DASHBOARD GRID ── */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: LIVE PROJECTS (8 cols) */}
          <div className="xl:col-span-8 flex flex-col gap-6">
            <h3 className={`text-xl font-bold tracking-tight mb-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
              Featured Works
            </h3>
            {proyectos.map((pro, idx) => (
              <ProyectoCarta
                key={pro.id || idx}
                data={pro}
                isOpen={openProject === idx}
                toggle={() => setOpenProject(openProject === idx ? null : idx)}
              />
            ))}
          </div>

          {/* RIGHT COLUMN: GITHUB PROFILE & METRICS (4 cols) */}
          <div className="xl:col-span-4 flex flex-col gap-6">
            <h3 className={`text-xl font-bold tracking-tight mb-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
              Ecosistema GitHub
            </h3>
            
            {!githubLoading && githubData ? (
              <>
                <PerfilGithub
                  perfil={githubData}
                  isDark={isDark}
                  username={username}
                  t={txtGit.profile || {}}
                />

                <MetricasGithub
                  commits={stats?.totalCommitContributions || 0}
                  prs={stats?.totalPullRequestContributions || 0}
                  issues={stats?.totalIssueContributions || 0}
                  isDark={isDark}
                />

                <LenguajesGithub
                  reposStats={githubData.statsRepos}
                  isDark={isDark}
                  t={txtGit.stack || {}}
                />
              </>
            ) : (
              <div className="animate-pulse flex flex-col gap-4">
                <div className="h-40 bg-gray-500/20 rounded-2xl w-full"></div>
                <div className="h-24 bg-gray-500/20 rounded-2xl w-full"></div>
              </div>
            )}
          </div>
        </div>

        {/* ── BOTTOM ROW: REPOSITORIES & CALENDAR ── */}
        {!githubLoading && githubData && (
          <div className="flex flex-col gap-8 mt-4">
            
            {/* Repositories Carousel */}
            <div className={`w-full overflow-hidden rounded-[2rem] backdrop-blur-md shadow-lg transition-all duration-500
              ${isDark ? 'bg-slate-900/40 border border-white/5' : 'bg-white/60 border border-slate-200'}`}
            >
              <RepositoriosCarrusel
                repos={githubData.repositories?.nodes || []}
                isDark={isDark}
                username={username}
              />
            </div>

            {/* Global Calendar */}
            <div className="w-full">
              <CalendarioGithub
                calendario={stats?.contributionCalendar}
                isDark={isDark}
                anioSeleccionado={anioSeleccionado}
                setAnioSeleccionado={setAnioSeleccionado}
                t={txtGit.calendar || {}}
              />
            </div>
            
          </div>
        )}

      </div>
    </section>
  );
}
