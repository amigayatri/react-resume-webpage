import { formatCommits } from "./format/RepoCommits"
import { Octokit } from "@octokit/rest"

interface GitAPIProps {
	user: string
	repo: string
}

class GitAPI {
	info: GitAPIProps
	octo: Octokit
	link: string
	constructor({ repo, user }: GitAPIProps) {
		this.info = { repo, user }
		// const auth = import.meta.env.DEV
		// 	? { auth: import.meta.env.VITE_API_GIT_TOKEN }
		// 	: {}
		const auth = {}
		const octokit = new Octokit(auth)
		this.octo = octokit
		this.link = ""
		this.octo
			.request("GET /repos/{owner}/{repo}/", {
				owner: user,
				repo: repo
			})
			.then((response) => {
				this.setLink(response)
			})
	}

	setLink(response: any) {
		this.link = response.data.html_url
	}

	getCommitsDate = async () => {
		const { user, repo } = this.info
		const response = await this.octo.paginate(
			"GET /repos/{owner}/{repo}/commits",
			{
				owner: user,
				repo: repo
			}
		)
		return formatCommits(response)
	}

	getRepoLink = () => {
		return this.link
	}
}
export default GitAPI
