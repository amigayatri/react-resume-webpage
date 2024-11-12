import { useEffect, useState } from "react"
import GitAPI from "../../../api/Git"
import { CommitProps } from "../../../api/Git/format/RepoCommits"
import RecentCommits from "./RecentCommits"
import { Title } from "../Common.styled"
import MonthlyCommitsGraph from "./MonthlyCommitsGraph"
import { GitWrapper } from "./Git.styled"
import BaseElement from "../../../types/common/BaseElementProps"

export const GitStatsBase = ({ t, lng }: BaseElement) => {
	const [commits, setCommits] = useState(new Map<string, CommitProps[]>())
	const [more, setMore] = useState("")
	const [showMore, setShowMore] = useState(true)
	useEffect(() => {
		const Git = new GitAPI({ repo: "react-resume-webpage", user: "amigayatri" })
		Git.getCommitsDate().then((commitList) => {
			const commitsByDate = new Map<string, CommitProps[]>()
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
