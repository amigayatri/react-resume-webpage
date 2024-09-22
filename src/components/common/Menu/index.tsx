import DesktopNavigation from "../DesktopNavigation"
import { MenuWrapper, SettingsWrapper } from "./Menu.styled"
import Toggle from "../Toggle"
import LanguageSelect from "../LanguageSelect"
interface MenuProps {
	changeTheme: () => void
	theme: string
}

const Menu = ({ changeTheme, theme }: MenuProps) => {
	return (
		<MenuWrapper>
			<DesktopNavigation />
			<SettingsWrapper>
				<LanguageSelect />
				<Toggle changeTheme={changeTheme} theme={theme} />
			</SettingsWrapper>
		</MenuWrapper>
	)
}

export default Menu
