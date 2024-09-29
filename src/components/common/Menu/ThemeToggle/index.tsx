import Toggle from "../../Toggle"
import { useTranslation } from "react-i18next"

interface ThemeToggleProps {
	theme: string
	changeTheme: () => void
}

const ThemeToggle = ({ theme, changeTheme }: ThemeToggleProps) => {
	const { t } = useTranslation()
	const iconSettings = {
		id: "sun",
		trueValAsStr: "light",
		shouldChange: true,
		options: { true: "sun", false: "moon" }
	}
	return (
		<Toggle
			icon={iconSettings}
			state={theme}
			stateChangeFN={changeTheme}
			ariaLabel={t("menu.theme.change")}
		/>
	)
}

export default ThemeToggle
