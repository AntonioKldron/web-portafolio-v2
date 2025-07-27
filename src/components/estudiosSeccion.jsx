import React from 'react';
import Educacion from '../components/estudiosCarta';

export default function SeccionEducacion() {
    const estudios = [
        {
          titulo: "Ingeniería en Sistemas Computacionales",
          institucion: "Instituto Tecnológico de Morelia – Tecnológico Nacional de México (TECNM-ITM)",
          fecha: "2020 – 2024",
          descripcion: "Especialidad en Tecnologías de Desarrollo de Software. Formación sólida en desarrollo de software, bases de datos, redes, programación orientada a objetos y tecnologías web."
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
          descripcion: "Bachilleratos Físico-Matemática y Humanidades. Diplomado en Contabilidad."
        }
      ];      
  return <Educacion estudios={estudios} />;
}
