import { handleChange, InputBase, inputType } from "../../types"

type rawInput = [
	string, //id
	inputType, //type
	string //tId
]
type generateInputsArr = (
	arg0: rawInput,
	arg1: handleChange,
	arg2?: string
) => InputBase
export const generateInputsArr: generateInputsArr = (
	[id, type, tId],
	onChange,
	defaultValue
) => {
	return {
		id,
		type,
		button: {
			tId
		},
		input: {
			onChange,
			defaultValue
		}
	}
}
const target: rawInput = ["target", "color", "targets"]
const color: rawInput = ["color", "color", "addOne"]
const multiple: rawInput = ["multiple", "text", "addMany"]
const steps: rawInput = ["steps", "steps", "changeSteps"]
export const rawInputs = { target, color, multiple, steps }
