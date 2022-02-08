import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// import en from "locales/en/translation.json";
// import ru from "locales/ru/translation.json";

// // const locales = {
// //   en,
// //   ru,
// // };

// // i18n.use(initReactI18next).init({
// //   lng: localStorage.getItem("lng") || "en",
// //   fallbackLng: "en",
// //   keySeparator: ".",
// //   interpolation: {
// //     escapeValue: false,
// //   },
// //   resources: locales,
// // });

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init();

export default i18n;
