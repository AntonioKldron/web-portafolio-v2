import React, { useState } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import TechCard from "./herramientasCarta";
import { FaReact, FaGitAlt, FaDocker, FaLinux, FaDatabase, FaChevronDown, FaCode, FaServer, FaCogs } from "react-icons/fa";
import { SiJavascript, SiPython, SiDotnet, SiPostgresql, SiDjango, SiGithub, SiSupabase } from "react-icons/si";
import { TbSql, TbApi } from "react-icons/tb";
import { MdOutlineDataUsage } from "react-icons/md"; 

export default function StackSection() {
  const [openCategories, setOpenCategories] = useState([]);

  // CORRECCIÓN: Cambiamos 'index' por 'idx' dentro del filter
  const toggleCategory = (idx) => {
    setOpenCategories(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [idx] 
    );
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } }
    ]
  };

  const categorias = [
    { 
      title: "Backend Core", 
      id: "U_01",
      icon: <FaCode className="text-indigo-400" />,
      items: [
        { icon: <SiPython className="text-blue-400" />, name: "Python" },
        { icon: <TbSql className="text-indigo-400" />, name: "SQL" },
        { icon: <SiDotnet className="text-purple-500" />, name: "C#" },
        { icon: <FaDatabase className="text-amber-500" />, name: "SSMS" }
      ] 
    },
    { 
      title: "Frameworks & APIs", 
      id: "U_02",
      icon: <TbApi className="text-emerald-400" />,
      items: [
        { icon: <SiDjango className="text-emerald-600" />, name: "Django" },
        { icon: <FaReact className="text-cyan-400" />, name: "React" },
        { icon: <SiJavascript className="text-yellow-400" />, name: "JS" },
        { icon: <MdOutlineDataUsage className="text-purple-400" />, name: "DRF" }
      ] 
    },
    { 
      title: "Data Storage", 
      id: "U_03",
      icon: <FaServer className="text-blue-500" />,
      items: [
        { icon: <FaDatabase className="text-blue-500" />, name: "SQL Server" },
        { icon: <SiPostgresql className="text-blue-300" />, name: "PostgreSQL" },
        { icon: <SiSupabase className="text-emerald-500" />, name: "Supabase" }
      ] 
    },
    { 
      title: "Infrastructure", 
      id: "U_04",
      icon: <FaCogs className="text-orange-400" />,
      items: [
        { icon: <FaDocker className="text-blue-400" />, name: "Docker" },
        { icon: <FaLinux className="text-white" />, name: "Linux" },
        { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
        { icon: <SiGithub className="text-gray-300" />, name: "GitHub" }
      ] 
    }
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-4 lg:py-6 relative z-10">
      
      <div className="flex flex-col mb-6 space-y-1">
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-8 bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
          <span className="text-[10px] font-bold tracking-[0.3em] text-indigo-400 uppercase font-mono">SKILLS</span>
        </div>
        <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter uppercase italic leading-tight">
          STACK <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-light not-italic">Tecnológico.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {categorias.map((cat, idx) => {
          const isOpen = openCategories.includes(idx);
          return (
            <div key={idx} className={`border border-white/5 rounded-2xl transition-all duration-300 bg-[#0a0f1c]/40 backdrop-blur-md overflow-hidden ${isOpen ? 'border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.05)]' : 'hover:border-white/10'}`}>
              <button 
                onClick={() => toggleCategory(idx)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className="text-xl transition-colors duration-300 group-hover:text-white">
                    {cat.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-indigo-500 font-mono text-[9px] opacity-40">[{cat.id}]</span>
                    <h3 className="text-xs font-black tracking-[0.15em] text-gray-400 uppercase group-hover:text-white transition-colors">
                      {cat.title}
                    </h3>
                  </div>
                </div>
                <motion.div 
                  animate={{ rotate: isOpen ? 180 : 0 }} 
                  className="text-indigo-500 text-sm"
                >
                  <FaChevronDown />
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: "auto", opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    className="px-6 pb-6"
                  >
                    <div className="pt-3 border-t border-white/5">
                      <Slider {...sliderSettings}>
                        {cat.items.map((tech, i) => (
                          <TechCard key={i} {...tech} />
                        ))}
                      </Slider>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}