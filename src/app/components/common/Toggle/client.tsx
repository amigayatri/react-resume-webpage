"use client"

import { ToggleBase } from "./ToggleBase.tsx"
import { useTranslation } from "../../../i18n/client"
import { ToggleProps } from "../../../types/ToggleProps.ts"

export function Toggle(props: ToggleProps) {
	const { t } = useTranslation(props.lng, "common")
	return <ToggleBase t={t} {...props} />
}
