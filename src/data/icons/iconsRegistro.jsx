import React from 'react';

// ==========================================
// IMPORTACIÓN DE ICONOS
// ==========================================

import {
  // LENGUAJES
  IcoJavascript, IcoPython, IcoSql, IcoCsharp, IcoJava, IcoPhp, IcoGo, 
  IcoRust, IcoTypescript, IcoDart, IcoSwift, IcoKotlin, IcoCmasmas, IcoC, IcoR,
  // BACKEND & FRAMEWORKS
  IcoNodejs, IcoExpress, IcoNestjs, IcoFastapi, IcoDjango, IcoDjangorest, 
  IcoSpring, IcoSpringboot, IcoSpringsecurity, IcoLaravel, IcoCodeigniter, 
  IcoSymfony, IcoNetFramwork, IcoNetCore, IcoHibernate, IcoJakarta,
  // FRONTEND & UI
  IcoReact, IcoAngular, IcoVue, IcoSvelte, IcoJquery, IcoTailwind, IcoHtml, 
  IcoCss, IcoBootstrap, IcoLivewire, IcoScss,
  // META-FRAMEWORKS
  IcoNextjs, IcoNuxtjs, IcoAstro,
  // MÓVIL
  IcoAndroid, IcoFlutter, IcoReactnative, IcoJetpackcompose,
  // BASES DE DATOS & BAAS
  IcoSqlserver, IcoOracle, IcoPostgresql, IcoMysql, IcoMongodb, 
  IcoSupabase, IcoFirebase, IcoRedis, IcoDatabase, IcoSqlite,
  // CLOUD & HOSTING
  IcoAws, IcoAzure, IcoVercel,
  // DEVOPS & SISTEMAS
  IcoDocker, IcoKubernetes, IcoLinux, IcoNginx, IcoWindows, IcoGit, IcoGitlab, IcoGithub,
  // IDES & HERRAMIENTAS
  IcoVscode, IcoN8n, IcoJetbrains, IcoApi, IcoTerminal, IcoJson, IcoXml, IcoCode, 
  IcoCogs, IcoPowerBi, IcoCursor, IcoFigma, IcoVstudio, IcoTermius, IcoJupyter, IcoPostman, IcoMarkdown,
  // PRODUCTIVIDAD
  IcoTrello, IcoAntigravity, IcoTeams, IcoDiscord, IcoOffice365, IcoSalesforce,
  // IA
  IcoGemini, IcoOpenia, IcoCopilot,
  // GAME DEV
  IcoUnity, IcoUnreal,
  // ENTERPRISE & CMS
  IcoIntelisis, IcoPeoplesoft, IcoWordpress,
  // HARDWARE
  IcoArduino,
  // ACADEMIAS
  IcoAcademyCisco, IcoAcademyAzure, IcoAcademyAws, IcoAcademyOracle,
  IcoAcademyIbm, IcoAcademyGoogle, IcoAcademyUdemy, IcoAcademyPlatzi,
  IcoAcademyFreecodecamp, IcoAcademyLinkedin
} from './icon-iconify/dataIconify.jsx';

