import { useTranslation } from "../../../../i18n/"
import { SimpleAuthProps } from "../types"
import { SimpleAuthBase } from "./SimpleAuthBase"

export const SimpleAuth = async ({ lng }: SimpleAuthProps) => {
	const { t } = await useTranslation(lng, "iconlist")
	return <SimpleAuthBase t={t} lng={lng} />
}
