import Navigation from "../Navigation"
import { useLocation } from "react-router-dom"
import { MenuWrapper, SettingsWrapper } from "./Menu.styled"
import LanguageSelect from "../LanguageSelect"
import languages from "../../../constants/languages"
import ThemeToggle from "./ThemeToggle"

interface MenuProps {
	changeTheme: () => void
	theme: string
}

const Menu = ({ changeTheme, theme }: MenuProps) => {
	const loc = useLocation()
	return (
		<MenuWrapper>
			{loc !== null && loc.pathname !== "/" && <Navigation />}
			<SettingsWrapper>
				<LanguageSelect languages={languages} />
				<ThemeToggle changeTheme={changeTheme} theme={theme} />
			</SettingsWrapper>
		</MenuWrapper>
	)
}

export default Menu
