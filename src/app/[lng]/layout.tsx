import { languages, fallbackLng } from "../i18n/settings"
import { useTranslation } from "../i18n"

export async function generateMetadata({ params }: { params: any }) {
	let { lng } = await params
	const lngNotFound = languages.indexOf(lng) < 0
	if (lngNotFound) {
		lng = fallbackLng
	}
	const { t } = await useTranslation(lng, "metadata")
	return {
		title: {
			default: t("base-title", {
				pathTitle: lngNotFound ? t("path.404") : t("path.home")
			})
		},
		content: t("content")
	}
}

export default async function RootLayout({
	children,
	params
}: {
	children: React.ReactNode
	params: {
		lng: string
	}
}) {
	let { lng } = await params
	if (languages.indexOf(lng) < 0) {
		lng = fallbackLng
	}
	return <>{children}</>
}
