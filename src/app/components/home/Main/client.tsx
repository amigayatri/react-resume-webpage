"use client"

import Element from "../../../types/ElementProps.ts"
import { MainBase } from "./MainBase.tsx"
import { useTranslation } from "../../../i18n/client"

export async function Main({ lng }: Element) {
	const { i18n } = await useTranslation(lng, "translation")

	return <MainBase i18n={i18n} lng={lng} />
}
