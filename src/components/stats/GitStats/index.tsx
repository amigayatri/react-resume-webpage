import { useEffect, useState } from "react"
import { GitStatsWrapper } from "./GitStats.styled"
import GitAPI from "./../../../api/Git/"
import { CommitProps } from "./../../../api/Git/format/RepoCommits"
import GitDate from "./GitDate"
import { Title } from "../Common.styled"
import { useTranslation } from "react-i18next"

const GitStats = () => {
	const { t } = useTranslation()
	const [commits, setCommits] = useState(new Map<string, CommitProps[]>())
	const [open, setOpen] = useState("")
	useEffect(() => {
		const Git = new GitAPI({ repo: "react-resume-webpage", user: "amigayatri" })
		Git.getCommitsDate().then((commitList) => {
			const commitsByDate = new Map<string, CommitProps[]>()
			for (const commit of commitList) {
				const key = commit.date.toLocaleDateString("UTC", {
					dateStyle: "short"
				})
				const sameDateCommits = commitsByDate.get(key) || []
				sameDateCommits.push(commit)
				commitsByDate.set(key, sameDateCommits)
			}
			setCommits(commitsByDate)
		})
	}, [])
	const showDates = () => {
		const toShow: JSX.Element[] = []
		commits.forEach((commitList, date) => {
			toShow.push(
				<GitDate
					setOpen={() => {
						setOpen(date)
					}}
					isOpen={open === date}
					commits={commitList}
					date={date}
				/>
			)
		})
		return toShow
	}
	return (
		<GitStatsWrapper>
			<Title>{t("stats.git.recent")}</Title>
			{...showDates()}
		</GitStatsWrapper>
	)
}

export default GitStats
