import { PaletteProps, PaletteGroupProps } from "../../types/palette/"

export const bk: PaletteProps = {
	icon: "burger",
	colors: ["#ec1c24", "#fdbd10", "#0066b2", "#ed7902"]
}
export const cartoonNetwork: PaletteProps = {
	icon: "megaphone",
	colors: ["#00aeef", "#ed008c", "#fff000", "#000000"]
}

export const cocaCola: PaletteProps = {
	icon: "drink",
	colors: ["#ed1c16", "#ffffff", "#000000"]
}
export const dominos: PaletteProps = {
	icon: "pizza",
	colors: ["#0b648f", "#e21737"]
}
export const lego: PaletteProps = {
	icon: "toybrick",
	colors: ["#f6ec35", "#d11013", "#000000"]
}
export const master: PaletteProps = {
	icon: "bankcard",
	colors: ["#cc0000", "#ff9900", "#000066"]
}
export const mcdonalds: PaletteProps = {
	icon: "mcdonalds",
	colors: ["#bd0017", "#ffc836", "#264f36"]
}
export const nationalGeographic: PaletteProps = {
	icon: "magazine",
	colors: ["#ffcc00", "#000000"]
}
export const pepsi: PaletteProps = {
	icon: "drink",
	colors: ["#e32934", "#004883"]
}
export const visa: PaletteProps = {
	icon: "bankcard",
	colors: ["#1a1f71", "#f7b600"]
}

export const brands: PaletteGroupProps = new Map([
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
