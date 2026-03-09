import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProyectoCarta from '../components/proyectoCarta';
import { FaTimes, FaChevronLeft, FaChevronRight, FaTerminal, FaReact, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiSupabase, SiFramer } from 'react-icons/si';

import website from "../assets/img/proyect/website/website.png";

export default function SeccionProyectos() {
  const [openProject, setOpenProject] = useState(null);
  const [modalData, setModalData] = useState({ abierto: false, imagenes: [], actual: 0, titulo: "" });
  const [direction, setDirection] = useState(0);

  const cerrarModal = () => setModalData(prev => ({ ...prev, abierto: false }));

  useEffect(() => {
    const manejarEsc = (e) => { if (e.key === 'Escape') cerrarModal(); };
    if (modalData.abierto) window.addEventListener('keydown', manejarEsc);
    return () => window.removeEventListener('keydown', manejarEsc);
  }, [modalData.abierto]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setModalData(p => ({ 
      ...p, 
      actual: (p.actual + newDirection + p.imagenes.length) % p.imagenes.length 
    }));
  };

  const globImages = import.meta.glob('../assets/img/proyect/website/carrusel/*.png', { eager: true, import: 'default' });
  const carruselWebsite = Object.values(globImages);

  const proyectosData = [
    {
      id: "PROY_01",
      titulo: "Portafolio Web",
      lanzamiento: "Octubre 2025",
      descripcion_corta: "Consola de ingeniería profesional con React y Tailwind.",
      descripcion: "Arquitectura frontend de alto rendimiento con micro-animaciones dinámicas y optimización de activos multimedia.",
      imagen: website,
      detalles: ["Interfaz reactiva con React.js", "Animaciones con Framer Motion", "Arquitectura modular"],
      tecnologias: [{ name: "React", icon: <FaReact /> }, { name: "Tailwind", icon: <SiTailwindcss /> }, { name: "Framer", icon: <SiFramer /> }],
      imagenes: carruselWebsite,
      urlSitio: "/",
      urlRepositorio: "https://github.com/AntonioKldron/web-portafolio-v2.git"
    },
    {
      id: "PROY_02",
      titulo: "Portafolio Web",
      lanzamiento: "Octubre 2025",
      descripcion_corta: "Consola de ingeniería profesional con React y Tailwind.",
      descripcion: "Arquitectura frontend de alto rendimiento con micro-animaciones dinámicas y optimización de activos multimedia.",
      imagen: website,
      detalles: ["Interfaz reactiva con React.js", "Animaciones con Framer Motion", "Arquitectura modular"],
      tecnologias: [{ name: "React", icon: <FaReact /> }, { name: "Tailwind", icon: <SiTailwindcss /> }, { name: "Framer", icon: <SiFramer /> }],
      imagenes: carruselWebsite,
      urlSitio: "/",
      urlRepositorio: "https://github.com/AntonioKldron/web-portafolio-v2.git"
    }
  ];

  return (
    <section className="py-24 px-4 bg-transparent relative overflow-hidden font-sans w-full h-full">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* HEADER */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-4 mb-4 ml-1">
            <span className="h-[1px] w-10 bg-gradient-to-r from-indigo-500 to-transparent"></span>
            <span className="text-indigo-400 font-bold tracking-[0.4em] uppercase text-[10px] drop-shadow-md">
              Proyectos
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter uppercase italic mt-2">
            Desarrollos <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-light not-italic">Realizados.</span>
          </h2>
        </div>



        <div className="space-y-4">
          {proyectosData.map((pro, idx) => (
            <ProyectoCarta 
              key={pro.id} data={pro} isOpen={openProject === idx} 
              toggle={() => setOpenProject(openProject === idx ? null : idx)}
              abrirModal={() => {
                setDirection(0);
                setModalData({ abierto: true, imagenes: pro.imagenes.length > 0 ? pro.imagenes : [pro.imagen], actual: 0, titulo: pro.titulo });
              }}
            />
          ))}
        </div>
      </div>

      {/* MODAL: ESTACIÓN DE INSPECCIÓN CON FONDO SÓLIDO */}
      <AnimatePresence>
        {modalData.abierto && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[250] flex flex-col items-center justify-between py-6 md:py-8 overflow-hidden bg-slate-950/95"
          >
            {/* CAPA ÓPTICA */}
            <div className="absolute inset-0 backdrop-blur-[80px] cursor-zoom-out" onClick={cerrarModal} />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* HEADER TÉCNICO */}
            <div className="relative w-full max-w-7xl px-6 md:px-12 flex justify-between items-start z-[260] pointer-events-none shrink-0">
              <div className="flex items-center gap-10">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-1 opacity-50">
                    <FaTerminal className="text-indigo-500 text-[10px]" />
                    <span className="text-indigo-400 font-mono text-[9px] uppercase tracking-[0.6em] animate-pulse">Unit_Inspection_v2.0</span>
                  </div>
                  <h4 className="text-white font-black uppercase italic tracking-tighter text-4xl md:text-6xl leading-none drop-shadow-2xl">{modalData.titulo}</h4>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex gap-1">{[...Array(3)].map((_,i) => <div key={i} className="h-1 w-4 bg-indigo-500/40 rounded-full" />)}</div>
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest italic">Frame_{modalData.actual + 1}_of_{modalData.imagenes.length}</span>
                  </div>
                </div>
              </div>
              <button onClick={cerrarModal} className="pointer-events-auto group p-2 text-white/20 hover:text-white transition-all duration-700 outline-none">
                <div className="relative flex items-center justify-center">
                   <FaTimes size={32} className="group-hover:rotate-180 transition-transform duration-700" />
                   <div className="absolute inset-0 blur-2xl bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            </div>

            {/* VISOR CENTRAL */}
            <div className="relative w-full max-w-7xl flex-1 flex items-center justify-center mt-2 border-none">
              {modalData.imagenes.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 z-[270] pointer-events-none">
                  <motion.button whileHover={{ scale: 1.2, x: -10 }} onClick={() => paginate(-1)} className="pointer-events-auto p-4 text-white/10 hover:text-indigo-400 transition-all duration-500 border-none outline-none"><FaChevronLeft size={80} strokeWidth={1} /></motion.button>
                  <motion.button whileHover={{ scale: 1.2, x: 10 }} onClick={() => paginate(1)} className="pointer-events-auto p-4 text-white/10 hover:text-indigo-400 transition-all duration-500 border-none outline-none"><FaChevronRight size={80} strokeWidth={1} /></motion.button>
                </div>
              )}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={modalData.actual} custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 300 : -300, scale: 0.9, filter: "blur(20px)" }} 
                  animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }} 
                  exit={{ opacity: 0, x: direction > 0 ? -300 : 300, scale: 0.9, filter: "blur(20px)" }}
                  transition={{ x: { type: "spring", stiffness: 150, damping: 20 }, opacity: { duration: 0.4 } }}
                  className="relative h-full w-full flex items-center justify-center"
                >
                  <div className="relative group/asset">
                    <img src={modalData.imagenes[modalData.actual]} className="max-h-[65vh] w-auto object-contain shadow-[0_60px_150px_rgba(0,0,0,1)] z-10 select-none rounded-[1.5rem]" alt="Inspect" />
                    <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden pointer-events-none z-20 opacity-10 mix-blend-overlay bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.01),rgba(0,0,255,0.01))] bg-[length:100%_4px,3px_100%]" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* FILMSTRIP */}
            {modalData.imagenes.length > 1 && (
              <div className="relative z-[260] flex gap-4 p-4 overflow-x-auto no-scrollbar max-w-7xl px-12 shrink-0 border-none">
                {modalData.imagenes.map((img, idx) => (
                  <motion.button
                    key={idx} whileHover={{ y: -8, scale: 1.05 }}
                    onClick={() => { setDirection(idx > modalData.actual ? 1 : -1); setModalData(p => ({ ...p, actual: idx })); }}
                    className={`relative h-16 w-28 shrink-0 rounded-xl overflow-hidden transition-all duration-500 border-none outline-none ${
                      idx === modalData.actual 
                      ? 'ring-[2px] ring-indigo-500 ring-offset-[6px] ring-offset-slate-950 scale-110 opacity-100 shadow-[0_0_30px_rgba(99,102,241,0.4)]' 
                      : 'opacity-10 grayscale hover:grayscale-0 hover:opacity-40'
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt="Thumb" />
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}