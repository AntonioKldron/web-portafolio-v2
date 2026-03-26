import React, { createContext, useState, useContext } from 'react';

// 1. Creamos el contexto
const LanguageContext = createContext();

// 2. Creamos el proveedor que envolverá tu app
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ES');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'ES' ? 'EN' : 'ES'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. Un hook personalizado para usarlo fácilmente en cualquier archivo
export const useLanguage = () => useContext(LanguageContext);
