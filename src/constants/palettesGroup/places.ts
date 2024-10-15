import Palette from "../../types/PaletteProps"
import PaletteGroup from "../../types/PaletteGroupProps"
const lebanon: Palette = ["#ED1C24", "#FFFFFF", "#00A651"]
const syria: Palette = ["#CE1126", "#FFFFFF", "#007A3D", "#000000"]
const mexico: Palette = ["#006341", "#FFFFFF", "#C8102E"]
const uruguay: Palette = ["#001489", "#FFFFFF", "#FFCD00", "#7B3F00"]
const ecuador: Palette = ["#FFD100", "#0072CE", "#EF3340"]
const jamaica: Palette = ["#009B3A", "#FED100", "#000000"]
const southAfrica: Palette = [
	"#E03C31",
	"#FFFFFF",
	"#007749",
	"#001489",
	"#FFB81C",
	"#000000"
]
const greece: Palette = ["#001489", "#FFFFFF"]
const brasil: Palette = ["#009739", "#FEDD00", "#FFFFFF", "#012169"]
const china: Palette = ["#EE1C25", "#FFFF00"]
const ghana: Palette = ["#EF3340", "#FFD100", "#009739", "#000000"]
const rioDeJaneiro: Palette = [
	"#00AFEF",
	"#FFFFFF",
	"#A93C40",
	"#00A859",
	"#C0C2C8"
]
const places: PaletteGroup = new Map([
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

export default places
