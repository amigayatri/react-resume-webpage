import { ThemeClient } from "../../../components/common/client"
import { ErrorMain } from "../../../components/error/"
import { Main } from "../../../components/shows/"
import { useTranslation } from "../../../i18n"
import { fallbackLng, languages } from "../../../i18n/settings"
import { PageProps } from "../../../types/common/"

export async function generateMetadata({ params }: PageProps) {
	let { lng } = await params
	const lngNotFound = languages.indexOf(lng) < 0
	if (lngNotFound) lng = fallbackLng
	const { t } = await useTranslation(lng, "metadata")
	return {
		title: {
			default: t("base-title", {
				pathTitle: lngNotFound ? t("path.404") : t("path.shows")
			})
		},
		content: t("content")
	}
}

export default async function Page({ params }: PageProps) {
	let { lng } = await params
	if (languages.indexOf(lng) < 0) {
		return (
			<ThemeClient onError={true} lng={fallbackLng}>
				<ErrorMain lng={fallbackLng} id="404" />
			</ThemeClient>
		)
	}
	return (
		<ThemeClient onError={false} lng={lng}>
			<Main lng={lng} />
		</ThemeClient>
	)
}
