import { SkillListWrapper } from "./SkillList.styled"
import { Summary, Title } from "../Common.styled"
import { LeetCodeProps } from "../../../../types/leetcode/"
import { empty } from "../../../../api/LeetCode"
import { useEffect, useState } from "react"
import { SkillLevel } from "./SkillLevel"
import { Tag } from "react-tagcloud"

export const SkillList = ({ leetcode, t }: LeetCodeProps) => {
	const [allSkills, setAllSkills] = useState(empty.skills)
	useEffect(() => {
		leetcode.getSkills().then((skills) => setAllSkills(skills))
	}, [leetcode])
	const showLevel = (name: string, skills: Tag[]) => {
		return (
			<SkillLevel
				key={name}
				name={t("skills.level", { level: name })}
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
			<Title>{t("skills.title")}</Title>
			<Summary>{t("skills.summary")}</Summary>
			{...list}
		</SkillListWrapper>
	)
}
