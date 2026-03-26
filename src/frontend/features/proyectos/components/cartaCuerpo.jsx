// src/frontend/features/proyectos/components/CartaCuerpo.jsx
import React from 'react';
import { FaCode, FaTerminal } from 'react-icons/fa';

export default function CartaCuerpo({ data, isDark }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* SECCIÓN ARQUITECTURA */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-indigo-500">
          <FaCode size={18} />
        </div>
        <p className={`text-[16px] leading-relaxed italic border-l-2 border-indigo-500/20 pl-6 text-justify ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          "{data.descripcion}"
        </p>
      </div>

      {/* SECCIÓN MÓDULOS / LOGS */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-indigo-500">
          <FaTerminal size={18} />
        </div>
        <div className="grid grid-cols-1 gap-3">
          {data.detalles.map((det, i) => (
            <div 
              key={i} 
              className={`flex items-center gap-4 p-4 rounded-2xl border text-[12px] font-bold transition-all ${
                isDark 
                  ? 'bg-slate-900 border-white/5 text-slate-400 hover:border-indigo-500/30' 
                  : 'bg-white border-slate-200 text-slate-600 shadow-sm hover:shadow-md'
              }`}
            >
              <span className="text-indigo-500 font-mono text-[10px]">[{i + 1}]</span>
              {det}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
