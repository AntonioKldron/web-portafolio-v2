import React, { useMemo } from 'react';
import { useApp } from '@app/context/appContext';
import { proyectosData } from '@data/proyectos/proyectosData';
import { useGithubData } from '@services/useGithubData';

// Componentes extraídos
import EcosistemaGithub from './components/github/ecosistemaGithub';
import ProyectosLocales from './components/locales/proyectosLocales';
import EncabezadoSeccion from '@shared/components/encabezadoSeccion';
import CalendarioGithub from '@features/proyectos/components/github/calendarioGithub';

export default function SeccionGitProyectos() {
  const { isDark, lang } = useApp();

  // 1. OBTENER DATA ESTÁTICA
  const t = useMemo(() => {
    return {
      proyectos: proyectosData.getMerged(lang),
      header: proyectosData[lang]?.header || {},
      github: proyectosData[lang]?.github || {},
      titles: proyectosData[lang]?.titles || {} 
    };
  }, [lang]);

  // 2. OBTENER DATA DINÁMICA
  const {
    githubData,
    username,
    isLoading: githubLoading,
    anioSeleccionado,
    setAnioSeleccionado,
  } = useGithubData();

  const stats = githubData?.contributionsCollection;

  return (
    <section className="w-full overflow-hidden relative">
      {/* ── AMBIENT GLOW PREMIUM ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[600px] pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-blue-900/5 to-transparent blur-3xl" />

      <div className="max-w-[90rem] mx-auto flex flex-col relative z-10">

        {/* ── HEADER DE SECCIÓN ── */}
        <EncabezadoSeccion
          subtitulo={t.header.subtitulo}
          tituloPrincipal={t.header.tituloPrincipal}
          tituloHighlight={t.header.tituloHighlight}
          align="right" 
        />

        {/* ── BLOQUE 1: ECOSISTEMA GITHUB ── */}
        <EcosistemaGithub 
          isLoading={githubLoading}
          githubData={githubData}
          username={username}
          isDark={isDark}
          txtGit={t.github}
          stats={stats}
        />

        {/* ── BLOQUE 2: PROYECTOS LOCALES ── */}
        <ProyectosLocales 
          proyectos={t.proyectos}
          isDark={isDark}
          titles={t.titles}
        />

        {/* ── BLOQUE 3: CALENDARIO ── */}
        {!githubLoading && githubData && (
          <div className="flex flex-col w-full">
            <div className="w-full drop-shadow-2xl">
              <CalendarioGithub 
                calendario={stats?.contributionCalendar ?? { weeks: [], totalContributions: 0 }} 
                isDark={isDark} 
                anioSeleccionado={anioSeleccionado} 
                setAnioSeleccionado={setAnioSeleccionado} 
                t={t.github.calendar || {}} 
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}