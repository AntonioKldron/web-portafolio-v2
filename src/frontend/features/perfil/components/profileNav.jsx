import React from 'react';

export const ProfileNav = ({ menuItems, activeSection, onScrollTo }) => (
  <nav className="hidden lg:flex flex-col gap-7 py-10 relative z-10">
    {menuItems.map((item, index) => {
      const isActive = activeSection === item.id;
      const serial = (index + 1).toString().padStart(2, '0');

      return (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => { e.preventDefault(); onScrollTo(item.id); }}
          className={`group relative flex items-center gap-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isActive ? "text-white translate-x-4" : "text-gray-500 hover:text-gray-300"
          }`}
        >
          <div className="relative flex items-center h-4">
            <span className={`h-[1px] transition-all duration-1000 ${
              isActive 
                ? "w-12 bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.4)]" 
                : "w-4 bg-gray-800 group-hover:w-8 group-hover:bg-gray-600"
            }`} />
          </div>

          <div className="flex items-baseline gap-3">
            <span className={`text-[10px] uppercase tracking-[0.5em] font-mono transition-all duration-500 ${
              isActive ? "font-bold tracking-[0.6em]" : "font-medium"
            }`}>
              {item.label}
            </span>
          </div>

          {isActive && (
            <span className="absolute -left-1 w-1 h-1 bg-indigo-500 rounded-full shadow-[0_0_8px_#6366f1]" />
          )}
        </a>
      );
    })}
  </nav>
);