import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TechCard from './herramientasCarta';
import { FaCode, FaCogs, FaDatabase, FaChevronDown } from 'react-icons/fa';
import { SiPython, SiPostgresql, SiDotnet, SiJavascript, SiSupabase, SiGo, SiRust, SiPhp, SiMysql, SiRedis, SiNginx, SiAmazonwebservices, SiReact, SiGithub, SiDocker, SiLinux } from "react-icons/si";
import { TbSql, TbApi } from "react-icons/tb";

export default function SeccionProyectos() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categorias = [
    { title: "Backend Core", id: "BT-01", icon: <FaCode />, 
      items: [
        { icon: <SiPython />, name: "Python", color: "text-blue-400" },
        { icon: <TbSql />, name: "SQL", color: "text-indigo-400" },
        { icon: <SiDotnet />, name: "C#", color: "text-purple-500" },
        { icon: <SiPostgresql />, name: "PostgreSQL", color: "text-blue-300" },
        { icon: <SiGo />, name: "Go", color: "text-cyan-500" },
        { icon: <SiRust />, name: "Rust", color: "text-orange-600" },
        { icon: <SiPhp />, name: "PHP", color: "text-indigo-300" },
        { icon: <SiMysql />, name: "MySQL", color: "text-amber-600" },
        { icon: <SiRedis />, name: "Redis", color: "text-red-500" },
        { icon: <SiNginx />, name: "Nginx", color: "text-emerald-500" },
        { icon: <SiAmazonwebservices />, name: "AWS", color: "text-orange-400" }
      ] 
    },
    { title: "Frameworks & APIs", id: "FA-02", icon: <TbApi />,
      items: [
        { icon: <SiReact />, name: "React", color: "text-cyan-400" },
        { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-400" },
        { icon: <TbApi />, name: "REST APIs", color: "text-rose-400" },
        { icon: <SiSupabase />, name: "Supabase", color: "text-emerald-500" }
      ] 
    },
    { title: "Infrastructure", id: "IN-04", icon: <FaCogs />, 
      items: [
        { icon: <SiDocker />, name: "Docker", color: "text-blue-400" },
        { icon: <SiLinux />, name: "Linux", color: "text-white" },
        { icon: <SiGithub />, name: "GitHub", color: "text-gray-300" }
      ]
    },
    { title: "Data Analysis", id: "DA-03", icon: <FaDatabase />, 
      items: [
        { icon: <FaDatabase />, name: "SSMS", color: "text-amber-500" },
        { icon: <TbSql />, name: "Queries", color: "text-indigo-400" }
      ] 
    }
  ];

  const currentItems = categorias[activeTab].items;
  
  // NUEVO LÍMITE: 6 elementos para activar el carrusel
  const isCarousel = currentItems.length > 6;

  const midIndex = Math.ceil(currentItems.length / 2);
  
  // Multiplicamos por 4 para asegurar que siempre haya contenido al arrancar (x:0)
  const row1 = isCarousel 
    ? [...currentItems.slice(0, midIndex), ...currentItems.slice(0, midIndex), ...currentItems.slice(0, midIndex), ...currentItems.slice(0, midIndex)] 
    : currentItems;
    
  const row2 = isCarousel 
    ? [...currentItems.slice(midIndex), ...currentItems.slice(midIndex), ...currentItems.slice(midIndex), ...currentItems.slice(midIndex)] 
    : [];

  return (
    <section className="py-24 px-4 bg-transparent relative overflow-hidden font-sans w-full h-full">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* HEADER */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-4 mb-4 ml-1">
            <span className="h-[1px] w-10 bg-gradient-to-r from-indigo-500 to-transparent"></span>
            <span className="text-indigo-400 font-bold tracking-[0.4em] uppercase text-[10px] drop-shadow-md">
              Herramientas
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter uppercase italic mt-2">
            Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-light not-italic">Tecnológico.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* MENU RESPONSIVO (Móvil) */}
          <div className="lg:hidden w-full z-40 relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="w-full flex items-center justify-between p-4 bg-[#030712]/60 border border-white/10 rounded-2xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-4 text-indigo-400">
                {categorias[activeTab].icon}
                <span className="text-xs font-black uppercase text-white">{categorias[activeTab].title}</span>
              </div>
              <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }}><FaChevronDown className="text-indigo-500" /></motion.div>
            </button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 5 }} exit={{ opacity: 0, y: -10 }} className="absolute top-full left-0 w-full mt-2 bg-[#030712]/95 border border-white/10 rounded-2xl backdrop-blur-3xl overflow-hidden z-50 shadow-2xl">
                  {categorias.map((cat, idx) => (
                    <button key={cat.id} onClick={() => { setActiveTab(idx); setIsMenuOpen(false); }} className={`w-full flex items-center gap-4 p-4 ${activeTab === idx ? 'bg-indigo-500/10 text-white' : 'text-white/40'}`}>
                      <div className="text-lg">{cat.icon}</div>
                      <span className="text-[10px] font-black uppercase tracking-widest">{cat.title}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* PANEL DE CONTROL (Escritorio v10.0) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-2 p-3 bg-[#030712]/40 border border-white/5 rounded-[2.2rem] backdrop-blur-[40px] z-30 shadow-2xl max-w-[260px] ring-1 ring-white/5 shrink-0">
            <div className="flex px-3 py-2 items-center justify-between border-b border-white/10 mb-2 relative text-left">
              <div className="flex flex-col">
                <span className="text-[5px] font-mono text-indigo-500/80 uppercase tracking-[0.6em] font-black leading-none">Registry</span>
                <span className="text-[8px] font-black text-white/90 uppercase tracking-tighter mt-1">Sckills</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
            </div>
            {categorias.map((cat, idx) => {
              const isActive = activeTab === idx;
              return (
                <button key={cat.id} onClick={() => setActiveTab(idx)} className={`relative flex items-center gap-4 p-3 transition-all duration-700 rounded-[1.2rem] ${isActive ? 'bg-gradient-to-r from-indigo-600/10 via-indigo-600/5 to-transparent' : 'bg-transparent opacity-20 hover:opacity-80'}`}>
                  {isActive && <motion.div layoutId="navLine" className="absolute left-0 w-[4px] h-8 bg-indigo-500 shadow-[0_0_20px_#6366f1] rounded-r-full" />}
                  <div className={`text-lg z-10 ${isActive ? 'text-white scale-110' : 'text-indigo-400'}`}>{cat.icon}</div>
                  <h3 className={`text-[9px] font-black tracking-[0.2em] uppercase transition-all ${isActive ? 'text-white' : 'text-white/40 text-left'}`}>{cat.title}</h3>
                </button>
              );
            })}
          </div>

          {/* VISOR HÍBRIDO (Límite 6) */}
          <div className="lg:col-span-9 relative bg-transparent lg:pl-10 overflow-hidden min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                {!isCarousel ? (
                  /* VISTA ESTÁTICA: Para 6 o menos elementos */
                  <div className="flex flex-wrap gap-16 py-8 justify-center lg:justify-start">
                    {currentItems.map((tech, i) => (
                      <TechCard key={`static-${activeTab}-${i}`} {...tech} />
                    ))}
                  </div>
                ) : (
                  /* VISTA CARRUSEL: Para más de 6 elementos */
                  <div className="flex flex-col gap-10 py-8">
                    <div className="flex overflow-hidden">
                      <motion.div 
                        animate={{ x: [0, -2500] }} 
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }} 
                        className="flex gap-16 shrink-0"
                      >
                        {row1.map((tech, i) => <TechCard key={`r1-${activeTab}-${i}`} {...tech} />)}
                      </motion.div>
                    </div>
                    <div className="flex overflow-hidden">
                      <motion.div 
                        animate={{ x: [-2500, 0] }} 
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }} 
                        className="flex gap-16 shrink-0"
                      >
                        {row2.map((tech, i) => <TechCard key={`r2-${activeTab}-${i}`} {...tech} />)}
                      </motion.div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}