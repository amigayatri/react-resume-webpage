export const fallbackLng = "pt-BR"
export const basicLanguages = [fallbackLng, "en"]
export const extraLanguages = [
	"ar-LB",
	"ar",
	"bn",
	"de",
	"el",
	"es",
	"fr",
	"gn",
	"hi",
	"it",
	"ja",
	"la",
	"pa",
	"ru",
	"zh"
]
export const languages = [...basicLanguages, ...extraLanguages]
export const defaultNS = "common"
export const cookieName = "i18next"

export function getOptions(
	lng = fallbackLng,
	ns: string | string[] = defaultNS
) {
	return {
		//debug: true,
		supportedLngs: languages,
		//preload: languages,
		fallbackLng,
		lng,
		fallbackNS: defaultNS,
		defaultNS,
		ns
	}
}
