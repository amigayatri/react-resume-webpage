import {
	ShadeTitle,
	ShadeSubtitle,
	PairWrapper,
	Wrapper,
	ShadesWrapper,
	TargetWrapper,
	Code
} from "./ShadeSubSection.styled"
import { ShadeItem } from "../ShadeItem"
import { Trans } from "react-i18next/TransWithoutContext"
import {
	ShadeSubSectionProps,
	showSquareType,
	showTargetsVariationsType
} from "../types"

export const ShadeSubSection = ({ color, t }: ShadeSubSectionProps) => {
	const currCode = color.code
	const currInverse = color.palette.inverse
	const variations = Array.from(color.variations.entries())
	const showSquare: showSquareType = ({ code, inverse }) => {
		return (
			<ShadeItem
				key={"base:" + code + "shade:" + code}
				inverse={inverse}
				base={currCode === code}
				code={code}
			/>
		)
	}
	const showTargetsVariations: showTargetsVariationsType = ([
		from,
		currVariations
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
						<Trans t={t} tOptions={{ colorCode: code }} i18nKey="shades.from">
							t
							<Code $color={code} $inverse={inverse}>
								l
							</Code>
							t
						</Trans>
					</ShadeSubtitle>
					<ShadeSubtitle>
						<Trans t={t} tOptions={{ colorCode: inverse }} i18nKey="shades.to">
							t
							<Code $color={inverse} $inverse={code}>
								l
							</Code>
							t
						</Trans>
					</ShadeSubtitle>
				</PairWrapper>
				<ShadesWrapper>
					{variationsArr.map((value) => showSquare(value))}
				</ShadesWrapper>
			</TargetWrapper>
		)
	}

	return (
		<Wrapper>
			<ShadeTitle>
				<Trans t={t} tOptions={{ colorCode: currCode }} i18nKey="shades.code">
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
