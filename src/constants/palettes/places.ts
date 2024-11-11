import Palette from "../../types/palette/PaletteProps"
import PaletteGroup from "../../types/palette/PaletteGroupProps"

export const lebanon: Palette = {
	icon: "cedar",
	colors: ["#ED1C24", "#FFFFFF", "#00A651"]
}
export const syria: Palette = {
	icon: "star",
	colors: ["#CE1126", "#FFFFFF", "#007A3D", "#000000"]
}
export const mexico: Palette = {
	icon: "icecream",
	colors: ["#006341", "#FFFFFF", "#C8102E"]
}
export const uruguay: Palette = {
	icon: "mappin",
	colors: ["#001489", "#FFFFFF", "#FFCD00", "#7B3F00"]
}
export const ecuador: Palette = {
	icon: "mappin",
	colors: ["#FFD100", "#0072CE", "#EF3340"]
}
export const jamaica: Palette = {
	icon: "mappin",
	colors: ["#009B3A", "#FED100", "#000000"]
}
export const southAfrica: Palette = {
	icon: "mappin",
	colors: ["#E03C31", "#FFFFFF", "#007749", "#001489", "#FFB81C", "#000000"]
}
export const greece: Palette = {
	icon: "mappin",
	colors: ["#001489", "#FFFFFF"]
}
export const brasil: Palette = {
	icon: "brasil",
	colors: ["#009739", "#FEDD00", "#FFFFFF", "#012169"]
}
export const china: Palette = { icon: "star", colors: ["#EE1C25", "#FFFF00"] }
export const ghana: Palette = {
	icon: "mappin",
	colors: ["#EF3340", "#FFD100", "#009739", "#000000"]
}
export const rioDeJaneiro: Palette = {
	icon: "riodejaneiro",
	colors: ["#00AFEF", "#FFFFFF", "#A93C40", "#00A859", "#C0C2C8"]
}
export const places: PaletteGroup = new Map([
	["lebanon", lebanon],
	["syria", syria],
	["mexico", mexico],
	["uruguay", uruguay],
	["ecuador", ecuador],
	["jamaica", jamaica],
	["southAfrica", southAfrica],
	["greece", greece],
	["brasil", brasil],
	["china", china],
	["ghana", ghana],
	["rioDeJaneiro", rioDeJaneiro]
])
