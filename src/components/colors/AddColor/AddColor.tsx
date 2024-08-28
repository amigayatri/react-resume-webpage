import { useTranslation } from "react-i18next"
import {
	Wrapper,
	ButtonWrapper,
	Button,
	InputWrapper,
	ColorSelector,
	ColorTextInput,
	ChangeSteps
} from "./Styles"
import { SectionTitle } from "../Main/Styles"
import { SetStateAction, useState } from "react"

export const AddColor = () => {
	const { t } = useTranslation()
	const [showColorSelector, setShowColorSelector] = useState(false)
	const [showColorTextInput, setShowColorTextInput] = useState(false)
	const [showChangeSteps, setShowChangeSteps] = useState(false)
	const handleShow = (state: boolean, fnSetState: { (value: SetStateAction<boolean>): void; (value: SetStateAction<boolean>): void; (value: SetStateAction<boolean>): void; (arg0: boolean): void }) => {
		fnSetState(state)
	}
	return (
		<Wrapper>
			<SectionTitle>{t("colors.addColor.title")}</SectionTitle>
			<ButtonWrapper>
				<Button
					hidden={(showColorSelector || showChangeSteps)}
					onClick={() => handleShow(!showColorTextInput, setShowColorTextInput)}
				>
					{showColorTextInput
						? t("colors.addColor.buttons.addMany.showing")
						: t("colors.addColor.buttons.addMany.hidden")}
				</Button>
				<Button
					hidden={(showColorTextInput || showChangeSteps)}
					onClick={() => handleShow(!showColorSelector, setShowColorSelector)}
				>
					{showColorSelector
						? t("colors.addColor.buttons.addOne.showing")
						: t("colors.addColor.buttons.addOne.hidden")}
				</Button>
				<Button
					hidden = {(showColorSelector || showColorTextInput)}
					onClick={() => handleShow(!showChangeSteps, setShowChangeSteps)}
				>
					{showColorSelector
						? t("colors.addColor.buttons.changeSteps.showing")
						: t("colors.addColor.buttons.changeSteps.hidden")}
				</Button>
			</ButtonWrapper>
			<InputWrapper>
				{showColorSelector && <ColorSelector defaultValue="#666666" type="color" />}
				{showColorTextInput && <ColorTextInput rows={3}></ColorTextInput>}
				{showChangeSteps && (
					<ChangeSteps min={2} max={32} defaultValue={10} type="number" step={1} />
				)}
			</InputWrapper>
		</Wrapper>
	)
}
