import {
	Wrapper,
	ButtonWrapper,
	Button,
	InputWrapper,
	ColorTextInput,
	HexInput,
	ColorPicker,
	ColorInput,
	ChangeSteps,
	TargetWrapper,
	SelectedWrapper,
	SelectedColor,
	SelectedText,
	SelectedButton
} from "./AddColor.styled"
import { SectionTitle } from "../Common.styled"
import { useState } from "react"
import {
	getSteps,
	setSteps,
	addTarget,
	isHex
} from "../../../../../lib/colors/"
import { useTheme } from "styled-components"
import { AddColorProps } from "../types"

export const AddColor = ({ add, regenerate, t }: AddColorProps) => {
	const theme = useTheme()
	const [currColor, setCurrColor] = useState(theme.accent)
	const [currTarget, setCurrTarget] = useState("#000000")
	const [active, setActive] = useState("")
	const handleColorList = (list: string) => {
		const toAdd = list.toUpperCase().split(" ")
		for (const colorCode of toAdd) {
			if (isHex(colorCode)) {
				add(colorCode)
			}
		}
	}
	const handleSteps = (newSteps: string) => {
		setSteps(Number(newSteps))
		regenerate()
	}
	const handleTargets = (newTarget: string) => {
		addTarget(newTarget)
		regenerate()
		setActive("")
	}
	const handleColor = (newColor: string) => {
		add(newColor)
		regenerate()
		setActive("")
	}
	const handleChangeActive = (nowActive: string) => {
		if (active === nowActive) {
			setActive("")
		} else {
			setActive(nowActive)
		}
	}
	return (
		<Wrapper>
			<SectionTitle>{t("addColor.title")}</SectionTitle>
			<ButtonWrapper>
				<Button
					$isActive={active === "target" || active === ""}
					onClick={() => handleChangeActive("target")}
				>
					{active === "target"
						? t("addColor.buttons.targets.showing")
						: t("addColor.buttons.targets.hidden")}
				</Button>
				<Button
					$isActive={active === "color" || active === ""}
					onClick={() => handleChangeActive("color")}
				>
					{active === "color"
						? t("addColor.buttons.addOne.showing")
						: t("addColor.buttons.addOne.hidden")}
				</Button>
				<Button
					$isActive={active === "text" || active === ""}
					onClick={() => handleChangeActive("text")}
				>
					{active === "text"
						? t("addColor.buttons.addMany.showing")
						: t("addColor.buttons.addMany.hidden")}
				</Button>
				<Button
					$isActive={active === "steps" || active === ""}
					onClick={() => handleChangeActive("steps")}
				>
					{active === "steps"
						? t("addColor.buttons.changeSteps.showing")
						: t("addColor.buttons.changeSteps.hidden")}
				</Button>
			</ButtonWrapper>
			<InputWrapper>
				{active === "color" && (
					<TargetWrapper>
						<ColorInput>
							<HexInput onChange={setCurrColor} color={currColor} />
							<ColorPicker onChange={setCurrColor} color={currColor} />
						</ColorInput>
						<SelectedWrapper>
							<SelectedText>Cor selecionada</SelectedText>
							<SelectedColor $bg={currColor} />
							<SelectedButton
								$isActive={true}
								onClick={() => handleColor(currColor)}
							>
								Adicione
							</SelectedButton>
						</SelectedWrapper>
					</TargetWrapper>
				)}
				{active === "target" && (
					<TargetWrapper>
						<ColorInput>
							<HexInput onChange={setCurrTarget} color={currTarget} />
							<ColorPicker onChange={setCurrTarget} color={currTarget} />
						</ColorInput>
						<SelectedWrapper>
							<SelectedText>Cor selecionada</SelectedText>
							<SelectedColor $bg={currTarget} />
							<SelectedButton
								$isActive={true}
								onClick={() => handleTargets(currTarget)}
							>
								Adicione
							</SelectedButton>
						</SelectedWrapper>
					</TargetWrapper>
				)}
				{active === "text" && (
					<ColorTextInput
						onChange={({ target }) => handleColorList(target.value)}
					></ColorTextInput>
				)}
				{active === "steps" && (
					<ChangeSteps
						onChange={({ target }) => handleSteps(target.value)}
						min={2}
						max={32}
						defaultValue={getSteps()}
						type="number"
						step={1}
					/>
				)}
			</InputWrapper>
		</Wrapper>
	)
}
export default AddColor
