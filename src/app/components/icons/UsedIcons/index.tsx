import { UsedIconsBase } from "./UsedIconsBase"
import Element from "../../../types/ElementProps"
import { useTranslation } from "../../../i18n"

export const UsedIcons = async ({ lng }: Element) => {
	const { t } = await useTranslation(lng, "iconlist")
	return <UsedIconsBase t={t} lng={lng} />
}
