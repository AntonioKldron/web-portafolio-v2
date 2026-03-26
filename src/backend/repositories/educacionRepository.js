// src/backend/repositories/educacionRepository.js
import { isConfigured }     from '@backend/config/firebase';
import { fetchCollection }  from '@backend/services/firestoreService';
import { educacionStaticData } from '@backend/static/educacion/educacionData';

export const getEducacion = async (lang) => {
  if (!isConfigured) return educacionStaticData;

  try {
    const docs = await fetchCollection('educacion');
    return {
      estudios:       docs.filter((d) => d.tipo === 'estudio' && d.lang === lang),
      certificaciones: docs.filter((d) => d.tipo === 'certificacion' && d.lang === lang),
    };
  } catch (error) {
    console.warn('[educacionRepository] Firebase failed, using static data:', error);
    return educacionStaticData;
  }
};
