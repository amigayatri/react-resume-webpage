import { CommitProps } from "../../../../../api/Git/format/RepoCommits"
import { CommitWrapper, CommitItem } from "./Commit.styled"

interface CommitElementProps {
	info: CommitProps
}

const Commit = ({ info }: CommitElementProps) => {
	return (
		<CommitWrapper>
			<CommitItem>{info.message}</CommitItem>
		</CommitWrapper>
	)
}

export default Commit
