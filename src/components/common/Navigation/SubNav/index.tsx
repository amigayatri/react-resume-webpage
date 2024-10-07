import SVGIcon from "../../../../icons/SVGIcon"
import PageProps from "../../../../types/PageProps"
import NavigationItem from "../NavigationItem"
import { SubNavWrapper, ContentWrapper } from "./SubNav.styled"
import { useState } from "react"

const SubNav = ({ pages }: { pages: PageProps[] }) => {
	const [open, setOpen] = useState(false)
	const openMenu = () => {
		setOpen(!open)
	}
	return (
		<SubNavWrapper onClick={() => openMenu()} $isOpen={open}>
			<SVGIcon id="more" size={24} />
			<ContentWrapper>
				{pages.map((page) => (
					<NavigationItem key={`nav-link-${page.path}`} page={page} />
				))}
			</ContentWrapper>
		</SubNavWrapper>
	)
}

export default SubNav
