import { languages, fallbackLng } from "../../i18n/settings"
import { Main } from "../../components/cats/Main"
import { useTranslation } from "../../i18n"
import ThemeClient from "./../../components/common/ThemeClient"
import ErrorMain from "../../components/error/Main"

export async function generateMetadata({ params }: { params: any }) {
	let { lng } = await params
	const lngNotFound = languages.indexOf(lng) < 0
	if (lngNotFound) lng = fallbackLng
	const { t } = await useTranslation(lng, "metadata")
	return {
		title: {
			default: t("base-title", {
				pathTitle: lngNotFound ? t("path.404") : t("path.cats")
			})
		},
		content: t("content")
	}
}

export default async function Page({
	params
}: {
	params: {
		lng: string
	}
}) {
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