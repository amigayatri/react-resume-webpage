import Element from "../../../types/ElementProps"
import { PageListBase } from "./PageListBase"
import { useTranslation } from "../../../i18n/"

export const PageList = async ({ lng }: Element) => {
	const { i18n } = await useTranslation(lng, "translation")
	return <PageListBase i18n={i18n} lng={lng} />
}
