import { SimpleColor, mapFN } from "../types"
import { mapRGB, createSimpleFromRGB, getGeneratorInfo } from "../../utils"

type get = (i: number) => SimpleColor
type shadeGenerator = (
	startHex: string,
	endHex: string,
	steps: number
) => { get: get }

export const shadeGenerator: shadeGenerator = (startHex, endHex, steps) => {
	const { start, diff } = getGeneratorInfo(startHex, endHex, steps)
	const getNew: mapFN = (key, i) => {
		const keyDiff = i * diff[key]
		return start[key] + keyDiff
	}
	return {
		get: (i) => {
			return createSimpleFromRGB(mapRGB(start, getNew, i))
		}
	}
}
