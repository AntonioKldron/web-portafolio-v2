import React from 'react';
import FondoAnimado from '../static/fondo';
import MouseLightSpot from '../components/SpotlightCard';
import { FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Pagina404() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full text-indigo-100 animated-gradient relative overflow-hidden">
      <FondoAnimado isActive={true} />
      <MouseLightSpot />
      
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 z-10 relative">
        <FaLock className="text-6xl text-red-400 mb-6 animate-pulse" />
        <h1 className="text-5xl font-bold mb-4">No Disponible</h1>
        <p className="text-lg text-indigo-200 max-w-xl mb-6">
          Lo sentimos, el recurso que estás intentando acceder no se encuentra disponible o es de acceso restringido.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-full text-white font-semibold transition-all duration-300"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
}
