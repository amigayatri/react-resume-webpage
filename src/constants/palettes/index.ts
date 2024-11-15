import { PaletteGroupProps } from "../../types/palette/"
import { brands } from "./brands"
import { media } from "./media"
import { places } from "./places"
import { schemes } from "./schemes"
import { tech } from "./tech"
import { rainbow } from "./rainbow"
import { themes } from "./themes"

export const palettesMap: Map<string, PaletteGroupProps> = new Map([
	["theme", themes],
	["rainbow", rainbow],
	["famous media", media],
	["brands", brands],
	["places", places],
	["tech", tech],
	["schemes", schemes]
])

export const groupIcons: Map<string, string> = new Map([
	["theme", "website"],
	["rainbow", "rainbow"],
	["famous media", "clapperboard"],
	["brands", "megaphone"],
	["places", "mappin"],
	["tech", "computer"],
	["schemes", "palette"]
])

export default palettesMap
