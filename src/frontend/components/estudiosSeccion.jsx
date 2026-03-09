import React from 'react';
import Educacion from '../components/estudiosCarta';

export default function SeccionEducacion() {
  const estudios = [
    {
      titulo: "Ingeniería en Sistemas Computacionales",
      institucion: "IT Morelia (TECNM)",
      fecha: "2020 – 2024",
      descripcion: "Especialidad en Desarrollo de Software."
    }
  ];

  const certificaciones = [
  ];

  return <Educacion estudios={estudios} certificaciones={certificaciones} />;
}