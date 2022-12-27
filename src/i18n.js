import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

if(window.localStorage.getItem('i18nextLng') === null) {
    window.localStorage.setItem('i18nextLng', navigator.language);
    if(window.localStorage.getItem('i18nextLng') === 'en-US') {
        window.localStorage.setItem('i18nextLng', 'en');
    } else if(window.localStorage.getItem('i18nextLng') === 'ru-Ru' || 'be-BE' || 'be') {
        window.localStorage.setItem('i18nextLng', 'ru');
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