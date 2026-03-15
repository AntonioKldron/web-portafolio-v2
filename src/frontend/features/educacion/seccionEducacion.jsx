import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Añadido AnimatePresence
import { useTranslation } from '../../hooks/useTranslation';
import { educacionData } from '../../data/educacion/educacionData';
import { HiOutlineAcademicCap, HiOutlineBadgeCheck } from 'react-icons/hi';

// Sub-componentes
import ModalInspeccion from './components/modalInspeccion';
import EncabezadoSeccion from '../components/encabezadoSeccion.jsx';
import ColumnaHeader from './components/columnaHeader';
import EducacionItem from './components/educacionItem';
import CertificadosScroll from './components/certificadosScroll';

export default function SeccionEducacion() {
  const t = useTranslation(educacionData);
  const [modalInfo, setModalInfo] = useState({ abierto: false, url: '', titulo: '' });

  const certificaciones = t.certificaciones || [];
  const isCarousel = certificaciones.length > 5;

  // Mejora: Validación estricta antes de abrir el modal
  const abrirCertificado = (cert) => {
    if (cert.imagen && cert.imagen.trim() !== "") {
      setModalInfo({ abierto: true, url: cert.imagen, titulo: cert.titulo });
    }
  };

  return (
    <section className="bg-transparent relative w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <EncabezadoSeccion 
          subtitulo={t.header?.subtitulo} 
          tituloPrincipal={t.header?.titulo} 
          tituloHighlight={t.header?.highlight} 
          align="left" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-20 items-start mt-20">
          
          {/* COLUMNA 01: CERTIFICACIONES */}
          <div className="flex flex-col">
            <ColumnaHeader numero="01" titulo={t.certificacionesTitulo} Icono={HiOutlineBadgeCheck} />
            
            {isCarousel ? (
              <CertificadosScroll certificaciones={certificaciones} onOpenCert={abrirCertificado} />
            ) : (
              certificaciones.map((cert, i) => (
                <EducacionItem key={i} item={cert} index={i} isCert onOpenCert={abrirCertificado} />
              ))
            )}
          </div>

          {/* COLUMNA 02: EDUCACIÓN ACADÉMICA */}
          <div className="flex flex-col">
            <ColumnaHeader numero="02" titulo={t.seccionTitulo} Icono={HiOutlineAcademicCap} delay={2} />
            <div className="flex flex-col">
              {t.estudios?.map((est, i) => (
                <EducacionItem key={i} item={est} index={i} isCert={false} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Manejo profesional de la presencia del modal */}
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