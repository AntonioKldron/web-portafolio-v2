import React from 'react';

export const ProfileNav = ({ menuItems, activeSection, onScrollTo }) => (
  <nav className="flex flex-col gap-1 py-10 relative z-10 w-fit">
    {menuItems.map((item) => {
      const isActive = activeSection === item.id;
      
      return (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => { 
            e.preventDefault(); 
            onScrollTo(item.id); 
          }}
          // Contenedor: Aumentamos a duration-700 y usamos ease-in-out para una aceleración y desaceleración orgánica
          className={`group flex items-center gap-5 px-4 py-3 transition-all duration-700 ease-in-out cursor-pointer select-none ${
            isActive 
              ? "translate-x-3 opacity-100" // Movimiento sutil, sin exagerar
              : "translate-x-0 opacity-40 hover:opacity-100 hover:translate-x-1" // Hover muy leve
          }`}
        >
          {/* LÍNEA INDICADORA - Expansión suave */}
          <span 
            className={`h-[1px] transition-all duration-700 ease-in-out rounded-full ${
              isActive 
                ? "w-12 bg-primary-accent shadow-[0_0_12px_rgba(0,0,0,0)] shadow-primary-accent/40" 
                : "w-4 bg-slate-400 dark:bg-slate-500 group-hover:w-8 group-hover:bg-slate-600 dark:group-hover:bg-slate-300"
            }`} 
          />
          
          {/* TEXTO - Crecimiento de tracking más moderado para evitar parpadeos */}
          <span 
            className={`text-[11px] font-mono uppercase transition-all duration-700 ease-in-out ${
              isActive 
                ? "text-primary-accent font-bold tracking-[0.35em]" 
                : "text-card-muted font-medium tracking-[0.25em] group-hover:text-slate-800 dark:group-hover:text-slate-200"
            }`}
          >
            {item.label}
          </span>
        </a>
      );
    })}
  </nav>
);