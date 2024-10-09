import { SkillListWrapper } from "./SkillList.styled"
import { Summary, Title } from "../Common.styled"
import LeetCodeProps from "../../../types/LeetCodeProps"
import { empty } from "../../../api/LeetCode"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import SkillLevel from "./SkillLevel"
import { Tag } from "react-tagcloud"

const SkillList = ({ leetcode }: LeetCodeProps) => {
	const [allSkills, setAllSkills] = useState(empty.skills)
	useEffect(() => {
		leetcode.getSkills().then((skills) => setAllSkills(skills))
	}, [leetcode])
	const { t } = useTranslation()
	const showLevel = (name: string, skills: Tag[]) => {
		return (
			<SkillLevel
				key={name}
				name={t("leetcode.skills.level", { level: name })}
				skills={skills}
			/>
		)
	}
	const list = []
	for (const [name, skills] of allSkills.entries()) {
		list.push(showLevel(name, skills))
	}
	return (
		<SkillListWrapper>
			<Title>{t("leetcode.skills.title")}</Title>
			<Summary>{t("leetcode.skills.summary")}</Summary>
			{...list}
		</SkillListWrapper>
	)
}

export default SkillList
