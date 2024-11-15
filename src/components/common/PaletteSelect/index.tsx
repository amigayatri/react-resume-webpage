import { PaletteSelectBase } from "./PaletteSelectBase.tsx"
import { useTranslation } from "../../../i18n/"
import { PaletteSelectProps } from "./types.ts"

export const PaletteSelect = async (props: PaletteSelectProps) => {
	const { lng } = props
	const { t } = await useTranslation(lng, "palette")
	return <PaletteSelectBase t={t} {...props} />
}
