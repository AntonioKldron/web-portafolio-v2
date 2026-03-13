import React from 'react';
import { 
  FaFigma, FaGitAlt, FaTerminal, FaAngular, FaReact, 
  FaJava, FaCode, FaCogs, FaDatabase, FaLaravel 
} from 'react-icons/fa'; // Se agregó FaLaravel
import { VscAzure, VscVscodeInsiders } from "react-icons/vsc";
import { 
  SiOracle, SiJetbrains, SiSpringboot, SiDjango, SiFastapi, 
  SiNestjs, SiPython, SiPostgresql, SiDotnet, SiJavascript, 
  SiSupabase, SiGo, SiRust, SiPhp, SiMysql, SiRedis, 
  SiNginx, SiAmazonwebservices, SiGithub, SiDocker, SiLinux 
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { DiBootstrap, DiMsqlServer, DiTrello, DiWindows, DiSqllite } from "react-icons/di"; // Se agregó DiSqllite
import { RiTailwindCssFill } from "react-icons/ri";
import { LiaConnectdevelop } from "react-icons/lia";

export const data = {
  // LENGUAJES
  javascript: { name: "JavaScript", icon: <SiJavascript />, primary: "text-yellow-400", secondary: "text-yellow-500/50" },
  python: { name: "Python", icon: <SiPython />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  sql: { name: "SQL", icon: <TbSql />, primary: "text-indigo-400", secondary: "text-indigo-500/50" },
  csharp: { name: "C#", icon: <SiDotnet />, primary: "text-purple-500", secondary: "text-purple-600/50" },
  java: { name: "Java", icon: <FaJava />, primary: "text-red-500", secondary: "text-red-600/50" },
  php: { name: "PHP", icon: <SiPhp />, primary: "text-indigo-400", secondary: "text-indigo-500/50" },
  go: { name: "Go", icon: <SiGo />, primary: "text-cyan-500", secondary: "text-cyan-600/50" },
  rust: { name: "Rust", icon: <SiRust />, primary: "text-orange-700", secondary: "text-orange-800/50" },

  // BACKEND & FRAMEWORKS
  nestjs: { name: "Nest.js", icon: <SiNestjs />, primary: "text-red-500", secondary: "text-red-600/50" },
  fastapi: { name: "FastAPI", icon: <SiFastapi />, primary: "text-emerald-400", secondary: "text-emerald-500/50" },
  django: { name: "Django", icon: <SiDjango />, primary: "text-emerald-700", secondary: "text-emerald-800/50" },
  springboot: { name: "Spring Boot", icon: <SiSpringboot />, primary: "text-green-500", secondary: "text-green-600/50" },
  laravel: { name: "Laravel", icon: <FaLaravel />, primary: "text-red-600", secondary: "text-red-700/50" }, // Nuevo

  // FRONTEND
  react: { name: "React", icon: <FaReact />, primary: "text-cyan-400", secondary: "text-cyan-500/50" },
  angular: { name: "Angular", icon: <FaAngular />, primary: "text-red-600", secondary: "text-red-700/50" },
  tailwind: { name: "Tailwind CSS", icon: <RiTailwindCssFill />, primary: "text-cyan-500", secondary: "text-cyan-600/50" },
  bootstrap: { name: "Bootstrap", icon: <DiBootstrap />, primary: "text-purple-600", secondary: "text-purple-700/50" },

  // ERP & ENTERPRISE
  peoplesoft: { name: "PeopleSoft Dev", icon: <FaCogs />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  intelisis: { name: "Intelisis SDK", icon: <FaTerminal />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  enterprise: { name: "Enterprise", icon: <LiaConnectdevelop />, primary: "text-indigo-400", secondary: "text-indigo-500/50" },

  // BASES DE DATOS
  sqlserver: { name: "SQL Server", icon: <DiMsqlServer />, primary: "text-red-600", secondary: "text-red-700/50" },
  oracle: { name: "Oracle DB", icon: <SiOracle />, primary: "text-red-500", secondary: "text-red-600/50" },
  postgresql: { name: "PostgreSQL", icon: <SiPostgresql />, primary: "text-blue-400", secondary: "text-blue-500/50" },
  mysql: { name: "MySQL", icon: <SiMysql />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  supabase: { name: "Supabase", icon: <SiSupabase />, primary: "text-emerald-500", secondary: "text-emerald-600/50" },
  redis: { name: "Redis", icon: <SiRedis />, primary: "text-red-500", secondary: "text-red-600/50" },
  database: { name: "Database", icon: <FaDatabase />, primary: "text-indigo-400", secondary: "text-indigo-500/50" },
  sqlite: { name: "SQLite", icon: <DiSqllite />, primary: "text-sky-400", secondary: "text-sky-500/50" }, // Nuevo

  // INFRAESTRUCTURA
  aws: { name: "AWS", icon: <SiAmazonwebservices />, primary: "text-orange-400", secondary: "text-orange-500/50" },
  docker: { name: "Docker", icon: <SiDocker />, primary: "text-blue-400", secondary: "text-blue-500/50" },
  linux: { name: "Linux", icon: <SiLinux />, primary: "text-gray-100", secondary: "text-gray-400/50" },
  nginx: { name: "Nginx", icon: <SiNginx />, primary: "text-green-500", secondary: "text-green-600/50" },
  windows: { name: "Windows", icon: <DiWindows />, primary: "text-blue-600", secondary: "text-blue-700/50" },

  // HERRAMIENTAS
  vscode: { name: "VS Code", icon: <VscVscodeInsiders />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  cursor: { name: "Cursor IA", icon: <LiaConnectdevelop />, primary: "text-cyan-100", secondary: "text-cyan-400/50" },
  jetbrains: { name: "JetBrains", icon: <SiJetbrains />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  git: { name: "Git", icon: <FaGitAlt />, primary: "text-orange-600", secondary: "text-orange-700/50" },
  github: { name: "GitHub", icon: <SiGithub />, primary: "text-white", secondary: "text-white/20" },
  azurest: { name: "Azure Studio", icon: <VscAzure />, primary: "text-blue-400", secondary: "text-blue-500/50" },
  ssms: { name: "SSMS", icon: <FaDatabase />, primary: "text-amber-500", secondary: "text-amber-600/50" },
  trello: { name: "Trello", icon: <DiTrello />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  figma: { name: "Figma", icon: <FaFigma />, primary: "text-pink-400", secondary: "text-pink-500/50" },
  code: { name: "Code", icon: <FaCode />, primary: "text-indigo-400", secondary: "text-indigo-500/50" },
  cogs: { name: "Cogs", icon: <FaCogs />, primary: "text-blue-400", secondary: "text-blue-500/50" },
};