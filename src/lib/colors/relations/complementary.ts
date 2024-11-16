import { getComplementaryHSL, getHSLFromHex, getHexFromHSL } from "../hsl"

type getComplementary = (color: string) => string
export const getComplementary: getComplementary = (color) => {
	const complementaryHSL = getComplementaryHSL(getHSLFromHex(color))
	return getHexFromHSL(complementaryHSL)
}
