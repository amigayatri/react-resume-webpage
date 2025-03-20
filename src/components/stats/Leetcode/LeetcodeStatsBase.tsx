import { useEffect, useState } from "react"
import { LeetCode } from "../../../api/LeetCode"
import { useGetCurrentHost } from "../../../hooks"
import { Loading } from "../../common/"
import { BadgeList, HeatMap, LanguageList, Profile, Questions, SkillList } from "./components"
import { LeetcodeWrapper } from "./LeetcodeStats.styled"
import { LeetcodeStatsBaseProps } from "./types"

export const LeetcodeStatsBase = ({ t, lng }: LeetcodeStatsBaseProps) => {
    const user = "amira_gayatri"
    const hostURL = useGetCurrentHost()
    const [leetcode, setLeetcode] = useState(new LeetCode(hostURL, " "))
    useEffect(() => {
        const lc = new LeetCode(hostURL, user, 5)
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
