import { ThemeToggleWrapper } from "./ThemeToggle.styled"
import ToggleProps from "../../../../types/ToggleProps"

interface ThemeToggleProps extends ToggleProps {
	state: string
}

const ThemeToggle = () => {
	return (
		<ThemeToggleWrapper>
			<h1>ThemeToggle component</h1>
		</ThemeToggleWrapper>
	)
}

export default ThemeToggle
import { ToggleWrapper } from "./Toggle.styled"
import { useTranslation } from "react-i18next"
import SVGIcon from "../../../icons/SVGIcon"

const Toggle = ({ ariaLabel, state, stateChangeFN }: ToggleProps) => {
	const { t } = useTranslation()
	return (
		<ToggleWrapper
			tabIndex={0}
			aria-label={t("resume.menu.theme.change")}
			onClick={() => props.changeTheme()}
			onKeyDown={(e) => e.key === "enter" && props.changeTheme()}
		>
			<SVGIcon size={16} id={props.theme} />
		</ToggleWrapper>
	)
}

export default Toggle
