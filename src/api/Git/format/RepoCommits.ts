export interface CommitProps {
	date: Date
	user: string
	message: string
}

export const emptyCommits: CommitProps[] = []

export const formatCommits = (rawData: any) => {
	const formated = Array.from(emptyCommits)
	for (const { commit } of rawData) {
		const date = new Date(commit.author.date)
		const user = commit.author.name
		const message = commit.message
		formated.push({ date, user, message })
	}
	return formated
}
