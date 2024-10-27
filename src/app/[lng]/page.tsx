import { languages, fallbackLng } from "../i18n/settings"
import { Header } from "../components/home/Header/"
import { Main } from "../components/home/Main/"

export default async function Page({
	params
}: {
	params: {
		lng: string
	}
}) {
	let { lng } = await params
	if (languages.indexOf(lng) < 0) lng = fallbackLng
	return (
		<>
			<Header lng={lng} />
			<Main lng={lng} />
		</>
	)
}
