import PaletteGroup from "../types/palette/PaletteGroupProps"
import { brands } from "./palettes/brands"
import { media } from "./palettes/media"
import { places } from "./palettes/places"
import { schemes } from "./palettes/schemes"
import { tech } from "./palettes/tech"
import { rainbow } from "./palettes/rainbow"
import { themes } from "./palettes/themes"

export const palettesMap: Map<string, PaletteGroup> = new Map([
	["theme", themes],
	["rainbow", rainbow],
	["famous media", media],
	["brands", brands],
	["places", places],
	["tech", tech],
	["schemes", schemes]
])
export default palettesMap
