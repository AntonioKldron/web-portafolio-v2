import React from 'react';

export default function CoreStack({ skills }) {
  return (
    <div className="flex flex-col space-y-4 pl-6">
      <p className="text-[8px] font-black tracking-[0.5em] text-white/10 uppercase">
        Core_Stack
      </p>
      
      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`group flex items-center gap-2.5 transition-all duration-500 ${skill.colorHover}`}
          >
            <div className="text-2xl opacity-30 group-hover:opacity-100 transition-all duration-500">
              {skill.icon}
            </div>
            <span className="text-[7px] font-bold tracking-[0.2em] text-gray-600 group-hover:text-white uppercase transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}