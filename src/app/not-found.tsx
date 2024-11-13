import { languages, fallbackLng } from "../i18n/settings"
import { ErrorMain } from "../components/error/"
import { useTranslation } from "../i18n"
import { ThemeClient } from "../components/common/client"
import { PageProps } from "../types/common/"

export async function generateMetadata({ params }: PageProps) {
	let { lng } = await params
	if (languages.indexOf(lng) < 0) lng = fallbackLng
	const { t } = await useTranslation(lng, "metadata")
	return {
		title: {
			default: t("base-title", { pathTitle: t("path.404") })
		},
		content: t("content")
	}
}

export default async function NotFound() {
	return (
		<ThemeClient onError={true} lng={fallbackLng}>
			<ErrorMain id="404" lng={fallbackLng} />
		</ThemeClient>
	)
}
