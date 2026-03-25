import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaChevronDown, FaCheck } from 'react-icons/fa';

export default function CalendarioGithub({ calendario, isDark, anioSeleccionado, setAnioSeleccionado, t }) {
  const [isOpen, setIsOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const anios = Array.from({ length: 5 }, (_, i) => currentYear - i);
  const semanas = calendario?.weeks || [];

  // Escala de Azules Neón (Modo Oscuro)
  const neonBlueScale = {
    level0: "#e2e8f0", 
    level1: "#99e9ff", 
    level2: "#33ccff", 
    level3: "#268ebf", 
    level4: "#1a5a78", 
  };

  // Escala de Verdes (Modo Claro - Tradicional GitHub)
  const classicGreenScale = {
    level0: "#ebedf0",
    level1: "#9be9a8",
    level2: "#40c463",
    level3: "#30a14e",
    level4: "#216e39",
  };

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

  const getBoxColor = (dia) => {
    const count = dia.contributionCount;
    
    // Si estamos en Modo Oscuro (Azules Neón manuales)
    if (isDark) {
      if (count === 0) return neonBlueScale.level0;
      if (count >= 10) return neonBlueScale.level4;
      if (count >= 6) return neonBlueScale.level3;
      if (count >= 3) return neonBlueScale.level2;
      return neonBlueScale.level1;
    }

    // Si estamos en Modo Claro (Verdes clásicos)
    return dia.color; 
  };

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className={`w-full relative p-6 rounded-[2rem] border flex flex-col transition-all shadow-xl overflow-visible
        ${isDark ? 'bg-slate-900/50 border-white/10 shadow-blue-900/20' : 'bg-white/80 border-slate-200 shadow-indigo-500/10'}`}
    >
      <div className="flex justify-between items-center mb-6 relative z-[100]">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-indigo-100 text-indigo-600'}`}>
            <FaCalendarAlt className="text-lg" />
          </div>
          <span className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {t.title}
          </span>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-xl font-mono text-xs font-bold border transition-all outline-none
              ${isDark ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-slate-50 border-slate-200 text-slate-800'}`}
          >
            {anioSeleccionado}
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
              <FaChevronDown className="text-[10px] opacity-50" />
            </motion.div>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className={`absolute right-0 mt-2 w-28 rounded-xl border p-1 shadow-2xl backdrop-blur-md z-[110]
                  ${isDark ? 'bg-slate-900/95 border-white/10 shadow-black' : 'bg-white/95 border-slate-200 shadow-xl'}`}
              >
                {anios.map((anio) => (
                  <button
                    key={anio}
                    type="button"
                    onClick={() => { setAnioSeleccionado(anio); setIsOpen(false); }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-[10px] font-bold transition-colors
                      ${anioSeleccionado === anio 
                        ? (isDark ? 'bg-blue-500 text-white' : 'bg-indigo-600 text-white')
                        : (isDark ? 'text-slate-400 hover:bg-white/5' : 'text-slate-600 hover:bg-slate-100')}`}
                  >
                    {anio}
                    {anioSeleccionado === anio && <FaCheck className="text-[8px]" />}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      <div className="w-full overflow-x-auto pb-4 custom-scrollbar relative z-10">
        <div className="flex gap-1.5 min-w-max">
          <div className="flex flex-col gap-[3px] mt-[20px] shrink-0 pr-2">
            {t.days.map((dia, i) => (
              <div key={i} className="h-3 md:h-3.5 flex items-center justify-end">
                <span className="text-[8px] font-mono font-bold uppercase text-slate-500">{dia}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <div className="flex gap-[3px] mb-1.5 h-4">
              {mesesAlineados.map((mes, index) => (
                <div key={`mes-${index}`} className="w-3 md:w-3.5 shrink-0 flex items-end">
                  {mes && <span className="text-[9px] font-mono font-bold text-slate-500 uppercase">{mes}</span>}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={anioSeleccionado} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-[3px]">
                {semanas.map((semana, i) => (
                  <div key={i} className="flex flex-col gap-[3px]">
                    {Array.from({ length: 7 }).map((_, diaIndex) => {
                      const dia = semana.contributionDays.find(d => new Date(d.date).getUTCDay() === diaIndex);
                      if (!dia) return <div key={`empty-${i}-${diaIndex}`} className="w-3 h-3 md:w-3.5 md:h-3.5 opacity-0" />;

                      const color = getBoxColor(dia);

                      return (
                        <div key={dia.date} className="relative group z-0 hover:z-50">
                          <motion.div 
                            whileHover={{ scale: 1.5, filter: isDark ? 'brightness(1.2)' : 'brightness(1)' }}
                            className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-[2px] cursor-pointer transition-all duration-300"
                            style={{ 
                              backgroundColor: color,
                              boxShadow: isDark && dia.contributionCount > 0 ? `0 0 6px ${color}33` : 'none'
                            }} 
                          />
                          <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap rounded-md text-[10px] font-mono font-bold shadow-xl border
                            ${isDark ? 'bg-slate-800 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-800'}`}>
                            {dia.contributionCount} commits <span className="opacity-50 mx-1">•</span> {dia.date}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* LEYENDA DINÁMICA */}
      <div className="flex items-center gap-2 mt-4 self-end">
        <span className="text-[10px] text-slate-500 font-mono uppercase font-bold">Less</span>
        <div className="flex gap-1">
          {(isDark ? Object.values(neonBlueScale) : Object.values(classicGreenScale)).map((col, idx) => (
            <div key={idx} className="w-2.5 h-2.5 rounded-[1px]" style={{ backgroundColor: col }} />
          ))}
        </div>
        <span className="text-[10px] text-slate-500 font-mono uppercase font-bold">More</span>
      </div>
    </motion.div>
  );
}