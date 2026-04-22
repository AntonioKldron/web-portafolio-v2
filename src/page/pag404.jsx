import React from 'react';
import FondoAnimado from '../shared/static/fondo';
import { FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// Importamos tu contexto
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
  // Extraemos lang y isDark de tu contexto
  const { lang, isDark } = useApp(); 

  const t = translations[lang] || translations.es;

  return (
    <div className="min-h-screen w-full text-slate-800 dark:text-cyan-50 relative overflow-hidden transition-colors duration-300">
      <FondoAnimado isActive={true} />
      
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 z-10 relative">
        
        {/* Candado con resplandor neón dinámico */}
        <FaLock className={`text-6xl mb-6 animate-[pulse_2s_infinite] transition-colors duration-300 ${
          isDark 
            ? 'text-[#00f6ff] drop-shadow-[0_0_15px_rgba(0,246,255,0.8)]' 
            : 'text-blue-700 drop-shadow-[0_0_15px_rgba(29,78,216,0.6)]'
        }`} />
        
        {/* Título Gradient Dinámico */}
        <h1 className={`text-5xl md:text-6xl font-black mb-4 tracking-tighter uppercase text-transparent bg-clip-text transition-all duration-300 bg-gradient-to-r ${
          isDark 
            ? 'from-[#3b82f6] via-[#00f6ff] to-[#2563eb] drop-shadow-[0_0_12px_rgba(0,246,255,0.4)]' 
            : 'from-blue-800 via-blue-600 to-indigo-900 drop-shadow-sm'
        }`}>
          {t.title}
        </h1>
        
        {/* Mensaje de texto */}
        <p className={`text-lg font-medium max-w-xl mb-8 tracking-wide transition-colors duration-300 drop-shadow-sm ${
          isDark ? 'text-cyan-100/80' : 'text-slate-700'
        }`}>
          {t.message}
        </p>
        
        {/* Botón Animado Dinámico */}
        <button
          onClick={() => navigate('/')}
          className={`group relative px-8 py-3.5 rounded-full font-black uppercase tracking-widest text-xs overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-105 backdrop-blur-sm ${
            isDark 
              ? 'bg-slate-900/60 border border-[#00f6ff]/50 text-white shadow-[0_0_15px_rgba(0,246,255,0.4)] hover:shadow-[0_0_30px_rgba(0,246,255,0.7)]' 
              : 'bg-blue-600 border border-transparent text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]'
          }`}
        >
          {/* Fondo gradiente de hover */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 bg-gradient-to-r ${
            isDark 
              ? 'from-[#2563eb] via-[#00f6ff] to-[#3b82f6]' 
              : 'from-blue-800 via-blue-700 to-indigo-800'
          }`} />
          <span className="relative z-10 drop-shadow-md">
            {t.buttonText}
          </span>
        </button>
      </div>
    </div>
  );
}