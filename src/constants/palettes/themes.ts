import { PaletteProps, PaletteGroupProps } from "../../types/palette/"

export const namedArr: PaletteProps = {
	icon: "website",
	colors: ["#212117", "#f92472", "#67d8ef", "#f7f7f7"]
}

export const accentArr: PaletteProps = {
	icon: "website",
	colors: ["#f92472", "#67d8ef"]
}

export const tripleArr: PaletteProps = {
	icon: "website",
	colors: ["#f92472", "#ac80ff", "#67d8ef"]
}

export const grayscaleMonokai: PaletteProps = {
	icon: "website",
	colors: [
		"#000000",
		"#212117",
		"#282923",
		"#3e3d32",
		"#74705d",
		"#d0d0c3",
		"#f7f7f7"
	]
}

export const fullMonokai: PaletteProps = {
	icon: "website",
	colors: [
		"#000000",
		"#212117",
		"#282923",
		"#3e3d32",
		"#74705d",
		"#d0d0c3",
		"#f7f7f7",
		"#f83535",
		"#fd9621",
		"#f4cd04",
		"#a6e22c",
		"#67d8ef",
		"#ac80ff",
		"#f92472"
	]
}

export const themes: PaletteGroupProps = new Map([
	["current", namedArr],
	["grayscalemonokai", grayscaleMonokai],
	["fullmonokai", fullMonokai],
	["triple", tripleArr],
	["accent", accentArr]
])
