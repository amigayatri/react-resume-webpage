import { ButtonStyle } from "./Button.styled"
import { SVGIcon } from "../../../../../../../common/"
import { ButtonProps } from "../../../../../types"

export const Button = ({ fn, icon, txt, lng }: ButtonProps) => {
	if (icon === undefined && txt === undefined) return
	return (
		<ButtonStyle
			onKeyDown={(e) => e.key === "Enter" && fn()}
			onClick={() => fn()}
			role="button"
			tabIndex={0}
		>
			{icon !== undefined && (
				<SVGIcon lng={lng} local="leetcode" size={24} id={icon} />
			)}

			{txt !== undefined && txt}
		</ButtonStyle>
	)
}
