import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import resources from "./languages"
import { initReactI18next } from "react-i18next"

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: "en",
		interpolation: {
			escapeValue: false
		},
		returnObjects: true,
		resources: resources
	})

export default i18n;
