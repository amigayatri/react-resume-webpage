import Element from "../../../types/common/ElementProps"
import { PageListBase } from "./PageListBase"
import { useTranslation } from "../../../i18n/"

export const PageList = async ({ lng }: Element) => {
	const { t } = await useTranslation(lng, "home")
	return <PageListBase t={t} lng={lng} />
}
