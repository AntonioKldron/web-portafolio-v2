import React from 'react';

// LENGUAJES
import {
  IcoJavascript, IcoPython, IcoSql, IcoCsharp, IcoJava, IcoPhp, IcoGo, 
  IcoRust, IcoTypescript, IcoDart, IcoSwift
} from './icon-iconify/dataIconify.jsx';

// BACKEND & FRAMEWORKS
import {
  IcoNodejs, IcoExpress, IcoNestjs, IcoFastapi, IcoDjango, IcoDjangorest, 
  IcoSpring, IcoSpringboot, IcoLaravel, IcoCodeigniter, IcoNet, IcoHibernate
} from './icon-iconify/dataIconify.jsx';

// FRONTEND
import {
  IcoReact, IcoAngular, IcoVue, IcoSvelte, IcoNextjs, IcoNuxtjs, IcoAstro, 
  IcoJquery, IcoTailwind, IcoHtml, IcoCss, IcoBootstrap, IcoLivewire
} from './icon-iconify/dataIconify.jsx';

// MÓVIL
import {
  IcoAndroid, IcoFlutter, IcoReactnative
} from './icon-iconify/dataIconify.jsx';

// ERP & ENTERPRISE
import {
  IcoIntelisis, IcoPeoplesoft
} from './icon-iconify/dataIconify.jsx';

// BASES DE DATOS & BAAS
import {
  IcoSqlserver, IcoOracle, IcoPostgresql, IcoMysql, IcoMongodb, 
  IcoSupabase, IcoFirebase, IcoRedis, IcoDatabase, IcoSqlite
} from './icon-iconify/dataIconify.jsx';

// INFRAESTRUCTURA & HARDWARE
import {
  IcoAws, IcoDocker, IcoKubernetes, IcoLinux, IcoNginx, 
  IcoVercel, IcoWindows, IcoArduino, IcoAzure
} from './icon-iconify/dataIconify.jsx';

// HERRAMIENTAS & ARCHIVOS
import {
  IcoVscode, IcoN8n, IcoJetbrains, IcoGit, IcoGitlab, IcoGithub, 
  IcoTrello, IcoApi, IcoTerminal, IcoJson, IcoXml, IcoCode, 
  IcoCogs, IcoPowerBi, IcoCursor, IcoFigma
} from './icon-iconify/dataIconify.jsx';


