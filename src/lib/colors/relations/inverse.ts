import { getInverseRGB, getHexFromRGB, getRGBFromHex } from "../rgb"

type getInverse = (color: string) => string
export const getInverse: getInverse = (colorHex) => {
	return getHexFromRGB(getInverseRGB(getRGBFromHex(colorHex)))
}
