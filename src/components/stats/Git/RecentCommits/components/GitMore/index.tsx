import { Trans } from "react-i18next/TransWithoutContext"
import { GitMoreWrapper, GitName, GitButton } from "./GitMore.styled"
import { SVGIcon } from "../../../../../common/client"
import { linkProps } from "../../../../../../constants/linkprops"
import { GitMoreProps, GitLinkProps } from "../../../types"

const GitLink = ({ children, link, lng }: GitLinkProps) => {
	return (
		<GitButton href={link} {...linkProps}>
			<SVGIcon lng={lng} local="stats" id="github" size={24} />
			<GitName>{children}</GitName>
			<SVGIcon lng={lng} local="stats" id="external" size={16} />
		</GitButton>
	)
}

export const GitMore = ({ link, lng, t }: GitMoreProps) => {
	const options = { linkName: "GitHub" }
	return (
		<GitMoreWrapper as="div">
			<Trans t={t} tOptions={options} i18nKey={"recent.seeMore"}>
				t
				<GitLink lng={lng} t={t} link={link}>
					l
				</GitLink>
			</Trans>
		</GitMoreWrapper>
	)
}
