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
		document.documentElement.setAttribute("lang", langCode)
	}
	const notExtra = new Set(["pt-BR", "en"])
	if (!isExtra && !notExtra.has(i18n.language)) {
	}
	const otherLang = !isExtra && !notExtra.has(i18n.language)
	return (
		<LanguageSelectInput defaultValue={i18n.language} onChange={onChangeLang}>
			{languages.map(({ code, name }) => (
				<LanguageOption key={(isExtra ? "extra-" : "nav-") + code} value={code}>
					{isExtra ? t(`menu.languages.${code}`) + ` (${name})` : name}
				</LanguageOption>
			))}
			{otherLang && (
				<LanguageOption value={i18n.language}>
					{t(`menu.languages.${i18n.language}`)}
				</LanguageOption>
			)}
		</LanguageSelectInput>
	)
}

export default LanguageSelect
