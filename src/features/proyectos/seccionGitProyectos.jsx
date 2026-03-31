import React, { useMemo } from 'react';
import { useApp } from '@app/context/appContext';
import { proyectosData } from '@data/proyectos/proyectosData';
import { useGithubData } from '@services/useGithubData';

import EcosistemaGithub from './components/github/ecosistemaGithub';
import ProyectosLocales from './components/locales/proyectosLocales';
import EncabezadoSeccion from '@shared/components/encabezadoSeccion';
import CalendarioGithub from '@features/proyectos/components/github/calendarioGithub';
import TerminalWrapper from '@features/proyectos/components/ui/terminalWrapper'; 

export default function SeccionGitProyectos() {
  const { isDark, lang } = useApp();

  const t = useMemo(() => {
    return {
      proyectos: proyectosData.getMerged(lang),
      header: proyectosData[lang]?.header || {},
      github: proyectosData[lang]?.github || {},
      titles: proyectosData[lang]?.titles || {} 
    };
  }, [lang]);

  const {
    githubData, username, isLoading: githubLoading,
    anioSeleccionado, setAnioSeleccionado,
  } = useGithubData();

  const stats = githubData?.contributionsCollection;

  return (
    <section className="w-full relative py-12 font-mono">
      {/* ── GLOW DE FONDO (Deep Blue / Purple) ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1e1b4b] via-[#0b0f19] to-transparent blur-3xl z-0" />

      <div className="max-w-[90rem] mx-auto flex flex-col relative z-10 px-4 xl:px-0">
        
        <EncabezadoSeccion
          subtitulo={t.header.subtitulo}
          tituloPrincipal={t.header.tituloPrincipal}
          tituloHighlight={t.header.tituloHighlight}
          align="right" 
        />

        <div className="mt-8 w-full">
          {/* ✨ USAMOS EL NUEVO WRAPPER (Modo Estático) ✨ */}
          <TerminalWrapper 
            isDark={isDark} 
            path="dashboard" 
            hasSlider={false} // Apagamos el Slider
            heightClass="h-auto" // Que crezca según su contenido (las 3 filas)
            titleRight="ONLINE"
          >
            
            {/* FILA 1: Ecosistema Github (Edge-to-edge) */}
            <div className={`w-full border-b ${isDark ? 'border-[#1e293b]' : 'border-slate-200'}`}>
              <EcosistemaGithub 
                isLoading={githubLoading} githubData={githubData} username={username} 
                isDark={isDark} txtGit={t.github} stats={stats}
              />
            </div>

            {/* FILA 2: Proyectos Locales (Edge-to-edge) */}
            <div className={`w-full border-b ${isDark ? 'border-[#1e293b]' : 'border-slate-200'}`}>
              <ProyectosLocales 
                proyectos={t.proyectos} isDark={isDark} titles={t.titles}
              />
            </div>

            {/* FILA 3: Calendario de Github (Edge-to-edge) */}
            {!githubLoading && githubData && (
              <div className="w-full">
                <CalendarioGithub 
                  calendario={stats?.contributionCalendar ?? { weeks: [], totalContributions: 0 }} 
                  isDark={isDark} anioSeleccionado={anioSeleccionado} 
                  setAnioSeleccionado={setAnioSeleccionado} t={t.github.calendar || {}} 
                />
              </div>
            )}

          </TerminalWrapper>
        </div>

      </div>
    </section>
  );
}