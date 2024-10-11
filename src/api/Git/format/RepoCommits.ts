export interface CommitProps {
	date: Date
	user: string
	message: string
}

export const emptyCommits: CommitProps[] = []

interface RawCommit {
	commit: {
		author: {
			date: string
			name: string
		}
		message: string
	}
}

export const formatCommits = (rawData: RawCommit[]) => {
	const formated = Array.from(emptyCommits)
	for (const { commit } of rawData) {
		const date = new Date(commit.author.date)
		const user = commit.author.name
		const message = commit.message
		formated.push({ date, user, message })
	}
	return formated
}
