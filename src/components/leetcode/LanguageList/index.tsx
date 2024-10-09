import { LanguageListWrapper, List } from "./LanguageList.styled"
import { Title, Summary } from "../Common.styled"
import LeetCodeProps from "../../../types/LeetCodeProps"
import { useEffect, useState } from "react"
import { empty } from "../../../api/LeetCode"
import { useTranslation } from "react-i18next"
import LanguageItem from "./LanguageItem"

const LanguageList = ({ leetcode }: LeetCodeProps) => {
	const [languages, setLanguages] = useState(empty.languages)
	const [max, setMax] = useState(0)
	const { t } = useTranslation()
	useEffect(() => {
		leetcode.getLanguages().then((languages) => {
			setLanguages(languages)
			let max = 0
			for (const lang of languages) {
				max = Math.max(lang.problemsSolved, max)
			}
			setMax(max)
		})
	}, [leetcode])
	return (
		<LanguageListWrapper>
			<Title>{t("leetcode.languages.title")}</Title>
			<Summary>{t("leetcode.languages.summary")}</Summary>
			<List>
				{languages.map((lang) => {
					return <LanguageItem key={lang.languageName} max={max} lang={lang} />
				})}
			</List>
		</LanguageListWrapper>
	)
}

export default LanguageList
