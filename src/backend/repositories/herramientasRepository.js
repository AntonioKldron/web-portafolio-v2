// src/backend/repositories/herramientasRepository.js
import { isConfigured }    from '@backend/config/firebase';
import { fetchCollection } from '@backend/services/firestoreService';
import { herramientasStaticData } from '@backend/static/herramientas/herramientasData';

export const getHerramientas = async (lang) => {
  if (!isConfigured) return herramientasStaticData;

  try {
    const docs       = await fetchCollection('herramientas');
    const categorias = docs
      .filter((d) => d.lang === lang)
      .map((d) => ({ id: d.id, title: d.titulo_categoria, items: d.items ?? [] }));
    return { categorias };
  } catch (error) {
    console.warn('[herramientasRepository] Firebase failed, using static data:', error);
    return herramientasStaticData;
  }
};
