// src/backend/repositories/githubRepository.js
import { fetchGithubData } from '@services/githubService';

const CACHE_KEY_PREFIX = 'github_data_';

/**
 * Returns GitHub data for a given user+year.
 * Uses sessionStorage cache to avoid repeated API calls within the same session.
 * @param {string} username
 * @param {number} anio
 * @returns {Promise<object|null>}
 */
export const getGithubData = async (username, anio) => {
  const cacheKey = `${CACHE_KEY_PREFIX}${username}_${anio}`;
  const cached   = sessionStorage.getItem(cacheKey);

  if (cached) {
    try {
      return JSON.parse(cached);
    } catch {
      sessionStorage.removeItem(cacheKey);
    }
  }

  const token = import.meta.env.VITE_GITHUB_TOKEN;

  try {
    const data = await fetchGithubData(username, anio, token);
    if (data) sessionStorage.setItem(cacheKey, JSON.stringify(data));
    return data;
  } catch (error) {
    console.error('[githubRepository] Error fetching GitHub data:', error);
    return null;
  }
};