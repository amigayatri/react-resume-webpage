import { CommitWrapper, CommitItem } from "./Commit.styled"
import { CommitElementProps } from "../../../types"

export const Commit = ({ info }: CommitElementProps) => {
	return (
		<CommitWrapper>
			<CommitItem>{info.message}</CommitItem>
		</CommitWrapper>
	)
}
