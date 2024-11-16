import {
	ContentWrapper,
	Label,
	LinkWrapper,
	UnderLine
} from "../Navigation.styled"
import { SVGIcon } from "../../SVGIcon/client"
import { LinkProps } from "../../../../types/common/"
import { NavProps } from "../NavigationBase"

interface NavigationItemProps extends NavProps {
	link: LinkProps
	isSublink: boolean
}

export const NavigationItem = ({
	lng,
	t,
	link,
	path,
	isSublink
}: NavigationItemProps) => {
	const linkPath = `/${lng}/${link.path}`
	const { key, icon } = link
	const isActive = linkPath === path
	const hasUnderline = isActive || link.sublinks !== undefined
	return (
		<LinkWrapper
			$hasUnderline={hasUnderline}
			$isSubLink={isSublink}
			$isActive={isActive}
		>
			<ContentWrapper href={linkPath}>
				<SVGIcon
					lng={lng}
					noTransition
					local="navigation"
					id={icon}
					size={24}
				/>
				<Label>{t(key)}</Label>
			</ContentWrapper>
			<UnderLine />
		</LinkWrapper>
	)
}
