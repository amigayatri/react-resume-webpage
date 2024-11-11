import { useTheme } from "styled-components"
import {
	VisualDescriptionWrapper,
	KeyWrapper
} from "./VisualDescription.styled"
import BaseElement from "../../../types/common/BaseElementProps.ts"
import { TFunction } from "i18next"

interface VisualDescriptionProps extends BaseElement {
	t: TFunction<any, undefined>
}

export const VisualDescription = ({ t }: VisualDescriptionProps) => {
	const theme = useTheme()
	const keys = [
		["weekends", theme.orange],
		["extended", theme.pink],
		["midweek", theme.blue]
	]
	return (
		<VisualDescriptionWrapper>
			{keys.map(([key, color]) => (
				<KeyWrapper
					style={{ backgroundColor: color }}
					key={"description-key-" + key}
				>
					{t(`description.${key}`)}
				</KeyWrapper>
			))}
		</VisualDescriptionWrapper>
	)
}
