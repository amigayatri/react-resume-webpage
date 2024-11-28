import { UsedIconsBase } from "./UsedIconsBase"
import { useTranslation } from "../../../../i18n"
import { UsedIconsProps } from "../types"

export const UsedIcons = async (props: UsedIconsProps) => {
	const { lng } = props
	const { t } = await useTranslation(lng, "iconlist")
	return <UsedIconsBase t={t} {...props} />
}
