import { useTranslation } from "../../../../i18n/"
import { ShowListProps } from "../types"
import { ShowListBase } from "./ShowListBase"

export const ShowList = async (props: ShowListProps) => {
	const { lng } = props
	const { t } = await useTranslation(lng, "iconlist")
	return <ShowListBase t={t} {...props} />
}
