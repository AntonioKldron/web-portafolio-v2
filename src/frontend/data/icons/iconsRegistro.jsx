import React from 'react';
import { 
  FaFigma, FaGitAlt, FaTerminal, FaAngular, FaReact, 
  FaJava, FaCode, FaCogs, FaDatabase, FaLaravel,
  FaHtml5, FaCss3Alt, FaVuejs, FaSwift    
} from 'react-icons/fa'; 
import { VscAzure, VscVscodeInsiders } from "react-icons/vsc";
import { 
  SiOracle, SiJetbrains, SiSpringboot, SiDjango, SiFastapi, 
  SiNestjs, SiPython, SiPostgresql, SiJavascript, 
  SiSupabase, SiGo, SiRust, SiPhp, SiMysql, SiRedis, 
  SiNginx, SiAmazonwebservices, SiGithub, SiDocker, SiLinux,
  SiLivewire, SiVercel, SiN8N, SiTypescript, SiJquery, SiAstro,
  SiNextdotjs, SiArduino, SiHibernate, SiFlutter         
} from "react-icons/si";
import { TbBrandCSharp, TbFileTypeSql, TbBrandNuxt, TbBrandReactNative, TbApi } from "react-icons/tb";
import { DiBootstrap, DiMsqlServer, DiTrello, DiWindows, DiSqllite, DiCodeigniter, DiMongodb } from "react-icons/di"; 
import { RiTailwindCssFill, RiSvelteFill } from "react-icons/ri";
import { LiaConnectdevelop } from "react-icons/lia";
import { LuFileJson2 } from "react-icons/lu";
import { BsFiletypeXml } from "react-icons/bs"
import { AiOutlineDotNet } from "react-icons/ai";
import { DiAndroid, DiDart, DiNodejs  } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoKubernetes } from "react-icons/bi";

/*
icons img
*/ 
import intelisis from '../../assets/img/data-icons/intelisis.png';
import peoplesoft from '../../assets/img/data-icons/peoplesoft.png';
import cursor from '../../assets/img/data-icons/cursor-ai.png';
import powerbi from '../../assets/img/data-icons/power-bi.png';

