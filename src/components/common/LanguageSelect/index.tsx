import { useTranslation } from "react-i18next"
import { LanguageSelectInput, LanguageOption } from "./LanguageSelect.styled"
import LanguageProps from "../../../types/LanguageProps"
interface LanguageSelectProps {
	languages: LanguageProps[]
	isExtra?: boolean
}

const LanguageSelect = ({
	languages,
	isExtra = false
}: LanguageSelectProps) => {
	const { i18n, t } = useTranslation()
	const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const langCode = e.target.value
		i18n.changeLanguage(langCode)
	}
	return (
		<LanguageSelectInput
			$maxWidth={isExtra ? "100%" : "200px"}
			defaultValue={i18n.language}
			onChange={onChangeLang}
		>
			{languages.map(({ code, name }) => (
				<LanguageOption key={(isExtra ? "extra-" : "nav-") + code} value={code}>
					{t(`menu.languages.${code}`)} {isExtra && "(" + name + ")"}
				</LanguageOption>
			))}
		</LanguageSelectInput>
	)
}

export default LanguageSelect
