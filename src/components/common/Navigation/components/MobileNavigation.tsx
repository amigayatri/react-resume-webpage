import { NavProps } from "../NavigationBase"
import { MobileWrapper, MenuButtonWrapper, Icon } from "../Navigation.styled"
import { pages, extraPages } from "../../../../constants/links"
import { useState } from "react"
import { printLinks, handleLink } from "./functions"

export const MobileNavigation = (props: NavProps) => {
	const [open, setOpen] = useState(false)
	const handleLink: handleLink = (page) => printLinks(page, props)
	return (
		<>
			<MenuButtonWrapper
				tabIndex={0}
				onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
				onClick={() => {
					setOpen(!open)
				}}
			>
				<Icon $isOpen={open} />
			</MenuButtonWrapper>
			<MobileWrapper $isOpen={open}>
				{pages.map(handleLink)}
				{extraPages.map(handleLink)}
			</MobileWrapper>
		</>
	)
}
