import { brandKey } from "./brands"
import { mediaKey } from "./media"
import { rainbowKey } from "./rainbow"
import { themeKey } from "./themes"
import { placeKey } from "./places"
import { schemeKey } from "./schemes"
import { techKey } from "./tech"
import { groupKey } from "."
import { iconKey } from "../../../types/common"

export type paletteKey =
	| brandKey
	| placeKey
	| mediaKey
	| rainbowKey
	| themeKey
	| schemeKey
	| techKey
export type { groupKey, iconKey }
