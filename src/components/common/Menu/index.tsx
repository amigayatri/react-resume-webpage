import Navigation from "../Navigation"
import { MenuWrapper, SettingsWrapper } from "./Menu.styled"
import LanguageSelect from "../LanguageSelect"
import languages from "../../../constants/languages"
import ThemeToggle from "./ThemeToggle"

interface MenuProps {
	changeTheme: () => void
	theme: string
}

const Menu = ({ changeTheme, theme }: MenuProps) => {
	return (
		<MenuWrapper>
			<Navigation />
			<SettingsWrapper>
				<LanguageSelect languages={languages} />
				<ThemeToggle changeTheme={changeTheme} theme={theme} />
			</SettingsWrapper>
		</MenuWrapper>
	)
}

export default Menu
