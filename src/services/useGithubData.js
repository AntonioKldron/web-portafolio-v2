import { useState, useEffect } from 'react';
import { useApp } from '@app/context/appContext';
import { perfilData } from '@data/perfil/perfilData';
import { getGithubData } from '@services/githubRepository';

const DEFAULT_USERNAME = 'AntonioKldron';

export const useGithubData = () => {
  const { isDark } = useApp();
  const username = perfilData.socials.find((s) => s.name === 'github')
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