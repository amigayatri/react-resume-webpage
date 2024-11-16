import { SimpleColor } from "../types"
import { getInverseRGB, getHexFromRGB, getRGBFromHex, RGB } from "../../rgb/"

type createSimpleFromRGB = (color: RGB) => SimpleColor
export const createSimpleFromRGB: createSimpleFromRGB = (color) => {
	return {
		code: getHexFromRGB(color),
		inverse: getHexFromRGB(getInverseRGB(color))
	}
}

type createSimple = (color: string) => SimpleColor
export const createSimple: createSimple = (color) => {
	return createSimpleFromRGB(getRGBFromHex(color))
}
