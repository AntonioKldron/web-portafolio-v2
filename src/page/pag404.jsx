import React from 'react';
import FondoAnimado from '../shared/static/fondo';
import { FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@context/appContext'; 

const translations = {
  es: {
    title: "No Disponible",
    message: "Lo sentimos, el recurso que estás intentando acceder no se encuentra disponible o es de acceso restringido.",
    buttonText: "Volver al Inicio"
  },
  en: {
    title: "Not Available",
    message: "Sorry, the resource you are trying to access is currently unavailable or restricted.",
    buttonText: "Back to Home"
  }
};

export default function Pagina404() {
  const navigate = useNavigate();
  const { lang } = useApp(); 

  const t = translations[lang] || translations.es;

  return (
    <div className="min-h-screen w-full text-slate-800 dark:text-indigo-100 relative overflow-hidden transition-colors duration-300">
      <FondoAnimado isActive={true} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-3/4 h-3/4 bg-[#581c87] opacity-10 dark:opacity-30 blur-[120px] pointer-events-none -z-0 rounded-full animate-pulse" />
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 z-10 relative">
        <FaLock className="text-6xl text-[#d946ef] mb-6 animate-[pulse_2s_infinite] drop-shadow-[0_0_15px_rgba(217,70,239,0.8)] transition-colors duration-300" />
        <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] via-[#c026d3] to-[#4c1d95] dark:from-[#a855f7] dark:via-[#d946ef] dark:to-[#7e22ce] drop-shadow-[0_2px_12px_rgba(107,33,168,0.5)]">
          {t.title}
        </h1>
        <p className="text-lg text-slate-700 dark:text-[#e9d5ff] font-medium max-w-xl mb-8 tracking-wide transition-colors duration-300 drop-shadow-sm">
          {t.message}
        </p>
        <button
          onClick={() => navigate('/')}
          className="group relative px-8 py-3.5 bg-[#6b21a8] rounded-full text-white font-black uppercase tracking-widest text-xs overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(107,33,168,0.6)] hover:shadow-[0_0_30px_rgba(217,70,239,0.8)] hover:-translate-y-1 hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#7e22ce] via-[#d946ef] to-[#c026d3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
          <span className="relative z-10 drop-shadow-md">
            {t.buttonText}
          </span>
        </button>
      </div>
    </div>
  );
}