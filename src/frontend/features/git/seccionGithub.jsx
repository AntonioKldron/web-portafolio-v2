import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../context/appContext.jsx'; 
import { useTranslation } from '../../hooks/useTranslation.js'; 
import { githubData as dictData } from '../../data/git/gitHubData.jsx'; 
import { perfilData } from '../../data/perfil/perfilData.jsx'; 
import EncabezadoSeccion from '../components/encabezadoSeccion.jsx'; 

import CargandoGithub from './components/cargandoGithub';
import PerfilGithub from './components/perfilGithub';
import LenguajesGithub from './components/lenguajesGithub';
import CalendarioGithub from './components/calendarioGithub';

export default function SeccionGithub() {
  const { isDark } = useApp();
  const t = useTranslation(dictData);
  const username = perfilData.socials.find(s => s.name === "github")?.url.split("/").pop() || "AntonioKldron";

  const [githubData, setGithubData] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [anioSeleccionado, setAnioSeleccionado] = useState(new Date().getFullYear());

  useEffect(() => {
    const obtenerData = async () => {
      setCargando(true);
      const token = import.meta.env.VITE_GITHUB_TOKEN; 
      const fechaInicio = `${anioSeleccionado}-01-01T00:00:00Z`;
      const fechaFin = `${anioSeleccionado}-12-31T23:59:59Z`;
      
      const query = `
        query($userName: String!, $fechaInicio: DateTime!, $fechaFin: DateTime!) {
          user(login: $userName) {
            name avatarUrl bio login
            followers { totalCount }
            repositories(privacy: PUBLIC) { totalCount }
            
            statsRepos: repositories(first: 50, orderBy: {field: PUSHED_AT, direction: DESC}, privacy: PUBLIC) {
              nodes {
                languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {
                  edges { size node { name color } }
                }
              }
            }
            contributionsCollection(from: $fechaInicio, to: $fechaFin) {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays { contributionCount date color }
                }
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
      } catch (error) {
        console.error("Error al cargar GitHub:", error);
      } finally {
        setCargando(false);
      }
    };

    obtenerData();
  }, [username, anioSeleccionado]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  if (cargando && !githubData) return <CargandoGithub isDark={isDark} text={t.loading} />;
  if (!githubData) return null;

  const { statsRepos, contributionsCollection } = githubData;
  const calendario = contributionsCollection.contributionCalendar;

  return (
    // ✨ CAMBIO: Se eliminaron pt-10 y pb-20. 
    // Ahora la sección solo ocupa el espacio necesario.
    <section className="relative w-full h-full">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-10">
        
        <EncabezadoSeccion 
          subtitulo={t.header.subtitulo} 
          tituloPrincipal={t.header.titulo} 
          tituloHighlight={t.header.highlight} 
          align="left" 
        />

        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* PERFIL */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex">
            <PerfilGithub perfil={githubData} totalCommits={calendario.totalContributions} isDark={isDark} username={username} t={t.profile} />
          </motion.div>

          {/* LENGUAJES CON ICONOS REALES */}
          <motion.div variants={itemVariants} className="lg:col-span-8 flex">
            <LenguajesGithub reposStats={statsRepos} isDark={isDark} t={t.stack} />
          </motion.div>

          {/* CALENDARIO */}
          <motion.div variants={itemVariants} className="lg:col-span-12 relative">
            {cargando && (
              <div className="absolute inset-0 z-20 backdrop-blur-md bg-slate-900/20 rounded-[2rem] flex justify-center items-center">
                <div className="bg-white/90 dark:bg-black/80 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 shadow-2xl backdrop-blur-xl">
                  <span className="font-bold text-sm text-indigo-600 dark:text-violet-400 animate-pulse">{t.calendar.updating}</span>
                </div>
              </div>
            )}
            <CalendarioGithub calendario={calendario} isDark={isDark} anioSeleccionado={anioSeleccionado} setAnioSeleccionado={setAnioSeleccionado} t={t.calendar} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}