export const data = {
  // LENGUAJES
  javascript: { name: "JavaScript", icon: <IcoJavascript />, primary: "text-yellow-400", secondary: "text-yellow-500/50" },
  python: { name: "Python", icon: <IcoPython />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  sql: { name: "SQL", icon: <IcoSql />, primary: "text-amber-500", secondary: "text-amber-600/50" },
  csharp: { name: "C#", icon: <IcoCsharp />, primary: "text-purple-500", secondary: "text-purple-600/50" },
  java: { name: "Java", icon: <IcoJava />, primary: "text-red-500", secondary: "text-red-600/50" },
  php: { name: "PHP", icon: <IcoPhp />, primary: "text-indigo-400", secondary: "text-indigo-500/50" },
  go: { name: "Go", icon: <IcoGo />, primary: "text-cyan-500", secondary: "text-cyan-600/50" },
  rust: { name: "Rust", icon: <IcoRust />, primary: "text-orange-700", secondary: "text-orange-800/50" },
  typescript: { name: "TypeScript", icon: <IcoTypescript />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  dart: { name: "Dart", icon: <IcoDart />, primary: "text-cyan-500", secondary: "text-cyan-600/50" },
  swift: { name: "Swift", icon: <IcoSwift />, primary: "text-orange-500", secondary: "text-orange-600/50" },

  // BACKEND & FRAMEWORKS
  nodejs: { name: "Node.js", icon: <IcoNodejs />, primary: "text-green-600", secondary: "text-green-700/50" },
  express: { name: "Express", icon: <IcoExpress />, primary: "text-gray-300", secondary: "text-gray-400/50" },
  nestjs: { name: "Nest.js", icon: <IcoNestjs />, primary: "text-red-500", secondary: "text-red-600/50" },
  fastapi: { name: "FastAPI", icon: <IcoFastapi />, primary: "text-emerald-400", secondary: "text-emerald-500/50" },
  django: { name: "Django", icon: <IcoDjango />, primary: "text-emerald-700", secondary: "text-emerald-800/50" },
  djangorest: { name: "Rest Framework", icon: <IcoDjangorest />, primary: "text-emerald-700", secondary: "text-emerald-800/50" },
  spring: { name: "Spring", icon: <IcoSpring />, primary: "text-green-500", secondary: "text-green-600/50" },
  springboot: { name: "Spring Boot", icon: <IcoSpringboot />, primary: "text-green-500", secondary: "text-green-600/50" },
  laravel: { name: "Laravel", icon: <IcoLaravel />, primary: "text-red-600", secondary: "text-red-700/50" },
  codeigniter: { name: "CodeIgniter", icon: <IcoCodeigniter />, primary: "text-red-500", secondary: "text-red-600/50" },
  net: { name: ".Net", icon: <IcoNet />, primary: "text-purple-500", secondary: "text-purple-600/50" }, 
  hibernate: { name: "Hibernate", icon: <IcoHibernate />, primary: "text-amber-500", secondary: "text-amber-600/50" },

  // FRONTEND
  react: { name: "React", icon: <IcoReact />, primary: "text-cyan-400", secondary: "text-cyan-500/50" },
  angular: { name: "Angular", icon: <IcoAngular />, primary: "text-red-600", secondary: "text-red-700/50" },
  vue: { name: "Vue.js", icon: <IcoVue />, primary: "text-emerald-500", secondary: "text-emerald-600/50" },
  svelte: { name: "Svelte", icon: <IcoSvelte />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  nextjs: { name: "Next.js", icon: <IcoNextjs />, primary: "text-white", secondary: "text-white/50" },
  nuxtjs: { name: "Nuxt", icon: <IcoNuxtjs />, primary: "text-emerald-500", secondary: "text-emerald-600/50" },
  astro: { name: "Astro", icon: <IcoAstro />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  jquery: { name: "jQuery", icon: <IcoJquery />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  tailwind: { name: "Tailwind CSS", icon: <IcoTailwind />, primary: "text-cyan-500", secondary: "text-cyan-600/50" },
  html: { name: "HTML5", icon: <IcoHtml />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  css: { name: "CSS3", icon: <IcoCss />, primary: "text-blue-400", secondary: "text-blue-500/50" },
  bootstrap: { name: "Bootstrap", icon: <IcoBootstrap />, primary: "text-purple-600", secondary: "text-purple-700/50" },
  livewire: { name: "Livewire", icon: <IcoLivewire />, primary: "text-fuchsia-500", secondary: "text-fuchsia-500/50" },

  // MÓVIL
  android: { name: "Android", icon: <IcoAndroid />, primary: "text-green-500", secondary: "text-green-600/50" },
  flutter: { name: "Flutter", icon: <IcoFlutter />, primary: "text-cyan-400", secondary: "text-cyan-500/50" },
  reactnative: { name: "React Native", icon: <IcoReactnative />, primary: "text-cyan-500", secondary: "text-cyan-600/50" },

  // ERP & ENTERPRISE
  peoplesoft: { name: "PeopleSoft Tools", icon: <IcoPeoplesoft />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  intelisis: { name: "Intelisis SDK", icon: <IcoIntelisis />, primary: "text-orange-500", secondary: "text-orange-600/50" },

  // BASES DE DATOS & BAAS
  sqlserver: { name: "SQL Server", icon: <IcoSqlserver />, primary: "text-red-600", secondary: "text-red-700/50" },
  oracle: { name: "Oracle DB", icon: <IcoOracle />, primary: "text-red-500", secondary: "text-red-600/50" },
  postgresql: { name: "PostgreSQL", icon: <IcoPostgresql />, primary: "text-blue-400", secondary: "text-blue-500/50" },
  mysql: { name: "MySQL", icon: <IcoMysql />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  mongodb: { name: "MongoDB", icon: <IcoMongodb />, primary: "text-green-500", secondary: "text-green-600/50" },
  supabase: { name: "Supabase", icon: <IcoSupabase />, primary: "text-emerald-500", secondary: "text-emerald-600/50" },
  firebase: { name: "Firebase", icon: <IcoFirebase />, primary: "text-yellow-500", secondary: "text-yellow-600/50" },
  redis: { name: "Redis", icon: <IcoRedis />, primary: "text-red-500", secondary: "text-red-600/50" },
  database: { name: "Database", icon: <IcoDatabase />, primary: "text-indigo-400", secondary: "text-indigo-500/50" },
  sqlite: { name: "SQLite", icon: <IcoSqlite />, primary: "text-sky-400", secondary: "text-sky-500/50" }, 

  // INFRAESTRUCTURA & HARDWARE
  aws: { name: "AWS", icon: <IcoAws />, primary: "text-orange-400", secondary: "text-orange-500/50" },
  docker: { name: "Docker", icon: <IcoDocker />, primary: "text-blue-400", secondary: "text-blue-500/50" },
  kubernetes: { name: "Kubernetes", icon: <IcoKubernetes />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  linux: { name: "Linux", icon: <IcoLinux />, primary: "text-gray-100", secondary: "text-gray-400/50" },
  nginx: { name: "Nginx", icon: <IcoNginx />, primary: "text-green-500", secondary: "text-green-600/50" },
  vercel: { name: "Vercel", icon: <IcoVercel />, primary: "text-white", secondary: "text-white/40" },
  windows: { name: "Windows", icon: <IcoWindows />, primary: "text-blue-600", secondary: "text-blue-700/50" },
  arduino: { name: "Arduino", icon: <IcoArduino />, primary: "text-teal-500", secondary: "text-teal-600/50" },
  azure: { name: "Azure", icon: <IcoAzure />, primary: "text-blue-400", secondary: "text-blue-500/50" },

  // HERRAMIENTAS & ARCHIVOS
  vscode: { name: "VS Code", icon: <IcoVscode />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  n8n: { name: "n8n", icon: <IcoN8n />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  cursor: { name: "Cursor IA", icon: <IcoCursor />, primary: "text-cyan-100", secondary: "text-cyan-400/50" },
  jetbrains: { name: "JetBrains", icon: <IcoJetbrains />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  git: { name: "Git", icon: <IcoGit />, primary: "text-orange-600", secondary: "text-orange-700/50" },
  gitlab: { name: "GitLab", icon: <IcoGitlab />, primary: "text-orange-600", secondary: "text-orange-700/50" },
  github: { name: "GitHub", icon: <IcoGithub />, primary: "text-white", secondary: "text-white/20" },
  trello: { name: "Trello", icon: <IcoTrello />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  figma: { name: "Figma", icon: <IcoFigma />, primary: "text-pink-400", secondary: "text-pink-500/50" },
  api: { name: "API REST", icon: <IcoApi />, primary: "text-green-500", secondary: "text-green-600/50" },
  terminal: { name: "Terminal", icon: <IcoTerminal />, primary: "text-gray-300", secondary: "text-gray-400/50" },
  json: { name: "JSON", icon: <IcoJson />, primary: "text-yellow-400", secondary: "text-yellow-500/50" },
  xml: { name: "XML", icon: <IcoXml />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  code: { name: "Code", icon: <IcoCode />, primary: "text-indigo-400", secondary: "text-indigo-500/50" },
  cogs: { name: "Cogs", icon: <IcoCogs />, primary: "text-blue-400", secondary: "text-blue-500/50" },
  powerbi: { name: "Power Bi", icon: <IcoPowerBi />, primary: "text-orange-500", secondary: "text-orange-600/50" },
};