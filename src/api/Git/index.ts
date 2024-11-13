import { formatRawCommits } from "./functions"
import { GitAPIProps, GitInfoProps, setLinkType } from "../../types/git"
import { Octokit } from "@octokit/rest"

class GitAPI implements GitAPIProps {
	info: GitInfoProps
	octo: Octokit = new Octokit()
	link: string = ""

	constructor(info: GitInfoProps) {
		const { repo, user } = info
		this.info = { repo, user }
		this.octo
			.request("GET /repos/{owner}/{repo}/", {
				owner: user,
				repo: repo
			})
			.then((response) => {
				this.setLink(response)
			})
	}

	setLink: setLinkType = (response) => {
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
		return formatRawCommits(response)
	}

	getRepoLink = () => {
		return this.link
	}
}
export default GitAPI
