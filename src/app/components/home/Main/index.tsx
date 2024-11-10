import Element from "../../../types/ElementProps.ts"
import { useTranslation } from "../../../i18n/"
import { PageList } from "../PageList/"
import { Hero } from "../Hero/"
import { MainBase } from "../../common/Main/MainBase.tsx"

export const Main = async ({ lng }: Element) => {
	const { i18n } = await useTranslation(lng, "home")
	return (
		<MainBase i18n={i18n} lng={lng}>
			<Hero lng={lng} />
			<PageList lng={lng} />
		</MainBase>
	)
}
