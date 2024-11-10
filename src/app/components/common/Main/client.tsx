"use client"

import { MainBase } from "./MainBase.tsx"
import { useTranslation } from "../../../i18n/client"
import { MainProps } from "./index.tsx"

export function Main({ lng, children }: MainProps) {
	const { i18n } = useTranslation(lng, "home")

	return <MainBase children={children} i18n={i18n} lng={lng} />
}
