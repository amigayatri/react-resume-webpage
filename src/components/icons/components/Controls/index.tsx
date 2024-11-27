import { ControlsBase } from "./ControlsBase"
import { useTranslation } from "../../../../i18n/"
import { ControlsProps } from "../types.ts"

export const IconList = async (props: ControlsProps) => {
	const { lng } = props
	const { t } = await useTranslation(lng, "iconlist")
	return <ControlsBase t={t} {...props} />
}
