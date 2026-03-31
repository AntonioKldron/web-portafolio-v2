import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineFilter, HiChevronDown, HiCheck } from 'react-icons/hi';
import EducacionItem from '@features/educacion/components/educacionItem';

export default function CertificadosScroll({ certificaciones, onOpenCert }) {
  const [isMobile, setIsMobile] = useState(false);
  const [filtro, setFiltro] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 1. Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cerrar el dropdown si se hace clic afuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 2. Extraer instituciones únicas
  const institucionesUnicas = useMemo(() => {
    const nombres = certificaciones.map(cert => 
      typeof cert.institucion === 'object' && cert.institucion !== null 
        ? cert.institucion.name 
        : cert.institucion
    ).filter(Boolean);
    
    return [...new Set(nombres)];
  }, [certificaciones]);

  // 3. Filtrar certificados
  const certificacionesFiltradas = useMemo(() => {
    if (!filtro) return certificaciones;
    
    return certificaciones.filter(cert => {
      const instName = typeof cert.institucion === 'object' && cert.institucion !== null 
        ? cert.institucion.name 
        : cert.institucion;
      return instName === filtro;
    });
  }, [certificaciones, filtro]);

  // 4. Lógica: Solo hacer scroll si hay MÁS DE 3 elementos (y no es móvil)
  const shouldScroll = !isMobile && certificacionesFiltradas.length > 3;

  // Si hace scroll, multiplicamos x6 para el loop perfecto. Si no, mostramos la lista normal.
  const itemsAMostrar = shouldScroll 
    ? [
        ...certificacionesFiltradas, ...certificacionesFiltradas, 
        ...certificacionesFiltradas, ...certificacionesFiltradas,
        ...certificacionesFiltradas, ...certificacionesFiltradas
      ]
    : certificacionesFiltradas;

  const handleSelect = (valor) => {
    setFiltro(valor);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex flex-col w-full h-full min-h-[550px] lg:h-[650px] gap-5">
      
      {/* BARRA DE FILTRO (DROPDOWN PERSONALIZADO PREMIUM) */}
      <div className="relative z-30 px-1" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={`w-full flex items-center justify-between pl-4 pr-5 py-3.5 bg-card-bg/40 hover:bg-card-bg/60 backdrop-blur-md border transition-all shadow-lg rounded-xl ${
            isDropdownOpen ? 'border-primary-accent/50 shadow-[0_0_20px_rgba(var(--color-primary-accent-rgb),0.15)]' : 'border-white/10 hover:border-white/20'
          }`}
        >
          <div className="flex items-center gap-3">
            <HiOutlineFilter size={18} className="text-primary-accent opacity-90" />
            <span className="text-sm font-semibold text-main-text/90">
              {filtro || 'Todas las plataformas'}
            </span>
          </div>
          <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <HiChevronDown size={18} className="text-muted-text/70" />
          </motion.div>
        </button>

        {/* Menú Desplegable Animado */}
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-1 right-1 mt-2 py-2 bg-[#121212]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden"
            >
              <ul className="max-h-[250px] overflow-y-auto custom-scrollbar flex flex-col px-1">
                <li 
                  onClick={() => handleSelect('')}
                  className={`flex items-center justify-between px-4 py-2.5 mx-1 rounded-lg cursor-pointer transition-colors text-sm font-medium ${
                    filtro === '' ? 'bg-primary-accent/10 text-primary-accent' : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>Todas las plataformas</span>
                  {filtro === '' && <HiCheck size={16} />}
                </li>
                
                <div className="h-[1px] w-full bg-white/5 my-1" />

                {institucionesUnicas.map((inst, idx) => (
                  <li 
                    key={idx}
                    onClick={() => handleSelect(inst)}
                    className={`flex items-center justify-between px-4 py-2.5 mx-1 rounded-lg cursor-pointer transition-colors text-sm font-medium ${
                      filtro === inst ? 'bg-primary-accent/10 text-primary-accent' : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{inst}</span>
                    {filtro === inst && <HiCheck size={16} />}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ÁREA DE SCROLL DE CERTIFICADOS */}
      <div className="relative flex-1 overflow-y-auto lg:overflow-hidden group rounded-2xl p-1 custom-scrollbar">
        
        {certificacionesFiltradas.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-muted-text/50 gap-3 opacity-80">
            <HiOutlineFilter size={40} className="opacity-50" />
            <p className="text-sm font-medium tracking-wide">No hay certificados en esta categoría.</p>
          </div>
        ) : (
          <motion.div 
            animate={shouldScroll ? { y: ["0%", "-16.66666%"] } : { y: "0%" }} 
            transition={shouldScroll ? { 
              duration: certificacionesFiltradas.length * 5, // Velocidad adaptable
              repeat: Infinity, 
              ease: "linear" 
            } : { type: "spring", bounce: 0 }}
            whileHover={shouldScroll ? { transition: { duration: certificacionesFiltradas.length * 15 } } : {}}
            className="flex flex-col gap-3"
          >
            {itemsAMostrar.map((cert, i) => (
              <EducacionItem 
                key={`${cert.key || i}-${i}`} 
                item={cert} 
                index={i % certificacionesFiltradas.length} 
                isCert 
                onOpenCert={onOpenCert} 
              />
            ))}
          </motion.div>
        )}
        
        {/* Gradientes (Solo si hace scroll infinito para efecto de túnel) */}
        {shouldScroll && (
          <>
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-main-bg via-main-bg/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-main-bg via-main-bg/90 to-transparent z-10 pointer-events-none" />
          </>
        )}
      </div>
    </div>
  );
}