import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaChevronDown } from 'react-icons/fa';

export default function CalendarioGithub({ calendario, isDark, anioSeleccionado, setAnioSeleccionado, t }) {
  const currentYear = new Date().getFullYear();
  const anios = Array.from({ length: 5 }, (_, i) => currentYear - i);
  const semanas = calendario?.weeks || [];
  
  const mesesAlineados = useMemo(() => {
    let mesActual = -1;
    return semanas.map((semana) => {
      if (!semana.contributionDays.length) return "";
      const fecha = new Date(semana.contributionDays[0].date);
      const mesDeEstaSemana = fecha.getUTCMonth();
      if (mesDeEstaSemana !== mesActual) {
        mesActual = mesDeEstaSemana;
        return fecha.toLocaleString(undefined, { month: 'short' });
      }
      return "";
    });
  }, [semanas]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.005, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className={`w-full relative p-5 md:p-7 rounded-[2.5rem] flex flex-col transition-all duration-700 shadow-2xl overflow-hidden
        ${isDark ? 'bg-slate-950/60 border border-white/5 shadow-violet-900/15' : 'bg-white/80 border border-slate-100 shadow-indigo-900/10 backdrop-blur-sm'}`}
    >
      {/* Brillo de fondo */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[100px] pointer-events-none
          ${isDark ? 'bg-violet-600' : 'bg-indigo-300'}`}
      />

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 shrink-0 px-2 relative z-10 gap-3">
        <div className="flex items-center gap-3.5">
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className={`p-2.5 rounded-xl border ${isDark ? 'bg-violet-500/10 border-violet-500/30 text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.3)]' : 'bg-indigo-50 border-indigo-100 text-indigo-600'}`}>
            <FaCalendarAlt className="text-xl" />
          </motion.div>
          
          <div className="flex flex-col">
            <span className={`text-[10px] md:text-xs font-black uppercase tracking-[0.25em] ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.title}
            </span>
            <span className={`text-[8px] font-mono opacity-60 tracking-wider ${isDark ? 'text-violet-300' : 'text-indigo-600'}`}>
              [ YEARLY_ACTIVITY_LOG ]
            </span>
          </div>
        </div>

        <div className="relative group">
          <select
            value={anioSeleccionado}
            onChange={(e) => setAnioSeleccionado(Number(e.target.value))}
            className={`appearance-none cursor-pointer pl-4 pr-10 py-1.5 md:py-2 rounded-full font-black text-[10px] md:text-xs outline-none transition-all border
              ${isDark 
                ? 'bg-violet-950/50 border-violet-500/40 text-violet-200 hover:bg-violet-900/50' 
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
          >
            {anios.map(anio => (
              <option key={anio} value={anio}>{anio}</option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <FaChevronDown className={`text-[10px] ${isDark ? 'text-violet-400' : 'text-indigo-500'}`} />
          </div>
        </div>
      </div>
      
      {/* ZONA DE LA GRÁFICA */}
      <div className={`w-full overflow-x-auto pt-8 pb-4 custom-scrollbar rounded-2xl px-2 md:px-4 relative z-10
        ${isDark ? 'bg-black/20 border border-white/5' : 'bg-slate-50 border border-slate-100'}`}>
        
        <div className="flex gap-2 min-w-max items-start">
          
          {/* DÍAS LATERALES */}
          <div className="flex flex-col gap-1 md:gap-1.5 mt-[28px] md:mt-[32px] shrink-0">
            {t.days.map((dia, i) => (
              <div key={i} className="h-3 md:h-4 flex items-center justify-end pr-2">
                <span className={`text-[7px] md:text-[9px] font-mono font-bold uppercase leading-none ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  {dia}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            {/* MESES */}
            <div className="flex gap-1 md:gap-1.5 mb-2 h-5">
              {mesesAlineados.map((mes, index) => (
                <div key={`mes-${index}`} className="w-3 md:w-4 flex-shrink-0">
                  {mes && (
                    <span className={`text-[8px] md:text-[10px] font-mono font-bold uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {mes}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* CUADRÍCULA DE COMMITS */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={anioSeleccionado}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex gap-1 md:gap-1.5"
              >
                {semanas.map((semana, i) => (
                  <div key={i} className="flex flex-col gap-1 md:gap-1.5">
                    {Array.from({ length: 7 }).map((_, diaIndex) => {
                      const dia = semana.contributionDays.find(d => new Date(d.date).getUTCDay() === diaIndex);
                      if (!dia) return <div key={`empty-${i}-${diaIndex}`} className="w-3 h-3 md:w-4 md:h-4 opacity-0" />;

                      return (
                        <motion.div 
                          key={dia.date}
                          variants={itemVariants}
                          whileHover={{ scale: 1.4, zIndex: 50, rotate: 10 }}
                          className={`w-3 h-3 md:w-4 md:h-4 rounded-[2px] md:rounded-[4px] cursor-pointer relative group
                            ${isDark ? 'hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] hue-rotate-[70deg]' : 'hover:shadow-[0_0_10px_rgba(99,102,241,0.5)]'}`}
                          style={{ backgroundColor: dia.color }} 
                        >
                          {/* ✨ TOOLTIP MEJORADO (Cyber Style) */}
                          <div className={`absolute opacity-0 group-hover:opacity-100 -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 
                            bg-slate-900 text-white text-[9px] font-mono font-bold rounded-lg shadow-2xl transition-all 
                            whitespace-nowrap z-[100] pointer-events-none border border-white/10 flex flex-col items-center 
                            hue-rotate-[-70deg] translate-y-2 group-hover:translate-y-0 duration-200`}>
                            <span className={isDark ? 'text-violet-400' : 'text-indigo-400'}>{dia.date}</span>
                            <span className="uppercase">{dia.contributionCount} Commits</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Scanner Line */}
      <motion.div 
        animate={{ x: ['-100%', '100%'] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className={`absolute bottom-0 left-0 h-[1px] w-full ${isDark ? 'bg-gradient-to-r from-transparent via-violet-500/50 to-transparent' : 'bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent'}`} 
      />
    </motion.div>
  );
}