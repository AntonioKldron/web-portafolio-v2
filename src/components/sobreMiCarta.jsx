import React from 'react';
import { SiPython } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { DiJava } from "react-icons/di";

export default function SobreMiSeccion() {
  const Highlight = ({ children }) => (
    <strong className="font-semibold text-indigo-300 drop-shadow-[0_0_8px_rgba(99,102,241,0.4)] transition-colors duration-300 hover:text-indigo-100 cursor-default">
      {children}
    </strong>
  );

  return (
    // overflow-x-hidden aquí previene que las animaciones de escaneo o sombras se salgan
    <div className="w-full max-w-full flex flex-col justify-center min-h-screen relative z-10 py-8 lg:py-0 bg-transparent overflow-x-hidden">
      
      <style>
        {`
          @keyframes scan {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 0.5; }
            100% { transform: translateY(100%); opacity: 0; }
          }
          .animate-scan {
            animation: scan 3s linear infinite;
          }
        `}
      </style>

      {/* --- ENCABEZADO --- */}
      <div className="flex items-center gap-4 mb-4 ml-1">
        <span className="h-[1px] w-10 bg-gradient-to-r from-indigo-500 to-transparent"></span>
        <span className="text-indigo-400 font-bold tracking-[0.4em] uppercase text-[10px] drop-shadow-md">
          Profile
        </span>
      </div>

      {/* --- TÍTULO --- */}
      <h2 className="text-3xl lg:text-[2.6rem] font-black mb-10 text-white tracking-tighter leading-[1.1] drop-shadow-2xl max-w-full">
        Ingeniería de software con <br className="hidden lg:block" /> 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-500">
          propósito y precisión.
        </span>
      </h2>

      {/* --- CONTENIDO PRINCIPAL --- */}
      {/* Se eliminaron márgenes negativos y se ajustó el gap para evitar desbordamiento */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start w-full">
        
        {/* === COLUMNA IZQUIERDA: CITA + SKILLS === */}
        <div className="lg:col-span-5 flex flex-col space-y-10 w-full">
          
          <div className="relative pl-8 group">
            <div className="absolute left-0 top-0 h-full w-[4px] bg-indigo-600 rounded-full overflow-hidden shadow-[0_0_15px_rgba(79,70,229,0.4)]">
              <div className="w-full h-20 bg-white/40 animate-scan"></div>
            </div>
            
            <p className="text-xl lg:text-[1.6rem] font-extralight text-gray-200 leading-snug italic tracking-tight group-hover:text-white transition-all duration-500">
              "Construyo el <span className="font-bold text-indigo-400 not-italic">motor invisible</span> que hace que las aplicaciones sean rápidas, seguras y escalables."
            </p>
          </div>

          <div className="flex flex-col space-y-4 pl-8">
            <p className="text-[10px] font-black tracking-[0.3em] text-indigo-500/60 uppercase ml-1">Core Stack</p>
            <div className="flex flex-wrap gap-6">
              {[
                { icon: <DiJava />, label: "Java", color: "hover:text-red-500" },
                { icon: <SiPython />, label: "Python", color: "hover:text-yellow-500" },
                { icon: <FaDatabase />, label: "SQL", color: "hover:text-blue-500" }
              ].map((skill, index) => (
                <div 
                  key={index}
                  className={`group flex items-center gap-3 bg-transparent transition-all duration-500 ${skill.color} hover:-translate-y-1`}
                >
                  <div className="text-3xl transition-transform duration-500 group-hover:rotate-12 drop-shadow-md">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-bold tracking-widest text-gray-500 group-hover:text-inherit">
                    {skill.label.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === COLUMNA DERECHA: TEXTO NARRATIVO === */}
        <div className="lg:col-span-7 w-full overflow-hidden">
          <div className="space-y-6 text-gray-400 text-sm lg:text-[1.05rem] leading-[1.9] font-light text-justify">
            <p className="transition-all duration-500 hover:text-gray-200">
              Soy un <Highlight>Ingeniero de Software</Highlight> apasionado por transformar la lógica de negocio en código eficiente. Mi especialidad radica en el desarrollo de <Highlight>soluciones backend</Highlight>, la integración de <Highlight>APIs REST</Highlight> y el diseño y manejo avanzado de bases de datos como <Highlight>SQL Server</Highlight>.
            </p>
            
            <p className="transition-all duration-500 hover:text-gray-200">
              Actualmente me desempeño como <Highlight>Desarrollador SQL en Intelisis Solution</Highlight>, participando en la <Highlight>automatización e integración</Highlight> de sistemas ERP. También colaboro en <Highlight>Cinépolis</Highlight> como <Highlight>Analista</Highlight>, aportando mi capacidad analítica a la mejora continua.
            </p>

            <p className="transition-all duration-500 hover:text-gray-200">
              Domino el ecosistema de <Highlight>Django, Django REST Framework y React</Highlight>, creando arquitecturas <Highlight>seguras y escalables</Highlight> que optimizan el rendimiento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}