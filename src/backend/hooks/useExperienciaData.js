// src/backend/hooks/useExperienciaData.js
import { useState, useEffect } from 'react';
import { useApp } from '@app/context/appContext';
import { getExperiencia } from '@backend/repositories/experienciaRepository';

export const useExperienciaData = () => {
  const { lang } = useApp();
  const [data,      setData]      = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setIsLoading(true);
      const result = await getExperiencia(lang);
      if (!cancelled) { setData(result); setIsLoading(false); }
    };

    load();
    return () => { cancelled = true; };
  }, [lang]);

  return { data, isLoading };
};
