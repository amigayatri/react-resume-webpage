import { InputProps } from "../../../types"
import { Input } from "./ColorText.styled"

export const ColorText = ({ onChange, isActive, elementId }: InputProps) => {
	if (!isActive) return
	return (
		<Input
			id={elementId}
			onChange={({ target }) => onChange(target.value)}
		></Input>
	)
}
