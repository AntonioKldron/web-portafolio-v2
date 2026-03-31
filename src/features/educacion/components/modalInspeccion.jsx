import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { useApp } from '@app/context/appContext'; 
import { 
  HiX, 
  HiOutlineExternalLink, 
  HiOutlineDownload, 
  HiOutlineClock, 
  HiOutlineIdentification,
  HiOutlineCheck
} from 'react-icons/hi';

export default function ModalInspeccion({ abierto, onClose, item }) {
  const { isDark } = useApp();
  const esPdf = typeof item?.imagen === 'string' && item.imagen.toLowerCase().endsWith('.pdf');

  useEffect(() => {
    if (!abierto) return;
    document.body.style.overflow = 'hidden';
    const esc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', esc);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', esc);
    };
  }, [abierto, onClose]);

  if (!abierto || !item || !item.imagen) return null;

  // Variables de diseño basadas en el tema (Light/Dark Mode)
  const theme = {
    overlay: isDark ? 'bg-black/80' : 'bg-gray-400/30',
    modalBg: isDark ? 'bg-[#0a0a0a] border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)]' : 'bg-white border-gray-200 shadow-[0_30px_60px_rgba(0,0,0,0.15)]',
    docBg: isDark ? 'bg-[#050505]' : 'bg-gray-100',
    textPrimary: isDark ? 'text-white' : 'text-gray-900',
    textSecondary: isDark ? 'text-white/60' : 'text-gray-500',
    iconColor: isDark ? 'text-white/30' : 'text-gray-300',
    pillBg: isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-100 hover:bg-gray-200',
    btnPrimary: isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-gray-800',
    btnSecondary: isDark ? 'bg-white/5 text-white hover:bg-white/10 border-white/10' : 'bg-white text-gray-900 hover:bg-gray-50 border-gray-200 shadow-sm',
    closeBtn: isDark ? 'bg-black/50 hover:bg-black/80 text-white/70 hover:text-white' : 'bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 shadow-sm'
  };

  return createPortal(
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.3 }}
      className={`fixed inset-0 z-[99999] flex items-center justify-center p-0 md:p-4 lg:p-6 backdrop-blur-xl ${theme.overlay} transition-colors duration-500`}
    >
      {/* Contenedor Principal: Se expande fluidamente sin restricciones duras */}
      <div className={`relative w-full h-full flex flex-col md:flex-row overflow-hidden border md:rounded-[2rem] transition-colors duration-500 ${theme.modalBg}`}>
        
        {/* BOTÓN CERRAR FLOTANTE SOBRE EL DOCUMENTO */}
        <button 
          onClick={onClose} 
          className={`absolute top-4 right-4 md:top-6 md:right-6 z-50 p-3 rounded-full backdrop-blur-md transition-all duration-300 ${theme.closeBtn}`}
        >
          <HiX size={24} />
        </button>

        {/* COLUMNA IZQUIERDA: DOCUMENTO GIGANTE (65% del ancho en Desktop) */}
        {/* Eliminamos los paddings para que el PDF o la imagen llenen todo el espacio disponible */}
        <div className={`relative w-full md:w-3/5 lg:w-[65%] h-[50vh] md:h-full flex items-center justify-center transition-colors duration-500 overflow-hidden ${theme.docBg}`}>
          {esPdf ? (
            <embed 
              src={`${item.imagen}#toolbar=0&navpanes=0`} 
              type="application/pdf" 
              className="w-full h-full" 
            />
          ) : (
            <motion.img 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              src={item.imagen} 
              className="w-full h-full object-contain select-none p-4 md:p-8" 
              alt={item.titulo} 
            />
          )}
        </div>

        {/* COLUMNA DERECHA: INFORMACIÓN FLUIDA (35% del ancho en Desktop) */}
        <div className="w-full md:w-2/5 lg:w-[35%] h-[50vh] md:h-full flex flex-col justify-center p-8 md:p-10 lg:p-14 z-10 overflow-y-auto custom-scrollbar">
          
          <div className="flex flex-col gap-8 my-auto max-w-md mx-auto w-full">
            
            {/* Cabecera: Ícono y Título */}
            <div className="flex flex-col gap-4">
              {item.institucion && typeof item.institucion === 'object' && (
                <div className="flex items-center gap-3">
                  <span className={`text-4xl lg:text-5xl drop-shadow-sm ${item.institucion.primary}`}>{item.institucion.icon}</span>
                  <span className={`text-lg font-semibold tracking-wide ${theme.textSecondary}`}>
                    {item.institucion.name}
                  </span>
                </div>
              )}
              
              <h2 className={`text-3xl lg:text-4xl font-extrabold leading-[1.15] tracking-tight ${theme.textPrimary} transition-colors`}>
                {item.titulo}
              </h2>
            </div>

            {/* Metadatos (Puros Íconos grandes) */}
            <div className="flex flex-col gap-4">
              {item.duracion && (
                <div className="flex items-center gap-4">
                  <HiOutlineClock size={26} className={theme.iconColor} />
                  <span className={`text-lg font-medium ${theme.textPrimary}`}>{item.duracion}</span>
                </div>
              )}
              
              {item.idCredencial && (
                <div className="flex items-center gap-4">
                  <HiOutlineIdentification size={26} className="text-emerald-500/70" />
                  <span className={`text-lg font-mono tracking-wider ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    {item.idCredencial}
                  </span>
                </div>
              )}
            </div>

            {/* Píldoras de Tecnologías / Aptitudes */}
            {item.skills && item.skills.length > 0 && (
              <div className="flex flex-wrap gap-2.5 mt-2">
                {item.skills.map((skill, idx) => {
                  const isObj = typeof skill === 'object' && skill !== null;
                  return (
                    <span 
                      key={idx} 
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors border border-transparent ${theme.pillBg} ${theme.textPrimary}`}
                    >
                      {isObj ? (
                        <>
                          <span className={`text-lg ${skill.primary || ''}`}>{skill.icon}</span>
                          <span>{skill.name}</span>
                        </>
                      ) : (
                        <>
                          <HiOutlineCheck className={theme.iconColor} size={16} />
                          <span>{skill}</span>
                        </>
                      )}
                    </span>
                  );
                })}
              </div>
            )}

            {/* Botones de Acción minimalistas */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              {item.urlValidacion && (
                <a 
                  href={item.urlValidacion} target="_blank" rel="noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm transition-transform active:scale-[0.98] ${theme.btnPrimary}`}
                >
                  <HiOutlineExternalLink size={20} className="opacity-70" />
                  <span>Verificar</span>
                </a>
              )}
              
              <a 
                href={item.imagen} download
                className={`flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm border transition-transform active:scale-[0.98] ${theme.btnSecondary}`}
              >
                <HiOutlineDownload size={20} className="opacity-70" />
                <span>Descargar</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </motion.div>,
    document.body
  );
}