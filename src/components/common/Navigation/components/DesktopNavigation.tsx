import { NavProps } from "../NavigationBase"
import { DesktopWrapper } from "../Navigation.styled"
import { SubNav } from "./SubNav"
import { pages, extraPages } from "../../../../constants/links"
import { printLinks } from "./functions"

export const DesktopNavigation = (props: NavProps) => {
	return (
		<DesktopWrapper>
			{pages.map((page) => printLinks(page, props, false))}
			<SubNav pages={extraPages} {...props} />
		</DesktopWrapper>
	)
}
