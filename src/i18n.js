

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';

const resources = {
  en: {
    translation: require('./locales/en/translation.json'),
  },
  ru: {
    translation: require('./locales/ru/translation.json'),
  },
  // kg: {
  //   translation: require('./locales/kg/translation.json'),
  // },
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', // язык по умолчанию
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  
  });

export default i18n;
