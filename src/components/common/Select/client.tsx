"use client"

import { SelectBase } from "./SelectBase.tsx"
import { useTranslation } from "../../../i18n/client"
import { SelectProps } from "./index.tsx"

export function Select(props: SelectProps) {
	const { lng, namespace } = props
	const { t } = useTranslation(lng, namespace)
	return <SelectBase t={t} {...props} />
}
