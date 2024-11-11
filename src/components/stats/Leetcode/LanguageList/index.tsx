import { LanguageListWrapper, List } from "./LanguageList.styled"
import { Title, Summary } from "../Common.styled"
import { LeetCodeProps } from "../../../../types/leetcode/"
import { useEffect, useState } from "react"
import { empty } from "../../../../api/LeetCode"
import { LanguageItem } from "./LanguageItem"

export const LanguageList = ({ leetcode, t }: LeetCodeProps) => {
	const [languages, setLanguages] = useState(empty.languages)
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
