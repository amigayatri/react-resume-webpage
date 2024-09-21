import { ToggleWrapper } from "./Toggle.styled"
import { useTranslation } from "react-i18next"
import SVGIcon from "../../../icons/SVGIcon"

interface ToggleProps {
	changeTheme: () => void
	theme: string
}

const Toggle = (props: ToggleProps) => {
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
