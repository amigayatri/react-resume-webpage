import { useTranslation } from "react-i18next"
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
	changeSteps,
	regex,
	variationSteps,
	addTarget
} from "../../../lib/colors"
import { getLangDir } from "rtl-detect"
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
	const [currColor, setCurrColor] = useState(theme.accent)
	const [currTarget, setCurrTarget] = useState("#000000")
	const [active, setActive] = useState("")
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
	const isRTL = getLangDir(i18n.language) === "rtl"
	return (
		<Wrapper>
			<SectionTitle>{t("colors.addColor.title")}</SectionTitle>
			<ButtonWrapper $isRTL={isRTL}>
				<Button
					$isRTL={isRTL}
					$isActive={active === "target" || active === ""}
					onClick={() => handleChangeActive("target")}
				>
					{active === "target"
						? t("colors.addColor.buttons.targets.showing")
						: t("colors.addColor.buttons.targets.hidden")}
				</Button>
				<Button
					$isRTL={isRTL}
					$isActive={active === "color" || active === ""}
					onClick={() => handleChangeActive("color")}
				>
					{active === "color"
						? t("colors.addColor.buttons.addOne.showing")
						: t("colors.addColor.buttons.addOne.hidden")}
				</Button>
				<Button
					$isRTL={isRTL}
					$isActive={active === "text" || active === ""}
					onClick={() => handleChangeActive("text")}
				>
					{active === "text"
						? t("colors.addColor.buttons.addMany.showing")
						: t("colors.addColor.buttons.addMany.hidden")}
				</Button>
				<Button
					$isRTL={isRTL}
					$isActive={active === "steps" || active === ""}
					onClick={() => handleChangeActive("steps")}
				>
					{active === "steps"
						? t("colors.addColor.buttons.changeSteps.showing")
						: t("colors.addColor.buttons.changeSteps.hidden")}
				</Button>
			</ButtonWrapper>
			<InputWrapper>
				{active === "color" && (
					<TargetWrapper $isRTL={isRTL}>
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
								$isRTL={isRTL}
							>
								Adicione
							</SelectedButton>
						</SelectedWrapper>
					</TargetWrapper>
				)}
				{active === "target" && (
					<TargetWrapper $isRTL={isRTL}>
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
								$isRTL={isRTL}
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
