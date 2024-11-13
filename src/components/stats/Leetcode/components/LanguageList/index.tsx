import { LanguageListWrapper, List } from "./LanguageList.styled"
import { Summary, Title } from "../Common.styled"
import { languageArrType } from "../../../../../types/leetcode/"
import { useEffect, useState } from "react"
import { LanguageItem } from "./LanguageItem"
import { LeetCodeElementProps } from "../../types"

export const LanguageList = ({ leetcode, t }: LeetCodeElementProps) => {
	const emptyLangs: languageArrType = []
	const [languages, setLanguages] = useState(emptyLangs)
	const [max, setMax] = useState(0)
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
			<Title>{t("languages.title")}</Title>
			<Summary>{t("languages.summary")}</Summary>
			<List>
				{languages.map((lang) => {
					return <LanguageItem key={lang.languageName} max={max} lang={lang} />
				})}
			</List>
		</LanguageListWrapper>
	)
}
