import { Button } from "../Button"
import { ChangeSteps, ColorInput, ColorText } from "../"
import { InputWrapper, ButtonWrapper, Wrapper } from "./Controller.styled"
import {
	ColorControllerProps,
	tOptionsGenerate,
	InputBase
} from "../../../types"

type printInput = (arg0: InputBase) => JSX.Element | undefined
export const ColorController = ({
	t,
	inputs,
	controller,
	lng,
	active,
	colors,
	handleActive
}: ColorControllerProps) => {
	const lastColorIdx = inputs.length - 1
	const tOptionsGenerate: tOptionsGenerate = (tId) => {
		return {
			tId,
			suffix: {
				true: "showing",
				false: "hidden"
			},
			prefix: "addColor.buttons"
		}
	}
	const printInput: printInput = (rawInput) => {
		const { type, id, input } = rawInput
		const { onChange, defaultValue } = input
		const key = `add-color-input-${type}-${id}`
		const props = {
			t,
			lng,
			onChange,
			elementId: key,
			isActive: id === active
		}
		if (type === "color") {
			return (
				<ColorInput
					key={key}
					{...props}
					colorFunction={id === "target" || id === "color" ? id : "color"}
					isActive={id === active}
					defaultValue={
						typeof defaultValue !== "string" ? "#000000" : defaultValue
					}
				/>
			)
		} else if (type === "steps") {
			return (
				<ChangeSteps
					{...props}
					key={key}
					isActive={id === active}
					controller={controller}
					defaultValue={""}
				/>
			)
		} else if (type === "text") {
			return (
				<ColorText
					{...props}
					key={key}
					isActive={id === active}
					defaultValue={defaultValue || ""}
				/>
			)
		}
	}

	return (
		<Wrapper>
			<ButtonWrapper>
				{inputs.map(({ id, button }, idx) => {
					return (
						<Button
							color={colors[lastColorIdx - idx]}
							key={"add-color-button-" + id}
							t={t}
							onClick={handleActive}
							id={id}
							active={active}
							lng={lng}
							tKey={tOptionsGenerate(button.tId)}
						/>
					)
				})}
			</ButtonWrapper>
			<InputWrapper>{inputs.map(printInput)}</InputWrapper>
		</Wrapper>
	)
}
