import { useEffect, useState } from "react"
import GitAPI from "../../../api/Git"
import { RecentCommits } from "./RecentCommits"
import { Title } from "../Common.styled"
import { MonthlyCommitsGraph } from "./MonthlyCommitsGraph"
import { GitWrapper } from "./Git.styled"
import { GitStatsBaseProps, commitsMap } from "./types"

export const GitStatsBase = ({ t, lng }: GitStatsBaseProps) => {
	const emptyCommits: commitsMap = new Map()
	const [commits, setCommits] = useState(emptyCommits)
	const [more, setMore] = useState("")
	const [showMore, setShowMore] = useState(true)
	useEffect(() => {
		const Git = new GitAPI({ repo: "react-resume-webpage", user: "amigayatri" })
		Git.getCommitsDate().then((commitList) => {
			const commitsByDate: commitsMap = new Map()
			if (commitList.length <= 25) setShowMore(false)
			for (const commit of commitList) {
				const [key] = commit.date.toISOString().split("T")
				const sameDateCommits = commitsByDate.get(key) || []
				sameDateCommits.push(commit)
				commitsByDate.set(key, sameDateCommits)
			}
			setCommits(commitsByDate)
			setMore(Git.link)
		})
	}, [])
	return (
		<GitWrapper>
			<Title>{t("main.title")}</Title>
			<RecentCommits
				t={t}
				lng={lng}
				moreLink={more}
				commits={commits}
				showMore={showMore}
			/>
			<MonthlyCommitsGraph t={t} lng={lng} commits={commits} />
		</GitWrapper>
	)
}

export default GitStatsBase
