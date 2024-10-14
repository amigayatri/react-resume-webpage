import { useTranslation } from "react-i18next"
import {
	Wrapper,
	ButtonWrapper,
	Button,
	InputWrapper,
	ColorTextInput,
	ChangeSteps,
	TargetWrapper,
	SelectedWrapper,
	SelectedColor,
	SelectedText,
	SelectedButton
} from "./AddColor.styled"
import { SectionTitle } from "../Common.styled"
import { SetStateAction, useState } from "react"
import {
	changeSteps,
	regex,
	variationSteps,
	addTarget
} from "../../../lib/colors"
import { getLangDir } from "rtl-detect"
import { HexColorPicker } from "react-colorful"
import { useTheme } from "styled-components"

const AddColor = ({
	add,
	regenerate
}: {
	add: (arg0: string) => void
	regenerate: () => void
}) => {
	const theme = useTheme()
	const { t, i18n } = useTranslation()
	const [currColor, setCurrColor] = useState("#000000")
	const [showColorSelector, setShowColorSelector] = useState(false)
	const [showColorTextInput, setShowColorTextInput] = useState(false)
	const [showChangeSteps, setShowChangeSteps] = useState(false)
	const [showTargetSelector, setShowTargetSelector] = useState(false)
	const handleShow = (
		state: boolean,
		fnSetState: {
			(value: SetStateAction<boolean>): void
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
				add(colorCode)
			}
		}
	}
	const handleSteps = (newSteps: string) => {
		changeSteps(Number(newSteps))
		regenerate()
	}
	const handleTargets = (newTarget: string) => {
		addTarget(newTarget)
		regenerate()
		setShowTargetSelector(false)
	}
	const isRTL = getLangDir(i18n.language) === "rtl"
	return (
		<Wrapper>
			<SectionTitle>{t("colors.addColor.title")}</SectionTitle>
			<ButtonWrapper $isRTL={isRTL}>
				<Button
					$isRTL={isRTL}
					hidden={showColorTextInput || showChangeSteps || showColorSelector}
					onClick={() => handleShow(!showTargetSelector, setShowTargetSelector)}
				>
					{showTargetSelector
						? t("colors.addColor.buttons.targets.showing")
						: t("colors.addColor.buttons.targets.hidden")}
				</Button>
				<Button
					$isRTL={isRTL}
					hidden={showColorTextInput || showChangeSteps || showTargetSelector}
					onClick={() => handleShow(!showColorSelector, setShowColorSelector)}
				>
					{showColorSelector
						? t("colors.addColor.buttons.addOne.showing")
						: t("colors.addColor.buttons.addOne.hidden")}
				</Button>
				<Button
					$isRTL={isRTL}
					hidden={showColorSelector || showChangeSteps || showTargetSelector}
					onClick={() => handleShow(!showColorTextInput, setShowColorTextInput)}
				>
					{showColorTextInput
						? t("colors.addColor.buttons.addMany.showing")
						: t("colors.addColor.buttons.addMany.hidden")}
				</Button>
				<Button
					$isRTL={isRTL}
					hidden={showColorSelector || showColorTextInput || showTargetSelector}
					onClick={() => handleShow(!showChangeSteps, setShowChangeSteps)}
				>
					{showChangeSteps
						? t("colors.addColor.buttons.changeSteps.showing")
						: t("colors.addColor.buttons.changeSteps.hidden")}
				</Button>
			</ButtonWrapper>
			<InputWrapper>
				{showColorSelector && (
					<HexColorPicker onChange={add} color={theme.accent} />
				)}
				{showTargetSelector && (
					<TargetWrapper>
						<HexColorPicker onChange={setCurrColor} color={currColor} />
						<SelectedWrapper>
							<SelectedText>Cor selecionada</SelectedText>
							<SelectedColor $bg={currColor} />
							<SelectedButton
								onClick={() => handleTargets(currColor)}
								$isRTL={isRTL}
							>
								Adicione
							</SelectedButton>
						</SelectedWrapper>
					</TargetWrapper>
				)}
				{showColorTextInput && (
					<ColorTextInput
						onChange={({ target }) => handleColorList(target.value)}
					></ColorTextInput>
				)}
				{showChangeSteps && (
					<ChangeSteps
						onChange={({ target }) => handleSteps(target.value)}
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
