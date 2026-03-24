import { useApp } from '../context/appContext';

export const useTranslation = (dataObject) => {
  const { lang } = useApp();
  return dataObject[lang] || dataObject['es']; 
};