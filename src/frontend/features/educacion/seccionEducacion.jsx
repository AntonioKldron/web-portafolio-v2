import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEducacionData } from '@backend/data/educacion/educacionData';
import { HiOutlineAcademicCap, HiOutlineBadgeCheck } from 'react-icons/hi';

import ModalInspeccion from './components/modalInspeccion.jsx';
import EncabezadoSeccion from '@shared/components/encabezadoSeccion';
import ColumnaHeader from '@features/educacion/components/columnaHeader';
import EducacionItem from '@features/educacion/components/educacionItem';
import CertificadosScroll from '@features/educacion/components/certificadosScroll';

export default function SeccionEducacion() {
  const { data: t, isLoading } = useEducacionData();
  const [modalInfo, setModalInfo] = useState({ abierto: false, url: '', titulo: '' });

  if (isLoading || !t) {
    return (
      <section className="bg-transparent relative w-full px-6 py-10 min-h-[50vh] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-6 bg-gray-500/20 rounded w-1/3 mb-4"></div>
          <div className="h-32 bg-gray-500/20 rounded w-full max-w-2xl"></div>
        </div>
      </section>
    );
  }

  const certificaciones = t.certificaciones || [];
  const estudios = t.estudios || [];
  const isCarousel = certificaciones.length > 3;

  const abrirCertificado = (cert) => {
    if (cert.imagen && cert.imagen.trim() !== "") {
      setModalInfo({ abierto: true, url: cert.imagen, titulo: cert.titulo });
    }
  };

  return (
    // Eliminado py-20 para pegar la sección a los bordes superior/inferior
    <section className="bg-transparent relative w-full">
      <div className="max-w-7xl mx-auto px-6 py-10"> {/* Padding lateral mantenido, py reducido */}

        <EncabezadoSeccion
          subtitulo={t.header?.subtitulo}
          tituloPrincipal={t.header?.titulo}
          tituloHighlight={t.header?.highlight}
          align="right"
        />

        {/* mt-10 en lugar de mt-20 para reducir espacio tras el header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 items-stretch mt-10">

          {/* COLUMNA 01: CERTIFICACIONES */}
          <div className="flex flex-col h-full">
            <ColumnaHeader numero="01" titulo={t.certificacionesTitulo} Icono={HiOutlineBadgeCheck} />

            <div className="flex-1 relative">
              {isCarousel ? (
                <CertificadosScroll certificaciones={certificaciones} onOpenCert={abrirCertificado} />
              ) : (
                // gap-0 para que los items se toquen entre sí
                <div className="flex flex-col gap-0">
                  {certificaciones.map((cert, i) => (
                    <EducacionItem key={i} item={cert} index={i} isCert onOpenCert={abrirCertificado} />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* COLUMNA 02: EDUCACIÓN ACADÉMICA */}
          <div className="flex flex-col h-full">
            <ColumnaHeader numero="02" titulo={t.seccionTitulo} Icono={HiOutlineAcademicCap} delay={2} />
            {/* gap-0 para continuidad total */}
            <div className="flex flex-col gap-0">
              {estudios.map((est, i) => (
                <EducacionItem key={i} item={est} index={i} isCert={false} />
              ))}
            </div>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {modalInfo.abierto && (
          <ModalInspeccion
            abierto={modalInfo.abierto}
            onClose={() => setModalInfo({ ...modalInfo, abierto: false })}
            imagenUrl={modalInfo.url}
            titulo={modalInfo.titulo}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
