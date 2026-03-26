import { useState, useEffect } from 'react';
import { useApp } from '@app/context/appContext';
import { db } from '@backend/config/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const useFooterData = () => {
  const { lang } = useApp();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setIsLoading(true);
      try {
        const docRef = doc(db, 'footer', 'staticData');
        const snap = await getDoc(docRef);
        if (snap.exists() && !cancelled) {
          const fullData = snap.data();
          setData({
             contactCards: fullData.contactCards, 
             navigation: fullData.navigation,
             settings: fullData.settings,
             footerText: fullData.footerText[lang]
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
