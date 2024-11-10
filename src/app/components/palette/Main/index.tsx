import Element from "../../../types/ElementProps.ts"
import { useTranslation } from "../../../i18n/"
import { PalettesList } from "../PalettesList/client.tsx"
import { MainBase } from "../../common/Main/MainBase.tsx"

export const Main = async ({ lng }: Element) => {
	const { i18n } = await useTranslation(lng, "palettes")
	return (
		<MainBase i18n={i18n} lng={lng}>
			<PalettesList lng={lng} />
		</MainBase>
	)
}
