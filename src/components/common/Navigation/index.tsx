import { useLocation } from "react-router-dom"
import { pages, extraPages } from "../../../constants/pages"
import NavigationItem from "./NavigationItem"
import {
	NavigationWrapper,
	DesktopWrapper,
	MobileWrapper
} from "./Navigation.styled"
import MenuButton from "./MenuButton"
import SubNav from "./SubNav"
import { useState } from "react"
import { getLangDir } from "rtl-detect"
import { useTranslation } from "react-i18next"

interface NavProps {
	isRTL: boolean
}

const DesktopNavigation = ({ isRTL }: NavProps) => {
	return (
		<DesktopWrapper>
			{pages.map((page) => (
				<NavigationItem
					isRTL={isRTL}
					key={`nav-link-${page.path}`}
					page={page}
				/>
			))}
			<SubNav isRTL={isRTL} pages={extraPages} />
		</DesktopWrapper>
	)
}

const MobileNavigation = ({ isRTL }: NavProps) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			<MenuButton isOpen={isOpen} openMenu={() => setIsOpen(!isOpen)} />
			<MobileWrapper $isRTL={isRTL} $isOpen={isOpen}>
				{pages.map((page) => (
					<NavigationItem
						isRTL={isRTL}
						key={`nav-link-${page.path}`}
						page={page}
					/>
				))}
				{extraPages.map((page) => (
					<NavigationItem
						isRTL={isRTL}
						key={`nav-link-${page.path}`}
						page={page}
					/>
				))}
			</MobileWrapper>
		</>
	)
}

const Navigation = () => {
	const { pathname } = useLocation()
	if (pathname === "/") return
	const { i18n } = useTranslation()
	const isRTL = getLangDir(i18n.language) === "rtl"
	return (
		<NavigationWrapper>
			<DesktopNavigation isRTL={isRTL} />
			<MobileNavigation isRTL={isRTL} />
		</NavigationWrapper>
	)
}

export default Navigation
