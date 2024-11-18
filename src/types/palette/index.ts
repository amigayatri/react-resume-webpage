import { paletteKey, groupKey } from "../../lib/palettes/maps/types"
import { iconKey } from "../common"
export type { paletteKey, groupKey }

export interface PaletteInfoProps {
	name: paletteKey
	group: groupKey
}

export interface PaletteProps extends PaletteInfoProps {
	icon: iconKey
	colors: Array<string>
}

export type groupMap = Map<paletteKey, PaletteProps>
