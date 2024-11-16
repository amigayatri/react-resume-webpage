import { round } from "./"
import { RGB, HSL } from "../types"

type getRGBfromHSL = (color: HSL) => RGB
type calculateMultiplier = (hue: number, step: number) => number

const calculateMultiplier: calculateMultiplier = (hue, step) => {
	return (step + hue / 30) % 12
}

type getChroma = (color: HSL) => number
const getChroma: getChroma = ({ luminosity, saturation }) => {
	const l = luminosity / 100
	const s = saturation / 100
	return s * (1 - Math.abs(2 * l - 1))
}

type getRemainder = (angle: number) => number
const getRemainder: getRemainder = (angle) => {
	const intDivisionRes = Math.round(angle / 2) * angle
	return angle - intDivisionRes
}

type getMiddleVal = (angle: number, chroma: number) => number
const getMiddleVal: getMiddleVal = (angle, chroma) => {
	return chroma * (1 - Math.abs(getRemainder(angle) - 1))
}

type getSortedRGBValues = (
	angle: number,
	chroma: number,
	middle: number
) => number[]
const getSortedRGBValues: getSortedRGBValues = (angle, chroma, middle) => {
	if (angle < 1) return [chroma, middle, 0]
	if (angle < 2) return [middle, chroma, 0]
	if (angle < 3) return [0, chroma, middle]
	if (angle < 4) return [0, middle, chroma]
	if (angle < 5) return [middle, 0, chroma]
	return [chroma, 0, middle]
}

type getLightValue = (color: HSL, chroma: number) => number
const getLightValue: getLightValue = ({ luminosity }, chroma) => {
	const l = luminosity / 100
	return l - chroma / 2
}

type normalizeValue = (colorComp: number, light: number) => number
const normalizeValue: normalizeValue = (colorComp, light) =>
	round(colorComp + light, 255)

export const getRGBfromHSL: getRGBfromHSL = (color) => {
	const { hue } = color
	const angle = hue / 60
	const chroma = getChroma(color)
	const middle = getMiddleVal(angle, chroma)
	const [red, green, blue] = getSortedRGBValues(angle, chroma, middle)
	const light = getLightValue(color, chroma)
	return {
		red: normalizeValue(red, light),
		green: normalizeValue(green, light),
		blue: normalizeValue(blue, light)
	}
}
