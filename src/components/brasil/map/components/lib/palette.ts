import { getPalette } from "../../../../../lib/palettes"
import { PaletteInfoProps } from "../../../../../types/palette"

interface PaletteInfo extends PaletteInfoProps {
	colors: string[]
}

export type paletteType = PaletteInfo

type getPaletteInfo = (info: PaletteInfoProps) => PaletteInfo
export const getPaletteInfo: getPaletteInfo = (info) => {
	const {group, name} = info
	const emptyColors: string[] = []
	return {
		group, name, colors: getPalette(group, name)?.colors || emptyColors
	}
}

export type { PaletteInfoProps }
