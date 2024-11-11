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
	const { t } = useTranslation(lng, "common")
	return (
		<LanguageSelectBase
			onLanguageChange={onLanguageChange}
			lng={lng}
			isExtra={isExtra}
			onError={onError}
			t={t}
		/>
	)
}
