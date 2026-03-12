import rostro from '../../assets/img/perfil/foto.png';
import CV_PDF from '../../../../public/pdf/Cv-Jose Antonio Cornelio Calderon.pdf';

export const perfilData = {
  nombre: "José Antonio",
  apellido: "Cornelio Calderón",
  version: "v2.6.0",
  foto: rostro,
  cv: CV_PDF,
  socials: [
    { name: "github", url: "https://github.com/AntonioKldron", icon: "fab fa-github", color: "hover:text-white" },
    { name: "linkedin", url: "https://www.linkedin.com/in/josé-antonio-cornelio-calderón-201885291", icon: "fab fa-linkedin", color: "hover:text-[#0A66C2]" },
    { name: "whatsapp", url: "https://wa.me/524431582962", icon: "fab fa-whatsapp", color: "hover:text-[#25D366]" },
    { name: "email", url: "mailto:antoncc47@gmail.com", icon: "fas fa-envelope", color: "hover:text-[#EA4335]" },
  ],
  es: {
    rol: "Ingeniero de Software",
    menuItems: [
      { id: "sobre-mi", label: "Sobre mí" },
      { id: "herramientas", label: "Herramientas" },
      { id: "experiencia", label: "Experiencia" },
      { id: "proyectos", label: "Proyectos" },
      { id: "formacion", label: "Educación" },
    ]
  },
  en: {
    rol: "Software Engineer",
    menuItems: [
      { id: "sobre-mi", label: "About me" },
      { id: "herramientas", label: "Stack" },
      { id: "experiencia", label: "Experience" },
      { id: "proyectos", label: "Projects" },
      { id: "formacion", label: "Education" },
    ]
  }
};