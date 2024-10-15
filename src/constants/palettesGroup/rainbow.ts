import { rainbowMonokai } from "../../themes/Monokai"
import Palette from "../../types/PaletteProps"
import PaletteGroup from "../../types/PaletteGroupProps"

const regularRainbow: Palette = [
	"#e81416",
	"#ffa500",
	"#faeb36",
	"#79c314",
	"#487de7",
	"#4b369d",
	"#70369d"
]
const pastelRainbow: Palette = [
	"#F58B8B",
	"#FFD381",
	"#FDF59B",
	"#BDE18B",
	"#A5BFF3",
	"#A59BCF",
	"#B99BCF"
]
const darkRainbow: Palette = [
	"#AE0F11",
	"#C07C00",
	"#BCB129",
	"#5B930F",
	"#365EAE",
	"#392976",
	"#542976"
]

const rainbow: PaletteGroup = new Map([
	["rainbow monokai", rainbowMonokai],
	["regular rainbow", regularRainbow],
	["pastel rainbow", pastelRainbow],
	["dark rainbow", darkRainbow]
])

export default rainbow
