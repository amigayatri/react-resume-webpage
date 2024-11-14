import { ShadeGeneratorBase } from "./ShadeGeneratorBase"
import { useTranslation } from "../../../../../i18n/"
import { ShadeGeneratorProps } from "../types"

export const ShadeGenerator = async ({ lng }: ShadeGeneratorProps) => {
	const { t } = await useTranslation(lng, "shades")
	return <ShadeGeneratorBase t={t} lng={lng} />
}
