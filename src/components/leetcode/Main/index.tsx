import { MainWrapper } from "./Main.styled"
import { useEffect, useState } from "react"
import Profile from "../Profile"
import Questions from "../Questions"
import Loading from "../../common/Loading"
import HeatMap from "../HeatMap"
import BadgeList from "../BadgeList"
import LanguageList from "../LanguageList"
import SkillList from "../SkillList"
import { LeetCode } from "../../../api/LeetCode"

interface MainProps {
	user: string
}

const Main = ({ user }: MainProps) => {
	const [leetcode, setLeetcode] = useState(new LeetCode(" "))
	useEffect(() => {
		const lc = new LeetCode(user, 5)
		setLeetcode(lc)
	}, [user])
	if (leetcode.user === " ") {
		return (
			<MainWrapper>
				<Loading type="pacman" />
			</MainWrapper>
		)
	} else {
		return (
			<MainWrapper>
				<Profile leetcode={leetcode} />
				<Questions leetcode={leetcode} />
				<LanguageList leetcode={leetcode} />
				<BadgeList leetcode={leetcode} />
				<HeatMap leetcode={leetcode} />
				<SkillList leetcode={leetcode} />
			</MainWrapper>
		)
	}
}

export default Main
