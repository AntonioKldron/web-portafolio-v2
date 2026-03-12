import React from 'react';

export const ProfileFooter = ({ socials, cv }) => (
  <footer className="pt-8 border-t border-white/5 space-y-8 relative z-10">
    <div className="flex items-center justify-between">
      <div className="flex gap-6 text-xl">
        {socials.map(social => (
          <a key={social.name} href={social.url} target="_blank" rel="noreferrer" 
             className={`${social.color} transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]`}>
            <i className={social.icon} />
          </a>
        ))}
      </div>

      <a href={cv} download className="group relative px-6 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black tracking-widest text-white uppercase overflow-hidden hover:bg-indigo-600 hover:border-indigo-400 transition-all duration-500 active:scale-95 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
        <span className="relative z-10">CV</span>
      </a>
    </div>
  </footer>
);