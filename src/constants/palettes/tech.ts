import { PaletteProps, PaletteGroupProps } from "../../types/palette/"

export const baidu: PaletteProps = {
	icon: "baidu",
	colors: ["#de0f17", "#2529d8"]
}
export const facebook: PaletteProps = {
	icon: "facebook",
	colors: ["#3b5998", "#ffffff"]
}
export const firefox: PaletteProps = {
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
export const google: PaletteProps = {
	icon: "google",
	colors: ["#4285f4", "#34a853", "#fbbc05", "#ea4335"]
}
export const microsoft: PaletteProps = {
	icon: "microsoft",
	colors: ["#f65314", "#7cbb00", "#00a1f1", "#ffbb00"]
}
export const spotify: PaletteProps = {
	icon: "spotify",
	colors: ["#1db954", "#191414"]
}
export const tumblr: PaletteProps = {
	icon: "tumblr",
	colors: ["#35465c", "#ffffff"]
}
export const whatsapp: PaletteProps = {
	icon: "whatsapp",
	colors: ["#075e54", "#128c7e", "#25d366", "#dcf8c6", "#34b7f1", "#ece5dd"]
}
export const wikipedia: PaletteProps = {
	icon: "wikipedia",
	colors: ["#000000", "#636466", "#939598", "#c7c8ca"]
}
export const youtube: PaletteProps = {
	icon: "youtube",
	colors: ["#ff0000", "#282828"]
}
export const tech: PaletteGroupProps = new Map([
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
