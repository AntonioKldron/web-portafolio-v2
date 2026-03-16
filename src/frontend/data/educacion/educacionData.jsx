import C_Solid from '../../../../public/doc/certificaciones/principios-solid-clean-code.pdf';
import C_SQL_Cero_Profesional from '../../../../public/doc/certificaciones/sql_server_cero_a_profesional.pdf';
import C_SQL_Cero_Avanzado from '../../../../public/doc/certificaciones/sql_server_avanzado.pdf';
import C_JavaScript_Moderno from '../../../../public/doc/certificaciones/javascript_moderno.pdf';
import C_GitGithub from '../../../../public/doc/certificaciones/git+github.pdf';


export const educacionData = {
  es: {
    header: {
      subtitulo: "Educacion",
      titulo: "Trayectoria",
      highlight: "Académica"
    },
    seccionTitulo: "Educación",
    certificacionesTitulo: "Certificaciones",
    estudios: [
      {
        titulo: "Ingeniería en Sistemas Computacionales",
        institucion: "Instituto Tecnológico de Morelia (TECNM-ITM)",
        fecha: "2020 – 2024",
        descripcion: "Especialidad en Tecnologías de Desarrollo de Software. Cédula Profesional: 14917873."
      },
      {
        titulo: "Inglés – Nivel B1",
        institucion: "Centro de Lenguas Extranjeras (CLE), Instituto Tecnológico de Morelia",
        fecha: "2022 – 2024",
        descripcion: "Certificado según el Marco Común Europeo de Referencia para las Lenguas (MCER)."
      },
      {
        titulo: "Bachillerato General",
        institucion: "COBAEM – Colegio de Bachilleres del Estado de Michoacán",
        fecha: "2015 – 2018",
        descripcion: "Bachilleratos en Físico-Matemática y Humanidades. Diplomado en Contabilidad."
      }
    ],
    certificaciones: [
      {
        titulo: "SQL Server: Programación Avanzada 2025",
        institucion: "Udemy",
        fecha: "2025",
        descripcion: "Optimización de consultas, procedimientos almacenados complejos y lógica avanzada de bases de datos.",
        imagen: C_SQL_Cero_Avanzado
      },
      {
        titulo: "JavaScript Moderno: Guía para dominar el lenguaje",
        institucion: "Udemy",
        fecha: "2025",
        descripcion: "Dominio de ES6+, programación asíncrona, manipulación del DOM y closures.",
        imagen: C_JavaScript_Moderno
      },
      {
        titulo: "GIT+GitHub: Todo un sistema de control de versiones de cero",
        institucion: "Udemy",
        fecha: "2025",
        descripcion: "Gestión de repositorios, flujos de trabajo colaborativos y GitFlow.",
        imagen: C_GitGithub
      },
      {
        titulo: "Máster en SQL Server: Desde Cero a Nivel Profesional",
        institucion: "Udemy",
        fecha: "2025",
        descripcion: "Administración integral de bases de datos relacionales y manipulación de datos.",
        imagen: C_SQL_Cero_Profesional
      },
      {
        titulo: "Principios SOLID y Clean Code",
        institucion: "Udemy",
        fecha: "2025",
        descripcion: "Buenas prácticas de desarrollo, arquitectura limpia y código altamente mantenible.",
        imagen: C_Solid
      }
    ]
  },
  en: {
    header: {
      subtitulo: "Education",
      titulo: "Academic",
      highlight: "Journey"
    },
    seccionTitulo: "Education",
    certificacionesTitulo: "Certifications",
    estudios: [
      {
        titulo: "Computer Systems Engineering",
        institucion: "Morelia Institute of Technology (TECNM-ITM)",
        fecha: "2020 – 2024",
        descripcion: "Specialization in Software Development Technologies. Professional License: 14917873."
      },
      {
        titulo: "English – Level B1",
        institucion: "Foreign Language Center (CLE), IT Morelia",
        fecha: "2022 – 2024",
        descripcion: "Certified according to the Common European Framework of Reference for Languages (CEFR)."
      },
      {
        titulo: "General Baccalaureate",
        institucion: "COBAEM Michoacán",
        fecha: "2015 – 2018",
        descripcion: "High School focus on Physics-Mathematics and Humanities. Diploma in Accounting."
      }
    ],
    certificaciones: [
      {
        titulo: "Advanced SQL Server Programming 2025",
        institucion: "Udemy",
        fecha: "2025",
        descripcion: "Query optimization, complex stored procedures, and advanced database logic.",
        imagen: C_SQL_Cero_Avanzado
      },
      {
        titulo: "Modern JavaScript: Mastery Guide",
        institucion: "Udemy",
        fecha: "2025",
        descripcion: "ES6+ mastery, asynchronous programming, DOM manipulation, and closures.",
        imagen: C_JavaScript_Moderno
      },
      {
        titulo: "GIT+GitHub: Complete Version Control",
        institucion: "Udemy",
        fecha: "2024",
        descripcion: "Repository management, collaborative workflows, and GitFlow.",
        imagen: C_GitGithub
      },
      {
        titulo: "Master in SQL Server: Zero to Pro",
        institucion: "Udemy",
        fecha: "2025",
        descripcion: "Comprehensive relational database administration and data manipulation.",
        imagen: C_SQL_Cero_Profesional
      },
      {
        titulo: "SOLID Principles and Clean Code",
        institucion: "Udemy",
        fecha: "2025",
        descripcion: "Development best practices, clean architecture, and highly maintainable code.",
        imagen: C_Solid
      }
    ]
  }
};