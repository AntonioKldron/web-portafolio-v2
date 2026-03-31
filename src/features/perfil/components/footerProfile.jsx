import React from 'react';

export const ProfileFooter = ({ socials, cv }) => (
  <footer className="pt-8 border-t border-main-border space-y-8 relative z-10">
    <div className="flex items-center justify-between">
      {/* Iconos Sociales */}
      <div className="flex gap-6 text-xl">
        {socials.map(social => (
          <a 
            key={social.name} 
            href={social.url} 
            target="_blank" 
            rel="noreferrer" 
            className="text-muted-text transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-110 hover:text-primary-accent"
          >
            <i className={social.icon} />
          </a>
        ))}
      </div>

      {/* Botón de Descarga de CV Dinámico */}
      <a 
        href={cv} 
        download 
        className="group relative px-6 py-2.5 bg-main-bg border border-main-border rounded-xl text-[10px] font-black tracking-widest text-main-text uppercase overflow-hidden hover:bg-primary-accent hover:text-white transition-all duration-500 shadow-sm"
      >
        <span className="relative z-10">CV</span>
        <div className="absolute inset-0 bg-primary-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </a>
    </div>
  </footer>
);
