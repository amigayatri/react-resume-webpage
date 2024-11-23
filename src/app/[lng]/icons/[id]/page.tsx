import { languages, fallbackLng } from "../../../../i18n/settings"
import { Main } from "../../../../components/icons/details"
import { useTranslation } from "../../../../i18n"
import { ThemeClient } from "../../../../components/common/client"
import { ErrorMain } from "../../../../components/error/"
import { PageProps } from "../../../../types/common/"
import { iconExists } from "../../../../icons/maps/functions"
import { capitalize } from "../../../../lib/utils"

interface MusicPageProps extends PageProps {
	params: Promise<{ lng: string; id: string }>
}

export async function generateMetadata({ params }: MusicPageProps) {
	let { lng, id } = await params
	const lngNotFound = languages.indexOf(lng) < 0
	const iconNotFound = !iconExists(id)
	if (lngNotFound) lng = fallbackLng
	const { t } = await useTranslation(lng, "metadata")
	return {
		title: {
			default: t("base-title", {
				pathTitle:
					lngNotFound || iconNotFound
						? t("path.404")
						: t("path.detailed-icon", { iconId: capitalize(id) })
			})
		},
		content: t("content")
	}
}

export default async function Page({ params }: MusicPageProps) {
	let { lng, id } = await params
	const iconNotFound = !iconExists(id)
	const lngNotFound = languages.indexOf(lng) < 0
	if (lngNotFound) lng = fallbackLng
	if (lngNotFound || iconNotFound) {
		return (
			<ThemeClient onError={true} lng={lng}>
				<ErrorMain lng={lng} id="404" />
			</ThemeClient>
		)
	}
	return (
		<ThemeClient onError={false} lng={lng}>
			<Main lng={lng} iconId={id} />
		</ThemeClient>
	)
}
