import rostro from '../../assets/img/perfil/foto.png';
import CV_ES from '../../../../public/doc/pdf/es/cv_es-Jose Antonio Cornelio Calderon.pdf';
import CV_EN from '../../../../public/doc/pdf/en/cv_en-Jose Antonio Cornelio Calderon.pdf';

export const perfilData = {
  nombre: "José Antonio",
  apellido: "Cornelio Calderón",
  version: "v2.6.0",
  foto: rostro,
  socials: [
    { name: "github", url: "https://github.com/AntonioKldron", icon: "fab fa-github", color: "hover:text-white" },
    { name: "linkedin", url: "https://www.linkedin.com/in/josé-antonio-cornelio-calderón-201885291", icon: "fab fa-linkedin", color: "hover:text-[#0A66C2]" },
    { name: "whatsapp", url: "https://wa.me/524431582962", icon: "fab fa-whatsapp", color: "hover:text-[#25D366]" },
    { name: "email", url: "mailto:antoncc47@gmail.com", icon: "fas fa-envelope", color: "hover:text-[#EA4335]" },
  ],
  es: {
    rol: "Ingeniero de Software",
    cv: CV_ES, // CV en español
    menuItems: [
      { id: "sobre-mi", label: "Sobre mí" },
      { id: "herramientas", label: "Herramientas" },
      { id: "experiencia", label: "Experiencia" },
      { id: "git", label: "Métricas Git" },
      { id: "proyectos", label: "Proyectos" },
      { id: "educacion", label: "Educación" },
    ]
  },
  en: {
    rol: "Software Engineer",
    cv: CV_EN, // CV en inglés
    menuItems: [
      { id: "sobre-mi", label: "About me" },
      { id: "herramientas", label: "Stack" },
      { id: "experiencia", label: "Experience" },
      { id: "git", label: "Git Metrics" },
      { id: "proyectos", label: "Projects" },
      { id: "educacion", label: "Education" },
    ]
  }
};