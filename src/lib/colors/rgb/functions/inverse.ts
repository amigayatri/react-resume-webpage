import { RGB, mapFN } from "../types"
import { mapRGB } from "./map"

type getInverseRGB = (color: RGB) => RGB

export const getInverseRGB: getInverseRGB = (color) => {
	const maxVal = 255
	const invertKey: mapFN = (key) => {
		return maxVal - color[key]
	}
	const inverseRGB = mapRGB(color, invertKey, false)
	return inverseRGB
}
