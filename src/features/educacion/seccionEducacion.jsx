import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@app/context/appContext'; 
import { educacionData } from '@data/educacion/educacionData';
import { HiOutlineAcademicCap, HiOutlineBadgeCheck } from 'react-icons/hi';

import EncabezadoSeccion  from '@shared/components/encabezadoSeccion';
import ModalInspeccion     from '@features/educacion/components/modalInspeccion.jsx';
import ColumnaHeader       from '@features/educacion/components/columnaHeader';
import EducacionItem       from '@features/educacion/components/educacionItem';
import CertificadosScroll  from '@features/educacion/components/certificadosScroll';

export default function SeccionEducacion() {
  const { lang } = useApp();
  
  // Estado inicial correcto
  const [modalInfo, setModalInfo] = useState({ abierto: false, item: null });

  // Obtenemos la data traducida (es/en)
  const t = useMemo(() => {
    return educacionData[lang] || educacionData.es;
  }, [lang]);

  if (!t) return null;

  const certificaciones = t.certificaciones || [];
  const estudios = t.estudios || [];
  const isCarousel = certificaciones.length > 3;

  const abrirCertificado = (cert) => {
    // Verificamos que sea un string antes de usar .trim() para evitar errores con los imports de PDF
    if (cert.imagen && typeof cert.imagen === 'string' && cert.imagen.trim() !== "") {
      // CORRECCIÓN AQUÍ: Guardamos el item completo
      setModalInfo({ 
        abierto: true, 
        item: cert 
      });
    }
  };

  return (
    <section className="bg-transparent relative w-full">
      <div className="max-w-7xl mx-auto px-6 py-10"> 

        <EncabezadoSeccion
          subtitulo={t.header?.subtitulo}
          tituloPrincipal={t.header?.titulo}
          tituloHighlight={t.header?.highlight}
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 items-stretch mt-10">

          {/* COLUMNA 01: CERTIFICACIONES */}
          <div className="flex flex-col h-full">
            <ColumnaHeader 
              numero="01" 
              titulo={t.certificacionesTitulo} 
              Icono={HiOutlineBadgeCheck} 
            />

            <div className="flex-1 relative">
              {isCarousel ? (
                <CertificadosScroll 
                  certificaciones={certificaciones} 
                  onOpenCert={abrirCertificado} 
                />
              ) : (
                <div className="flex flex-col gap-0">
                  {certificaciones.map((cert, i) => (
                    <EducacionItem 
                      key={i} 
                      item={cert} 
                      index={i} 
                      isCert 
                      onOpenCert={abrirCertificado} 
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* COLUMNA 02: ESTUDIOS ACADÉMICOS */}
          <div className="flex flex-col h-full">
            <ColumnaHeader 
              numero="02" 
              titulo={t.seccionTitulo} 
              Icono={HiOutlineAcademicCap} 
              delay={2} 
            />
            <div className="flex flex-col gap-0">
              {estudios.map((est, i) => (
                <EducacionItem 
                  key={i} 
                  item={est} 
                  index={i} 
                  isCert={false} 
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* MODAL PARA VER CERTIFICADOS */}
      <AnimatePresence>
        {modalInfo.abierto && (
          <ModalInspeccion
            abierto={modalInfo.abierto}
            onClose={() => setModalInfo({ abierto: false, item: null })}
            item={modalInfo.item} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}