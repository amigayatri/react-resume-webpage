import { Square, Wrapper, HexaCode } from "./ShadeItem.styled"

interface PropsType {
	inverse: string
	base: boolean
	code: string
}

const ShadeItem = (props: PropsType) => {
	return (
		<Wrapper>
			<Square
				onClick={() => navigator.clipboard.writeText(props.code)}
				$base={props.base}
				$bg={props.code}
				$inverse={props.inverse}
			>
				<HexaCode>{props.code}</HexaCode>
			</Square>
		</Wrapper>
	)
}

export default ShadeItem
