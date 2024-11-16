import { NavProps } from "../NavigationBase"
import { DesktopWrapper } from "../Navigation.styled"
import { SubNav } from "./SubNav"
import { pages, extraPages } from "../../../../constants/links"
import { printLinks, handleLink } from "./functions"

export const DesktopNavigation = (props: NavProps) => {
	const handleLink: handleLink = (page) => printLinks(page, props)
	return (
		<DesktopWrapper>
			{pages.map(handleLink)}
			<SubNav pages={extraPages} handle={handleLink} {...props} />
		</DesktopWrapper>
	)
}
