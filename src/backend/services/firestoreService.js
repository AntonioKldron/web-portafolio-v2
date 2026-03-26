// src/backend/services/firestoreService.js
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@backend/config/firebase';

/**
 * Generic helper: fetch all documents from a Firestore collection, sorted by a field.
 * @param {string} collectionName
 * @param {string} [sortField='orden']
 * @returns {Promise<object[]>}
 */
export const fetchCollection = async (collectionName, sortField = 'orden') => {
  const ref = collection(db, collectionName);
  const q   = query(ref, orderBy(sortField));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

/**
 * Fetch a single document by ID from a collection.
 * @param {string} collectionName
 * @param {string} docId
 * @returns {Promise<object|null>}
 */
export const fetchDocument = async (collectionName, docId) => {
  const { getDoc, doc } = await import('firebase/firestore');
  const ref      = doc(db, collectionName, docId);
  const snapshot = await getDoc(ref);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
};
