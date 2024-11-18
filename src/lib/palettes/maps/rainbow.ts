import {
	getPalette,
	PaletteProps,
	paletteKey,
	getAllFromGroup,
	getGroupNames
} from "./functions"
import { groupKey } from "./types"

const rainbowKeys = [
	"rainbow monokai",
	"regular rainbow",
	"pastel rainbow",
	"dark rainbow"
] as const

export type rainbowKey = (typeof rainbowKeys)[number]

const group: groupKey = "rainbow"

interface RainbowPalette extends PaletteProps {
	name: rainbowKey
	group: "rainbow"
}

export const rainbowMonokai: RainbowPalette = {
	group,
	name: "rainbow monokai",
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

const regularRainbow: RainbowPalette = {
	group,
	name: "regular rainbow",
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
const pastelRainbow: RainbowPalette = {
	group,
	name: "pastel rainbow",
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
const darkRainbow: RainbowPalette = {
	group,
	name: "dark rainbow",
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

type rainbowMap = Map<rainbowKey, RainbowPalette>

const rainbows: rainbowMap = new Map([
	["rainbow monokai", rainbowMonokai],
	["regular rainbow", regularRainbow],
	["pastel rainbow", pastelRainbow],
	["dark rainbow", darkRainbow]
])

type isRainbow = (paletteName: paletteKey | any) => paletteName is rainbowKey
export const isRainbow: isRainbow = (name): name is rainbowKey => {
	return rainbowKeys.includes(name)
}

type getRainbow = (paletteName: paletteKey) => PaletteProps | undefined
export const getRainbow: getRainbow = (paletteName) => {
	if (!isRainbow(paletteName)) return
	return getPalette(paletteName, rainbows)
}
export const getRainbowNames: getAllFromGroup = () => getGroupNames(rainbows)
