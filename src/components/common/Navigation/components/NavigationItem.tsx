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
	hasUnderline?: boolean
	isSublink: boolean
}

export const NavigationItem = ({
	lng,
	t,
	link,
	path,
	hasUnderline,
	isSublink
}: NavigationItemProps) => {
	const linkPath = `/${lng}/${link.path}`
	const { key, icon } = link
	return (
		<LinkWrapper $isSubLink={isSublink} $isActive={linkPath === path}>
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
			{hasUnderline === true && <UnderLine />}
		</LinkWrapper>
	)
}
