interface ToggleIconProps {
	id: string
	trueValAsStr: string
	shouldChange: boolean
	options: {
		true: string
		false: string
	}
}

export default interface ToggleProps {
	state: unknown
	stateChangeFN: () => void
	ariaLabel: string
	icon: ToggleIconProps
}
