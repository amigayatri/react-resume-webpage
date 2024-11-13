import { Accordion } from "../"
import {
	GitDateWrapper,
	Date,
	AccordionHeaderWrapper,
	CommitQuantity,
	GitOpen,
	RecentCommitsHeader
} from "./GitDate.styled"
import { GitDateProps } from "../../../types"

export const GitDate = ({
	date,
	setOpen,
	commits,
	isOpen,
	t
}: GitDateProps) => {
	const showNumber = () => {
		const nCommits = commits.length
		if (nCommits > 1) {
			return t("recent.commit.more", { qtty: nCommits })
		} else if (nCommits === 1) {
			return t("recent.commit.one", { qtty: nCommits })
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
