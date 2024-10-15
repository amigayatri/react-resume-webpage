import { Square, Wrapper, HexaCode } from "./ShadeItem.styled"

interface ShadeItemProps {
	inverse: string
	base: boolean
	code: string
}

const ShadeItem = ({ inverse, base, code }: ShadeItemProps) => {
	return (
		<Wrapper>
			<Square
				onClick={() => navigator.clipboard.writeText(code)}
				$base={base}
				$bg={code}
				$inverse={inverse}
			>
				<HexaCode>{code}</HexaCode>
			</Square>
		</Wrapper>
	)
}

export default ShadeItem
