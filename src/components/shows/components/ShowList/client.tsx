"use client"

import { useTranslation } from "../../../../i18n/client"
import { ShowListProps } from "../types.ts"
import { ShowListBase } from "./ShowListBase"

export function ShowList(props: ShowListProps) {
	const { lng } = props
	const { t } = useTranslation(lng, "iconlist")
	return <ShowListBase t={t} {...props} />
}
