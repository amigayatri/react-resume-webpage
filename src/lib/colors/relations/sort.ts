import { getRGBFromHex } from "../rgb"

type averageColor = (color: string) => number
const averageColor: averageColor = (color) => {
	const { red, green, blue } = getRGBFromHex(color)
	return (red + green + blue) / 3
}

type compareColors = (color1: string, color2: string) => number
const compareColors: compareColors = (color1, color2) => {
	return averageColor(color1) - averageColor(color2)
}

type sortColors = (colors: string[]) => string[]
export const sortColors: sortColors = (colors) => {
	return Array.from(colors).sort(compareColors)
}
