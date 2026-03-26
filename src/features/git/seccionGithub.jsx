import React, { useState, useEffect } from 'react';
import { useApp } from '@context/appContext'; 
import { useTranslation } from '@shared/hooks/useTranslation'; 
import { githubData as dictData } from '@data/git/gitHubData'; 
import { perfilData } from '@data/perfil/perfilData'; 
import EncabezadoSeccion from '@shared/components/encabezadoSeccion';

import PerfilGithub from './components/perfilGithub.jsx';
import LenguajesGithub from './components/lenguajesGithub.jsx';
import CalendarioGithub from './components/calendarioGithub.jsx';
import MetricasGithub from './components/metricasGithub.jsx';
import RepositoriosCarrusel from './components/repositoriosCarrusel.jsx';

export default function SeccionGithub() {
  const { isDark } = useApp();
  const t = useTranslation(dictData);
  const username = perfilData.socials.find(s => s.name === "github")?.url.split("/").pop() || "AntonioKldron";

  const [githubData, setGithubData] = useState(null);
  const [anioSeleccionado, setAnioSeleccionado] = useState(new Date().getFullYear());

  useEffect(() => {
    const obtenerData = async () => {
      const token = import.meta.env.VITE_GITHUB_TOKEN; 
      const fechaInicio = `${anioSeleccionado}-01-01T00:00:00Z`;
      const fechaFin = `${anioSeleccionado}-12-31T23:59:59Z`;
      
      const query = `
        query($userName: String!, $fechaInicio: DateTime!, $fechaFin: DateTime!) {
          user(login: $userName) {
            name avatarUrl bio login
            followers { totalCount }
            repositories(first: 20, orderBy: {field: PUSHED_AT, direction: DESC}, privacy: PUBLIC) {
              totalCount
              nodes {
                name
                languages(first: 5) { edges { node { name color } } }
              }
            }
            statsRepos: repositories(first: 50, orderBy: {field: PUSHED_AT, direction: DESC}, privacy: PUBLIC) {
              nodes {
                languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {
                  edges { size node { name color } }
                }
              }
            }
            contributionsCollection(from: $fechaInicio, to: $fechaFin) {
              totalCommitContributions
              totalPullRequestContributions
              totalIssueContributions
              contributionCalendar {
                totalContributions
                weeks { contributionDays { contributionCount date color contributionLevel } }
              }
            }
          }
        }
      `;

      try {
        const respuesta = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Authorization": `bearer ${token}` },
          body: JSON.stringify({ query, variables: { userName: username, fechaInicio, fechaFin } })
        });
        const { data } = await respuesta.json();
        setGithubData(data.user);
      } catch (error) { console.error(error); }
    };
    obtenerData();
  }, [username, anioSeleccionado]);

  if (!githubData) return null;

  const stats = githubData.contributionsCollection;

  return (
    <section className="w-full py-0 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-3 relative z-10">
        
        <div className="mb-[-10px]"> 
          <EncabezadoSeccion 
            subtitulo={t.header.subtitulo} 
            tituloPrincipal={t.header.titulo} 
            tituloHighlight={t.header.highlight} 
            align="right" 
          />
        </div>

        {/* BENTO GRID: Fila 1 - REORDENADO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
          
          {/* LENGUAJES: Segundo en móvil (order-2), Primero en Web (lg:order-1) */}
          <div className="lg:col-span-8 flex order-2 lg:order-1">
            <LenguajesGithub reposStats={githubData.statsRepos} isDark={isDark} t={t.stack} />
          </div>

          {/* PERFIL: Primero en móvil (order-1), Segundo en Web (lg:order-2) */}
          <div className="lg:col-span-4 flex order-1 lg:order-2">
            <PerfilGithub perfil={githubData} isDark={isDark} username={username} t={t.profile} />
          </div>
          
        </div>

        {/* BENTO GRID: Fila 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
          {/* Métricas: order-3 en móvil, lg:order-1 en web */}
          <div className="lg:col-span-4 flex order-3 lg:order-1">
            <MetricasGithub 
              commits={stats.totalCommitContributions} 
              prs={stats.totalPullRequestContributions} 
              issues={stats.totalIssueContributions} 
              isDark={isDark} 
            />
          </div>
          
          {/* Carrusel: order-4 en móvil, lg:order-2 en web */}
          <div className={`lg:col-span-8 overflow-hidden rounded-[2rem] backdrop-blur-md shadow-lg flex items-center transition-all duration-500 order-4 lg:order-2
            ${isDark ? 'bg-slate-900/40 border border-white/5' : 'bg-white/60 border border-slate-200'}`}>
              <RepositoriosCarrusel repos={githubData.repositories.nodes} isDark={isDark} username={username} />
          </div>
        </div>

        {/* Calendario */}
        <div className="w-full mt-[-5px] order-5">
          <CalendarioGithub 
            calendario={stats.contributionCalendar} 
            isDark={isDark} 
            anioSeleccionado={anioSeleccionado} 
            setAnioSeleccionado={setAnioSeleccionado} 
            t={t.calendar} 
          />
        </div>

      </div>
    </section>
  );
}