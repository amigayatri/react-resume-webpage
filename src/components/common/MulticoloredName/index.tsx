import PaletteInfo from "../../../types/palette/PaletteInfoProps"
import Element from "../../../types/common/ElementProps"
import { MulticoloredNameBase } from "./MulticoloredNameBase"

export interface MulticoloredNameProps extends Element {
	info: PaletteInfo
	local: string
	legible: boolean
	legibleTextColors?: boolean
	children: string | string[]
	isCustom?: boolean
	customColors?: string[]
	iconId?: string
	fontSize: number
}

export const MulticoloredName = async (props: MulticoloredNameProps) => {
	return <MulticoloredNameBase {...props} />
}