import Element from "./ElementProps"

interface ToggleIconProps {
	id: string
	trueValAsStr: string
	shouldChange: boolean
	options: {
		true: string
		false: string
	}
}

export interface ToggleProps extends Element {
	state: unknown
	stateChangeFN: () => void
	ariaLabel: string
	icon: ToggleIconProps
}
