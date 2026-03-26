import { useState, useEffect } from 'react';
import { useApp } from '@app/context/appContext';
import { db } from '@backend/config/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const usePerfilData = () => {
  const { lang } = useApp();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setIsLoading(true);
      try {
        const docRef = doc(db, 'perfil', 'staticData');
        const snap = await getDoc(docRef);
        if (snap.exists() && !cancelled) {
          const fullData = snap.data();
          // Extract base and merge language overrides
          const { es, en, ...base } = fullData;
          setData({ ...base, ...(fullData[lang] || {}) });
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
