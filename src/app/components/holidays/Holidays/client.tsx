"use client"

import { HolidaysBase } from "./HolidaysBase"
import Element from "../../../types/ElementProps"
import { useTranslation } from "../../../i18n/client"

export const Holidays = ({ lng }: Element) => {
	const { i18n, t } = useTranslation(lng, "holidays")
	return <HolidaysBase t={t} i18n={i18n} lng={lng} />
}
