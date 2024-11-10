import Element from "../../../types/ElementProps.ts"
import { useTranslation } from "../../../i18n/"
import { MainBase } from "../../common/Main/MainBase.tsx"
import { IconList } from "../IconList/"
import { Hero } from "../Hero/client.tsx"

export const Main = async ({ lng }: Element) => {
	const { i18n } = await useTranslation(lng, "iconlist")
	return (
		<MainBase i18n={i18n} lng={lng}>
			<Hero lng={lng} />
			<IconList lng={lng} />
		</MainBase>
	)
}
