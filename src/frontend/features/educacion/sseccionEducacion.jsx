import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { educacionData } from '../../data/educacion/educacionData';
import { HiOutlineAcademicCap, HiOutlineBadgeCheck } from 'react-icons/hi';

import ModalInspeccion from './components/modalInspeccion';
import EncabezadoSeccion from '../components/encabezadoSeccion.jsx';
import ColumnaHeader from './components/columnaHeader';
import EducacionItem from './components/educacionItem';
import CertificadosScroll from './components/certificadosScroll';

export default function SeccionEducacion() {
  const t = useTranslation(educacionData);
  const [modalInfo, setModalInfo] = useState({ abierto: false, url: '', titulo: '' });

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
    <section className="bg-transparent relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10"> {/* Padding lateral mantenido, py reducido */}
        
        <EncabezadoSeccion 
          subtitulo={t.header?.subtitulo} 
          tituloPrincipal={t.header?.titulo} 
          tituloHighlight={t.header?.highlight} 
          align="left" 
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