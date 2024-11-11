import Palette from "../../types/palette/PaletteProps"
import PaletteGroup from "../../types/palette/PaletteGroupProps"

export const bk: Palette = {
	icon: "burger",
	colors: ["#ec1c24", "#fdbd10", "#0066b2", "#ed7902"]
}
export const cartoonNetwork: Palette = {
	icon: "megaphone",
	colors: ["#00aeef", "#ed008c", "#fff000", "#000000"]
}

export const cocaCola: Palette = {
	icon: "drink",
	colors: ["#ed1c16", "#ffffff", "#000000"]
}
export const dominos: Palette = {
	icon: "pizza",
	colors: ["#0b648f", "#e21737"]
}
export const lego: Palette = {
	icon: "toybrick",
	colors: ["#f6ec35", "#d11013", "#000000"]
}
export const master: Palette = {
	icon: "bankcard",
	colors: ["#cc0000", "#ff9900", "#000066"]
}
export const mcdonalds: Palette = {
	icon: "mcdonalds",
	colors: ["#bd0017", "#ffc836", "#264f36"]
}
export const nationalGeographic: Palette = {
	icon: "magazine",
	colors: ["#ffcc00", "#000000"]
}
export const pepsi: Palette = {
	icon: "drink",
	colors: ["#e32934", "#004883"]
}
export const visa: Palette = {
	icon: "bankcard",
	colors: ["#1a1f71", "#f7b600"]
}

export const brands: PaletteGroup = new Map([
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
