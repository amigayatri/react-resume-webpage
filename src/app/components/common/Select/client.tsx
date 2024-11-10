"use client"

import { SelectBase } from "./SelectBase.tsx"
import { useTranslation } from "../../../i18n/client"
import { SelectProps } from "./index.tsx"

export function Select(props: SelectProps) {
	const { lng, namespace } = props
	const { i18n, t } = useTranslation(lng, namespace)
	return <SelectBase t={t} i18n={i18n} {...props} />
}
