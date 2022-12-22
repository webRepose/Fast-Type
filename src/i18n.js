import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

if(window.localStorage.getItem('i18nextLng') === null) {
    if(navigator.language == 'ru' ||'ru-Ru'){
        window.localStorage.setItem('i18nextLng', 'ru')
    } else {
        window.localStorage.setItem('i18nextLng', 'en')
    }
}
i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: window.localStorage.getItem('i18nextLng'),
    debug: true,
    detection: {
        order: ['queryString', 'cookie'],
        cache: ['cookie']
    },
    interpolarion: {
        escapeValue: false
    }
})

export default i18n;