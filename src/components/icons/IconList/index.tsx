import Element from "../../../types/common/ElementProps"
import { IconListBase } from "./IconListBase"
import { useTranslation } from "../../../i18n/"

export const IconList = async ({ lng }: Element) => {
	const { t } = await useTranslation(lng, "iconlist")
	return <IconListBase t={t} lng={lng} />
}
