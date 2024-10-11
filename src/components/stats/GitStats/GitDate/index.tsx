import { CommitProps } from "../../../../api/Git/format/RepoCommits"
import Accordion from "../Accordion"
import { GitDateWrapper, Date } from "./GitDate.styled"

interface GitDateProps {
	date: string
	commits: CommitProps[]
	isOpen: boolean
	setOpen: () => void
}

const GitDate = ({ date, setOpen, commits, isOpen }: GitDateProps) => {
	return (
		<GitDateWrapper
			onClick={() => setOpen()}
			onKeyDown={(e) => e.key === "Enter" && setOpen()}
		>
			<Date>{date}</Date>
			<Accordion isOpen={isOpen} list={commits} />
		</GitDateWrapper>
	)
}

export default GitDate
