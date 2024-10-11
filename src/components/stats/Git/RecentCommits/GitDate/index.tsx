import { useTranslation } from "react-i18next"
import { CommitProps } from "../../../../../api/Git/format/RepoCommits"
import Accordion from "../Accordion"
import {
	GitDateWrapper,
	Date,
	AccordionHeaderWrapper,
	CommitQuantity,
	GitOpen,
	RecentCommitsHeader
} from "./GitDate.styled"

interface GitDateProps {
	date: string
	commits: CommitProps[]
	isOpen: boolean
	setOpen: (isOpen: boolean, date: string) => void
}

const GitDate = ({ date, setOpen, commits, isOpen }: GitDateProps) => {
	const { t } = useTranslation()
	const showNumber = () => {
		const nCommits = commits.length
		if (nCommits > 1) {
			return t("stats.git.recent.commit.more", { qtty: nCommits })
		} else if (nCommits === 1) {
			return t("stats.git.recent.commit.one", { qtty: nCommits })
		} else {
			return ""
		}
	}
	return (
		<GitDateWrapper $isOpen={isOpen}>
			<AccordionHeaderWrapper
				onClick={() => setOpen(isOpen, date)}
				onKeyDown={(e) => e.key === "Enter" && setOpen(isOpen, date)}
			>
				<RecentCommitsHeader>
					<Date>{date}</Date>
					<CommitQuantity>({showNumber()})</CommitQuantity>
				</RecentCommitsHeader>
				<GitOpen $isOpen={isOpen} />
			</AccordionHeaderWrapper>
			<Accordion isOpen={isOpen} list={commits} />
		</GitDateWrapper>
	)
}

export default GitDate
