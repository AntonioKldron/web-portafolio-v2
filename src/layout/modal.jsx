import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-70 flex items-center justify-center p-4"
      onClick={onClose}  // Cierra al hacer click fuera
    >
      <div
        className="bg-white/12 rounded-xl shadow-xl w-full relative overflow-auto max-h-[100vh]"
        onClick={(e) => e.stopPropagation()}  // Previene cierre al click dentro
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
