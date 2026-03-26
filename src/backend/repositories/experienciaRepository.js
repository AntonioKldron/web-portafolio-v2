// src/backend/repositories/experienciaRepository.js
import { isConfigured }      from '@backend/config/firebase';
import { fetchCollection }   from '@backend/services/firestoreService';
import { experienciaStaticData } from '@backend/static/experiencia/experienciaData';

/**
 * Returns experience data. Firebase-first, static fallback.
 * @param {string} lang
 * @returns {Promise<object>}
 */
export const getExperiencia = async (lang) => {
  if (!isConfigured) return experienciaStaticData;

  try {
    const docs  = await fetchCollection('experiencia');
    const items = docs.map((doc) => ({ ...doc, ...(doc.i18n?.[lang] ?? {}) }));
    return { items };
  } catch (error) {
    console.warn('[experienciaRepository] Firebase failed, using static data:', error);
    return experienciaStaticData;
  }
};
