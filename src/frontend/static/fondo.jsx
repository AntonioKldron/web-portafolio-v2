import React from 'react';

export default function FondoAnimado({ isActive = true }) {
  return (
    <div id="floating-bg" className={isActive ? 'active' : ''}>
      {[...Array(9)].map((_, i) => (
        <div key={i} className={`light x${i + 1}`} />
      ))}
    </div>
  );
}