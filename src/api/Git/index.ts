import { formatCommits } from "./format/RepoCommits"

const api = "https://api.github.com"

interface GitAPIProps {
	user: string
	repo: string
}

class GitAPI {
	baseURL: string
	constructor({ repo, user }: GitAPIProps) {
		this.baseURL = `${api}/repos/${user}/${repo}`
	}

	getCommitsDate = async () => {
		const response = await fetch(this.baseURL + "/commits")
		const body = await response.json()
		return formatCommits(body)
	}
}
export default GitAPI
