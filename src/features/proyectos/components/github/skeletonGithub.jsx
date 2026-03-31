import React from 'react';

export default function SkeletonGithub({ isDark }) {
  const baseBg = isDark ? 'bg-slate-800/50' : 'bg-slate-200/50';

  return (
    <div className="animate-pulse flex flex-col gap-4 w-full">
      <div className="grid grid-cols-1 xl:grid-cols-[2.2fr_1fr] gap-4">
        <div className={`h-[450px] rounded-[2rem] ${baseBg}`}></div>
        <div className="flex flex-col gap-4 justify-between h-full">
          <div className={`h-[200px] rounded-[2rem] ${baseBg}`}></div>
          <div className={`flex-grow rounded-[2rem] ${baseBg}`}></div>
        </div>
      </div>
      <div className={`h-[240px] rounded-[2rem] w-full ${baseBg}`}></div>
    </div>
  );
}