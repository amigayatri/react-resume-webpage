import { HSL } from "../types"

type luminosityChange = (color: HSL, newLum: number) => HSL

type getSafeVal = (val: number, min?: number, max?: number) => number

const getSafeVal: getSafeVal = (val, min, max) => {
	const safeMax = max === undefined ? 100 : max
	const safeMin = min === undefined ? 0 : min
	if (val > safeMax) return safeMax
	if (val < safeMin) return safeMin
	return val
}

const luminosityChange: luminosityChange = ({ hue, saturation }, newLum) => {
	return {
		hue,
		saturation,
		luminosity: getSafeVal(newLum)
	}
}

export { luminosityChange }
