import i18n from 'i18next'
// import LanguageDetector from "i18next-browser-languagedetector"
import enLocale from './locales/en-EN.json'
import trLocale from './locales/tr-TR.json'

const i18nClient = i18n.init({
  load: 'all',
  whitelist: ['en', 'en-US', 'tr', 'tr-TR'],
  lng: 'en',
  //   nonExplicitWhitelist: false,
  resources: {
    en: {
      translation: enLocale,
    },
    tr: {
      translation: trLocale,
    },
  },
})

export default i18nClient