export const data = {
  // LENGUAJES
  javascript: { name: "JavaScript", icon: <SiJavascript />, primary: "text-yellow-400", secondary: "text-yellow-500/50" },
  python: { name: "Python", icon: <SiPython />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  sql: { name: "SQL", icon: <TbFileTypeSql />, primary: "text-amber-500", secondary: "text-amber-600/50" },
  csharp: { name: "C#", icon: <TbBrandCSharp />, primary: "text-purple-500", secondary: "text-purple-600/50" },
  java: { name: "Java", icon: <FaJava />, primary: "text-red-500", secondary: "text-red-600/50" },
  php: { name: "PHP", icon: <SiPhp />, primary: "text-indigo-400", secondary: "text-indigo-500/50" },
  go: { name: "Go", icon: <SiGo />, primary: "text-cyan-500", secondary: "text-cyan-600/50" },
  rust: { name: "Rust", icon: <SiRust />, primary: "text-orange-700", secondary: "text-orange-800/50" },
  typescript: { name: "TypeScript", icon: <SiTypescript />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  dart: { name: "Dart", icon: <DiDart />, primary: "text-cyan-500", secondary: "text-cyan-600/50" },
  swift: { name: "Swift", icon: <FaSwift />, primary: "text-orange-500", secondary: "text-orange-600/50" },

  // BACKEND & FRAMEWORKS
  nodejs: { name: "Node.js", icon: <DiNodejs />, primary: "text-green-600", secondary: "text-green-700/50" },
  nestjs: { name: "Nest.js", icon: <SiNestjs />, primary: "text-red-500", secondary: "text-red-600/50" },
  fastapi: { name: "FastAPI", icon: <SiFastapi />, primary: "text-emerald-400", secondary: "text-emerald-500/50" },
  django: { name: "Django", icon: <SiDjango />, primary: "text-emerald-700", secondary: "text-emerald-800/50" },
  springboot: { name: "Spring Boot", icon: <SiSpringboot />, primary: "text-green-500", secondary: "text-green-600/50" },
  laravel: { name: "Laravel", icon: <FaLaravel />, primary: "text-red-600", secondary: "text-red-700/50" },
  codeigniter: { name: "CodeIgniter", icon: <DiCodeigniter />, primary: "text-red-500", secondary: "text-red-600/50" },
  net: { name: ".Net", icon: <AiOutlineDotNet />, primary: "text-purple-500", secondary: "text-purple-600/50" }, 
  hibernate: { name: "Hibernate", icon: <SiHibernate />, primary: "text-amber-500", secondary: "text-amber-600/50" },

  // FRONTEND
  react: { name: "React", icon: <FaReact />, primary: "text-cyan-400", secondary: "text-cyan-500/50" },
  angular: { name: "Angular", icon: <FaAngular />, primary: "text-red-600", secondary: "text-red-700/50" },
  vue: { name: "Vue.js", icon: <FaVuejs />, primary: "text-emerald-500", secondary: "text-emerald-600/50" },
  svelte: { name: "Svelte", icon: <RiSvelteFill />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  nextjs: { name: "Next.js", icon: <SiNextdotjs />, primary: "text-white", secondary: "text-white/50" },
  nuxtjs: { name: "Nuxt", icon: <TbBrandNuxt />, primary: "text-emerald-500", secondary: "text-emerald-600/50" },
  astro: { name: "Astro", icon: <SiAstro />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  jquery: { name: "jQuery", icon: <SiJquery />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  tailwind: { name: "Tailwind CSS", icon: <RiTailwindCssFill />, primary: "text-cyan-500", secondary: "text-cyan-600/50" },
  html: { name: "HTML5", icon: <FaHtml5 />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  css: { name: "CSS3", icon: <FaCss3Alt />, primary: "text-blue-400", secondary: "text-blue-500/50" },
  bootstrap: { name: "Bootstrap", icon: <DiBootstrap />, primary: "text-purple-600", secondary: "text-purple-700/50" },
  livewire: { name: "Livewire", icon: <SiLivewire />, primary: "text-fuchsia-500", secondary: "text-fuchsia-500/50" },

  // MÓVIL
  android: { name: "Android", icon: <DiAndroid />, primary: "text-green-500", secondary: "text-green-600/50" },
  flutter: { name: "Flutter", icon: <SiFlutter />, primary: "text-cyan-400", secondary: "text-cyan-500/50" },
  reactnative: { name: "React Native", icon: <TbBrandReactNative />, primary: "text-cyan-500", secondary: "text-cyan-600/50" },

  // ERP & ENTERPRISE
  peoplesoft: { name: "PeopleSoft Dev", icon: <img src={peoplesoft} alt="PeopleSoft" className="w-[1em] h-[1em] object-contain" />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  intelisis: { name: "Intelisis SDK", icon: <img src={intelisis} alt="Intelisis" className="w-[1em] h-[1em] object-contain" />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  enterprise: { name: "Enterprise", icon: <LiaConnectdevelop />, primary: "text-indigo-400", secondary: "text-indigo-500/50" },

  // BASES DE DATOS & BAAS
  sqlserver: { name: "SQL Server", icon: <DiMsqlServer />, primary: "text-red-600", secondary: "text-red-700/50" },
  oracle: { name: "Oracle DB", icon: <SiOracle />, primary: "text-red-500", secondary: "text-red-600/50" },
  postgresql: { name: "PostgreSQL", icon: <SiPostgresql />, primary: "text-blue-400", secondary: "text-blue-500/50" },
  mysql: { name: "MySQL", icon: <SiMysql />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  mongodb: { name: "MongoDB", icon: <DiMongodb />, primary: "text-green-500", secondary: "text-green-600/50" },
  supabase: { name: "Supabase", icon: <SiSupabase />, primary: "text-emerald-500", secondary: "text-emerald-600/50" },
  firebase: { name: "Firebase", icon: <IoLogoFirebase />, primary: "text-yellow-500", secondary: "text-yellow-600/50" },
  redis: { name: "Redis", icon: <SiRedis />, primary: "text-red-500", secondary: "text-red-600/50" },
  database: { name: "Database", icon: <FaDatabase />, primary: "text-indigo-400", secondary: "text-indigo-500/50" },
  sqlite: { name: "SQLite", icon: <DiSqllite />, primary: "text-sky-400", secondary: "text-sky-500/50" }, 

  // INFRAESTRUCTURA & HARDWARE
  aws: { name: "AWS", icon: <SiAmazonwebservices />, primary: "text-orange-400", secondary: "text-orange-500/50" },
  docker: { name: "Docker", icon: <SiDocker />, primary: "text-blue-400", secondary: "text-blue-500/50" },
  kubernetes: { name: "Kubernetes", icon: <BiLogoKubernetes />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  linux: { name: "Linux", icon: <SiLinux />, primary: "text-gray-100", secondary: "text-gray-400/50" },
  nginx: { name: "Nginx", icon: <SiNginx />, primary: "text-green-500", secondary: "text-green-600/50" },
  vercel: { name: "Vercel", icon: <SiVercel />, primary: "text-white", secondary: "text-white/40" },
  windows: { name: "Windows", icon: <DiWindows />, primary: "text-blue-600", secondary: "text-blue-700/50" },
  arduino: { name: "Arduino", icon: <SiArduino />, primary: "text-teal-500", secondary: "text-teal-600/50" },
  azure: { name: "Azure", icon: <VscAzure />, primary: "text-blue-400", secondary: "text-blue-500/50" },

  // HERRAMIENTAS & ARCHIVOS
  vscode: { name: "VS Code", icon: <VscVscodeInsiders />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  n8n: { name: "n8n", icon: <SiN8N />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  cursor: { name: "Cursor IA", icon: <img src={cursor} alt="Cursor AI" className="w-[1em] h-[1em] object-contain" />, primary: "text-cyan-100", secondary: "text-cyan-400/50" },
  jetbrains: { name: "JetBrains", icon: <SiJetbrains />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  git: { name: "Git", icon: <FaGitAlt />, primary: "text-orange-600", secondary: "text-orange-700/50" },
  github: { name: "GitHub", icon: <SiGithub />, primary: "text-white", secondary: "text-white/20" },
  trello: { name: "Trello", icon: <DiTrello />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  figma: { name: "Figma", icon: <FaFigma />, primary: "text-pink-400", secondary: "text-pink-500/50" },
  api: { name: "API REST", icon: <TbApi />, primary: "text-green-500", secondary: "text-green-600/50" },
  terminal: { name: "Terminal", icon: <FaTerminal />, primary: "text-gray-300", secondary: "text-gray-400/50" },
  json: { name: "JSON", icon: <LuFileJson2 />, primary: "text-yellow-400", secondary: "text-yellow-500/50" },
  xml: { name: "XML", icon: <BsFiletypeXml />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  code: { name: "Code", icon: <FaCode />, primary: "text-indigo-400", secondary: "text-indigo-500/50" },
  cogs: { name: "Cogs", icon: <FaCogs />, primary: "text-blue-400", secondary: "text-blue-500/50" },
  powerbi: { name: "Power Bi", icon: <img src={powerbi} alt="Intelisis" className="w-[1em] h-[1em] object-contain" />, primary: "text-orange-500", secondary: "text-orange-600/50" },
};