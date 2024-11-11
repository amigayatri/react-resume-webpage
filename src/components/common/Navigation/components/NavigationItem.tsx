import {
	ContentWrapper,
	Label,
	LinkWrapper,
	UnderLine
} from "../Navigation.styled"
import { SVGIcon } from "../../SVGIcon/client"
import LinkProps from "../../../../types/common/LinkProps"
import { NavProps } from "../NavigationBase"

interface NavigationItemProps extends NavProps {
	link: LinkProps
}

export const NavigationItem = ({ lng, t, link, path }: NavigationItemProps) => {
	const linkPath = `/${lng}/${link.path}`
	return (
		<LinkWrapper $isActive={linkPath === path}>
			<ContentWrapper href={linkPath}>
				<SVGIcon
					lng={lng}
					noTransition
					local="navigation"
					id={link.icon}
					size={24}
				/>
				<Label>{t(link.key)}</Label>
			</ContentWrapper>
			<UnderLine />
		</LinkWrapper>
	)
}
