import { ColorPalette } from "../types"
import { getInverse, getComplementary } from "../../relations"

type createPalette = (hexacode?: string) => ColorPalette
export const createPalette: createPalette = (color) => {
	if (color === undefined) {
		return {
			complementary: "",
			inverse: ""
		}
	}
	return {
		complementary: getComplementary(color),
		inverse: getInverse(color)
	}
}
