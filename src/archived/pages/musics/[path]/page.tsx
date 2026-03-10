import { languages, fallbackLng } from "../../../../i18n/settings"
import { Main } from "../../../../components/musics/lyric"
import { useTranslation } from "../../../../i18n"
import { ThemeClient } from "../../../../components/common/client"
import { ErrorMain } from "../../../../components/error/"
import { PageProps } from "../../../../types/common/"
import { getMusicInfo } from "../../../../lib/musics"

interface MusicPageProps extends PageProps {
	params: Promise<{ lng: string; path: string }>
}

export async function generateMetadata({ params }: MusicPageProps) {
	let { lng, path } = await params
	const lngNotFound = languages.indexOf(lng) < 0
	const [musicName] = getMusicInfo(path)
	if (lngNotFound) lng = fallbackLng
	const { t } = await useTranslation(lng, "metadata")
	return {
		title: {
			default: t("base-title", {
				pathTitle:
					lngNotFound || musicName === false
						? t("path.404")
						: t("path.lyric", { musicName: musicName })
			})
		},
		content: t("content")
	}
}

export default async function Page({ params }: MusicPageProps) {
	let { lng, path } = await params
	const [musicName] = getMusicInfo(path)
	const lngNotFound = languages.indexOf(lng) < 0
	if (lngNotFound) lng = fallbackLng
	if (lngNotFound || musicName === false) {
		return (
			<ThemeClient onError={true} lng={lng}>
				<ErrorMain lng={lng} id="404" />
			</ThemeClient>
		)
	}
	return (
		<ThemeClient onError={false} lng={lng}>
			<Main path={path} lng={lng} name={musicName} />
		</ThemeClient>
	)
}
