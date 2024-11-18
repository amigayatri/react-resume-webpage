import { groupKey } from "./types"
import {
	getPalette,
	PaletteProps,
	paletteKey,
	getAllFromGroup,
	getGroupNames
} from "./functions"

const mediaKeys = [
	"bee",
	"emo",
	"bmo",
	"adventure time",
	"naruto",
	"sonic",
	"barbie",
	"cosmo and wanda",
	"fairly odd parents",
	"turma da monica"
] as const

export type mediaKey = (typeof mediaKeys)[number]

const group: groupKey = "famous media"

interface MediaPalette extends PaletteProps {
	name: mediaKey
	group: "famous media"
}

const bee: MediaPalette = {
	group,
	name: "bee",
	icon: "bee",
	colors: ["#2f1f20", "#ffdb01", "#2f1f1f", "#ffdb00", "#2f1f1e"]
}
const emo: MediaPalette = {
	group,
	name: "emo",
	icon: "crying",
	colors: ["#000000", "#FF0000", "#FFFFFF"]
}
const barbie: MediaPalette = {
	group,
	name: "barbie",
	icon: "barbie",
	colors: ["#DA1884", "#ff007f", "#ff4e9c", "#fa6db0", "#f600a8", "#ff0097"]
}
const sonic: MediaPalette = {
	group,
	name: "sonic",
	icon: "sonic",
	colors: ["#0078ff", "#ff0000", "#ffffff", "#000000", "#ffd29a"]
}
const bmo: MediaPalette = {
	group,
	name: "bmo",
	icon: "gamepad",
	colors: ["#63bda4", "#d9ffea", "#62afb7", "#f20553", "#ffec47"]
}
const adventureTime: MediaPalette = {
	group,
	name: "adventure time",
	icon: "crown",
	colors: ["#029ac3", "#ffba1e", "#59a694", "#fe66ca", "#cd93f9"]
}
const cosmoAndWanda: MediaPalette = {
	group,
	name: "cosmo and wanda",
	icon: "magicwand",
	colors: ["#19D719", "#F02D7D"]
}
const fairlyOddParents: MediaPalette = {
	group,
	name: "fairly odd parents",
	icon: "magicwand",
	colors: [
		"#F02D7D",
		"#19D719",
		"#f8d53b",
		"#0c0c0c",
		"#ffffff",
		"#177cc1",
		"#653a1d",
		"#fbc793"
	]
}
const turmaDaMonica: MediaPalette = {
	group,
	name: "turma da monica",
	icon: "magazine",
	colors: [
		"#00a652",
		"#231f20",
		"#a86636",
		"#f7131e",
		"#00bee8",
		"#dc0128",
		"#f2ec02",
		"#040404",
		"#f6ea00"
	]
}
const naruto: MediaPalette = {
	group,
	name: "naruto",
	icon: "naruto",
	colors: ["#fe7a35", "#093c7d", "#f4f4f2", "#e9dc3f"]
}

type mediaMap = Map<mediaKey, MediaPalette>

const media: mediaMap = new Map([
	["bee", bee],
	["emo", emo],
	["bmo", bmo],
	["adventure time", adventureTime],
	["naruto", naruto],
	["sonic", sonic],
	["barbie", barbie],
	["cosmo and wanda", cosmoAndWanda],
	["fairly odd parents", fairlyOddParents],
	["turma da monica", turmaDaMonica]
])

type isMedia = (paletteName: paletteKey | any) => paletteName is mediaKey
export const isMedia: isMedia = (name): name is mediaKey => {
	return mediaKeys.includes(name)
}

type getMedia = (paletteName: paletteKey) => PaletteProps | undefined
export const getMedia: getMedia = (paletteName) => {
	if (!isMedia(paletteName)) return
	return getPalette(paletteName, media)
}

export const getMediaNames: getAllFromGroup = () => getGroupNames(media)
