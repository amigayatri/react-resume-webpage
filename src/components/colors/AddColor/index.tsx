import { useTranslation } from "react-i18next"
import {
	Wrapper,
	ButtonWrapper,
	Button,
	InputWrapper,
	ColorSelector,
	ColorTextInput,
	ChangeSteps
} from "./AddColor.styled"
import { SectionTitle } from "../Common.styled"
import { SetStateAction, useState } from "react"
import { changeSteps, regex, variationSteps } from "../../../lib/colors"

const AddColor = (props: {
	add: (arg0: string) => void
	regenerate: () => void
}) => {
	const { t } = useTranslation()
	const [showColorSelector, setShowColorSelector] = useState(false)
	const [showColorTextInput, setShowColorTextInput] = useState(false)
	const [showChangeSteps, setShowChangeSteps] = useState(false)
	const handleShow = (
		state: boolean,
		fnSetState: {
			(value: SetStateAction<boolean>): void
			(value: SetStateAction<boolean>): void
			(value: SetStateAction<boolean>): void
			(arg0: boolean): void
		}
	) => {
		fnSetState(state)
	}
	const handleColorList = (list: string) => {
		const toAdd = list.toUpperCase().split(" ")
		for (const colorCode of toAdd) {
			if (regex.test(colorCode)) {
				props.add(colorCode)
			}
		}
	}
	const handleSteps = (newSteps: string) => {
		changeSteps(Number(newSteps))
		props.regenerate()
	}
	return (
		<Wrapper>
			<SectionTitle>{t("colors.addColor.title")}</SectionTitle>
			<ButtonWrapper>
				<Button
					hidden={showColorTextInput || showChangeSteps}
					onClick={() => handleShow(!showColorSelector, setShowColorSelector)}
				>
					{showColorSelector
						? t("colors.addColor.buttons.addOne.showing")
						: t("colors.addColor.buttons.addOne.hidden")}
				</Button>
				<Button
					hidden={showColorSelector || showChangeSteps}
					onClick={() => handleShow(!showColorTextInput, setShowColorTextInput)}
				>
					{showColorTextInput
						? t("colors.addColor.buttons.addMany.showing")
						: t("colors.addColor.buttons.addMany.hidden")}
				</Button>
				<Button
					hidden={showColorSelector || showColorTextInput}
					onClick={() => handleShow(!showChangeSteps, setShowChangeSteps)}
				>
					{showChangeSteps
						? t("colors.addColor.buttons.changeSteps.showing")
						: t("colors.addColor.buttons.changeSteps.hidden")}
				</Button>
			</ButtonWrapper>
			<InputWrapper>
				{showColorSelector && (
					<ColorSelector
						onChange={(e) => props.add(e.target.value)}
						defaultValue="#666666"
						type="color"
					/>
				)}
				{showColorTextInput && (
					<ColorTextInput
						onChange={(e) => handleColorList(e.target.value)}
					></ColorTextInput>
				)}
				{showChangeSteps && (
					<ChangeSteps
						onChange={(e) => handleSteps(e.target.value)}
						min={2}
						max={32}
						defaultValue={variationSteps}
						type="number"
						step={1}
					/>
				)}
			</InputWrapper>
		</Wrapper>
	)
}
export default AddColor
