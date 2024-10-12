import { useEffect, useState } from "react"
import GitAPI from "../../../api/Git"
import { CommitProps } from "../../../api/Git/format/RepoCommits"
import RecentCommits from "./RecentCommits"
import { Title } from "../Common.styled"
import { useTranslation } from "react-i18next"
import MonthlyCommitsGraph from "./MonthlyCommitsGraph"
import { GitWrapper } from "./Git.styled"

const GitStats = () => {
	const { t } = useTranslation()
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
			<Title>{t("stats.git.main.title")}</Title>
			<RecentCommits moreLink={more} commits={commits} showMore={showMore} />
			<MonthlyCommitsGraph commits={commits} />
		</GitWrapper>
	)
}

export default GitStats
