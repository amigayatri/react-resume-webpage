import { Octokit } from "@octokit/rest"

export interface CommitProps {
	date: Date
	user: string
	message: string
}
export type emptyCommitsType = CommitProps[]

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

interface RawLinkProps {
	data: { html_url: string }
}
export type formatCommitType = (commit: RawCommitProps) => CommitProps
export type formatRawCommitsType = (rawData: RawDataProps[]) => CommitProps[]
export type setLinkType = (data: RawLinkProps) => void

export interface GitInfoProps {
	user: string
	repo: string
}
export interface GitAPIProps {
	info: GitInfoProps
	octo: Octokit
	link: string
	setLink: setLinkType
	getCommitsDate: () => Promise<CommitProps[]>
	getRepoLink: () => string
}
