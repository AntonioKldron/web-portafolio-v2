import React, { useEffect, useState } from "react";

export default function Modal({ isOpen, onClose, children }) {
  const [show, setShow] = useState(false);

  // Maneja Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      setShow(true); // activa animación de entrada
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Maneja clic en fondo
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Maneja animación de salida antes de cerrar
  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onClose();
    }, 250); // duración igual a la animación de salida
  };

  // Evita renderizar si el modal no está abierto
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 h-full bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div
        className={`transition-all duration-200 ease-in-out transform ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }  rounded-xl shadow-xl w-full max-w-6xl relative overflow-y-auto max-h-screen`}
      >
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
