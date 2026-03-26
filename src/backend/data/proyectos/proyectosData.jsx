import { useState, useEffect } from 'react';
import { useApp } from '@app/context/appContext';
import { db } from '@backend/config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { data as dt } from '@backend/data/icons/iconsRegistro';

// ─── GitHub icon map ─────────────────────────────────────────────
export const githubIconMap = {
  javascript: dt?.javascript,
  typescript: dt?.typescript,
  python: dt?.python,
  html: dt?.html,
  css: dt?.css,
  'c#': dt?.csharp,
  java: dt?.java,
  sql: dt?.sql,
  vue: dt?.vue,
  php: dt?.php,
  tsql: dt?.sql,
  'jupyter notebook': dt?.jupyter,
};

export const useProyectosData = () => {
  const { lang } = useApp();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setIsLoading(true);
      try {
        const docRef = doc(db, 'proyectos', 'staticData');
        const snap = await getDoc(docRef);
        if (snap.exists() && !cancelled) {
          const fullData = snap.data();
          
          // Combine base + localized data similarly to what was done in static data
          const baseData = fullData.base || [];
          const localized = fullData[lang];
          
          // Reconstruct array for the UI
          if (localized && localized.proyectos) {
             const mergedProyectos = baseData.map(item => {
               const locText = localized.proyectos.find(t => t.id === item.id) || {};
               return { ...item, ...locText };
             });
             setData({ header: localized.header, github: localized.github, proyectos: mergedProyectos });
          } else {
             setData(null);
          }
        } else if (!snap.exists() && !cancelled) {
          setData(null);
        }
      } catch (e) { console.error(e); }
      if (!cancelled) setIsLoading(false);
    };
    load();
    return () => { cancelled = true; };
  }, [lang]);

  return { data, isLoading };
};
