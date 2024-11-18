import { useState } from "react"
import { InputProps, colorFunction } from "../../../types"
import {
	TargetWrapper,
	ColorInputWrapper,
	SelectedButton,
	HexInput,
	ColorPicker,
	SelectedColor,
	SelectedText,
	SelectedWrapper
} from "./ColorInput.styled"

interface ColorInputProps extends InputProps {
	colorFunction: colorFunction
	defaultValue: string
}

export const ColorInput = ({
	isActive,
	colorFunction,
	onChange,
	defaultValue,
	elementId,
	t
}: ColorInputProps) => {
	if (!isActive || typeof defaultValue === "number") return
	const [currColor, setCurrColor] = useState(defaultValue)
	const tPreffix = "addColor.colorInput"
	const tOptions = { colorFunction: t(`${tPreffix}.as.${colorFunction}`) }
	return (
		<TargetWrapper id={elementId}>
			<ColorInputWrapper>
				<HexInput onChange={setCurrColor} color={currColor} />
				<ColorPicker onChange={setCurrColor} color={currColor} />
			</ColorInputWrapper>
			<SelectedWrapper>
				<SelectedText>{t(`${tPreffix}.selected`)}</SelectedText>
				<SelectedColor $bg={currColor} />
				<SelectedButton $isActive={true} onClick={() => onChange(currColor)}>
					{t(`${tPreffix}.add`, tOptions)}
				</SelectedButton>
			</SelectedWrapper>
		</TargetWrapper>
	)
}
