import {
	getPalette,
	PaletteProps,
	paletteKey,
	getAllFromGroup,
	getGroupNames
} from "./functions"
import { groupKey } from "./types"

const placesKeys = [
	"lebanon",
	"syria",
	"mexico",
	"uruguay",
	"ecuador",
	"jamaica",
	"southAfrica",
	"greece",
	"brasil",
	"china",
	"ghana",
	"rioDeJaneiro"
] as const

export type placeKey = (typeof placesKeys)[number]

const group: groupKey = "places"

interface PlacePalette extends PaletteProps {
	name: placeKey
	group: "places"
}

const lebanon: PlacePalette = {
	group,
	name: "lebanon",
	icon: "cedar",
	colors: ["#ED1C24", "#FFFFFF", "#00A651"]
}
const syria: PlacePalette = {
	group,
	name: "syria",
	icon: "star",
	colors: ["#CE1126", "#FFFFFF", "#007A3D", "#000000"]
}
const mexico: PlacePalette = {
	group,
	name: "mexico",
	icon: "icecream",
	colors: ["#006341", "#FFFFFF", "#C8102E"]
}
const uruguay: PlacePalette = {
	group,
	name: "uruguay",
	icon: "mappin",
	colors: ["#001489", "#FFFFFF", "#FFCD00", "#7B3F00"]
}
const ecuador: PlacePalette = {
	group,
	name: "ecuador",
	icon: "mappin",
	colors: ["#FFD100", "#0072CE", "#EF3340"]
}
const jamaica: PlacePalette = {
	group,
	name: "jamaica",
	icon: "mappin",
	colors: ["#009B3A", "#FED100", "#000000"]
}
const southAfrica: PlacePalette = {
	group,
	name: "southAfrica",
	icon: "mappin",
	colors: ["#E03C31", "#FFFFFF", "#007749", "#001489", "#FFB81C", "#000000"]
}
const greece: PlacePalette = {
	group,
	name: "greece",
	icon: "mappin",
	colors: ["#001489", "#FFFFFF"]
}
const brasil: PlacePalette = {
	group,
	name: "brasil",
	icon: "brasil",
	colors: ["#009739", "#FEDD00", "#FFFFFF", "#012169"]
}
const china: PlacePalette = {
	group,
	name: "china",
	icon: "star",
	colors: ["#EE1C25", "#FFFF00"]
}
const ghana: PlacePalette = {
	group,
	name: "ghana",
	icon: "mappin",
	colors: ["#EF3340", "#FFD100", "#009739", "#000000"]
}
const rioDeJaneiro: PlacePalette = {
	group,
	name: "rioDeJaneiro",
	icon: "riodejaneiro",
	colors: ["#00AFEF", "#FFFFFF", "#A93C40", "#00A859", "#C0C2C8"]
}

type placesMap = Map<placeKey, PlacePalette>

const places: placesMap = new Map([
	["lebanon", lebanon],
	["syria", syria],
	["mexico", mexico],
	["uruguay", uruguay],
	["ecuador", ecuador],
	["jamaica", jamaica],
	["southAfrica", southAfrica],
	["greece", greece],
	["brasil", brasil],
	["china", china],
	["ghana", ghana],
	["rioDeJaneiro", rioDeJaneiro]
])

type isPlace = (paletteName: paletteKey | any) => paletteName is placeKey
export const isPlace: isPlace = (name): name is placeKey => {
	return placesKeys.includes(name)
}

type getPlace = (paletteName: paletteKey) => PaletteProps | undefined
export const getPlace: getPlace = (paletteName) => {
	if (!isPlace(paletteName)) return
	return getPalette(paletteName, places)
}
export const getPlacesNames: getAllFromGroup = () => getGroupNames(places)
