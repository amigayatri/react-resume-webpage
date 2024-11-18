import { ChangeStepsProps } from "../../../types"
import { Input } from "./ChangeSteps.styled"

export const ChangeSteps = ({
	onChange,
	isActive,
	elementId,
	controller
}: ChangeStepsProps) => {
	if (!isActive) return
	return (
		<Input
			id={elementId}
			onChange={({ target }) => onChange(target.value)}
			min={2}
			max={32}
			defaultValue={controller.steps.get()}
			type="number"
			step={1}
		/>
	)
}
