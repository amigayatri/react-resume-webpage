import { Color } from "../../../lib/colors"
import { SimpleColor } from "../../../lib/rgb"
import {
	ShadeTitle,
	ShadeSubtitle,
	PairWrapper,
	Wrapper,
	ShadesWrapper,
	TargetWrapper,
	Code
} from "./ShadeSubSection.styled"
import ShadeItem from "../ShadeItem"
import { Trans } from "react-i18next"

interface PropType {
	color: Color
}

const ShadeSubSection = ({ color }: PropType) => {
	const currCode = color.code
	const currInverse = color.palette.inverse
	const variations = Array.from(color.variations.entries())
	const showSquare = ({ code, inverse }: SimpleColor) => {
		return (
			<ShadeItem
				key={"base:" + code + "shade:" + code}
				inverse={inverse}
				base={currCode === code}
				code={code}
			/>
		)
	}
	const showTargetsVariations = ([from, currVariations]: [
		string,
		Map<string, SimpleColor>
	]) => {
		const { code, inverse } = currVariations.get(from) || {
			code: "",
			inverse: ""
		}
		const variationsArr = Array.from(currVariations.values())
		return (
			<TargetWrapper key={`variations-${currCode}-from-${code}-to-${inverse}`}>
				<PairWrapper>
					<ShadeSubtitle>
						<Trans tOptions={{ colorCode: code }} i18nKey="colors.shades.from">
							t
							<Code $color={code} $inverse={inverse}>
								l
							</Code>
							t
						</Trans>
					</ShadeSubtitle>
					<ShadeSubtitle>
						<Trans tOptions={{ colorCode: inverse }} i18nKey="colors.shades.to">
							t
							<Code $color={inverse} $inverse={code}>
								l
							</Code>
							t
						</Trans>
					</ShadeSubtitle>
				</PairWrapper>
				<ShadesWrapper>
					{variationsArr.map((value) => showSquare(value as SimpleColor))}
				</ShadesWrapper>
			</TargetWrapper>
		)
	}

	return (
		<Wrapper>
			<ShadeTitle>
				<Trans tOptions={{ colorCode: currCode }} i18nKey="colors.shades.code">
					t
					<Code $color={currCode} $inverse={currInverse}>
						l
					</Code>
					t
				</Trans>
			</ShadeTitle>
			{variations.map((targets) => showTargetsVariations(targets))}
		</Wrapper>
	)
}

export default ShadeSubSection
