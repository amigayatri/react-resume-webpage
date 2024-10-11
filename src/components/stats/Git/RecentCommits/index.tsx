import { useState } from "react"
import { RecentCommitsWrapper, GitTitle } from "./RecentCommits.styled"
import { CommitProps } from "./../../../../api/Git/format/RepoCommits"
import GitDate from "./GitDate"
import { useTranslation } from "react-i18next"
import GitMore from "./GitMore"

interface RecentCommitsProps {
	commits: Map<string, CommitProps[]>
	moreLink: string
	showMore: boolean
}

const RecentCommits = ({ commits, moreLink, showMore }: RecentCommitsProps) => {
	const { t } = useTranslation()
	const [open, setOpen] = useState("")
	const handleOpen = (isOpen: boolean, date: string) => {
		if (isOpen) {
			setOpen("")
		} else {
			setOpen(date)
		}
	}
	const showDate = (date: string, commitList: CommitProps[]) => {
		const isOpen = open === date
		return (
			<GitDate
				setOpen={() => {
					handleOpen(isOpen, date)
				}}
				isOpen={isOpen}
				commits={commitList}
				date={date}
			/>
		)
	}
	const showDates = () => {
		const toShow: JSX.Element[] = []
		let idx = 0
		for (const [date, commitList] of commits.entries()) {
			if (idx > 25) {
				break
			}
			idx += commitList.length
			toShow.push(showDate(date, commitList))
		}
		return toShow
	}
	return (
		<RecentCommitsWrapper>
			<GitTitle>{t("stats.git.recent.title")}</GitTitle>
			{...showDates()}
			{showMore && <GitMore link={moreLink} />}
		</RecentCommitsWrapper>
	)
}

export default RecentCommits
