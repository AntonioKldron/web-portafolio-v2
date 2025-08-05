import React, { useState } from "react";
import Modal from "../layout/modal";
import EmpresaCarta from "../components/empresaCarta2";

export default function ExperienciaCarta2({
  empresa,
  año,
  roll,
  descripcion,
  tecnologias,
  experienciaCompleta, // 👈 Nuevo prop para pasar todo a ExperienciaCard
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-xl p-6 max-w-6xl w-14/15 mx-auto text-white space-y-4">
        <div className="flex justify-between items-start border-b border-white/10 pb-2">
          <div>
            <h1 className="text-xl font-semibold tracking-wide">{empresa}</h1>
            <p className="text-sm text-white/60">{roll}</p>
          </div>
          <span className="text-sm text-white/50">{año}</span>
        </div>

        <div className="space-y-3">
          <p className="text-white/80 leading-relaxed text-sm text-justify">
            {descripcion}
          </p>

          <button
            onClick={() => setModalOpen(true)}
            title="Haz clic para ver más detalles"
            className="inline-block text-indigo-400 hover:text-indigo-300 transition duration-200 text-sm font-medium cursor-pointer"
          >
            Ver más →
          </button>
        </div>

        <div className="pt-4 border-t border-white/10">
          <h2 className="text-xs font-semibold text-white/60 mb-2 uppercase tracking-widest">
            Tecnologías
          </h2>
          <div className="mt-4 flex flex-wrap gap-4 text-xl">
            {Array.isArray(tecnologias) &&
              tecnologias.map((tec, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition"
                  title={tec.name}
                >
                  {tec.icon}
                  <span className="text-sm hidden sm:inline">{tec.name}</span>
                </span>
              ))}
          </div>
        </div>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <EmpresaCarta {...experienciaCompleta} isModal />
      </Modal>
    </>
  );
}
