import { PaletteSelectBaseProps } from "./"
import { ByGroup, HideShowing, Plain } from "./types/"

const types = new Map([
	["hide-showing", HideShowing],
	["plain", Plain],
	["by-group", ByGroup]
])

export const PaletteSelectBase = (props: PaletteSelectBaseProps) => {
	const { type } = props
	const Select = types.get(type)
	if (Select === undefined) return
	return <Select {...props} />
}
