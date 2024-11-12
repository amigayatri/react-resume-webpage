import { useEffect, useState } from "react"
import { LeetcodeWrapper } from "./LeetcodeStats.styled"
import BaseElement from "../../../types/common/BaseElementProps"
import { Profile } from "./Profile"
import { Questions } from "./Questions"
import { Loading } from "../../common/Loading"
import { BadgeList } from "./BadgeList"
import { HeatMap } from "./HeatMap"
import { LanguageList } from "./LanguageList"
import { SkillList } from "./SkillList"
import { LeetCode } from "../../../api/LeetCode"

export const LeetcodeStatsBase = ({ t, lng }: BaseElement) => {
	const user = "amira_gayatri"
	const [leetcode, setLeetcode] = useState(new LeetCode(" "))
	useEffect(() => {
		const lc = new LeetCode(user, 5)
		setLeetcode(lc)
	}, [user])
	if (leetcode.user === " ") {
		return (
			<LeetcodeWrapper>
				<Loading type="pacman" />
			</LeetcodeWrapper>
		)
	} else {
		return (
			<LeetcodeWrapper>
				<Profile t={t} lng={lng} leetcode={leetcode} />
				<Questions t={t} lng={lng} leetcode={leetcode} />
				<LanguageList t={t} lng={lng} leetcode={leetcode} />
				<BadgeList t={t} lng={lng} leetcode={leetcode} />
				<HeatMap t={t} lng={lng} leetcode={leetcode} />
				<SkillList t={t} lng={lng} leetcode={leetcode} />
			</LeetcodeWrapper>
		)
	}
}
