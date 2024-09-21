import { Color } from "../../../lib/colors"
import { SimpleColor } from "../../../lib/rgb"
import { ShadeTitle, Wrapper, ShadesWrapper } from "./ShadeSubSection.styled"
import ShadeItem from "../ShadeItem"

interface PropType {
	color: Color
}

const ShadeSubSection = ({ color }: PropType) => {
	const { code } = color
	const variations = Array.from(color.variations.values())
	const showSquare = ({ code, inverse }: SimpleColor) => {
		return (
			<ShadeItem
				key={"base:" + code + "shade:" + code}
				inverse={inverse}
				base={code == code}
				code={code}
			/>
		)
	}

	return (
		<Wrapper>
			<ShadeTitle>{code}</ShadeTitle>
			<ShadesWrapper>
				{variations.map((square: SimpleColor) => showSquare(square))}
			</ShadesWrapper>
		</Wrapper>
	)
}

export default ShadeSubSection
