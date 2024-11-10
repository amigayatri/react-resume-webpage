import Element from "../../../types/ElementProps.ts"
import { LanguageSelectBase } from "./LanguageSelectBase.tsx"
import { useTranslation } from "../../../i18n/"
import { ChangeEvent } from "react"

export interface LanguageSelectProps extends Element {
	isExtra: boolean
	onError: boolean
	onLanguageChange: (arg0: ChangeEvent<HTMLSelectElement>) => void
}

export const LanguageSelect = async ({
	lng,
	isExtra,
	onLanguageChange,
	onError
}: LanguageSelectProps) => {
	const { i18n } = await useTranslation(lng, "common")
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
