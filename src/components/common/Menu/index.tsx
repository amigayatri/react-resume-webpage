import Navigation from "../Navigation"
import { MenuWrapper, SettingsWrapper } from "./Menu.styled"
import Toggle from "../Toggle"
import LanguageSelect from "../LanguageSelect"
import languages from "../../../constants/languages"

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
				{
					//<Toggle changeTheme={changeTheme} theme={theme} />
				}
			</SettingsWrapper>
		</MenuWrapper>
	)
}

export default Menu
