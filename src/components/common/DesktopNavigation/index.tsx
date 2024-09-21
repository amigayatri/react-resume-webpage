import { useLocation } from "react-router-dom"
import pages from "../../../constants/pages"
import PageProps from "../../../types/PageProps"
import NavigationItem from "../NavigationItem"
import { DesktopNavigationWrapper } from "./DesktopNavigation.styled"

const DesktopNavigation = () => {
	const location = useLocation()
	const activePath = location.pathname
	const showItem = (page: PageProps, index: number) => {
		return (
			<NavigationItem
				key={"navigation-item".concat(index.toString())}
				path={page.path}
				name={page.name}
				isActive={activePath === page.path}
			/>
		)
	}
	if (activePath === "/") return
	return (
		<DesktopNavigationWrapper>
			{pages.map((page, i) => showItem(page, i))}
		</DesktopNavigationWrapper>
	)
}

export default DesktopNavigation
