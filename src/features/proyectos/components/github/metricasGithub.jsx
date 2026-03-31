import React from 'react';
import { motion } from 'framer-motion';
import { FaCodeBranch, FaExclamationCircle, FaCheckDouble } from 'react-icons/fa';

export default function MetricasGithub({ commits, prs, issues, isDark }) {
  const stats = [
    { label: "Commits", val: commits, icon: FaCodeBranch, color: "text-cyan-500" },
    { label: "PRs", val: prs, icon: FaCheckDouble, color: "text-violet-500" },
    { label: "Issues", val: issues, icon: FaExclamationCircle, color: "text-pink-500" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className={`w-full p-4 flex justify-around items-center h-full shadow-xl
        ${isDark ? 'bg-slate-900/50 border-white/10 shadow-indigo-900/20' : 'bg-white/80 border-slate-200 shadow-indigo-500/10'}`}
    >
      {stats.map((s, i) => (
        <div key={i} className="flex flex-col items-center group cursor-default">
          <div className={`text-xl mb-1 transition-transform group-hover:scale-125 ${s.color}`}>
            <s.icon />
          </div>
          <span className={`text-lg font-black leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>{s.val}</span>
          <span className="text-[9px] font-mono font-bold uppercase text-slate-500 tracking-wider mt-1">{s.label}</span>
        </div>
      ))}
    </motion.div>
  );
}
