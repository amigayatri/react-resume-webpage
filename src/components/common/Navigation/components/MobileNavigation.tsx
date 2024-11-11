import { NavProps } from "../NavigationBase"
import { MobileWrapper, MenuButtonWrapper, Icon } from "../Navigation.styled"
import { NavigationItem } from "./NavigationItem"
import { pages, extraPages } from "../../../../constants/links"
import { useState } from "react"

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
				{pages.map((page) => {
					return (
						<NavigationItem
							{...props}
							key={`nav-link-${page.path}`}
							link={page}
						/>
					)
				})}
				{extraPages.map((page) => {
					return (
						<NavigationItem
							{...props}
							key={`nav-link-${page.path}`}
							link={page}
						/>
					)
				})}
			</MobileWrapper>
		</>
	)
}
