import { NavProps } from "../NavigationBase"
import { DesktopWrapper } from "../Navigation.styled"
import { NavigationItem } from "./NavigationItem"
import { SubNav } from "./SubNav"
import { pages, extraPages } from "../../../../constants/links"

export const DesktopNavigation = (props: NavProps) => {
	return (
		<DesktopWrapper>
			{pages.map((page) => {
				return (
					<NavigationItem
						{...props}
						key={`nav-link-${page.path}`}
						link={page}
					/>
				)
			})}
			<SubNav pages={extraPages} {...props} />
		</DesktopWrapper>
	)
}
