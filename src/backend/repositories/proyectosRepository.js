// src/backend/repositories/proyectosRepository.js
import { db, isConfigured } from '@backend/config/firebase';
import { fetchCollection }   from '@backend/services/firestoreService';

// Static fallback — will be replaced by Firebase data when configured
import { proyectosStaticData } from '@backend/static/proyectos/proyectosData';

/**
 * Returns projects data for a given language.
 * Tries Firebase first, falls back to static data if not configured.
 * @param {string} lang - 'es' | 'en'
 * @returns {Promise<{ items: object[], i18n: object }>}
 */
export const getProyectos = async (lang) => {
  if (!isConfigured) return proyectosStaticData;

  try {
    const docs = await fetchCollection('proyectos');
    // Merge base doc with its i18n sub-collection text
    const items = docs.map((doc) => ({
      ...doc,
      ...(doc.i18n?.[lang] ?? {}),
    }));
    return { items };
  } catch (error) {
    console.warn('[proyectosRepository] Firebase failed, using static data:', error);
    return proyectosStaticData;
  }
};
