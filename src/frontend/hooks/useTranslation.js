import { useApp } from '../context/AppContext';

export const useTranslation = (dataObject) => {
  const { lang } = useApp();
  return dataObject[lang] || dataObject['es']; 
};