import Element from "../../../types/ElementProps"
import { HolidaysBase } from "./HolidaysBase"
import { useTranslation } from "../../../i18n/"

export const Holidays = async ({ lng }: Element) => {
	const { i18n, t } = await useTranslation(lng, "holidays")
	return <HolidaysBase t={t} i18n={i18n} lng={lng} />
}
