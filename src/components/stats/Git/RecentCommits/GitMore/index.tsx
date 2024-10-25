import { Trans } from "react-i18next"
import { GitMoreWrapper, GitName, GitButton } from "./GitMore.styled"
import SVGIcon from "../../../../../icons/SVGIcon"
import linkProps from "../../../../../constants/linkprops"

interface GitMoreProps {
	link: string
}

interface GitLinkProps extends GitMoreProps {
	children: string
}

const GitLink = ({ children, link }: GitLinkProps) => {
	return (
		<GitButton href={link} {...linkProps}>
			<SVGIcon local="stats" id="github" size={24} />
			<GitName>{children}</GitName>
			<SVGIcon local="stats" id="external" size={16} />
		</GitButton>
	)
}

const GitMore = ({ link }: GitMoreProps) => {
	const options = { linkName: "GitHub" }
	return (
		<GitMoreWrapper as="div">
			<Trans tOptions={options} i18nKey={"stats.git.recent.seeMore"}>
				t<GitLink link={link}>l</GitLink>
			</Trans>
		</GitMoreWrapper>
	)
}

export default GitMore
