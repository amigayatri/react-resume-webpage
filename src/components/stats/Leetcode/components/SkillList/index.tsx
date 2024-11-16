import { SkillListWrapper } from "./SkillList.styled"
import { Summary, Title } from "../Common.styled"
import { useEffect, useState } from "react"
import { SkillLevel } from "./SkillLevel"
import { Tag } from "react-tagcloud"
import { LeetCodeElementProps } from "../../types"
import { skillMap } from "../../../../../types/leetcode"

export const SkillList = ({ leetcode, t }: LeetCodeElementProps) => {
	const emptySkills: skillMap = new Map()
	const [allSkills, setAllSkills] = useState(emptySkills)
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
