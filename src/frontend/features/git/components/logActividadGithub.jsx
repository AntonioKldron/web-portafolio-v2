import React from 'react';
import { motion } from 'framer-motion';
import { FaTerminal } from 'react-icons/fa';

export default function LogActividadGithub({ isDark, t }) {
  // Simulación de logs de sistema basados en tu actividad
  const logs = [
    { id: 1, action: "PUSH", repo: "portfolio-v3", status: "SUCCESS", time: "2m ago" },
    { id: 2, action: "MERGE", repo: "backend-api", status: "STABLE", time: "1h ago" },
    { id: 3, action: "DEPLOY", repo: "ecommerce-platform", status: "LIVE", time: "5h ago" },
    { id: 4, action: "COMMIT", repo: "auth-module", status: "VERIFIED", time: "Yesterday" }
  ];

  return (
    <div className={`w-full flex flex-col rounded-[2.5rem] border transition-all duration-700 shadow-2xl p-6 md:p-8 relative overflow-hidden
      ${isDark ? 'bg-slate-950/60 border-white/5 shadow-violet-900/15' : 'bg-white/80 border-slate-100 shadow-indigo-900/10 backdrop-blur-sm'}`}>
      
      {/* Brillo de fondo sutil */}
      <div className={`absolute -top-20 -left-20 w-60 h-60 rounded-full blur-[100px] pointer-events-none opacity-20
        ${isDark ? 'bg-cyan-600' : 'bg-indigo-300'}`}></div>

      <div className="flex justify-between items-center mb-6 shrink-0 px-2 relative z-10">
        <div className="flex items-center gap-3.5">
          <div className={`p-2.5 rounded-xl border ${isDark ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' : 'bg-indigo-50 border-indigo-100 text-indigo-600'}`}>
            <FaTerminal className="text-xl" />
          </div>
          <div className="flex flex-col">
            <span className={`text-[10px] md:text-xs font-black uppercase tracking-[0.25em] ${isDark ? 'text-white' : 'text-slate-900'}`}>
              System_Activity
            </span>
            <span className={`text-[8px] font-mono opacity-60 tracking-wider ${isDark ? 'text-cyan-300' : 'text-indigo-600'}`}>
              [ LIVE_EVENT_MONITOR ]
            </span>
          </div>
        </div>
      </div>

      <div className={`flex-1 font-mono p-4 rounded-2xl bg-black/40 border border-white/5 overflow-hidden relative z-10`}>
        {logs.map((log, i) => (
          <motion.div 
            key={log.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex items-center gap-3 text-[10px] mb-2 last:mb-0"
          >
            <span className="text-cyan-500/50">[{log.time}]</span>
            <span className={`px-1.5 rounded-md ${isDark ? 'bg-white/10' : 'bg-black/10'} font-black`}>{log.action}</span>
            <span className="text-slate-400 truncate">{log.repo}</span>
            <span className="ml-auto text-emerald-400 opacity-70">//{log.status}</span>
          </motion.div>
        ))}
        <motion.div 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-2 h-4 bg-cyan-500 inline-block mt-2"
        />
      </div>

      {/* Scanner Line */}
      <motion.div 
        animate={{ x: ['-100%', '100%'] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className={`absolute bottom-0 left-0 h-[1px] w-full ${isDark ? 'bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent' : 'bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent'}`} 
      />
    </div>
  );
}