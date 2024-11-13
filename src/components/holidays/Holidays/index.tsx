import { HolidaysBase } from "./HolidaysBase"
import { useTranslation } from "../../../i18n/"
import { HolidaysProps } from "../types.ts"

export const Holidays = async ({ lng }: HolidaysProps) => {
	const { t } = await useTranslation(lng, "holidays")
	return <HolidaysBase t={t} lng={lng} />
}
