import { PaletteProps, PaletteGroupProps } from "../../types/palette/"

export const lebanon: PaletteProps = {
	icon: "cedar",
	colors: ["#ED1C24", "#FFFFFF", "#00A651"]
}
export const syria: PaletteProps = {
	icon: "star",
	colors: ["#CE1126", "#FFFFFF", "#007A3D", "#000000"]
}
export const mexico: PaletteProps = {
	icon: "icecream",
	colors: ["#006341", "#FFFFFF", "#C8102E"]
}
export const uruguay: PaletteProps = {
	icon: "mappin",
	colors: ["#001489", "#FFFFFF", "#FFCD00", "#7B3F00"]
}
export const ecuador: PaletteProps = {
	icon: "mappin",
	colors: ["#FFD100", "#0072CE", "#EF3340"]
}
export const jamaica: PaletteProps = {
	icon: "mappin",
	colors: ["#009B3A", "#FED100", "#000000"]
}
export const southAfrica: PaletteProps = {
	icon: "mappin",
	colors: ["#E03C31", "#FFFFFF", "#007749", "#001489", "#FFB81C", "#000000"]
}
export const greece: PaletteProps = {
	icon: "mappin",
	colors: ["#001489", "#FFFFFF"]
}
export const brasil: PaletteProps = {
	icon: "brasil",
	colors: ["#009739", "#FEDD00", "#FFFFFF", "#012169"]
}
export const china: PaletteProps = {
	icon: "star",
	colors: ["#EE1C25", "#FFFF00"]
}
export const ghana: PaletteProps = {
	icon: "mappin",
	colors: ["#EF3340", "#FFD100", "#009739", "#000000"]
}
export const rioDeJaneiro: PaletteProps = {
	icon: "riodejaneiro",
	colors: ["#00AFEF", "#FFFFFF", "#A93C40", "#00A859", "#C0C2C8"]
}
export const places: PaletteGroupProps = new Map([
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
