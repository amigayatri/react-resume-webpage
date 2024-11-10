import Palette from "../../types/PaletteProps"
import PaletteGroup from "../../types/PaletteGroupProps"

export const baidu: Palette = { icon: "baidu", colors: ["#de0f17", "#2529d8"] }
export const facebook: Palette = {
	icon: "facebook",
	colors: ["#3b5998", "#ffffff"]
}
export const firefox: Palette = {
	icon: "firefox",
	colors: [
		"#e66000",
		"#ff9500",
		"#ffcb00",
		"#00539f",
		"#0095dd",
		"#331e54",
		"#002147"
	]
}
export const google: Palette = {
	icon: "google",
	colors: ["#4285f4", "#34a853", "#fbbc05", "#ea4335"]
}
export const microsoft: Palette = {
	icon: "microsoft",
	colors: ["#f65314", "#7cbb00", "#00a1f1", "#ffbb00"]
}
export const spotify: Palette = {
	icon: "spotify",
	colors: ["#1db954", "#191414"]
}
export const tumblr: Palette = {
	icon: "tumblr",
	colors: ["#35465c", "#ffffff"]
}
export const whatsapp: Palette = {
	icon: "whatsapp",
	colors: ["#075e54", "#128c7e", "#25d366", "#dcf8c6", "#34b7f1", "#ece5dd"]
}
export const wikipedia: Palette = {
	icon: "wikipedia",
	colors: ["#000000", "#636466", "#939598", "#c7c8ca"]
}
export const youtube: Palette = {
	icon: "youtube",
	colors: ["#ff0000", "#282828"]
}
export const tech: PaletteGroup = new Map([
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
