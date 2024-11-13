import { PaletteInfoProps } from "../../../types/palette/"
import { ElementProps } from "../../../types/common/"
import { MulticoloredNameBase } from "./MulticoloredNameBase"

export interface MulticoloredNameProps extends ElementProps {
	info: PaletteInfoProps
	local: string
	legible: boolean
	legibleTextColors?: boolean
	children: string | string[]
	isCustom?: boolean
	customColors?: string[]
	iconId?: string
	isReverse?: boolean
	colorfulIcon?: boolean
	fontSize: number
}

export const MulticoloredName = async (props: MulticoloredNameProps) => {
	return <MulticoloredNameBase {...props} />
}
