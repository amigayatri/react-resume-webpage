"use client"

import { ControlsBase } from "./ControlsBase"
import { useTranslation } from "../../../../i18n/client"
import { ControlsProps } from "../types.ts"

export function Controls(props: ControlsProps) {
	const { lng } = props
	const { t } = useTranslation(lng, "iconlist")
	return <ControlsBase t={t} {...props} />
}
