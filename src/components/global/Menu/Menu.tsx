import NavigationMenu from "../Navigation"
import { MenuWrapper, SettingsWrapper } from "./Styles"
import Toggle from "../Toggle"
import LanguageSelect from "../LanguageSelect"

interface MenuProps {
	changeTheme: () => void
	theme: string
}

const Menu = (props: MenuProps) => {
	return (
		<MenuWrapper>
			<NavigationMenu />
			<SettingsWrapper>
				<LanguageSelect />
				<Toggle changeTheme={props.changeTheme} theme={props.theme} />
			</SettingsWrapper>
		</MenuWrapper>
	)
}

export default Menu
