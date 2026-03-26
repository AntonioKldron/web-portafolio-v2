// src/backend/hooks/useProyectosData.js
import { useState, useEffect } from 'react';
import { useApp } from '@app/context/appContext';
import { getProyectos } from '@backend/repositories/proyectosRepository';

/**
 * Hook that provides project data from Firebase or static fallback.
 */
export const useProyectosData = () => {
  const { lang } = useApp();
  const [data,      setData]      = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error,     setError]     = useState(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await getProyectos(lang);
        if (!cancelled) setData(result);
      } catch (err) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    load();
    return () => { cancelled = true; };
  }, [lang]);

  return { data, isLoading, error };
};
