import { groupKey } from "./types"
import {
	getPalette,
	PaletteProps,
	paletteKey,
	getAllFromGroup,
	getGroupNames
} from "./functions"
const techsKeys = [
	"baidu",
	"facebook",
	"firefox",
	"google",
	"microsoft",
	"spotify",
	"tumblr",
	"whatsapp",
	"wikipedia",
	"youtube"
] as const

export type techKey = (typeof techsKeys)[number]

const group: groupKey = "tech"

interface TechPalette extends PaletteProps {
	name: techKey
	group: "tech"
}

const baidu: TechPalette = {
	group,
	name: "baidu",
	icon: "baidu",
	colors: ["#de0f17", "#2529d8"]
}
const facebook: TechPalette = {
	group,
	name: "facebook",
	icon: "facebook",
	colors: ["#3b5998", "#ffffff"]
}
const firefox: TechPalette = {
	group,
	name: "firefox",
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
const google: TechPalette = {
	group,
	name: "google",
	icon: "google",
	colors: ["#4285f4", "#34a853", "#fbbc05", "#ea4335"]
}
const microsoft: TechPalette = {
	group,
	name: "microsoft",
	icon: "microsoft",
	colors: ["#f65314", "#7cbb00", "#00a1f1", "#ffbb00"]
}
const spotify: TechPalette = {
	group,
	name: "spotify",
	icon: "spotify",
	colors: ["#1db954", "#191414"]
}
const tumblr: TechPalette = {
	group,
	name: "tumblr",
	icon: "tumblr",
	colors: ["#35465c", "#ffffff"]
}
const whatsapp: TechPalette = {
	group,
	name: "whatsapp",
	icon: "whatsapp",
	colors: ["#075e54", "#128c7e", "#25d366", "#dcf8c6", "#34b7f1", "#ece5dd"]
}
const wikipedia: TechPalette = {
	group,
	name: "wikipedia",
	icon: "wikipedia",
	colors: ["#000000", "#636466", "#939598", "#c7c8ca"]
}
const youtube: TechPalette = {
	group,
	name: "youtube",
	icon: "youtube",
	colors: ["#ff0000", "#282828"]
}

type techsMap = Map<techKey, TechPalette>

const tech: techsMap = new Map([
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

type isTech = (paletteName: paletteKey | any) => paletteName is techKey
export const isTech: isTech = (name): name is techKey => {
	return techsKeys.includes(name)
}

type getTech = (paletteName: paletteKey) => PaletteProps | undefined
export const getTech: getTech = (paletteName) => {
	if (!isTech(paletteName)) return
	return getPalette(paletteName, tech)
}
export const getTechNames: getAllFromGroup = () => getGroupNames(tech)
