import { useLocation } from "react-router-dom"
import pages from "../../../constants/pages"
import NavigationItem from "../NavigationItem"
import { DesktopNavigationWrapper } from "./DesktopNavigation.styled"

const DesktopNavigation = () => {
	const location = useLocation()
	const activePath = location.pathname
	if (activePath === "/") return
	return (
		<DesktopNavigationWrapper>
			{pages.map((page) => (
				<NavigationItem key={`nav-link-${page.path}`} page={page} />
			))}
		</DesktopNavigationWrapper>
	)
}

export default DesktopNavigation
