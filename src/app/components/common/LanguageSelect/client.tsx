"use client"

import { useTranslation } from "../../../i18n/client"
import { LanguageSelectBase } from "./LanguageSelectBase"
import { LanguageSelectProps } from "./index"

export const LanguageSelect = ({
	lng,
	isExtra,
	onError,
	onLanguageChange
}: LanguageSelectProps) => {
	const { i18n } = useTranslation(lng, "common")
	return (
		<LanguageSelectBase
			onLanguageChange={onLanguageChange}
			lng={lng}
			i18n={i18n}
			isExtra={isExtra}
			onError={onError}
		/>
	)
}
