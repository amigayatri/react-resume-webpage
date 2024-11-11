import { Square, Wrapper, HexaCode } from "./ShadeItem.styled"

interface ShadeItemProps {
	inverse: string
	base: boolean
	code: string
}

export const ShadeItem = ({ inverse, base, code }: ShadeItemProps) => {
	return (
		<Wrapper>
			<Square
				onClick={() => navigator.clipboard.writeText(code)}
				$base={base}
				style={{ backgroundColor: code, borderColor: inverse }}
			>
				<HexaCode style={{ color: inverse }}>{code}</HexaCode>
			</Square>
		</Wrapper>
	)
}
