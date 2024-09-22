import { useTranslation } from "react-i18next"
import { LanguageSelectInput, LanguageOption } from "./LanguageSelect.styled"
import { languages } from "../../../constants/languages"

const LanguageSelect = () => {
	const { i18n, t } = useTranslation()
	const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const lang_code = e.target.value
		i18n.changeLanguage(lang_code)
	}
	return (
		<LanguageSelectInput defaultValue={i18n.language} onChange={onChangeLang}>
			{languages.map(({ code }) => (
				<LanguageOption key={code} value={code}>
					{t(`languages.${code}`)}
				</LanguageOption>
			))}
		</LanguageSelectInput>
	)
}

export default LanguageSelect
