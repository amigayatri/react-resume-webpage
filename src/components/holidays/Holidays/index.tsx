import Element from "../../../types/common/ElementProps"
import { HolidaysBase } from "./HolidaysBase"
import { useTranslation } from "../../../i18n/"

export const Holidays = async ({ lng }: Element) => {
	const { t } = await useTranslation(lng, "holidays")
	return <HolidaysBase t={t} lng={lng} />
}
