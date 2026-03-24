import React from 'react';
import { data as dt } from '../icons/iconsRegistro';
import { FaCode, FaCogs, FaReact, FaDatabase, FaAws, FaGitAlt } from 'react-icons/fa';
import { AiOutlineGold } from "react-icons/ai";
import { TbBrandOpenai } from "react-icons/tb";
import { IoIosDocument } from "react-icons/io";

export const herramientasData = {
  iconosCategorias: {
    cat1: <FaCode />,
    cat2: <FaCogs />,
    cat3: <FaReact />,
    cat4: <AiOutlineGold />,
    cat5: <FaDatabase />,
    cat6: <FaAws />,
    cat7: <FaGitAlt />
  },
  
  es: {
    header: {
      subtitulo: "Herramientas",
      tituloPrincipal: "Stack",
      tituloHighlight: "Tecnológico"
    },
    categorias: [
      { id: "cat-1", title: "Lenguajes", items: [dt.javascript, dt.python, dt.sql, dt.csharp, dt.java] },
      { id: "cat-2", title: "Backend", items: [dt.nestjs, dt.fastapi, dt.django, dt.djangorest] },
      { id: "cat-3", title: "Frontend", items: [dt.html, dt.css, dt.astro, dt.react, dt.tailwind, dt.bootstrap] },
      { id: "cat-4", title: "ERP Solutions", items: [dt.peoplesoft, dt.intelisis] },
      { id: "cat-5", title: "Bases de Datos", items: [dt.sqlserver, dt.oracle, dt.postgresql, dt.sqlite, dt.mysql, dt.supabase, dt.firebase] },
      { id: "cat-6", title: "Infraestructura", items: [dt.docker, dt.linux, dt.windows, dt.vercel] },
      { id: "cat-7", title: "Dev Tools", items: [dt.terminal, dt.vstudio, dt.powerbi ,dt.vscode, dt.cursor, dt.jetbrains, dt.git, dt.gitlab, dt.github, dt.trello, dt.figma, dt.termius] }
    ]
  },
  en: {
    header: {
      subtitulo: "Stack",
      tituloPrincipal: "Tech",
      tituloHighlight: "Stack"
    },
    categorias: [
      { id: "cat-1", title: "Languages", items: [dt.javascript, dt.python, dt.sql, dt.csharp, dt.java] },
      { id: "cat-2", title: "Backend", items: [dt.nestjs, dt.fastapi, dt.django, dt.djangorest] },
      { id: "cat-3", title: "Frontend", items: [dt.html, dt.css, dt.astro, dt.react, dt.tailwind, dt.bootstrap] },
      { id: "cat-4", title: "ERP Solutions", items: [dt.peoplesoft, dt.intelisis] },
      { id: "cat-5", title: "Databases", items: [dt.sqlserver, dt.oracle, dt.postgresql, dt.sqlite, dt.mysql, dt.supabase, dt.firebase] },
      { id: "cat-6", title: "Infrastructure", items: [dt.docker, dt.linux, dt.windows, dt.vercel] },
      { id: "cat-7", title: "Dev Tools", items: [dt.terminal, dt.vstudio, dt.powerbi, dt.vscode, dt.cursor, dt.jetbrains, dt.git, dt.gitlab, dt.github, dt.trello, dt.figma, dt.termius] }
    ]
  }
};