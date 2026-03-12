import React from 'react';
import { SiPython, SiJavascript } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { DiJava } from "react-icons/di";

export default function SobreMiSeccion() {
  const Highlight = ({ children }) => (
    <strong className="font-semibold text-indigo-300 drop-shadow-[0_0_8px_rgba(99,102,241,0.4)] transition-colors duration-300 hover:text-cyan-300 cursor-default">
      {children}
    </strong>
  );

  return (
    <div className="py-24 px-4 bg-transparent relative overflow-hidden font-sans w-full h-full">
      
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

      {/* Header con gradiente Azul e Índigo */}
      <div className="flex items-center gap-4 mb-4 ml-1">
        <span className="h-[1px] w-10 bg-gradient-to-r from-blue-500 to-transparent"></span>
        <span className="text-blue-400 font-bold tracking-[0.4em] uppercase text-[10px] drop-shadow-md">
          Sobre mi
        </span>
      </div>

      <h2 className="text-3xl lg:text-[2.6rem] font-black mb-10 text-white tracking-tighter leading-[1.1] drop-shadow-2xl max-w-full">
        Ingeniería de sistemas empresariales <br className="hidden lg:block" /> 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-500">
          integraciones, datos y arquitectura.
        </span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start w-full">
        
        <div className="lg:col-span-5 flex flex-col space-y-10 w-full">
          
          <div className="relative pl-8 group">
            <div className="absolute left-0 top-0 h-full w-[4px] bg-blue-600 rounded-full overflow-hidden shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              <div className="w-full h-20 bg-white/40 animate-scan"></div>
            </div>
            
            <p className="text-xl lg:text-[1.6rem] font-extralight text-gray-200 leading-snug italic tracking-tight group-hover:text-white transition-all duration-500">
              "Diseño el <span className="font-bold text-cyan-400 not-italic">motor invisible</span> que conecta sistemas empresariales, automatiza procesos y transforma la lógica de negocio en software escalable."
            </p>
          </div>

          <div className="flex flex-col space-y-4 pl-8">
            <p className="text-[10px] font-black tracking-[0.3em] text-blue-500/60 uppercase ml-1">Core Stack</p>
            <div className="flex flex-wrap gap-6">
              {[
                { icon: <SiJavascript />, label: "JavaScript", color: "hover:text-yellow-400" },
                { icon: <DiJava />, label: "Java", color: "hover:text-red-500" },
                { icon: <SiPython />, label: "Python", color: "hover:text-blue-400" },
                { icon: <FaDatabase />, label: "SQL", color: "hover:text-cyan-400" }
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

        <div className="lg:col-span-7 w-full overflow-hidden">
          <div className="space-y-6 text-gray-400 text-sm lg:text-[1.05rem] leading-[1.9] font-light text-justify">
            
            <p className="transition-all duration-500 hover:text-gray-200">
              Soy un <Highlight>Software & Systems Engineer</Highlight> enfocado en el desarrollo de soluciones empresariales y en la arquitectura de integraciones entre sistemas críticos. Mi trabajo se centra en convertir procesos complejos de negocio en <Highlight>software robusto, escalable y seguro</Highlight>.
            </p>
            
            <p className="transition-all duration-500 hover:text-gray-200">
              Actualmente me desempeño como <Highlight>Analista ERP en Cinépolis</Highlight>, trabajando sobre la plataforma <Highlight>Oracle PeopleSoft</Highlight> mediante el desarrollo de lógica avanzada con <Highlight>PeopleCode, Application Engine y Application Packages</Highlight>. También participo en la gestión de <Highlight>servicios web</Highlight> asegurando la interoperabilidad entre sistemas corporativos críticos.
            </p>

            <p className="transition-all duration-500 hover:text-gray-200">
              Previamente trabajé como <Highlight>Backend Engineer en Intelisis</Highlight>, donde desarrollé <Highlight>APIs REST con Django y FastAPI</Highlight>, implementé <Highlight>seguridad con OAuth2</Highlight> y diseñé soluciones avanzadas en <Highlight>SQL Server</Highlight> para la automatización e integración de procesos dentro del ERP automotriz.
            </p>

            <p className="transition-all duration-500 hover:text-gray-200">
              Mi stack incluye tecnologías como <Highlight>Python, JavaScript, SQL Server y Oracle</Highlight>, así como frameworks como <Highlight>Django, FastAPI y React</Highlight>. Me especializo en construir <Highlight>arquitecturas de integración orientadas a entornos enterprise</Highlight>.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}