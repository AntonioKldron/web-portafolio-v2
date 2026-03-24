import React, { useMemo } from 'react';
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

  return (
    <div className={`w-full relative p-5 md:p-8 rounded-[2rem] flex flex-col gap-5 transition-colors shadow-2xl
      ${isDark ? 'bg-slate-900/40 border border-white/5 shadow-violet-900/10' : 'bg-white border border-slate-100 shadow-indigo-900/5'}`}>
      
      {/* CABECERA CON SELECTOR NATIVO */}
      <div className="flex flex-row items-center justify-between gap-4">
        
        {/* Título */}
        <h3 className={`text-base md:text-xl font-black tracking-tight flex items-center gap-2.5 ${isDark ? 'text-white' : 'text-slate-800'}`}>
          <FaCalendarAlt className={`text-lg md:text-xl ${isDark ? 'text-violet-400' : 'text-indigo-500'}`} />
          {t.title} 
        </h3>

        {/* ✨ NUEVO: SELECTOR DE AÑO (Compacto y Mobile-Friendly) */}
        <div className="relative group">
          <select
            value={anioSeleccionado}
            onChange={(e) => setAnioSeleccionado(Number(e.target.value))}
            className={`appearance-none cursor-pointer pl-4 pr-10 py-2 md:py-2.5 rounded-xl font-bold text-xs md:text-sm outline-none transition-all shadow-md backdrop-blur-md
              ${isDark 
                ? 'bg-white/5 border border-white/10 text-violet-300 hover:border-violet-500/50 hover:bg-white/10 focus:ring-2 focus:ring-violet-500/50' 
                : 'bg-slate-50 border border-slate-200 text-indigo-600 hover:border-indigo-300 focus:ring-2 focus:ring-indigo-500/50'
              }`}
          >
            {anios.map(anio => (
              <option key={anio} value={anio} className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-800'}>
                {anio}
              </option>
            ))}
          </select>
          
          {/* Flecha personalizada para ocultar la flecha fea del navegador */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none transition-transform group-hover:translate-y-[-30%]">
            <FaChevronDown className={`text-xs ${isDark ? 'text-violet-400' : 'text-indigo-500'}`} />
          </div>
        </div>
        
      </div>
      
      {/* ZONA DE LA GRÁFICA (Scroll horizontal suave en móviles) */}
      <div className={`w-full overflow-x-auto pt-10 pb-4 custom-scrollbar rounded-2xl px-2 md:px-4 
        ${isDark ? 'bg-black/20 border border-white/5' : 'bg-slate-50 border border-slate-100'}`}>
        <div className="flex gap-1.5 md:gap-2 min-w-max">
          
          {/* Etiquetas Laterales (Días de la semana) */}
          <div className="flex flex-col gap-1 md:gap-1.5 mt-[18px] md:mt-[22px] pr-1 md:pr-2">
            {t.days.map((dia, i) => (
              <div key={i} className="h-3 md:h-4 flex items-center justify-end">
                <span className={`text-[8px] md:text-[10px] font-bold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{dia}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            {/* Meses en la parte superior */}
            <div className="flex gap-1 md:gap-1.5 mb-1.5 md:mb-2">
              {mesesAlineados.map((mes, index) => (
                <div key={`mes-${index}`} className="w-3 md:w-4 flex-shrink-0">
                  <span className={`text-[9px] md:text-[10px] font-bold capitalize ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{mes}</span>
                </div>
              ))}
            </div>

            {/* Cuadritos (Commits) */}
            <div className="flex gap-1 md:gap-1.5">
              {semanas.map((semana, i) => (
                <div key={i} className="flex flex-col gap-1 md:gap-1.5">
                  {Array.from({ length: 7 }).map((_, diaIndex) => {
                    const dia = semana.contributionDays.find(d => new Date(d.date).getUTCDay() === diaIndex);
                    
                    if (!dia) return <div key={`empty-${i}-${diaIndex}`} className="w-3 h-3 md:w-4 md:h-4 opacity-0 pointer-events-none" />;

                    // Cuadrito interactivo con CSS hue-rotate para modo oscuro (cambia verdes a violetas nativamente)
                    return (
                      <div 
                        key={dia.date} 
                        className={`w-3 h-3 md:w-4 md:h-4 rounded-[2px] md:rounded-[4px] transition-all duration-300 hover:scale-150 hover:z-10 cursor-pointer relative group
                          ${isDark ? 'hover:shadow-[0_0_12px_rgba(139,92,246,0.9)] hue-rotate-[70deg]' : 'hover:shadow-[0_0_10px_rgba(99,102,241,0.5)]'}`}
                        style={{ backgroundColor: dia.color }} 
                      >
                        {/* Tooltip superpuesto (No se corta gracias al pt-10 del contenedor padre) */}
                        <div className="absolute opacity-0 group-hover:opacity-100 -top-10 md:-top-12 left-1/2 -translate-x-1/2 px-2.5 py-1.5 md:px-3 md:py-2 bg-slate-900 text-white text-[9px] md:text-[10px] font-bold rounded-lg md:rounded-xl shadow-xl transition-opacity whitespace-nowrap z-50 pointer-events-none flex flex-col items-center gap-0.5 md:gap-1 hue-rotate-[-70deg]">
                          <span className={isDark ? 'text-violet-400' : 'text-indigo-400'}>{dia.date}</span>
                          <span>{dia.contributionCount} commits</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}