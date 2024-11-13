import { useEffect, useState } from "react"
import { LeetcodeWrapper } from "./LeetcodeStats.styled"
import { Loading } from "../../common/"
import {
	BadgeList,
	HeatMap,
	Profile,
	Questions,
	LanguageList,
	SkillList
} from "./components"
import { LeetCode } from "../../../api/LeetCode"
import { LeetcodeStatsBaseProps } from "./types"

export const LeetcodeStatsBase = ({ t, lng }: LeetcodeStatsBaseProps) => {
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
