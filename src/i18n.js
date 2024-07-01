import i18next from "i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tr_uz from './localea/uz/header.json';
import tr_en from './localea/en/header.json';

i18n    
    .use(initReactI18next)
    .init({
        resources: {
             en: {
                translation: tr_en,
             },
             uz: {
                translation: tr_uz,
             },
        },
        lng: "uz",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        } 
    })

export default i18n;