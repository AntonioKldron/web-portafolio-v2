import React, { useState, createContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@app/context/appContext';
import CartaTecnologia from './cartaTecnologias';
import CarruselInfinito from './carruselInfinito';
import TerminalHeader from './terminalHeader';
import TerminalNavigation from './terminalNavigation';
import TerminalFooter from './terminalFooter';

export const ConsolaContext = createContext();

export default function InterfazUnificada({ categorias, indiceCategoria, setIndiceCategoria }) {
  const { isDark } = useApp();
  const [velocidad, setVelocidad] = useState(10);
  
  const categoriaActual = categorias[indiceCategoria];
  const items = categoriaActual?.items || [];
  const debeMostrarCarrusel = items.length > 6;
  const nombreRutaTerminal = (categoriaActual?.title || 'stack').toLowerCase().replace(/\s+/g, '_');

  const slimScrollbar = `
    [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1
    [&::-webkit-scrollbar-track]:bg-transparent 
    [&::-webkit-scrollbar-thumb]:rounded-full 
    ${isDark ? '[&::-webkit-scrollbar-thumb]:bg-cyan-500/30' : '[&::-webkit-scrollbar-thumb]:bg-slate-300/50'}
  `;

  return (
    <ConsolaContext.Provider value={velocidad}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`relative w-full max-w-6xl mx-auto h-[700px] md:h-[550px] flex flex-col rounded-2xl border overflow-hidden backdrop-blur-md shadow-2xl transition-all duration-700
          ${isDark ? 'bg-slate-950/40 border-cyan-500/30 shadow-[0_0_40px_-15px_rgba(6,182,212,0.4)]' : 'bg-white/40 border-slate-200 shadow-xl'}`}
      >
        <TerminalHeader isDark={isDark} nombreRutaTerminal={nombreRutaTerminal} />

        <div className="flex flex-col md:flex-row flex-grow overflow-hidden relative">
          {isDark && (
            <motion.div 
              animate={{ y: [-20, 600] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute inset-x-0 h-[1px] bg-cyan-500/30 z-10 pointer-events-none blur-[1px]"
            />
          )}

          <main className="flex-grow p-4 md:p-8 relative overflow-hidden flex items-center justify-center z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={categoriaActual?.id}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center"
              >
                {!debeMostrarCarrusel ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-10 w-full h-full content-center max-w-3xl mx-auto">
                    {items.map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                        <CartaTecnologia icono={item?.icon} nombre={item?.name} colorMarca={item?.primary} />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <CarruselInfinito listaItems={items} idCategoria={categoriaActual?.id} />
                )}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Sidebar visible solo en Web */}
          <TerminalNavigation 
            categorias={categorias}
            indiceCategoria={indiceCategoria}
            setIndiceCategoria={setIndiceCategoria}
            isDark={isDark}
            slimScrollbar={slimScrollbar}
          />
        </div>

        <TerminalFooter isDark={isDark} velocidad={velocidad} setVelocidad={setVelocidad} />
      </motion.div>
    </ConsolaContext.Provider>
  );
}