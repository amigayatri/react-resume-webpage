import { IconListBase } from "./IconListBase"
import { useTranslation } from "../../../i18n/"
import { IconListProps } from "../types"

export const IconList = async ({ lng }: IconListProps) => {
	const { t } = await useTranslation(lng, "iconlist")
	return <IconListBase t={t} lng={lng} />
}
