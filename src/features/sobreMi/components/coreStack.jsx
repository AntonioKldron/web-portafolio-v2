import React from 'react';

export default function CoreStack({ skills }) {
  return (
    <div className="flex flex-col space-y-4 pl-6">
      <p className="text-[8px] font-black tracking-[0.5em] text-muted-text/30 uppercase">
        Core_Stack
      </p>
      
      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="group flex items-center gap-2.5 transition-all duration-500 cursor-default"
          >
            <div className={`text-2xl transition-all duration-500 group-hover:scale-110 ${skill.primary}`}>
              {skill.icon}
            </div>
            <span className="text-[7px] font-bold tracking-[0.2em] text-muted-text group-hover:text-main-text uppercase transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
