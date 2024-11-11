import Palette from "../../types/palette/PaletteProps"
import PaletteGroup from "../../types/palette/PaletteGroupProps"

export const rainbowMonokai: Palette = {
	icon: "terminal",
	colors: [
		"#f83535",
		"#fd9621",
		"#f4cd04",
		"#a6e22c",
		"#67d8ef",
		"#ac80ff",
		"#f92472"
	]
}

export const regularRainbow: Palette = {
	icon: "rainbow",
	colors: [
		"#e81416",
		"#ffa500",
		"#faeb36",
		"#79c314",
		"#487de7",
		"#4b369d",
		"#70369d"
	]
}
export const pastelRainbow: Palette = {
	icon: "rainbow",
	colors: [
		"#F58B8B",
		"#FFD381",
		"#FDF59B",
		"#BDE18B",
		"#A5BFF3",
		"#A59BCF",
		"#B99BCF"
	]
}
export const darkRainbow: Palette = {
	icon: "rainbow",
	colors: [
		"#AE0F11",
		"#C07C00",
		"#BCB129",
		"#5B930F",
		"#365EAE",
		"#392976",
		"#542976"
	]
}

export const rainbow: PaletteGroup = new Map([
	["rainbow monokai", rainbowMonokai],
	["regular rainbow", regularRainbow],
	["pastel rainbow", pastelRainbow],
	["dark rainbow", darkRainbow]
])