export const data = {
  // 1. LENGUAJES DE PROGRAMACIÓN
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
  kotlin: { name: "Kotlin", icon: <IcoKotlin />, primary: "text-purple-500", secondary: "text-purple-600/50" },
  cmasmas: { name: "C++", icon: <IcoCmasmas />, primary: "text-blue-600", secondary: "text-blue-700/50" },
  c: { name: "C", icon: <IcoC />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  r: { name: "R", icon: <IcoR />, primary: "text-blue-400", secondary: "text-blue-500/50" },

  // 2. BACKEND & FRAMEWORKS
  nodejs: { name: "Node", icon: <IcoNodejs />, primary: "text-green-600", secondary: "text-green-700/50" },
  express: { name: "Express", icon: <IcoExpress />, primary: "text-gray-300", secondary: "text-gray-400/50" },
  nestjs: { name: "Nest", icon: <IcoNestjs />, primary: "text-red-500", secondary: "text-red-600/50" },
  fastapi: { name: "FastAPI", icon: <IcoFastapi />, primary: "text-emerald-400", secondary: "text-emerald-500/50" },
  django: { name: "Django", icon: <IcoDjango />, primary: "text-emerald-700", secondary: "text-emerald-800/50" },
  djangorest: { name: "Rest Framework", icon: <IcoDjangorest />, primary: "text-emerald-700", secondary: "text-emerald-800/50" },
  spring: { name: "Spring", icon: <IcoSpring />, primary: "text-green-500", secondary: "text-green-600/50" },
  springboot: { name: "Spring Boot", icon: <IcoSpringboot />, primary: "text-green-500", secondary: "text-green-600/50" },
  springsecurity: { name: "Spring Security", icon: <IcoSpringsecurity />, primary: "text-green-600", secondary: "text-green-700/50" },
  laravel: { name: "Laravel", icon: <IcoLaravel />, primary: "text-red-600", secondary: "text-red-700/50" },
  codeigniter: { name: "CodeIgniter", icon: <IcoCodeigniter />, primary: "text-red-500", secondary: "text-red-600/50" },
  symfony: { name: "Symfony", icon: <IcoSymfony />, primary: "text-gray-800", secondary: "text-gray-900/50" },
  netframework: { name: ".NET Framework", icon: <IcoNetFramwork />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  netcore: { name: ".NET Core", icon: <IcoNetCore />, primary: "text-purple-600", secondary: "text-purple-700/50" },
  hibernate: { name: "Hibernate", icon: <IcoHibernate />, primary: "text-amber-500", secondary: "text-amber-600/50" },
  jakarta: { name: "Jakarta EE", icon: <IcoJakarta />, primary: "text-blue-500", secondary: "text-blue-600/50" },

  // 3. FRONTEND & UI
  react: { name: "React", icon: <IcoReact />, primary: "text-cyan-400", secondary: "text-cyan-500/50" },
  angular: { name: "Angular", icon: <IcoAngular />, primary: "text-red-600", secondary: "text-red-700/50" },
  vue: { name: "Vue", icon: <IcoVue />, primary: "text-emerald-500", secondary: "text-emerald-600/50" },
  svelte: { name: "Svelte", icon: <IcoSvelte />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  jquery: { name: "jQuery", icon: <IcoJquery />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  tailwind: { name: "Tailwind CSS", icon: <IcoTailwind />, primary: "text-cyan-500", secondary: "text-cyan-600/50" },
  html: { name: "HTML5", icon: <IcoHtml />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  css: { name: "CSS3", icon: <IcoCss />, primary: "text-blue-400", secondary: "text-blue-500/50" },
  bootstrap: { name: "Bootstrap", icon: <IcoBootstrap />, primary: "text-purple-600", secondary: "text-purple-700/50" },
  livewire: { name: "Livewire", icon: <IcoLivewire />, primary: "text-fuchsia-500", secondary: "text-fuchsia-500/50" },
  scss: { name: "SCSS", icon: <IcoScss />, primary: "text-pink-500", secondary: "text-pink-600/50" },

  // 4. META-FRAMEWORKS & FULLSTACK
  nextjs: { name: "Next", icon: <IcoNextjs />, primary: "text-white", secondary: "text-white/50" },
  nuxtjs: { name: "Nuxt", icon: <IcoNuxtjs />, primary: "text-emerald-500", secondary: "text-emerald-600/50" },
  astro: { name: "Astro", icon: <IcoAstro />, primary: "text-orange-500", secondary: "text-orange-600/50" },

  // 5. DESARROLLO MÓVIL
  android: { name: "Android", icon: <IcoAndroid />, primary: "text-green-500", secondary: "text-green-600/50" },
  flutter: { name: "Flutter", icon: <IcoFlutter />, primary: "text-cyan-400", secondary: "text-cyan-500/50" },
  reactnative: { name: "React Native", icon: <IcoReactnative />, primary: "text-cyan-500", secondary: "text-cyan-600/50" },
  jetpackcompose: { name: "Jetpack Compose", icon: <IcoJetpackcompose />, primary: "text-green-500", secondary: "text-green-600/50" },

  // 6. BASES DE DATOS
  sqlserver: { name: "SQL Server", icon: <IcoSqlserver />, primary: "text-red-600", secondary: "text-red-700/50" },
  oracle: { name: "Oracle DB", icon: <IcoOracle />, primary: "text-red-500", secondary: "text-red-600/50" },
  postgresql: { name: "PostgreSQL", icon: <IcoPostgresql />, primary: "text-blue-400", secondary: "text-blue-500/50" },
  mysql: { name: "MySQL", icon: <IcoMysql />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  mongodb: { name: "MongoDB", icon: <IcoMongodb />, primary: "text-green-500", secondary: "text-green-600/50" },
  redis: { name: "Redis", icon: <IcoRedis />, primary: "text-red-500", secondary: "text-red-600/50" },
  database: { name: "Database", icon: <IcoDatabase />, primary: "text-indigo-400", secondary: "text-indigo-500/50" },
  sqlite: { name: "SQLite", icon: <IcoSqlite />, primary: "text-sky-400", secondary: "text-sky-500/50" },

  // 7. CLOUD, BAAS & HOSTING
  aws: { name: "AWS", icon: <IcoAws />, primary: "text-orange-400", secondary: "text-orange-500/50" },
  azure: { name: "Azure", icon: <IcoAzure />, primary: "text-blue-400", secondary: "text-blue-500/50" },
  vercel: { name: "Vercel", icon: <IcoVercel />, primary: "text-white", secondary: "text-white/40" },
  firebase: { name: "Firebase", icon: <IcoFirebase />, primary: "text-yellow-500", secondary: "text-yellow-600/50" },
  supabase: { name: "Supabase", icon: <IcoSupabase />, primary: "text-emerald-500", secondary: "text-emerald-600/50" },

  // 8. DEVOPS & CONTROL DE VERSIONES
  docker: { name: "Docker", icon: <IcoDocker />, primary: "text-blue-400", secondary: "text-blue-500/50" },
  kubernetes: { name: "Kubernetes", icon: <IcoKubernetes />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  git: { name: "Git", icon: <IcoGit />, primary: "text-orange-600", secondary: "text-orange-700/50" },
  gitlab: { name: "GitLab", icon: <IcoGitlab />, primary: "text-orange-600", secondary: "text-orange-700/50" },
  github: { name: "GitHub", icon: <IcoGithub />, primary: "text-white", secondary: "text-white/20" },
  nginx: { name: "Nginx", icon: <IcoNginx />, primary: "text-green-500", secondary: "text-green-600/50" },

  // 9. IDES & HERRAMIENTAS DE DESARROLLO
  vscode: { name: "VS Code", icon: <IcoVscode />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  vstudio: { name: "Visual Studio", icon: <IcoVstudio />, primary: "text-purple-600", secondary: "text-purple-700/50" },
  jetbrains: { name: "JetBrains", icon: <IcoJetbrains />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  cursor: { name: "Cursor IA", icon: <IcoCursor />, primary: "text-cyan-100", secondary: "text-cyan-400/50" },
  jupyter: { name: "Jupyter", icon: <IcoJupyter />, primary: "text-amber-500", secondary: "text-amber-600/50" },
  postman: { name: "Postman", icon: <IcoPostman />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  termius: { name: "Termius SSH", icon: <IcoTermius />, primary: "text-gray-300", secondary: "text-gray-400/50" },
  terminal: { name: "Terminal", icon: <IcoTerminal />, primary: "text-gray-300", secondary: "text-gray-400/50" },
  figma: { name: "Figma", icon: <IcoFigma />, primary: "text-pink-400", secondary: "text-pink-500/50" },
  api: { name: "API REST", icon: <IcoApi />, primary: "text-green-500", secondary: "text-green-600/50" },
  json: { name: "JSON", icon: <IcoJson />, primary: "text-yellow-400", secondary: "text-yellow-500/50" },
  xml: { name: "XML", icon: <IcoXml />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  markdown: { name: "Markdown", icon: <IcoMarkdown />, primary: "text-gray-200", secondary: "text-gray-400/50" },
  n8n: { name: "n8n", icon: <IcoN8n />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  powerbi: { name: "Power Bi", icon: <IcoPowerBi />, primary: "text-orange-500", secondary: "text-orange-600/50" },

  // 10. PRODUCTIVIDAD & COLABORACIÓN
  teams: { name: "Microsoft Teams", icon: <IcoTeams />, primary: "text-indigo-600", secondary: "text-indigo-700/50" },
  discord: { name: "Discord", icon: <IcoDiscord />, primary: "text-indigo-500", secondary: "text-indigo-600/50" },
  trello: { name: "Trello", icon: <IcoTrello />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  office365: { name: "Office 365", icon: <IcoOffice365 />, primary: "text-orange-600", secondary: "text-orange-700/50" },
  salesforce: { name: "Salesforce", icon: <IcoSalesforce />, primary: "text-sky-500", secondary: "text-sky-600/50" },
  antigravity: { name: "Antigravity", icon: <IcoAntigravity />, primary: "text-zinc-400", secondary: "text-zinc-500/50" },

  // 11. INTELIGENCIA ARTIFICIAL
  gemini: { name: "Google Gemini", icon: <IcoGemini />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  openia: { name: "OpenAI", icon: <IcoOpenia />, primary: "text-emerald-500", secondary: "text-emerald-600/50" },
  copilot: { name: "GitHub Copilot", icon: <IcoCopilot />, primary: "text-blue-400", secondary: "text-blue-500/50" },

  // 12. GAME DEVELOPMENT
  unity: { name: "Unity", icon: <IcoUnity />, primary: "text-gray-100", secondary: "text-gray-300/50" },
  unreal: { name: "Unreal Engine", icon: <IcoUnreal />, primary: "text-gray-200", secondary: "text-gray-400/50" },

  // 13. CMS, ERP & ENTERPRISE
  wordpress: { name: "WordPress", icon: <IcoWordpress />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  peoplesoft: { name: "PeopleSoft Tools", icon: <IcoPeoplesoft />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  intelisis: { name: "Intelisis SDK", icon: <IcoIntelisis />, primary: "text-orange-500", secondary: "text-orange-600/50" },

  // 14. SISTEMAS OPERATIVOS & HARDWARE
  linux: { name: "Linux", icon: <IcoLinux />, primary: "text-gray-100", secondary: "text-gray-400/50" },
  windows: { name: "Windows", icon: <IcoWindows />, primary: "text-blue-600", secondary: "text-blue-700/50" },
  arduino: { name: "Arduino", icon: <IcoArduino />, primary: "text-teal-500", secondary: "text-teal-600/50" },

  // 15. ACADEMIAS & CERTIFICACIONES
  eduCisco: { name: "Cisco", icon: <IcoAcademyCisco />, primary: "text-cyan-500", secondary: "text-cyan-600/50" },
  eduAzure: { name: "Azure", icon: <IcoAcademyAzure />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  eduAws: { name: "AWS", icon: <IcoAcademyAws />, primary: "text-orange-500", secondary: "text-orange-600/50" },
  eduOracle: { name: "Oracle", icon: <IcoAcademyOracle />, primary: "text-red-600", secondary: "text-red-700/50" },
  eduIbm: { name: "IBM", icon: <IcoAcademyIbm />, primary: "text-blue-600", secondary: "text-blue-700/50" },
  eduGoogle: { name: "Google", icon: <IcoAcademyGoogle />, primary: "text-blue-500", secondary: "text-blue-600/50" },
  eduUdemy: { name: "Udemy", icon: <IcoAcademyUdemy />, primary: "text-purple-600", secondary: "text-purple-700/50" },
  eduPlatzi: { name: "Platzi", icon: <IcoAcademyPlatzi />, primary: "text-green-500", secondary: "text-green-600/50" },
  eduFreecodecamp: { name: "FreeCodeCamp", icon: <IcoAcademyFreecodecamp />, primary: "text-slate-800", secondary: "text-slate-900/50" },
  eduLinkedin: { name: "LinkedIn", icon: <IcoAcademyLinkedin />, primary: "text-blue-700", secondary: "text-blue-800/50" },
};