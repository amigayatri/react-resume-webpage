import {
	formatCommitType,
	formatRawCommitsType,
	emptyCommitsType
} from "../../types/git"

const formatCommit: formatCommitType = ({ author, message }) => {
	const dateStr =
		author !== null && author.date !== undefined ? author.date : ""
	const date = new Date(dateStr)
	const user = author !== null && author.name !== undefined ? author.name : ""
	return { date, user, message }
}

export const formatRawCommits: formatRawCommitsType = (rawData) => {
	const formated: emptyCommitsType = []
	for (const { commit } of rawData) {
		formated.push(formatCommit(commit))
	}
	return formated
}
