import { useLocation } from "react-router-dom"
import pages from "../../../constants/pages"
import NavigationItem from "../NavigationItem"
import { NavigationWrapper } from "./Navigation.styled"
import PageProps from "../../../types/PageProps"

const hidden = new Set(["extralanguages"])

const filtered: PageProps[] = []
pages.forEach((page) => {
	if (!hidden.has(page.id)) {
		filtered.push(page)
	}
})

const Navigation = () => {
	const location = useLocation()
	const activePath = location.pathname
	if (activePath === "/") return
	return (
		<NavigationWrapper>
			{filtered.map((page) => (
				<NavigationItem key={`nav-link-${page.path}`} page={page} />
			))}
		</NavigationWrapper>
	)
}

export default Navigation
