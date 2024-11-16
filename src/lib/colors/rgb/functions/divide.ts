import { RGB, mapFN } from "../types"
import { mapRGB } from "./map"

type divide = (color: RGB, steps: number) => RGB

export const divideColor: divide = (color, steps) => {
	const divideKey: mapFN = (key) => {
		return Math.trunc(color[key] / steps)
	}
	return mapRGB(color, divideKey, false)
}
