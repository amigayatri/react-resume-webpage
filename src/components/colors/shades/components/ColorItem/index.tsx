import { ColorTag, Wrapper } from "./ColorItem.styled"
import { ColorItemProps } from "../types"

export const ColorItem = ({ color, remove }: ColorItemProps) => {
	const { code, inverse } = color
	return (
		<Wrapper
			style={{ backgroundColor: code, color: inverse }}
			onClick={() => remove(code)}
		>
			<ColorTag>{code}</ColorTag>
		</Wrapper>
	)
}
