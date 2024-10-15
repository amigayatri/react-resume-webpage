import Palette from "../../types/PaletteProps"
import PaletteGroup from "../../types/PaletteGroupProps"

const bk: Palette = ["#ec1c24", "#fdbd10", "#0066b2", "#ed7902"]
const cartoonNetwork: Palette = ["#00aeef", "#ed008c", "#fff000", "#000000"]
const cocaCola: Palette = ["#ed1c16", "#ffffff", "#000000"]
const dominos: Palette = ["#0b648f", "#e21737"]
const lego: Palette = ["#f6ec35", "#d11013", "#000000"]
const master: Palette = ["#cc0000", "#ff9900", "#000066"]
const mcdonalds: Palette = ["#bd0017", "#ffc836", "#264f36"]
const nationalGeographic: Palette = ["#ffcc00", "#000000"]
const pepsi: Palette = ["#e32934", "#004883"]
const visa: Palette = ["#1a1f71", "#f7b600"]

const brands: PaletteGroup = new Map([
	["bk", bk],
	["cartoon", cartoonNetwork],
	["coca-cola", cocaCola],
	["dominos", dominos],
	["lego", lego],
	["master", master],
	["mcdonalds", mcdonalds],
	["national geographic", nationalGeographic],
	["pepsi", pepsi],
	["visa", visa]
])

export default brands
