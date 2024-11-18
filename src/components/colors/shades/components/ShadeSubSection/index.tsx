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
	showSquare,
	showTargetsVariations
} from "../types"

export const ShadeSubSection = ({ color, t }: ShadeSubSectionProps) => {
	const currCode = color.code
	const currInverse = color.palette.inverse
	const variations = Array.from(color.variations.entries())
	const showSquare: showSquare = ({ code, inverse }) => {
		return (
			<ShadeItem
				key={"base:" + code + "shade:" + code}
				inverse={inverse}
				base={currCode === code}
				code={code}
			/>
		)
	}
	const showTargetsVariations: showTargetsVariations = ([
		from,
		currVariations
	]) => {
		const fromSimple = currVariations.get(from)
		if (fromSimple === undefined) return
		const { code, inverse } = fromSimple
		const variationsArr = Array.from(currVariations.values())
		return (
			<TargetWrapper key={`variations-${currCode}-from-${code}-to-${inverse}`}>
				<PairWrapper>
					<ShadeSubtitle>
						<Trans t={t} tOptions={{ colorCode: code }} i18nKey="shades.from">
							t<Code style={{ backgroundColor: code, color: inverse }}>l</Code>t
						</Trans>
					</ShadeSubtitle>
					<ShadeSubtitle>
						<Trans t={t} tOptions={{ colorCode: inverse }} i18nKey="shades.to">
							t<Code style={{ backgroundColor: inverse, color: code }}>l</Code>t
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
					<Code style={{ backgroundColor: currCode, color: currInverse }}>
						l
					</Code>
					t
				</Trans>
			</ShadeTitle>
			{variations.map((targets) => showTargetsVariations(targets))}
		</Wrapper>
	)
}
