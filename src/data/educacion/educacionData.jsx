import C_Solid                from '@doc/certificaciones/principios-solid-clean-code.pdf';
import C_SQL_Cero_Profesional from '@doc/certificaciones/sql_server_cero_a_profesional.pdf';
import C_SQL_Cero_Avanzado    from '@doc/certificaciones/sql_server_avanzado.pdf';
import C_JavaScript_Moderno   from '@doc/certificaciones/javascript_moderno.pdf';
import C_GitGithub            from '@doc/certificaciones/git+github.pdf';
import { data as dt }         from '@data/icons/iconsRegistro';

export const certificacionesBase = [
  { 
    key: 'sqlAvanzado',    
    imagen: C_SQL_Cero_Avanzado,    
    fecha: '2025', 
    institucion: dt.eduUdemy,
    idCredencial: 'UC-07074ddO-6ed8-47aO-a2if-8c82fd857a7e', 
    urlValidacion: 'https://www.udemy.com/certificate/UC-07074ddO-6ed8-47aO-a2if-8c82fd857a7e/',
    duracion: '5.5 hrs',
    skills: [dt.sql,dt.sqlserver] 
  },
  { 
    key: 'jsModerno',      
    imagen: C_JavaScript_Moderno,   
    fecha: '2025', 
    institucion: dt.eduUdemy,
    idCredencial: 'UC-38b0820b-7d26-4cdf-a324-1f1be8638f40', 
    urlValidacion: 'https://www.udemy.com/certificate/UC-38b0820b-7d26-4cdf-a324-1f1be8638f40/',
    duracion: '20.5 hrs',
    skills: [dt.javascript] 
  },
  { 
    key: 'gitGithub',      
    imagen: C_GitGithub,            
    fecha: '2025', 
    institucion: dt.eduUdemy,
    idCredencial: 'UC-a5e8b5f2-83b5-424e-8b72-d54fae40283d', 
    urlValidacion: 'https://www.udemy.com/certificate/UC-a5e8b5f2-83b5-424e-8b72-d54fae40283d/',
    duracion: '12 hrs',
    skills: [dt.git, dt.github] 
  },
  { 
    key: 'sqlProfesional', 
    imagen: C_SQL_Cero_Profesional, 
    fecha: '2025', 
    institucion: dt.eduUdemy,
    idCredencial: 'UC-ecb70fc6-f8b8-4bb1-baaO-b4b715dd9c32', 
    urlValidacion: 'https://www.udemy.com/certificate/UC-ecb70fc6-f8b8-4bb1-baaO-b4b715dd9c32/',
    duracion: '16 hrs',
    skills: [dt.sql,dt.sqlserver]
  },
  { 
    key: 'solid',          
    imagen: C_Solid,                
    fecha: '2025', 
    institucion: dt.eduUdemy,
    idCredencial: 'UC-4634536d-6d7f-402c-9c63-d7839589e9cd', 
    urlValidacion: 'https://www.udemy.com/certificate/UC-4634536d-6d7f-402c-9c63-d7839589e9cd/',
    duracion: '6.5 hrs',
    skills: [dt.javascript, dt.typescript] 
  },
];

export const estudiosBase = [
  { key: 'ise',       fecha: '2019 – 2024' },
  { key: 'ingles',    fecha: '2022 – 2024' },
  { key: 'bachiller', fecha: '2015 – 2018' },
];

const estudiosI18n = {
  es: [
    { titulo: 'Ingeniería en Sistemas Computacionales', institucion: 'Instituto Tecnológico de Morelia (TECNM-ITM)', descripcion: 'Especialidad en Tecnologías de Desarrollo de Software. Cédula Profesional: 14917873.' },
    { titulo: 'Inglés – Nivel B1', institucion: 'Centro de Lenguas Extranjeras (CLE), Instituto Tecnológico de Morelia', descripcion: 'Certificado según el Marco Común Europeo de Referencia para las Lenguas (MCER).' },
    { titulo: 'Bachillerato General', institucion: 'COBAEM – Colegio de Bachilleres del Estado de Michoacán', descripcion: 'Bachilleratos en Físico-Matemática y Humanidades. Diplomado en Contabilidad.' },
  ],
  en: [
    { titulo: 'Computer Systems Engineering', institucion: 'Morelia Institute of Technology (TECNM-ITM)', descripcion: 'Specialization in Software Development Technologies. Professional License: 14917873.' },
    { titulo: 'English – Level B1', institucion: 'Foreign Language Center (CLE), IT Morelia', descripcion: 'Certified according to the Common European Framework of Reference for Languages (CEFR).' },
    { titulo: 'General Baccalaureate', institucion: 'COBAEM Michoacán', descripcion: 'High School focus on Physics-Mathematics and Humanities. Diploma in Accounting.' },
  ],
};

const certificacionesI18n = {
  es: [
    { titulo: 'SQL Server: Programación Avanzada 2025',       descripcion: 'Optimización de consultas, procedimientos almacenados complejos y lógica avanzada de bases de datos.' },
    { titulo: 'JavaScript Moderno: Guía para dominar el lenguaje', descripcion: 'Dominio de ES6+, programación asíncrona, manipulación del DOM y closures.' },
    { titulo: 'GIT+GitHub: Todo un sistema de control de versiones de cero', descripcion: 'Gestión de repositorios, flujos de trabajo colaborativos y GitFlow.' },
    { titulo: 'Máster en SQL Server: Desde Cero a Nivel Profesional', descripcion: 'Administración integral de bases de datos relacionales y manipulación de datos.' },
    { titulo: 'Principios SOLID y Clean Code', descripcion: 'Buenas prácticas de desarrollo, arquitectura limpia y código altamente mantenible.' },
  ],
  en: [
    { titulo: 'Advanced SQL Server Programming 2025',   descripcion: 'Query optimization, complex stored procedures, and advanced database logic.' },
    { titulo: 'Modern JavaScript: Mastery Guide',       descripcion: 'ES6+ mastery, asynchronous programming, DOM manipulation, and closures.' },
    { titulo: 'GIT+GitHub: Complete Version Control',   descripcion: 'Repository management, collaborative workflows, and GitFlow.' },
    { titulo: 'Master in SQL Server: Zero to Pro',      descripcion: 'Comprehensive relational database administration and data manipulation.' },
    { titulo: 'SOLID Principles and Clean Code',        descripcion: 'Development best practices, clean architecture, and highly maintainable code.' },
  ],
};

export const educacionStaticData = {
  es: {
    header:               { subtitulo: 'Educación', titulo: 'Trayectoria', highlight: 'Académica' },
    seccionTitulo:        'Educación',
    certificacionesTitulo:'Certificaciones',
    estudios:             estudiosBase.map((b, i) => ({ ...b, ...estudiosI18n.es[i] })),
    certificaciones:      certificacionesBase.map((b, i) => ({ ...b, ...certificacionesI18n.es[i] })),
  },
  en: {
    header:               { subtitulo: 'Education', titulo: 'Academic', highlight: 'Journey' },
    seccionTitulo:        'Education',
    certificacionesTitulo:'Certifications',
    estudios:             estudiosBase.map((b, i) => ({ ...b, ...estudiosI18n.en[i] })),
    certificaciones:      certificacionesBase.map((b, i) => ({ ...b, ...certificacionesI18n.en[i] })),
  },
};

export const educacionData = educacionStaticData;