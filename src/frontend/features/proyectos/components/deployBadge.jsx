// src/frontend/features/gitProyectos/components/deployBadge.jsx
import React from 'react';
import { FaExternalLinkAlt, FaDotCircle } from 'react-icons/fa';

const ESTADO_CONFIG = {
  live:     { label: 'Live',     dot: 'bg-emerald-400', text: 'text-emerald-400', ring: 'border-emerald-500/30' },
  archived: { label: 'Archived', dot: 'bg-slate-400',   text: 'text-slate-400',   ring: 'border-slate-500/30' },
  wip:      { label: 'WIP',      dot: 'bg-amber-400',   text: 'text-amber-400',   ring: 'border-amber-500/30' },
};

/**
 * DeployBadge — shows deploy status + external link chip.
 * @param {{ estado: string, url: string, isDark: boolean }} props
 */
export default function DeployBadge({ estado = 'live', url, isDark }) {
  const config = ESTADO_CONFIG[estado] ?? ESTADO_CONFIG.live;

  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={`Ver en producción (${config.label})`}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-wider transition-all duration-300 group
        ${config.ring}
        ${isDark
          ? 'bg-white/5 hover:bg-emerald-500/10'
          : 'bg-white hover:bg-emerald-50 shadow-sm'}
      `}
    >
      {/* Pulsing dot */}
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${config.dot}`} />
        <span className={`relative inline-flex rounded-full h-2 w-2 ${config.dot}`} />
      </span>

      <span className={config.text}>{config.label}</span>

      <FaExternalLinkAlt
        size={8}
        className={`opacity-0 group-hover:opacity-100 transition-opacity ${config.text}`}
      />
    </a>
  );
}
