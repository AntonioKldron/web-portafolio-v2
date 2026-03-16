import { data as dt } from '../icons/iconsRegistro';

export const herramientasData = {
  // Datos comunes que no cambian (iconos)
  iconosCategorias: {
    cat1: dt.code.icon,
    cat2: dt.cogs.icon,
    cat3: dt.react.icon,
    cat4: dt.enterprise.icon,
    cat5: dt.database.icon,
    cat6: dt.aws.icon,
    cat7: dt.git.icon
  },
  
  es: {
    header: {
      subtitulo: "Herramientas",
      tituloPrincipal: "Stack",
      tituloHighlight: "Tecnológico"
    },
    categorias: [
      { id: "cat-1", title: "Lenguajes", items: [dt.javascript, dt.python, dt.sql, dt.csharp, dt.java] },
      { id: "cat-2", title: "Backend", items: [dt.nestjs, dt.fastapi, dt.django] },
      { id: "cat-3", title: "Frontend", items: [dt.html, dt.css, dt.react, dt.tailwind, dt.bootstrap] },
      { id: "cat-4", title: "ERP Solutions", items: [dt.peoplesoft, dt.intelisis] },
      { id: "cat-5", title: "Bases de Datos", items: [dt.sqlserver, dt.oracle, dt.postgresql, dt.mysql, dt.supabase] },
      { id: "cat-6", title: "Infraestructura", items: [dt.docker, dt.linux, dt.windows, dt.vercel] },
      { id: "cat-7", title: "Dev Tools", items: [dt.vscode, dt.cursor, dt.jetbrains, dt.git, dt.github, dt.ssms, dt.trello, dt.figma, dt.azurest] }
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
      { id: "cat-2", title: "Backend", items: [dt.nestjs, dt.fastapi, dt.django] },
      { id: "cat-3", title: "Frontend", items: [dt.html, dt.css, dt.react, dt.tailwind, dt.bootstrap] },
      { id: "cat-4", title: "ERP Solutions", items: [dt.peoplesoft, dt.intelisis] },
      { id: "cat-5", title: "Databases", items: [dt.sqlserver, dt.oracle, dt.postgresql, dt.mysql, dt.supabase] },
      { id: "cat-6", title: "Infrastructure", items: [dt.docker, dt.linux, dt.windows, dt.vercel] },
      { id: "cat-7", title: "Dev Tools", items: [dt.vscode, dt.cursor, dt.jetbrains, dt.git, dt.github, dt.ssms, dt.trello, dt.figma, dt.azurest] }
    ]
  }
};