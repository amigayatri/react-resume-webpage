import Element from "../app/types/ElementProps"

interface ToggleIconProps {
	id: string
	trueValAsStr: string
	shouldChange: boolean
	options: {
		true: string
		false: string
	}
}

export default interface ToggleProps extends Element {
	state: unknown
	stateChangeFN: () => void
	ariaLabel: string
	icon: ToggleIconProps
}
