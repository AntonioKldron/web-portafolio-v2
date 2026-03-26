import { useState, useEffect } from 'react';
import { useApp } from '@app/context/appContext';
import { db } from '@backend/config/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const useExperienciaData = () => {
  const { lang } = useApp();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setIsLoading(true);
      try {
        const docRef = doc(db, 'experiencia', 'staticData');
        const snap = await getDoc(docRef);
        if (snap.exists() && !cancelled) {
          const fullData = snap.data();
          
          // Combine base + localized data
          const baseData = fullData.base || [];
          const localizedItems = fullData[lang]?.items || [];
          
          const mergedItems = baseData.map(item => {
            const locText = localizedItems.find(t => t.id === item.id) || {};
            // Merge proyectos descriptions into fixed proyectos
            const mergedProyectos = (item.proyectos || []).map(p => {
               const pText = (locText.proyectos || []).find(pt => pt.nombre === p.nombre) || {};
               return { ...p, ...pText };
            });
            return { ...item, ...locText, proyectos: mergedProyectos };
          });

          setData({
            header: fullData[lang]?.header || {},
            items: mergedItems
          });
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
