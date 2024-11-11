import { ColorTag, Wrapper } from "./ColorItem.styled"

export const ColorItem = (props: {
	color: { code: string; inverse: string }
	remove: (code: string) => void
}) => {
	const { code, inverse } = props.color
	return (
		<Wrapper $inverse={code} $code={inverse} onClick={() => props.remove(code)}>
			<ColorTag>{code}</ColorTag>
		</Wrapper>
	)
}
