import { NavProps } from "../NavigationBase"
import {
	SubNavWrapper,
	SubNavContentWrapper,
	OpenSubNav
} from "../Navigation.styled"
import LinkProps from "../../../../types/LinkProps"
import { NavigationItem } from "./NavigationItem"
import { SVGIcon } from "../../SVGIcon/client"
import { useState } from "react"

interface SubNavProps extends NavProps {
	pages: LinkProps[]
}

export const SubNav = (props: SubNavProps) => {
	const { pages, lng } = props
	const [open, setOpen] = useState(false)
	return (
		<SubNavWrapper $isOpen={open}>
			<OpenSubNav
				tabIndex={0}
				onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
				onClick={() => {
					setOpen(!open)
				}}
			>
				<SVGIcon lng={lng} local="subnav" id="more" size={24} />
			</OpenSubNav>
			<SubNavContentWrapper>
				{pages.map((page) => {
					return (
						<NavigationItem
							{...props}
							key={`nav-link-${page.path}`}
							link={page}
						/>
					)
				})}
			</SubNavContentWrapper>
		</SubNavWrapper>
	)
}
