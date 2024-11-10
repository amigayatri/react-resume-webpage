import { languages, fallbackLng } from "../i18n/settings"
import { Main } from "../components/home/Main/"
import ErrorMain from "../components/error/Main"
import ThemeClient from "../components/common/ThemeClient"

export default async function Page({
	params
}: {
	params: {
		lng: string
	}
}) {
	let { lng } = await params

	if (languages.indexOf(lng) < 0)
		return (
			<ThemeClient onError={true} lng={lng}>
				<ErrorMain lng={fallbackLng} id="404" />
			</ThemeClient>
		)

	return <ThemeClient onError={false} lng={lng}>
				<Main lng={lng} />
			</ThemeClient> 
}
