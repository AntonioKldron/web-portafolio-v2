import React from 'react';
import rostro  from '../assets/img/miFoto.png'
import CV from '../../public/pdf/A4 - 1.pdf';

export default function MiCartaPerfil() {
  return (
    <div className="flex flex-col space-y-6 text-gray-300">
        <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-10 text-gray-300">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                <img
                src={rostro}
                alt="José Antonio Cornelio Calderón"
                className="w-full h-full object-cover"
                loading="lazy"
                />
            </div>

            <div className="flex-1">
                <h1 className="text-4xl font-bold text-white mb-1">
                Jose Antonio Cornelio Calderon
                </h1>
                <h3 className="text-xl font-semibold text-indigo-400 mb-4">
                Ingeniero de software
                </h3>
                <p className="text-justify text-base leading-relaxed max-w-xl">
                    Ingeniero en software especializado en{' '}
                    <span className="text-indigo-400 font-semibold">APIs REST</span> e integración de{' '}
                    <span className="text-indigo-400 font-semibold">sistemas ERP</span> con experiencia en{' '}
                    <span className="text-indigo-400 font-semibold">React</span>,{' '}
                    <span className="text-indigo-400 font-semibold">Django</span> y{' '}
                    <span className="text-indigo-400 font-semibold">SQL Server</span>.
                </p>
            </div>
        </div>

        <div className="flex flex-row justify-between items-center mt-8 w-full">
            <div className='space-y-8'>
                <div className="flex flex-col space-y-2 text-indigo-300 font-medium">
                <a href="#sobre-mi" className="hover:text-indigo-400 transition-colors">Sobre mí</a>
                <a href="#herramientas" className="hover:text-indigo-400 transition-colors">Herramientas</a>
                <a href="#" className="hover:text-indigo-400 transition-colors">Experiencia</a>
                <a href="#" className="hover:text-indigo-400 transition-colors">Proyectos</a>
                <a href="#" className="hover:text-indigo-400 transition-colors">Educacion</a>
                </div>

                {/* Enlaces sociales */}
                <div className="flex space-x-6 justify-center text-gray-400">
                    <a href="https://github.com/AntonioKldron" className="text-2xl hover:text-blue-400 transition-colors transform hover:scale-105" aria-label="Link a Git">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/josé-antonio-cornelio-calderón-201885291" className="text-2xl hover:text-blue-500 transition-colors transform hover:scale-105" aria-label="Link a LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-2xl hover:text-green-400 transition-colors transform hover:scale-105" aria-label="Link a Whatsapp">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="#" className="text-2xl hover:text-red-400 transition-colors transform hover:scale-105" aria-label="Link a Gmail">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <a
                href={CV}
                download='CV-Jose-Antonio-Cornelio-Calderon'
                className="px-6 py-3 bg-indigo-500 text-white rounded-xl font-semibold shadow-md hover:bg-indigo-600 hover:scale-105 transform transition-transform duration-300"
                >
                Descargar CV
                </a>
            </div>
        </div>
    </div>
  );
}
