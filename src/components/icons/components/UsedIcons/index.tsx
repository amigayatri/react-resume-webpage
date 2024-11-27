import { UsedIconsBase } from "./UsedIconsBase"
import { useTranslation } from "../../../../i18n"
import { UsedIconsProps } from "../types"

export const UsedIcons = async ({ lng }: UsedIconsProps) => {
	const { t } = await useTranslation(lng, "iconlist")
	return <UsedIconsBase t={t} lng={lng} />
}
