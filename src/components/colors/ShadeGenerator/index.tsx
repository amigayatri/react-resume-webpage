import Element from "../../../types/common/ElementProps"
import { ShadeGeneratorBase } from "./ShadeGeneratorBase"
import { useTranslation } from "../../../i18n/"

export const ShadeGenerator = async ({ lng }: Element) => {
	const { t } = await useTranslation(lng, "colors")
	return <ShadeGeneratorBase t={t} lng={lng} />
}
