import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TechCard from './herramientasCarta';
import { FaChevronDown } from 'react-icons/fa';
import { herramientasData } from '../data/herramientas/herramientasData'; 

export default function SeccionProyectos() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentItems = herramientasData[activeTab]?.items || [];
  const isCarousel = currentItems.length > 6;
  const midIndex = Math.ceil(currentItems.length / 2);

  const fillRow = (arr) => {
    if (arr.length === 0) return [];
    let filled = [...arr];
    while (filled.length < 12) { 
      filled = [...filled, ...arr];
    }
    return filled;
  };

  const row1 = isCarousel ? fillRow(currentItems.slice(0, midIndex)) : currentItems;
  const row2 = isCarousel ? fillRow(currentItems.slice(midIndex)) : [];

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
          
          {/* MENU RESPONSIVO */}
          <div className="lg:hidden w-full z-40 relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="w-full flex items-center justify-between p-4 bg-[#030712]/60 border border-white/10 rounded-2xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-4 text-indigo-400">
                {herramientasData[activeTab]?.icon}
                <span className="text-xs font-black uppercase text-white">{herramientasData[activeTab]?.title}</span>
              </div>
              <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }}><FaChevronDown className="text-indigo-500" /></motion.div>
            </button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 5 }} exit={{ opacity: 0, y: -10 }} className="absolute top-full left-0 w-full mt-2 bg-[#030712]/95 border border-white/10 rounded-2xl backdrop-blur-3xl overflow-hidden z-50 shadow-2xl text-left">
                  {herramientasData.map((cat, idx) => (
                    <button key={cat.id} onClick={() => { setActiveTab(idx); setIsMenuOpen(false); }} className={`w-full flex items-center gap-4 p-4 ${activeTab === idx ? 'bg-indigo-500/10 text-white' : 'text-white/40 text-left'}`}>
                      <div className="text-lg">{cat?.icon}</div>
                      <span className="text-[10px] font-black uppercase tracking-widest">{cat?.title}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* PANEL DE CONTROL */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-2 p-3 bg-[#030712]/40 border border-white/5 rounded-[2.2rem] backdrop-blur-[40px] z-30 shadow-2xl max-w-[260px] ring-1 ring-white/5 shrink-0">
             <div className="flex px-3 py-2 items-center justify-between border-b border-white/10 mb-2 relative text-left">
               <div className="flex flex-col">
                 <span className="text-[5px] font-mono text-indigo-500/80 uppercase tracking-[0.6em] font-black leading-none">Registry</span>
                 <span className="text-[8px] font-black text-white/90 uppercase tracking-tighter mt-1">Skills</span>
               </div>
               <div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
             </div>
            {herramientasData.map((cat, idx) => {
              const isActive = activeTab === idx;
              return (
                <button key={cat.id} onClick={() => setActiveTab(idx)} className={`relative flex items-center gap-4 p-3 transition-all duration-700 rounded-[1.2rem] ${isActive ? 'bg-gradient-to-r from-indigo-600/10 via-indigo-600/5 to-transparent' : 'bg-transparent opacity-20 hover:opacity-80'}`}>
                  {isActive && <motion.div layoutId="navLine" className="absolute left-0 w-[4px] h-8 bg-indigo-500 shadow-[0_0_20px_#6366f1] rounded-r-full" />}
                  <div className={`text-lg z-10 ${isActive ? 'text-white scale-110' : 'text-indigo-400'}`}>{cat?.icon}</div>
                  <h3 className={`text-[9px] font-black tracking-[0.2em] uppercase transition-all ${isActive ? 'text-white text-left' : 'text-white/40 text-left'}`}>{cat?.title}</h3>
                </button>
              );
            })}
          </div>

          {/* VISOR */}
          <div className="lg:col-span-9 relative bg-transparent lg:pl-10 overflow-hidden min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }} className="w-full">
                {!isCarousel ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 py-10">
                    {currentItems.map((tech, i) => (
                      <div key={`grid-${i}`} className="flex justify-center lg:justify-start">
                         <TechCard icon={tech?.icon} name={tech?.name} color={tech?.primary} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-12 py-10">
                    <div className="flex overflow-hidden">
                      <motion.div animate={{ x: [0, -1200] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex gap-16 shrink-0">
                        {row1.map((tech, i) => <TechCard key={`r1-${i}`} icon={tech?.icon} name={tech?.name} color={tech?.primary} />)}
                      </motion.div>
                    </div>
                    <div className="flex overflow-hidden">
                      <motion.div animate={{ x: [-1200, 0] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex gap-16 shrink-0">
                        {row2.map((tech, i) => <TechCard key={`r2-${i}`} icon={tech?.icon} name={tech?.name} color={tech?.primary} />)}
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