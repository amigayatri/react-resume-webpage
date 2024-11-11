import { languages, fallbackLng } from "../../i18n/settings"
import { useTranslation } from "../../i18n"
import PageProps from "../../types/common/PageProps"

export async function generateMetadata({ params }: PageProps) {
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
interface RootLayoutProps extends PageProps {
	children: React.ReactNode
}
export default async function RootLayout({
	children,
	params
}: RootLayoutProps) {
	let { lng } = await params
	if (languages.indexOf(lng) < 0) {
		lng = fallbackLng
	}
	return <>{children}</>
}
