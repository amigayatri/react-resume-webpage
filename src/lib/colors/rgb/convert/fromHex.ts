import { RGB } from "../types"

type hexToInt = (color: string) => number
const hexToInt: hexToInt = (color) => parseInt(color, 16)

type getRGBFromHex = (hexaCode: string) => RGB
export const getRGBFromHex: getRGBFromHex = (hexaCode) => {
	const red = hexToInt(hexaCode.substring(1, 3))
	const green = hexToInt(hexaCode.substring(3, 5))
	const blue = hexToInt(hexaCode.substring(5, 7))
	return { red, green, blue }
}
