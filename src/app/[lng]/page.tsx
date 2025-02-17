import { languages, fallbackLng } from "../../i18n/settings"
import { Main } from "../../components/home/"
import { ErrorMain } from "../../components/error/"
import { ThemeClient } from "../../components/common/client"
import { PageProps } from "../../types/common/"

export default async function Page({ params }: PageProps) {
	let { lng } = await params

	if (languages.indexOf(lng) < 0)
		return (
			<ThemeClient onError={true} lng={lng}>
				<ErrorMain lng={fallbackLng} id="404" />
			</ThemeClient>
		)

	return (
		<ThemeClient onError={false} lng={lng}>
			<Main lng={lng} />
		</ThemeClient>
	)
}
