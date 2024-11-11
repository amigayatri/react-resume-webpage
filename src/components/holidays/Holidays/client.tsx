"use client"

import { HolidaysBase } from "./HolidaysBase"
import Element from "../../../types/common/ElementProps"
import { useTranslation } from "../../../i18n/client"

export const Holidays = ({ lng }: Element) => {
	const { t } = useTranslation(lng, "holidays")
	return <HolidaysBase t={t} lng={lng} />
}
