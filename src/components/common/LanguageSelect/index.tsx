import { ElementProps, BaseElementProps } from "../../../types/common/"
import { LanguageSelectBase } from "./LanguageSelectBase.tsx"
import { useTranslation } from "../../../i18n/"

export interface LanguageSelectProps extends ElementProps {
	isExtra: boolean
	onError: boolean
}

export interface LanguageSelectBaseProps extends LanguageSelectProps {}
export interface LanguageSelectBaseProps extends BaseElementProps {}

export const LanguageSelect = async ({
	lng,
	isExtra,
	onError
}: LanguageSelectProps) => {
	const { t } = await useTranslation(lng, "language-select")
	return (
		<LanguageSelectBase lng={lng} isExtra={isExtra} onError={onError} t={t} />
	)
}
