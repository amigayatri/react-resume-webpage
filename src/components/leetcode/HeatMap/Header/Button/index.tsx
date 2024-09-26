import { ButtonStyle } from "./Button.styled"
import SVGIcon from "../../../../../icons/SVGIcon"

interface ButtonProps {
	fn: () => void
	txt?: string
	icon?: string
}

const Button = ({ fn, icon, txt }: ButtonProps) => {
	if (icon === undefined && txt === undefined) return
	return (
		<ButtonStyle
			onKeyDown={(e) => e.key === "Enter" && fn()}
			onClick={() => fn()}
			role="button"
			tabIndex={0}
		>
			{icon !== undefined && <SVGIcon size={24} id={icon} />}

			{txt !== undefined && txt}
		</ButtonStyle>
	)
}

export default Button
