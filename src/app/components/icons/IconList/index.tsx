import Element from "../../../types/ElementProps"
import { IconListBase } from "./IconListBase"
import { useTranslation } from "../../../i18n/"

export const IconList = async ({ lng }: Element) => {
	const { i18n } = await useTranslation(lng, "iconlist")
	return <IconListBase i18n={i18n} lng={lng} />
}
