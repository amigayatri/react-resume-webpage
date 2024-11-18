import { ButtonProps } from "../../../types"
import { ButtonTag } from "./ColorButton.styled"

export const Button = ({
	onClick,
	id,
	active,
	t,
	tKey,
	color
}: ButtonProps) => {
	const isActive = () => id === active
	const getKey = () => {
		const { suffix, prefix, tId } = tKey
		const key = isActive() ? "true" : "false"
		return `${prefix}.${tId}.${suffix[key]}`
	}
	return (
		<ButtonTag
			style={{ backgroundColor: color }}
			$isActive={isActive() || active === ""}
			onClick={() => onClick(id)}
		>
			{t(getKey())}
		</ButtonTag>
	)
}
