import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import resources from "./languages"

i18n.use(LanguageDetector).init({
	fallbackLng: "en",
	interpolation: {
		escapeValue: false
	},
	returnObjects: true,
	resources: resources
})

export default i18n;
