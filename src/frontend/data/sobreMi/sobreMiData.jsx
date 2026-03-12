import { data as dt } from '../icons/iconsRegistro';

export const sobreMiContenido = {
  subtitulo: "Sobre mi",
  tituloPrincipal: "Ingeniería de sistemas empresariales",
  tituloHighlight: "integraciones, datos y arquitectura",
  fraseCorta: "Diseño el motor invisible que conecta sistemas empresariales, automatiza procesos y transforma la lógica de negocio en software escalable.",
  
  coreStack: [
    { ...dt.javascript, colorHover: "hover:text-yellow-400" },
    { ...dt.java, colorHover: "hover:text-red-500" },
    { ...dt.python, colorHover: "hover:text-blue-400" },
    { ...dt.sql, colorHover: "hover:text-cyan-400" }
  ],

  parrafos: [
    {
      texto: "Como {ingeniero}, diseño arquitecturas de integración para sistemas críticos, transformando procesos de negocio complejos en {software}.",
      highlights: {
        ingeniero: "Software & Systems Engineer",
        software: "software escalable, robusto y seguro"
      }
    },
    {
      texto: "En mi rol como {rol}, desarrollo lógica avanzada en {plataforma} mediante {herramientas}, garantizando la interoperabilidad de {servicios}.",
      highlights: {
        rol: "Analista ERP en Cinépolis",
        plataforma: "Oracle PeopleSoft",
        herramientas: "PeopleCode y Application Engine",
        servicios: "servicios web corporativos"
      }
    },
    {
      texto: "Como {rolAnterior}, lideré el desarrollo de {tecnologias} con {seguridad} y optimicé procesos en {db} para entornos de misión crítica.",
      highlights: {
        rolAnterior: "Backend Engineer en Intelisis",
        tecnologias: "APIs REST (Django/FastAPI)",
        seguridad: "protocolos OAuth2",
        db: "SQL Server"
      }
    },
    {
      texto: "Mi stack combina {techs} con frameworks como {frameworks}, especializándome en {especialidad}.",
      highlights: {
        techs: "Python, Java y SQL",
        frameworks: "Django, FastAPI y React",
        especialidad: "arquitecturas de integración enterprise"
      }
    }
  ]
};