import React from 'react';
import { data as dt } from '@data/icons/iconsRegistro';
import { FaCode, FaCogs, FaReact, FaDatabase, FaAws, FaGitAlt } from 'react-icons/fa';
import { AiOutlineGold } from 'react-icons/ai';

export const herramientasCategorias = [
  { id: 'cat-1', icon: <FaCode />,         items: [dt.javascript, dt.python, dt.sql, dt.csharp, dt.java, dt.typescript] },
  { id: 'cat-2', icon: <FaCogs />,         items: [dt.nestjs, dt.nodejs, dt.fastapi, dt.django, dt.djangorest] },
  { id: 'cat-3', icon: <FaReact />,        items: [dt.html, dt.css, dt.astro, dt.react, dt.vue, dt.tailwind, dt.bootstrap] },
  { id: 'cat-4', icon: <AiOutlineGold />,  items: [dt.peoplesoft, dt.intelisis] },
  { id: 'cat-5', icon: <FaDatabase />,     items: [dt.sqlserver, dt.oracle, dt.postgresql, dt.sqlite, dt.mysql, dt.firebase] },
  { id: 'cat-6', icon: <FaAws />,          items: [dt.docker, dt.linux, dt.windows, dt.vercel] },
  { id: 'cat-7', icon: <FaGitAlt />,       items: [dt.terminal, dt.vstudio, dt.powerbi, dt.vscode, dt.cursor, dt.jetbrains, dt.git, dt.gitlab, dt.github, dt.trello, dt.figma, dt.termius] },
];

const categoriaTitulos = {
  es: ['Lenguajes', 'Backend',  'Frontend', 'ERP Solutions', 'Bases de Datos', 'Infraestructura', 'Dev Tools'],
  en: ['Languages', 'Backend',  'Frontend', 'ERP Solutions', 'Databases',      'Infrastructure',  'Dev Tools'],
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
