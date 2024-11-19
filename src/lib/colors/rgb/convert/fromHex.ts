import { RGB } from "../types"

type hexToInt = (color: string) => number
const hexToInt: hexToInt = (color) => parseInt(color, 16)

type sub = (str: string, start: number, size?: number) => string
const sub: sub = (str, start, size) => {
	if (size === undefined) return str.substring(start, start + 2)
	return str.substring(start, start + size)
}

type getRGBFromHex = (hexaCode: string) => RGB
export const getRGBFromHex: getRGBFromHex = (hexaCode) => {
	const red = hexToInt(sub(hexaCode, 1))
	const green = hexToInt(sub(hexaCode, 3))
	const blue = hexToInt(sub(hexaCode, 5))
	return { red, green, blue }
}
