import Palette from "../../types/PaletteProps"
import PaletteGroup from "../../types/PaletteGroupProps"

export const bee: Palette = {
	icon: "bee",
	colors: ["#2f1f20", "#ffdb01", "#2f1f1f", "#ffdb00", "#2f1f1e"]
}
export const emo: Palette = {
	icon: "crying",
	colors: ["#000000", "#FF0000", "#FFFFFF"]
}
export const barbie: Palette = {
	icon: "barbie",
	colors: ["#DA1884", "#ff007f", "#ff4e9c", "#fa6db0", "#f600a8", "#ff0097"]
}
export const sonic: Palette = {
	icon: "sonic",
	colors: ["#0078ff", "#ff0000", "#ffffff", "#000000", "#ffd29a"]
}
export const bmo: Palette = {
	icon: "gamepad",
	colors: ["#63bda4", "#d9ffea", "#62afb7", "#f20553", "#ffec47"]
}
export const adventureTime: Palette = {
	icon: "crown",
	colors: ["#029ac3", "#ffba1e", "#59a694", "#fe66ca", "#cd93f9"]
}
export const cosmoAndWanda: Palette = {
	icon: "magicwand",
	colors: ["#19D719", "#F02D7D"]
}
export const fairlyOddParents: Palette = {
	icon: "magicwand",
	colors: [
		"#F02D7D",
		"#19D719",
		"#f8d53b",
		"#0c0c0c",
		"#ffffff",
		"#177cc1",
		"#653a1d",
		"#fbc793"
	]
}
export const turmaDaMonica: Palette = {
	icon: "magazine",
	colors: [
		"#00a652",
		"#231f20",
		"#a86636",
		"#f7131e",
		"#00bee8",
		"#dc0128",
		"#f2ec02",
		"#040404",
		"#f6ea00"
	]
}
export const naruto: Palette = {
	icon: "naruto",
	colors: ["#fe7a35", "#093c7d", "#f4f4f2", "#e9dc3f"]
}
export const media: PaletteGroup = new Map([
	["bee", bee],
	["emo", emo],
	["bmo", bmo],
	["adventure time", adventureTime],
	["naruto", naruto],
	["sonic", sonic],
	["barbie", barbie],
	["cosmo and wanda", cosmoAndWanda],
	["fairly odd parents", fairlyOddParents],
	["turma da monica", turmaDaMonica]
])
export default media
