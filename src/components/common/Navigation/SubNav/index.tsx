import { underMaintenance } from "../../../../constants/pages"
import SVGIcon from "../../../../icons/SVGIcon"
import PageProps from "../../../../types/PageProps"
import NavigationItem from "../NavigationItem"
import { SubNavWrapper, ContentWrapper } from "./SubNav.styled"
import { useState } from "react"

const SubNav = ({ pages, isRTL }: { pages: PageProps[]; isRTL: boolean }) => {
	const [open, setOpen] = useState(false)
	const openMenu = () => {
		setOpen(!open)
	}
	return (
		<SubNavWrapper
			tabIndex={0}
			onKeyDown={(e) => e.key === "Enter" && openMenu()}
			onClick={() => openMenu()}
			$isOpen={open}
		>
			<SVGIcon local="subnav" id="more" size={24} />
			<ContentWrapper>
				{pages.map((page) => {
					if (underMaintenance.has(page.path)) return
					return (
						<NavigationItem
							close={openMenu}
							isRTL={isRTL}
							key={`nav-link-${page.path}`}
							page={page}
						/>
					)
				})}
			</ContentWrapper>
		</SubNavWrapper>
	)
}

export default SubNav
