import { Octokit } from "@octokit/rest"

export interface CommitProps {
	date: Date
	user: string
	message: string
}

export type setLinkFn = (arg0: { data: { html_url: string } }) => void

export interface GitInfoProps {
	user: string
	repo: string
}

export interface GitAPIProps {
	info: GitInfoProps
	octo: Octokit
	link: string
	setLink: setLinkFn
	getCommitsDate: () => Promise<CommitProps[]>
	getRepoLink: () => string
}
