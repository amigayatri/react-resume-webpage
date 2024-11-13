import { BaseElementProps, ElementProps } from "../../../types/common"
import { CommitProps } from "../../../types/git"

export interface GitStatsProps extends ElementProps {}
export interface GitStatsBaseProps extends BaseElementProps {}
export interface GitStatsBaseProps extends GitStatsProps {}
export type commitsMapType = Map<string, CommitProps[]>
export interface MonthlyCommitsGraphProps extends BaseElementProps {
	commits: commitsMapType
}
export interface CommitElementProps {
	info: CommitProps
}
export interface AccordionProps {
	list: CommitProps[]
	isOpen: boolean
}
export interface GitDateProps extends BaseElementProps {
	date: string
	commits: CommitProps[]
	isOpen: boolean
	setOpen: (isOpen: boolean, date: string) => void
}
export interface GitMoreProps extends BaseElementProps {
	link: string
}

export interface GitLinkProps extends GitMoreProps {
	children: string
}
export interface RecentCommitsProps extends BaseElementProps {
	commits: commitsMapType
	moreLink: string
	showMore: boolean
}
export type showDateType = (
	date: string,
	commitList: CommitProps[]
) => JSX.Element
