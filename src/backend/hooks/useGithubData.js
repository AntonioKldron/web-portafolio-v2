// src/backend/hooks/useGithubData.js
import { useState, useEffect } from 'react';
import { useApp } from '@app/context/appContext';
import { perfilBase } from '@backend/static/perfil/perfilData';
import { getGithubData } from '@backend/repositories/githubRepository';

const DEFAULT_USERNAME = 'AntonioKldron';

/**
 * Hook that encapsulates all GitHub data fetching logic.
 * Returns the data, loading state, and year selector.
 */
export const useGithubData = () => {
  const { isDark } = useApp();
  const username = perfilBase.socials.find((s) => s.name === 'github')
    ?.url.split('/').pop() ?? DEFAULT_USERNAME;

  const [githubData,        setGithubData]        = useState(null);
  const [anioSeleccionado,  setAnioSeleccionado]  = useState(new Date().getFullYear());
  const [isLoading,         setIsLoading]         = useState(true);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setIsLoading(true);
      const data = await getGithubData(username, anioSeleccionado);
      if (!cancelled) {
        setGithubData(data);
        setIsLoading(false);
      }
    };

    load();
    return () => { cancelled = true; };
  }, [username, anioSeleccionado]);

  return {
    githubData,
    username,
    isDark,
    isLoading,
    anioSeleccionado,
    setAnioSeleccionado,
  };
};
