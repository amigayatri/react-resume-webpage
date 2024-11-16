import { RGB, HSL } from "../types"
import { round } from "./"

type getHueRegion = (color: RGB) => string
const getHueRegion: getHueRegion = (color) => {
	const r = color.red / 255
	const g = color.green / 255
	const b = color.blue / 255
	if (r == g && g == b) return "gray"
	if (r >= g && g >= b) return "orange"
	if (g > r && r >= b) return "chartreuse"
	if (g >= b && b > r) return "springGreen"
	if (b > g && g > r) return "azure"
	if (b > r && r >= g) return "violet"
	//if (r >= b && b >= g)
	return "rose"
}

type getHue = (color: RGB) => number
const getHue: getHue = (color) => {
	const { red, green, blue } = color
	const r = red / 255
	const g = green / 255
	const b = blue / 255
	const hueRegion = getHueRegion(color)
	if (hueRegion == "orange") {
		return round((g - b) / (r - b), 60)
	}
	if (hueRegion == "chartreuse") {
		return round(2 - (r - b) / (g - b), 60)
	}
	if (hueRegion == "springGreen") {
		return round(2 + (b - r) / (g - r), 60)
	}
	if (hueRegion == "azure") {
		return round(4 - (g - r) / (b - r), 60)
	}
	if (hueRegion == "violet") {
		return round(4 + (r - g) / (b - g), 60)
	}
	if (hueRegion == "rose") {
		return round(6 - (b - g) / (r - g), 60)
	}
	return 0
}
type getLuminosity = (min: number, max: number) => number
const getLuminosity: getLuminosity = (min, max) => {
	const add = min + max
	return 0.5 * add
}

type getSaturation = (luminosity: number, min: number, max: number) => number
const getSaturation: getSaturation = (luminosity, min, max) => {
	if (luminosity == 0) return 0
	if (luminosity == 1) return 1
	const diff = max - min,
		add = min + max
	if (luminosity <= 0.5) return diff / add
	return diff / (2 - add)
}

type getRGBMath = ({ red, green, blue }: RGB, isMin: boolean) => number
const getRGBMath: getRGBMath = ({ red, green, blue }, isMin) => {
	if (isMin) {
		return Math.min(red, green, blue)
	} else {
		return Math.max(red, green, blue)
	}
}

type getNormalized = (isMin: boolean, color: RGB) => number
const getNormalized: getNormalized = (isMin, color) => {
	return getRGBMath(color, isMin) / 255
}

type getHSLfromRGB = (color: RGB) => HSL
export const getHSLfromRGB: getHSLfromRGB = (color) => {
	const max = getNormalized(false, color)
	const min = getNormalized(true, color)
	const lum = getLuminosity(min, max)
	return {
		hue: getHue(color),
		luminosity: round(lum, 100),
		saturation: round(getSaturation(lum, min, max), 100)
	}
}
