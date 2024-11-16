import { NavProps } from "../NavigationBase"
import {
	SubNavWrapper,
	SubNavContentWrapper,
	OpenSubNav
} from "../Navigation.styled"
import { LinkProps } from "../../../../types/common/"
import { SVGIcon } from "../../SVGIcon/client"
import { useState } from "react"
import { handleLink } from "./functions"

interface SubNavProps extends NavProps {
	pages: LinkProps[]
	handle: handleLink
}

export const SubNav = (props: SubNavProps) => {
	const { pages, lng, handle } = props
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
			<SubNavContentWrapper>{pages.map(handle)}</SubNavContentWrapper>
		</SubNavWrapper>
	)
}
