"use client"

import { HolidaysBase } from "./HolidaysBase"
import { useTranslation } from "../../../../../i18n/client"
import { HolidaysProps } from "../../types.ts"

export const Holidays = ({ lng }: HolidaysProps) => {
	const { t } = useTranslation(lng, "holidays")
	return <HolidaysBase t={t} lng={lng} />
}
