import { data as dt } from '../icons/iconsRegistro';

export const githubIconMap = {
  "javascript": dt?.javascript,
  "typescript": dt?.typescript,
  "python": dt?.python,
  "html": dt?.html,
  "css": dt?.css,
  "c#": dt?.csharp,
  "java": dt?.java,
  "sql": dt?.sql,
  "vue": dt?.vue,
  "php": dt?.php,
  "tsql": dt?.sql,
};

export const githubData = {
  es: {
    header: { subtitulo: "Métricas Git", titulo: "Mi Código en", highlight: "GitHub" },
    profile: { bioFallback: "Construyendo software y explorando nuevas tecnologías.", repos: "Repos", followers: "Seguidores", commits: "Commits" },
    stack: { title: "Stack Dominante", subtitle: "Basado en últimos 50 repos" },
    calendar: { title: "Actividad_", updating: "Sincronizando...", days: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"] },
    loading: "Cargando_Dashboard..."
  },
  en: {
    header: { subtitulo: "Git Metrics", titulo: "My Code on", highlight: "GitHub" },
    profile: { bioFallback: "Building software and exploring new technologies.", repos: "Repos", followers: "Followers", commits: "Commits" },
    stack: { title: "Dominant Stack", subtitle: "Based on last 50 repos" },
    calendar: { title: "Activity_", updating: "Syncing...", days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] },
    loading: "Loading_Dashboard..."
  }
};