import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import SelectLanguageTranslations from './components/ui/select-language/select.i18n'
import headerTranslations from './components/header/header.i18n'
import IntroTranslation from './components/intro/intro.i18n'
import AboutTranslations from './components/about/about.18n'
import OperatorTranslations from './components/operators/operators.i18n'
import FooterTranslations from './components/footer/footer.i18n'


const resources = {
    en: { translation: {
        ...SelectLanguageTranslations.en,
        ...headerTranslations.en,
        ...IntroTranslation.en,
        ...AboutTranslations.en,
        ...OperatorTranslations.en,
        ...FooterTranslations.en,
    } },
    uz: { translation: {
        ...SelectLanguageTranslations.uz,
        ...headerTranslations.uz,
        ...IntroTranslation.uz,
        ...AboutTranslations.uz,
        ...OperatorTranslations.uz,
        ...FooterTranslations.uz,
    } },
    ru: { translation: {
        ...SelectLanguageTranslations.ru,
        ...headerTranslations.ru,
        ...IntroTranslation.ru,
        ...AboutTranslations.ru,
        ...OperatorTranslations.ru,
        ...FooterTranslations.ru,
    } },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "uz",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;