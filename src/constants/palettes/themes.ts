import Palette from "../../types/palette/PaletteProps"
import PaletteGroup from "../../types/palette/PaletteGroupProps"

export const namedArr: Palette = {
	icon: "website",
	colors: ["#212117", "#f92472", "#67d8ef", "#f7f7f7"]
}

export const grayscaleMonokai: Palette = {
	icon: "website",
	colors: [
		"#000000",
		"#212117",
		"#282923",
		"#3e3d32",
		"#74705d",
		"#d0d0c3",
		"#f7f7f7",
		"#555449b3"
	]
}

export const fullMonokai: Palette = {
	icon: "website",
	colors: [
		"#000000",
		"#212117",
		"#282923",
		"#3e3d32",
		"#74705d",
		"#d0d0c3",
		"#f7f7f7",
		"#555449b3",
		"#f83535",
		"#fd9621",
		"#f4cd04",
		"#a6e22c",
		"#67d8ef",
		"#ac80ff",
		"#f92472"
	]
}

export const themes: PaletteGroup = new Map([
	["current", namedArr],
	["grayscalemonokai", grayscaleMonokai],
	["fullmonokai", fullMonokai]
])
