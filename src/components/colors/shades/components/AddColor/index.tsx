import { Wrapper, SectionWrapper } from "./AddColor.styled"
import { SectionTitle } from "../Common.styled"
import { useState } from "react"
import { AddColorProps, handleChange } from "../types"
import {
	ColorController,
	generateInputsArr,
	rawInputs,
	Hero
} from "./components"

const [stepsId] = rawInputs.steps

export const AddColor = ({
	add,
	regenerate,
	t,
	controller,
	titleColor,
	colors,
	lng
}: AddColorProps) => {
	const [active, setActive] = useState("")
	const handleColorList: handleChange = (list) => {
		const toAdd = list.toUpperCase().split(" ")
		for (const colorCode of toAdd) {
			add(colorCode)
		}
	}
	const handleSteps: handleChange = (newSteps) => {
		controller.steps.set(Number(newSteps))
		regenerate()
	}
	const handleTargets: handleChange = (newTarget) => {
		controller.targets.add(newTarget)
		regenerate()
		setActive("")
	}
	const handleColor: handleChange = (newColor) => {
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
			<Hero
				setActive={[stepsId, handleChangeActive]}
				lng={lng}
				t={t}
				steps={controller.steps.get()}
			/>
			<SectionWrapper>
				<SectionTitle style={{ color: titleColor }}>
					{t("addColor.title")}
				</SectionTitle>
				<ColorController
					colors={colors}
					inputs={[
						generateInputsArr(rawInputs.target, handleTargets, titleColor),
						generateInputsArr(rawInputs.color, handleColor, titleColor),
						generateInputsArr(rawInputs.multiple, handleColorList),
						generateInputsArr(rawInputs.steps, handleSteps)
					]}
					t={t}
					lng={lng}
					active={active}
					handleActive={handleChangeActive}
					controller={controller}
				/>
			</SectionWrapper>
		</Wrapper>
	)
}
export default AddColor
