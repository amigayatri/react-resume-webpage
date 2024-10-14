import { Color } from "../../../lib/colors"
import { SimpleColor } from "../../../lib/rgb"
import {
	ShadeTitle,
	ShadeSubtitle,
	PairWrapper,
	Wrapper,
	ShadesWrapper
} from "./ShadeSubSection.styled"
import ShadeItem from "../ShadeItem"
import { useTranslation } from "react-i18next"

interface PropType {
	color: Color
}

const ShadeSubSection = ({ color }: PropType) => {
	const { t } = useTranslation()
	const currCode = color.code
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
			<>
				<PairWrapper>
					<ShadeSubtitle>
						{t("colors.shades.from", { colorCode: code })}
					</ShadeSubtitle>
					<ShadeSubtitle>
						{t("colors.shades.to", { colorCode: inverse })}
					</ShadeSubtitle>
				</PairWrapper>
				<ShadeSubtitle></ShadeSubtitle>
				<ShadesWrapper>
					{variationsArr.map((value) => showSquare(value as SimpleColor))}
				</ShadesWrapper>
			</>
		)
	}

	return (
		<Wrapper>
			<ShadeTitle>
				{t("colors.shades.code", { colorCode: currCode })}
			</ShadeTitle>
			{variations.map((targets) => showTargetsVariations(targets))}
		</Wrapper>
	)
}

export default ShadeSubSection
