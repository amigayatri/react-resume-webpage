import { RGB } from "../types"

type intToHex = (color: number) => string
const intToHex: intToHex = (color) =>
	color < 16 ? "0" + color.toString(16) : color.toString(16)

type getHexFromRGB = (color: RGB) => string
export const getHexFromRGB: getHexFromRGB = ({ red, green, blue }) => {
	const hex = ["#", intToHex(red), intToHex(green), intToHex(blue)]
	return hex.join("").toUpperCase()
}
