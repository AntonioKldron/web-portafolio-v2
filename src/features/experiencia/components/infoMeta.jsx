import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export const MetaInfo = ({ periodo, ubicacion, isDark }) => (
  <div className="flex flex-col items-start md:items-end justify-center min-w-[210px] space-y-2">
    <div className={`flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-lg border w-full md:w-auto justify-center
      ${isDark ? 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' : 'text-indigo-600 bg-indigo-50 border-indigo-100'}`}>
      <FaCalendarAlt className="opacity-70 text-[10px]" />
      {periodo}
    </div>
    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] w-full md:w-auto justify-center md:justify-end pr-1">
      <FaMapMarkerAlt className="text-indigo-500/40 text-[11px]" />
      {ubicacion}
    </div>
  </div>
);
