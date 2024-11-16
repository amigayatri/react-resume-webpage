import { CommitProps } from "../../types/git"

interface RawCommitProps {
	author: {
		name?: string | undefined
		email?: string | undefined
		date?: string | undefined
	} | null
	message: string
}

interface RawDataProps {
	commit: RawCommitProps
}

type formatCommit = (commit: RawCommitProps) => CommitProps
const formatCommit: formatCommit = ({ author, message }) => {
	const dateStr =
		author !== null && author.date !== undefined ? author.date : ""
	const date = new Date(dateStr)
	const user = author !== null && author.name !== undefined ? author.name : ""
	return { date, user, message }
}
type formatRawCommits = (rawData: RawDataProps[]) => CommitProps[]

export const formatRawCommits: formatRawCommits = (rawData) => {
	const formated: CommitProps[] = []
	for (const { commit } of rawData) {
		formated.push(formatCommit(commit))
	}
	return formated
}
