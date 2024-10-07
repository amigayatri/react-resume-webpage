import { useLocation } from "react-router-dom"
import { pages, extraPages } from "../../../constants/pages"
import NavigationItem from "./NavigationItem"
import { NavigationWrapper } from "./Navigation.styled"
import SubNav from "./SubNav"

const Navigation = () => {
	const location = useLocation()
	const activePath = location.pathname
	if (activePath === "/") return
	return (
		<NavigationWrapper>
			{pages.map((page) => (
				<NavigationItem key={`nav-link-${page.path}`} page={page} />
			))}
			<SubNav pages={extraPages} />
		</NavigationWrapper>
	)
}

export default Navigation
