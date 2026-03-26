// src/backend/hooks/useEducacionData.js
import { useState, useEffect } from 'react';
import { useApp } from '@app/context/appContext';
import { getEducacion } from '@backend/repositories/educacionRepository';

export const useEducacionData = () => {
  const { lang } = useApp();
  const [data,      setData]      = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setIsLoading(true);
      const result = await getEducacion(lang);
      if (!cancelled) { setData(result); setIsLoading(false); }
    };

    load();
    return () => { cancelled = true; };
  }, [lang]);

  return { data, isLoading };
};
