import PaletteGroupProps from "../types/PaletteGroupProps"
import rainbow from "./palettesGroup/rainbow"
import media from "./palettesGroup/media"
import themes from "./palettesGroup/theme"
import brands from "./palettesGroup/brands"
import places from "./palettesGroup/places"
import tech from "./palettesGroup/tech"
import schemes from "./palettesGroup/schemes"

const palettesMap: Map<string, PaletteGroupProps> = new Map([
	["theme", themes],
	["rainbow", rainbow],
	["famous media", media],
	["brands", brands],
	["places", places],
	["tech", tech],
	["schemes", schemes]
])
export default palettesMap
