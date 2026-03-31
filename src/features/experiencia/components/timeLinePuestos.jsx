import React from 'react';

export const PuestosTimeline = ({ puestos, isDark }) => (
  <div className="space-y-10">
    {puestos.map((p, idx) => (
      <div key={idx} className="relative pl-8 space-y-4">
        <div className="absolute left-0 top-0 h-full w-[1px] bg-indigo-500/20" />
        <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <h4 className="text-md font-black text-indigo-400 uppercase italic tracking-tight">{p.nombre}</h4>
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${isDark ? 'text-gray-500 bg-white/5 border-white/10' : 'text-slate-500 bg-slate-100 border-slate-200'}`}>{p.fecha}</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2">
            <p className={`text-sm leading-relaxed text-justify ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>{p.descripcion}</p>
          </div>
          <div className="lg:col-span-3">
            <ul className="grid grid-cols-1 gap-2">
              {p.detalles?.map((det, i) => (
                <li key={i} className={`flex gap-3 p-4 rounded-2xl border text-[13px] ${isDark ? 'bg-white/[0.01] border-white/5 text-gray-400' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
                  <span className="text-indigo-500 font-mono font-black text-xs mt-0.5">»</span>{det}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ))}
  </div>
);
