import { brandKey } from "./brands"
import { mediaKey } from "./media"
import { rainbowKey } from "./rainbow"
import { themeKey } from "./themes"
import { placeKey } from "./places"
import { schemeKey } from "./schemes"
import { techKey } from "./tech"
import { iconKey } from "../../../types/common"

export const groupKeys = [
	"brands",
	"famous media",
	"rainbow",
	"theme",
	"places",
	"schemes",
	"tech"
] as const

export type groupKey = (typeof groupKeys)[number]

export type SafePalettePairs =
	| ["brands", brandKey]
	| ["famous media", mediaKey]
	| ["rainbow", rainbowKey]
	| ["theme", themeKey]
	| ["places", placeKey]
	| ["schemes", schemeKey]
	| ["tech", techKey]

export type paletteKey =
	| brandKey
	| placeKey
	| mediaKey
	| rainbowKey
	| themeKey
	| schemeKey
	| techKey

export type { iconKey }
