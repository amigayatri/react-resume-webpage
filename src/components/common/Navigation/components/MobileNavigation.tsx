import { NavProps } from "../NavigationBase"
import { MobileWrapper, MenuButtonWrapper, Icon } from "../Navigation.styled"
import { pages, extraPages } from "../../../../constants/links"
import { useState } from "react"
import { printLinks } from "./functions"

export const MobileNavigation = (props: NavProps) => {
	const [open, setOpen] = useState(false)
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
				{pages.map((page) => printLinks(page, props, true))}
				{extraPages.map((page) => printLinks(page, props, true))}
			</MobileWrapper>
		</>
	)
}
