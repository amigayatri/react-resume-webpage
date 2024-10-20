import Palette from "../../types/PaletteProps"
import PaletteGroup from "../../types/PaletteGroupProps"

const bee: Palette = ["#2f1f20", "#ffdb01", "#2f1f1f", "#ffdb00", "#2f1f1e"]
const emo: Palette = ["#000000", "#FF0000", "#FFFFFF"]
const barbie: Palette = [
	"#DA1884",
	"#ff007f",
	"#ff4e9c",
	"#fa6db0",
	"#f600a8",
	"#ff0097"
]
const sonic: Palette = ["#0078ff", "#ff0000", "#ffffff", "#000000", "#ffd29a"]
const bmo: Palette = ["#63bda4", "#d9ffea", "#62afb7", "#f20553", "#ffec47"]
const adventureTime: Palette = [
	"#029ac3",
	"#ffba1e",
	"#59a694",
	"#fe66ca",
	"#cd93f9"
]
const cosmoAndWanda: Palette = ["#19D719", "#F02D7D"]
const fairlyOddParents: Palette = [
	"#F02D7D",
	"#19D719",
	"#f8d53b",
	"#0c0c0c",
	"#ffffff",
	"#177cc1",
	"#653a1d",
	"#fbc793"
]
const turmaDaMonica: Palette = [
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
const naruto: Palette = ["#fe7a35", "#093c7d", "#f4f4f2", "#e9dc3f"]
const media: PaletteGroup = new Map([
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
