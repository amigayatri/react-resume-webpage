"use client"

import { useTranslation } from "../../../i18n/client"
import { LanguageSelectBase } from "./LanguageSelectBase"
import { LanguageSelectProps } from "./"

export const LanguageSelect = ({ lng, isExtra, onError }: LanguageSelectProps) => {
	const { t } = useTranslation(lng, "language-select")
	return (
		<LanguageSelectBase lng={lng} isExtra={isExtra} onError={onError} t={t} />
	)
}
