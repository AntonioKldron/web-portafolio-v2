import React from 'react';
import { data as dt } from '@data/icons/iconsRegistro';

// Importamos íconos representativos para cada categoría (usando react-icons)
import { 
  FaCode, FaCogs, FaReact, FaLayerGroup, FaMobileAlt, 
  FaDatabase, FaCloud, FaGitAlt, FaLaptopCode, FaUsers, 
  FaRobot, FaGamepad, FaMicrochip, FaGraduationCap 
} from 'react-icons/fa';
import { AiOutlineGold } from 'react-icons/ai';

export const herramientasCategorias = [
  { 
    id: 'cat-1-lenguajes', 
    icon: <FaCode />, 
    items: [dt.javascript, dt.python, dt.sql, dt.csharp, dt.java].filter(Boolean) 
  },
  { 
    id: 'cat-2-backend', 
    icon: <FaCogs />, 
    items: [dt.nodejs, dt.fastapi, dt.django, dt.djangorest, dt.netframework, dt.nestjs].filter(Boolean) 
  },
  { 
    id: 'cat-3-frontend', 
    icon: <FaReact />, 
    items: [dt.react, dt.vue, dt.angular, dt.tailwind, dt.html, dt.css, dt.bootstrap, dt.astro].filter(Boolean) 
  },
  { 
    id: 'cat-4-meta-frameworks', 
    icon: <FaLayerGroup />, 
    items: [].filter(Boolean)
  },
  { 
    id: 'cat-5-movil', 
    icon: <FaMobileAlt />, 
    items: [].filter(Boolean) 
  },
  { 
    id: 'cat-6-bases-de-datos', 
    icon: <FaDatabase />, 
    items: [dt.sqlserver, dt.oracle, dt.postgresql, dt.mysql, dt.sqlite].filter(Boolean)
  },
  { 
    id: 'cat-7-cloud-baas', 
    icon: <FaCloud />, 
    items: [dt.vercel, dt.firebase, dt.supabase].filter(Boolean) 
  },
  { 
    id: 'cat-8-devops', 
    icon: <FaGitAlt />, 
    items: [dt.docker, dt.git, dt.gitlab, dt.github].filter(Boolean) 
  },
  { 
    id: 'cat-9-dev-tools', 
    icon: <FaLaptopCode />, 
    items: [dt.vscode, dt.vstudio, dt.jetbrains, dt.antigravity, dt.cursor, dt.jupyter, dt.postman, dt.termius, dt.terminal, dt.figma, dt.api, dt.json, dt.xml, dt.markdown, dt.powerbi].filter(Boolean) 
  },
  { 
    id: 'cat-10-productividad', 
    icon: <FaUsers />, 
    items: [dt.teams, dt.discord, dt.trello, dt.office365].filter(Boolean) 
  },
  { 
    id: 'cat-11-ia', 
    icon: <FaRobot />, 
    items: [].filter(Boolean) 
  },
  { 
    id: 'cat-12-game-dev', 
    icon: <FaGamepad />, 
    items: [].filter(Boolean)  
  },
  { 
    id: 'cat-13-erp-cms', 
    icon: <AiOutlineGold />, 
    items: [dt.peoplesoft, dt.intelisis].filter(Boolean)  
  },
  { 
    id: 'cat-14-os-hardware', 
    icon: <FaMicrochip />, 
    items: [dt.linux, dt.windows].filter(Boolean)  
  }
];

const categoriaTitulos = {
  es: [
    'Lenguajes', 'Backend', 'Frontend', 'Meta-Frameworks', 'Móvil', 
    'Bases de Datos', 'Cloud & BAAS', 'DevOps', 'Dev Tools', 
    'Productividad', 'IA', 'Game Dev', 'ERP & CMS', 
    'OS & Hardware'
  ],
  en: [
    'Languages', 'Backend', 'Frontend', 'Meta-Frameworks', 'Mobile', 
    'Databases', 'Cloud & BAAS', 'DevOps', 'Dev Tools', 
    'Productivity', 'AI', 'Game Dev', 'ERP & CMS', 
    'OS & Hardware'
  ],
};

export const herramientasStaticData = {
  es: {
    header: { subtitulo: 'Herramientas', tituloPrincipal: 'Stack', tituloHighlight: 'Tecnológico' },
    categorias: herramientasCategorias.map((c, i) => ({ ...c, title: categoriaTitulos.es[i] })),
  },
  en: {
    header: { subtitulo: 'Stack', tituloPrincipal: 'Tech', tituloHighlight: 'Stack' },
    categorias: herramientasCategorias.map((c, i) => ({ ...c, title: categoriaTitulos.en[i] })),
  },
};

export const herramientasData = herramientasStaticData;