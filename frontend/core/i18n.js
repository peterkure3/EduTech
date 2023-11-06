import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-react-native-language-detector';

i18n
  .use(HttpApi) // for loading translations using http
  .use(LanguageDetector) // for detecting user language
  .use(initReactI18next) // for passing i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator'],
      caches: ['localStorage', 'cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // path where resources get loaded from
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
