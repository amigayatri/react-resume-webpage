import {
	getPalette,
	PaletteProps,
	paletteKey,
	getGroupNames,
	getAllFromGroup
} from "./functions"
import { groupKey } from "./types"
const brandsKeys = [
	"bk",
	"cartoon",
	"coca-cola",
	"dominos",
	"lego",
	"master",
	"mcdonalds",
	"national geographic",
	"pepsi",
	"visa"
] as const

export type brandKey = (typeof brandsKeys)[number]

const group: groupKey = "brands"

interface BrandPalette extends PaletteProps {
	name: brandKey
	group: "brands"
}

const bk: BrandPalette = {
	group,
	name: "bk",
	icon: "burger",
	colors: ["#ec1c24", "#fdbd10", "#0066b2", "#ed7902"]
}
const cartoonNetwork: BrandPalette = {
	group,
	name: "cartoon",
	icon: "megaphone",
	colors: ["#00aeef", "#ed008c", "#fff000", "#000000"]
}

const cocaCola: BrandPalette = {
	group,
	name: "coca-cola",
	icon: "drink",
	colors: ["#ed1c16", "#ffffff", "#000000"]
}
const dominos: BrandPalette = {
	group,
	name: "dominos",
	icon: "pizza",
	colors: ["#0b648f", "#e21737"]
}
const lego: BrandPalette = {
	group,
	name: "lego",
	icon: "toybrick",
	colors: ["#f6ec35", "#d11013", "#000000"]
}
const master: BrandPalette = {
	group,
	name: "master",
	icon: "bankcard",
	colors: ["#cc0000", "#ff9900", "#000066"]
}
const mcdonalds: BrandPalette = {
	group,
	name: "mcdonalds",
	icon: "mcdonalds",
	colors: ["#bd0017", "#ffc836", "#264f36"]
}
const nationalGeographic: BrandPalette = {
	group,
	name: "national geographic",
	icon: "magazine",
	colors: ["#ffcc00", "#000000"]
}
const pepsi: BrandPalette = {
	group,
	name: "pepsi",
	icon: "drink",
	colors: ["#e32934", "#004883"]
}
const visa: BrandPalette = {
	group,
	name: "visa",
	icon: "bankcard",
	colors: ["#1a1f71", "#f7b600"]
}

type brandsMap = Map<brandKey, BrandPalette>

const brands: brandsMap = new Map([
	["bk", bk],
	["cartoon", cartoonNetwork],
	["coca-cola", cocaCola],
	["dominos", dominos],
	["lego", lego],
	["master", master],
	["mcdonalds", mcdonalds],
	["national geographic", nationalGeographic],
	["pepsi", pepsi],
	["visa", visa]
])

type isBrand = (paletteName: paletteKey | any) => paletteName is brandKey
export const isBrand: isBrand = (name): name is brandKey => {
	return brandsKeys.includes(name)
}

type getBrand = (paletteName: paletteKey) => PaletteProps | undefined
export const getBrand: getBrand = (paletteName) => {
	if (!isBrand(paletteName)) return
	return getPalette(paletteName, brands)
}

export const getBrandNames: getAllFromGroup = () => getGroupNames(brands)
