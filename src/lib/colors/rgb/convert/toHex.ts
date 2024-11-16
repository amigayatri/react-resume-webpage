import { RGB } from "../types"

type intToHex = (color: number) => string
const intToHex: intToHex = (color) =>
	color < 16 ? "0" + color.toString(16) : color.toString(16)

type getHexFromRGB = (color: RGB) => string
export const getHexFromRGB: getHexFromRGB = (color) => {
	const hex = [
		"#",
		intToHex(color.red),
		intToHex(color.green),
		intToHex(color.blue)
	]
	return hex.join("").toUpperCase()
}
