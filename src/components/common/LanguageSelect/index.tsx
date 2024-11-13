import { ElementProps, BaseElementProps } from "../../../types/common/"
import { LanguageSelectBase } from "./LanguageSelectBase.tsx"
import { useTranslation } from "../../../i18n/"
import { ChangeEvent } from "react"

export interface LanguageSelectProps extends ElementProps {
	isExtra: boolean
	onError: boolean
	onLanguageChange: (arg0: ChangeEvent<HTMLSelectElement>) => void
}

export interface LanguageSelectBaseProps extends LanguageSelectProps {}
export interface LanguageSelectBaseProps extends BaseElementProps {}

export const LanguageSelect = async ({
	lng,
	isExtra,
	onLanguageChange,
	onError
}: LanguageSelectProps) => {
	const { t } = await useTranslation(lng, "language-select")
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
