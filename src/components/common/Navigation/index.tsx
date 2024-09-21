import { DesktopWrapper } from "./NavigationMenu.styled"
import NavigationItem from "./MenuItem"
import { useLocation } from "react-router-dom"
import PageProps from "../../../types/PageProps"
import pages from "../../../constants/pages"

const NavigationMenu = () => {
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
	return (
		<DesktopWrapper>{pages.map((page, i) => showItem(page, i))}</DesktopWrapper>
	)
}

export default NavigationMenu
