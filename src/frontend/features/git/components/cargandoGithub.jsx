import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function CargandoGithub({ isDark, text }) {
  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4 md:px-8 flex flex-col animate-pulse pt-20">
      <div className={`w-48 h-8 rounded-full ${isDark ? 'bg-slate-800/50' : 'bg-slate-200'} mb-8`}></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-20">
        <div className={`lg:col-span-4 h-[340px] rounded-[2rem] ${isDark ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}></div>
        <div className={`lg:col-span-8 h-[340px] rounded-[2rem] ${isDark ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}></div>
        <div className={`lg:col-span-12 h-[300px] rounded-[2rem] ${isDark ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}></div>
      </div>
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <div className={`flex items-center gap-3 px-6 py-4 rounded-full backdrop-blur-xl shadow-2xl
          ${isDark ? 'bg-slate-900/90 text-violet-400 border border-violet-500/20' : 'bg-white/90 text-indigo-600 border border-indigo-200'}`}>
          <FaGithub className="text-3xl animate-bounce" />
          <span className="font-bold font-mono tracking-widest text-xs uppercase">{text}</span>
        </div>
      </div>
    </div>
  );
}