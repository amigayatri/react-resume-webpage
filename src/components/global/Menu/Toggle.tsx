import { ToggleWrapper } from "./Styles"
import { useTranslation } from "react-i18next";
import { SVGIcon } from "../SVGIcon/SVGIcon";

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
			<SVGIcon size={16} id={props.theme} />
		</ToggleWrapper>
	)
}
