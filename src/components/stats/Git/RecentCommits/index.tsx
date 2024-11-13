import { useState } from "react"
import { RecentCommitsWrapper, GitTitle } from "./RecentCommits.styled"
import { GitMore, GitDate } from "./components"
import { RecentCommitsProps, showDateType } from "../types"

export const RecentCommits = ({
	commits,
	moreLink,
	showMore,
	t,
	lng
}: RecentCommitsProps) => {
	const [open, setOpen] = useState("")
	const handleOpen = (isOpen: boolean, date: string) => {
		if (isOpen) {
			setOpen("")
		} else {
			setOpen(date)
		}
	}
	const showDate: showDateType = (date, commitList) => {
		const isOpen = open === date
		return (
			<GitDate
				t={t}
				lng={lng}
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
			<GitTitle>{t("recent.title")}</GitTitle>
			{...showDates()}
			{showMore && <GitMore t={t} lng={lng} link={moreLink} />}
		</RecentCommitsWrapper>
	)
}