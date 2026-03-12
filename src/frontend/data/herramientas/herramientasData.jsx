import { data as dt } from '../icons/iconsRegistro';

export const herramientasData = {
  // Nueva sección para el encabezado
  header: {
    subtitulo: "Herramientas",
    tituloPrincipal: "Stack",
    tituloHighlight: "Tecnológico"
  },
  // Categorías
  categorias: [
    { 
      id: "cat-1", 
      title: "Lenguajes de Programación", 
      icon: dt.code.icon, 
      items: [dt.javascript, dt.python, dt.sql, dt.csharp, dt.java] 
    },
    { 
      id: "cat-2", 
      title: "Backend", 
      icon: dt.cogs.icon, 
      items: [dt.nestjs, dt.fastapi, dt.django] 
    },
    { 
      id: "cat-3", 
      title: "Frontend", 
      icon: dt.react.icon, 
      items: [dt.react, dt.angular, dt.tailwind, dt.bootstrap] 
    },
    { 
      id: "cat-4", 
      title: "ERP & Enterprise Solutions", 
      icon: dt.enterprise.icon, 
      items: [dt.peoplesoft, dt.intelisis] 
    },
    { 
      id: "cat-5", 
      title: "Bases de Datos", 
      icon: dt.database.icon, 
      items: [dt.sqlserver, dt.oracle, dt.postgresql, dt.mysql, dt.supabase] 
    },
    { 
      id: "cat-6", 
      title: "Infraestructura & Cloud", 
      icon: dt.aws.icon, 
      items: [dt.docker, dt.linux, dt.windows] 
    },
    { 
      id: "cat-7", 
      title: "Herramientas de Desarrollo", 
      icon: dt.git.icon, 
      items: [dt.vscode, dt.cursor, dt.jetbrains, dt.git, dt.github, dt.ssms, dt.trello, dt.figma, dt.azurest] 
    }
  ]
};