import Palette from "../../types/PaletteProps"
import PaletteGroup from "../../types/PaletteGroupProps"

const baidu: Palette = ["#de0f17", "#2529d8"]
const facebook: Palette = ["#3b5998", "#ffffff"]
const firefox: Palette = [
	"#e66000",
	"#ff9500",
	"#ffcb00",
	"#00539f",
	"#0095dd",
	"#331e54",
	"#002147"
]
const google: Palette = ["#4285f4", "#34a853", "#fbbc05", "#ea4335"]
const microsoft: Palette = ["#f65314", "#7cbb00", "#00a1f1", "#ffbb00"]
const spotify: Palette = ["#1db954", "#191414"]
const tumblr: Palette = ["#35465c", "#ffffff"]
const whatsapp: Palette = [
	"#075e54",
	"#128c7e",
	"#25d366",
	"#dcf8c6",
	"#34b7f1",
	"#ece5dd"
]
const wikipedia: Palette = ["#000000", "#636466", "#939598", "#c7c8ca"]
const youtube: Palette = ["#ff0000", "#282828"]
const tech: PaletteGroup = new Map([
	["baidu", baidu],
	["facebook", facebook],
	["firefox", firefox],
	["google", google],
	["microsoft", microsoft],
	["spotify", spotify],
	["tumblr", tumblr],
	["whatsapp", whatsapp],
	["wikipedia", wikipedia],
	["youtube", youtube]
])

export default tech
