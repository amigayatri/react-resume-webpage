import { ToggleWrapper, IconWrapper } from "./Styles"
import { SunIcon, MoonIcon } from "./Icons"
import { useTranslation } from "react-i18next";

interface ToggleProps {
	changeTheme: () => void
	theme: string
}

export const Toggle = (props: ToggleProps) => {
	const { t } = useTranslation()

	return (
		<ToggleWrapper
			tabIndex={0}
			aria-label={t("resume.menu.theme.change")}
			onClick={() => props.changeTheme()}
			onKeyDown={(e) => e.key === "enter" && props.changeTheme()}
		>
			<IconWrapper className={props.theme === "light" ? "light " : ""}>
				{props.theme === "dark" && <MoonIcon />}
				{props.theme === "light" && <SunIcon />}
			</IconWrapper>
		</ToggleWrapper>
	)
}
